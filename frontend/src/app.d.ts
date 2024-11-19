// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { UserResource } from "@clerk/types";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: {
				userId: string | undefined,
				claims: never,
				user: UserResource | null | undefined
			} 
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
declare global {
	interface DocumentEventMap {
	  'clerk-sveltekit:user': CustomEvent<UserResource>;
	}
}