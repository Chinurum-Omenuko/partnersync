<script lang="ts">
	import '../app.css';
	import SignInModal from '$lib/Modals/SignInModal.svelte';
	import SignUpModal from '$lib/Modals/SignUpModal.svelte';
	import { modalStore as ModalContext, toggleSignInModal, toggleSignUpModal } from '$lib/context/ModalContext';
	import Footer from '$lib/shared/Footer.svelte';
	let {children, data} = $props();
	console.log(data)

</script>


{@render children()}
{#if $ModalContext.signIn}
	<SignInModal />
{/if}

<Footer />

{#if $ModalContext.signUp}
	<SignUpModal />
{/if}