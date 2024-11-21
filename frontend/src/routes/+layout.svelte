<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';

	

	export let children;


</script>



<Header />
{@render children()}
	
