
import { clerk } from '$lib/main';
import type { RequestHandler } from './$types';



export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    
    const user = await clerk.client?.signUp.create({
      emailAddress: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      unsafeMetadata: {
        registrationType: data.registrationType,
        ...(data.registrationType === 'faculty' 
          ? { 
              course: data.course, 
              program: data.program 
            } 
          : { 
              orgName: data.orgName 
            }
        )
      }
    });

    if (!user) throw new Error('User creation failed');

    return new Response(JSON.stringify({ user }), { 
      status: 201 
    });
  } catch (error) {
    console.error('Error signing up user:', error);
    return new Response(JSON.stringify({ error: 'Failed to sign up' }), { 
      status: 500 
    });
  }
};
