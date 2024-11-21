<script lang="ts">
	import '../app.css';
	import HeroHeader from '$lib/HeroHeader.svelte';
	import Footer from '$lib/Footer.svelte';
	import SignInModal from '$lib/Modals/SignInModal.svelte';
	import SignUpModal from '$lib/Modals/SignUpModal.svelte';
	import { modalStore as ModalContext, toggleSignInModal, toggleSignUpModal } from '$lib/context/ModalContext';
<<<<<<< Updated upstream
	let children = $props();
	
	
=======
	let {children} = $props();

	
	
>>>>>>> Stashed changes

</script>



<HeroHeader toggleSIModal={toggleSignInModal}/>
{@render children()}
{#if $ModalContext.signIn}
	<SignInModal toggleSignInModal={toggleSignInModal}/>
{/if}

<Footer />
	

{#if $ModalContext.signUp}
	<SignUpModal toggleSUModal={toggleSignUpModal}/>
{/if}