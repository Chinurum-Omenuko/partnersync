import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
    console.log("logged in")
  return {
    user: locals.session?.user
  };


};
