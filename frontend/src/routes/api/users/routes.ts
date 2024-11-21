import { json } from '@sveltejs/kit';
import * as handlers from './handlers';

export const GET = handlers.getCurrentUser;
export const PUT = handlers.updateUser;
export const DELETE = handlers.deleteUser;

// Faculty-specific routes
export const POST = {
  expressInterestInProject: handlers.expressInterestInProject,
  registerCourse: handlers.registerCourse
};
