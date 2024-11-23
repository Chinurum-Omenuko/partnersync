<script>
	import Header from '$lib/home/Header.svelte';
	import Navbar from '$lib/shared/Navbar.svelte';

	export let data;
	export let children;

	console.log('on dashboard layout', data);
</script>

<Header />
<div class="flex h-svh max-h-[700px] w-full">
	<Navbar user={data} />
	<div class="h-full flex-1 bg-[#00703C] box">
		{@render children()}
	</div>
</div>


<style>
	.box{
		border-top-left-radius: 3cap;
	}
</style>