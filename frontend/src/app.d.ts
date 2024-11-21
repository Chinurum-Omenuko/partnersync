// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import { SupabaseClient, Session, User } from "@supabase/supabase-js";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient
			safeGetSession: () => Promise<{ session: Session | null; user: User | null }>
			sb_session: Session | null
			session: {
				userId: string | undefined,
				claims: never,
				user: UserResource | null | undefined
			} 
		}
		interface PageData {
			supabase: SupabaseClient
			session: Session | null
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
