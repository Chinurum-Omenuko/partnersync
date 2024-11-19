<script>
	import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
	import SignOutButton from "clerk-sveltekit/client/SignOutButton.svelte";

    let username = '';
</script>


<h1>Welcome {username}</h1>
<SignedIn let:user />
<SignOutButton />