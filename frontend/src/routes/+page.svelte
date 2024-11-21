<script lang="ts">
	import HeroSection from "$lib/Hero/HeroSection.svelte";
	import { toggleSignUpModal } from '../lib/context/ModalContext';
</script>




<HeroSection toggleSUModal={toggleSignUpModal} />


<style>
	

</style>