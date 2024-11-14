<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';

	let { children } = $props();
	// Add logic to check login status
	const isLogged = true;
</script>



<Header />
{@render children()}
	
