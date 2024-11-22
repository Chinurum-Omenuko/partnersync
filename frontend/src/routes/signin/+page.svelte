<script lang="ts">
	import Header from '$lib/home/Header.svelte';
	import SignIn from 'clerk-sveltekit/client/SignIn.svelte'
</script>

<Header />
<div class="flex h-svh max-h-[700px] w-full justify-center mt-10">
	<SignIn redirectUrl="/dashboard/home" />
</div>