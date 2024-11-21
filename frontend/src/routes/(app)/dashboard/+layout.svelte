<script>
	import Header from "$lib/home/Header.svelte";
	import Navbar from "$lib/shared/Navbar.svelte";
	import NavMenu from "$lib/shared/NavMenu.svelte";

	export let data;
	export let children;
</script>

<Header />
<div class="content">
	<NavMenu />
	<div class="background">

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