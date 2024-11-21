<script lang="ts">
	import '../app.css';
	import HeroHeader from '$lib/HeroHeader.svelte';
	import Footer from '$lib/Footer.svelte';
	import SignInModal from '$lib/Modals/SignInModal.svelte';
	import SignUpModal from '$lib/Modals/SignUpModal.svelte';
	import { modalStore as ModalContext, toggleSignInModal, toggleSignUpModal } from '$lib/context/ModalContext';
	let children = $props();
	
	

</script>



<HeroHeader />
{@render children.children()}

<Footer />
	
{#if $ModalContext.signIn}
	<SignInModal />
{/if}
{#if $ModalContext.signUp}
	<SignUpModal toggleSUModal={toggleSignUpModal}/>
{/if}