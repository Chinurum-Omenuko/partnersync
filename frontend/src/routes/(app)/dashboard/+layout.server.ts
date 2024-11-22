import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.session?.userId) {
		redirect(307, '/');
	}
	return {
		user: locals.session?.userId,
		claims: locals.session?.claims
	};
};
