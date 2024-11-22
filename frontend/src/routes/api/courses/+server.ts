import { db } from '$lib/firebaseClient';
import { adminFirestore } from '$lib/firebaseServer';
import { error, type RequestEvent } from '@sveltejs/kit';
import firebase from 'firebase/compat/app';
import { collection } from 'firebase/firestore';

export async function POST(request: RequestEvent) {
  const { code, description, name, program, school, skills, staff_name, term } = await request.request.json();

  try {
    const courseRef = await adminFirestore.collection('courses').add({
      code,
      description,
      name,
      program,
      school,
      skills,
      staff_name,
      term,
      createdAt: new Date(),

    });

    return new Response(JSON.stringify({ success: true, id: courseRef.id }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}


export async function GET() {
  try {
    const snapshot = await db.collection('courses').get();
    const courses = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return new Response(JSON.stringify(courses), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    throw error(500, { message: 'Failed to fetch courses' });
  }
}
