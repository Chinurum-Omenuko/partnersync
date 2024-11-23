<script lang="ts">
	import { onMount } from 'svelte';

	// Add logic to check if is staff or external
	const { user } = $props();
	let isExternal = $state(user?.claims?.role === 'org:partner' || false);
	let position = $state('Staff');

	let user_initials = user?.claims.role



	let isAdmin = $state(user?.claims?.role === 'org:admin' || false);
	console.log({ isAdmin, claims: user?.claims });
	onMount(() => {
		if (isExternal) {
			isExternal = true;
			position = 'Partner';
		}

		if (isAdmin) {
			position = 'Admin';
		}
	});
</script>

<div class="nav min-w-100 hidden h-full flex-[0.3] bg-grey-200 md:block">
	<div class="inline-flex h-full w-full flex-col items-center justify-center bg-white">
		<div class="flex items-center justify-center w-16 h-16 bg-blue-500 text-white text-xl font-bold rounded-full">
			CO
		</div>
		  
		<div class="flex flex-col items-center justify-center">
			<h2 class="text-lg">Hello</h2>
			<h1 class="text-2xl font-bold">{position}</h1>
		</div>
		<hr class="my-2 h-px w-2/3 border-0 bg-[#00703C]" />
		<ul class="space-y-2 font-medium">
			<li>
				<a
					href="/dashboard/home"
					class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100  dark:hover:bg-gray-700"
				>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
				  </svg>
				  
					<span class="ms-3">Home</span>
				</a>
			</li>
			<li>
				<a
					href="/dashboard/courses"
					class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700"
				>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
				  </svg>
				  
					<span class="ms-3 flex-1 whitespace-nowrap">Courses</span>
				</a>
			</li>
			{#if !isExternal}
				<li>
					<a
						href="/dashboard/projects"
						class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100  dark:hover:bg-gray-700"
					>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
					  </svg>
					  
						<span class="ms-3 flex-1 whitespace-nowrap">Projects</span>
					</a>
				</li>
			{:else}
				<div></div>
			{/if}
			<li>
				<a
					href="/dashboard/message"
					class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100  dark:hover:bg-gray-700"
				>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
				  </svg>
				  
					<span class="ms-3 flex-1 whitespace-nowrap">Message</span>
				</a>
			</li>
			{#if !isAdmin}
				<li>
					<a
						href={isExternal ? '/dashboard/register/project' : '/dashboard/register/course'}
						class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100  dark:hover:bg-gray-700"
					>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
					  </svg>
					  
						<span class="ms-3 flex-1 whitespace-nowrap">Register</span>
					</a>
				</li>
			{/if}
		</ul>
		<hr class="my-2 h-px w-2/3 border-0 bg-[#00703C]" />
	</div>
</div>

<style>
	nav {
		width: 80vw;
		flex-basis: 20%;
	}
</style>
