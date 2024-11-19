<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';


	

	export let children;
	export let data;

</script>



<Header />
{@render children()}
	
