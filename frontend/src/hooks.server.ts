import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { handleClerk } from 'clerk-sveltekit/server'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createServerClient } from '@supabase/ssr'

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

	console.log("Logged in event")
	return resolve(event)

}

export const handle: Handle = sequence(
	handleClerk(csk, {
		debug: true,
		protectedPaths: ['/admin'],
		signInUrl: '/profile',
	})
)

export const handle_sb: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
	  cookies: {
		getAll: () => event.cookies.getAll(),
		setAll: (cookiesToSet) => {
		  cookiesToSet.forEach(({ name, value, options }) => {
			event.cookies.set(name, value, { ...options, path: '/' })
		  })
		},
	  },
	})
  
	return resolve(event)
}