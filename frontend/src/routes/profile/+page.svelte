<script>
	import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
	import SignOutButton from "clerk-sveltekit/client/SignOutButton.svelte";

    let username = '';
    
    export let data
    console.log(data.claims)
</script>


<h1>Welcome {username} {data.claims.first_name}</h1>
<SignedIn let:user />
<SignOutButton />