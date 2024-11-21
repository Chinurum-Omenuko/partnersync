<script lang="ts">
	import HeroSection from "$lib/Hero/HeroSection.svelte";
	import SignInModal from "$lib/Modals/SignInModal.svelte";
	import SignUpModal from "$lib/Modals/SignUpModal.svelte";
	

	import { toggleSignUpModal } from '../lib/context/ModalContext';
</script>




<HeroSection toggleSUModal={toggleSignUpModal} />


<style>
	

</style>