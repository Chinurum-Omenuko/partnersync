import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  return {
    user: locals.session?.userId,
    claims: locals.session?.claims
  };
};
