
<script lang="ts">
	import SignUp from 'clerk-sveltekit/client/SignUp.svelte';

	import { closeAllModals, modalStore, toggleSignInModal, toggleSignUpModal } from '../context/ModalContext';
  	type RegistrationType = 'faculty' | 'partner' | null;
  	let registrationType = $state<RegistrationType>(null);

	function selectRegistrationType(type: RegistrationType) {
		registrationType = type;
	}


	function handleClose() {
		registrationType = null;
		toggleSignUpModal();
	}
</script>

<div class="modal">
	<div id="signUpModal" class="modal-content bg-white p-8 rounded-lg w-[90%] max-w-lg relative z-40">
		<span class="close text-black text-2xl cursor-pointer" onclick={handleClose}>&times;</span>
		
		{#if registrationType === null}
			<h2 class="text-2xl font-bold mb-4">Welcome to PartnerSync</h2>
			<p class="mb-4">Please select one of the groups that describe you</p>
			<div class="flex gap-4">
				<div class="w-full bg-[#9ABB50] p-4 rounded-lg shadow-md text-left">
					<button 
						onclick={() => selectRegistrationType('faculty')} 
						class="bg-[#9ABB50] text-black px-4 py-2 rounded w-full text-left font-bold"
					>
						Faculty
					</button>
					<p class="text-sm mt-2">Currently a faculty or educator at Algonquin College. Looking for a partner to work with my students.</p>
				</div>
				<div class="w-full bg-[#9ABB50] p-4 rounded-lg shadow-md text-left">
					<button 
						onclick={() => selectRegistrationType('partner')} 
						class="bg-[#9ABB50] text-black px-4 py-2 rounded w-full text-left font-bold"
					>
						Partner
					</button>
					<p class="text-sm mt-2">Looking to improve your business or organization by collaborating with highly qualified academic students.</p>
				</div>
			</div>
		{:else if registrationType === 'faculty'}
			{#snippet faculty()}
				<div class="modal-content bg-white p-8 rounded-lg">
					<h2 class="text-2xl font-bold mb-4">Create your Faculty account</h2>
					<form class="flex flex-col gap-4">
						<SignUp redirectUrl="/profile" />
						<button 
							type="button" 
							onclick={() => registrationType = null} 
							class="text-blue-500 underline"
						>
							Back to selection
						</button>
					</form>
				</div>
			{/snippet}
			{@render faculty()}
		{:else if registrationType === 'partner'}
			{#snippet partner()}
				<div class="modal-content bg-white p-8 rounded-lg">
					<h2 class="text-2xl font-bold mb-4">Create your Partner account</h2>
					<form class="flex flex-col gap-4">
						<SignUp redirectUrl="../../profile" />
						<button 
							type="button" 
							onclick={() => registrationType = null} 
							class="text-blue-500 underline"
						>
							Back to selection
						</button>
					</form>
				</div>
			{/snippet}
			{@render partner()}
		{/if}
	</div>
</div>

<style>
  .modal{
    width: 100vw;
    height: 100vh;
    top: 0;
    position: fixed;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.425);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	}
</style>