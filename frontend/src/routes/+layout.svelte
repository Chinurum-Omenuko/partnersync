<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	let { children } = $props();
	// Add logic to check login status
	const isLogged = true;
</script>

<Header />

<div class="flex h-svh max-h-[700px] w-full">
	{#if isLogged}
		<Navbar />
	{:else}
		<div></div>
	{/if}
	<div class="h-full flex-1 bg-green-200">
		{@render children()}
	</div>
</div>


<Footer />
