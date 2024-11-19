import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { handleClerk } from 'clerk-sveltekit/server'

const csk = "sk_test_h2gnNWbaiR8J7rluyt032I7fQ2voM3MUBlMfGqQlS0"

export const handleUser: Handle = async ({event, resolve}) => {
	const {locals} = event;
	const userId = locals.session?.userId;
	const claims = locals.session?.claims;

	let user = null

	if(userId){
		const userResource = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {headers: {
			Authorization: `Bearer ${csk}`,
		}})
		user = await userResource.json()
	}

	event.locals.session = {
		userId,
		claims,
		user
	}

	return resolve(event)

}

export const handle: Handle = sequence(
	handleClerk(csk, {
		debug: true,
		protectedPaths: ['/admin'],
		signInUrl: '/profile',
	})
)