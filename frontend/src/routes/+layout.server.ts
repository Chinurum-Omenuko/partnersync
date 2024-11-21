import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
    console.log("layout logged in")
  return {
    user: locals.session?.user
  };
};
