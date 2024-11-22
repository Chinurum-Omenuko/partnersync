<script>
	import { goto } from "$app/navigation";
	import Header from "$lib/home/Header.svelte";
	import Navbar from "$lib/shared/Navbar.svelte";

	export let data;
	export let children;

	console.log(data)
</script>

<Header />
<div class="flex h-svh max-h-[700px] w-full">
	<Navbar />
	<div class="h-full flex-1 bg-[#00703C]">
		{@render children()}
	</div>
	
</div>


<style>
	.content{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-direction: row;
		height: 100vh;
		border: solid 2px red;
	}

	.background{
		background-color: #00703C;
		width: 100%;
		border-top-left-radius: 3cap;
	}
</style>