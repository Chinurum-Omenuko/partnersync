<script>
	import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
	import SignOutButton from "clerk-sveltekit/client/SignOutButton.svelte";

    let username = '';
    export let data
</script>


<h1>Welcome {username} {data.user}</h1>
<SignedIn let:user />
<SignOutButton />