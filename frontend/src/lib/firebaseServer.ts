// lib/server/firebase-admin.ts
import admin from 'firebase-admin';
import { env } from '$env/dynamic/private';

const decodedKey = Buffer.from(env.PRIVATE_KEY, 'base64').toString('utf-8');




if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "partnersync-e94e2",
      clientEmail: "firebase-adminsdk-x9kt2@partnersync-e94e2.iam.gserviceaccount.com",
      // Use a base64 encoded private key to handle newline issues
      privateKey: env.PRIVATE_KEY ? env.PRIVATE_KEY.replace(/\\n/gm, "\n") : undefined
    }),
    databaseURL: `https://partnersync-e94e2.firebaseio.com`
  });
}

export const adminFirestore = admin.firestore();