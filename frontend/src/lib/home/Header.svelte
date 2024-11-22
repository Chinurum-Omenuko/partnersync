<script>
	import { goto } from '$app/navigation';
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';
</script>

<header class="flex items-center justify-between bg-white px-4">
	<div class="flex items-center">
		<!-- Responsive logo size classes -->
		<img
			src="/images/green-logo.svg"
			alt="PartnerSync Logo"
			class="h-10 w-auto sm:h-12 md:h-16 lg:h-56"
		/>
	</div>
	<div class="flex items-center space-x-4">
		<!-- Notification Bell Icon -->
		<button class="text-xl text-gray-600">
			<i class="fas fa-bell"></i>
		</button>
		<!-- Sign In Button (Visible on medium screens and up) -->
		<SignOutButton
			signOutCallback={() => {
				goto('/');
			}}
		>
			<button class="hidden rounded bg-[#EAC117] px-3 py-1 text-white md:inline">Sign Out</button>
		</SignOutButton>
		<!-- Hamburger Menu for Mobile -->
		<button class="rounded bg-[#EAC117] px-3 py-1 text-white md:hidden">☰</button>
	</div>
</header>

<style>
	header {
		height: 15vh;
	}
</style>
