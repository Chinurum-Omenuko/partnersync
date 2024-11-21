<script lang="ts">
	import { modalStore, toggleSignInModal, toggleSignUpModal } from '../context/ModalContext';

	// Remove local state, use the store methods directly
	function handleClose() {
		toggleSignInModal();
	}

	function switchToSignUp() {
		toggleSignInModal(); // Close sign in
		toggleSignUpModal(); // Open sign up
	}
</script>

<div id="signInModal" class="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 hidden z-30">
    <div class="modal-content bg-white p-8 rounded-lg">
        <span class="close text-black text-2xl cursor-pointer" onclick={handleClose}>&times;</span>
        <h2 class="text-2xl font-bold mb-4">Sign In</h2>
        <form class="flex flex-col gap-4">
            <input type="email" placeholder="Email" class="border p-2 rounded">
            <input type="password" placeholder="Password" class="border p-2 rounded">
            <button type="submit" class="bg-[#EAC117] text-white px-4 py-2 rounded">Sign In</button>
        </form>
        <p class="mt-4">New to PartnerSync? <a href="#" onclick={switchToSignUp} class="text-blue-500">Sign up</a></p>
    </div>
</div>

<style>

    #signInModal{
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.425);
        z-index: 10000;
        display: flex;
    }
    
</style>