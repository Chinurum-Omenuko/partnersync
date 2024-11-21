import type { RequestHandler } from '@sveltejs/kit';
import { db } from '$lib/db';

export const getCurrentUser: RequestHandler = async ({ locals }) => {
  return json(locals.user);
};

export const expressProjectInterest: RequestHandler = async({ request }) => {
    
}