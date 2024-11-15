import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import GoogleProvider from '@auth/core/providers/google';

export const handle = SvelteKitAuth({
    providers: [
        GoogleProvider({ clientId: process.env.GOOGLE_ID!, clientSecret: process.env.GOOGLE_SECRET! })
    ],
});
