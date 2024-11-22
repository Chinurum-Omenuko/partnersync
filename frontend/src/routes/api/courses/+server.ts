import { db } from '$lib/firebase';
import { error, type RequestEvent } from '@sveltejs/kit';

export async function POST(request: RequestEvent) {
  const { code, description, name, program, school, skills, staff_name, term } = await request.request.json();

  try {
    const courseRef = await db.collection('courses').add({
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
    throw error(500, { message: 'Failed to add course' });
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
