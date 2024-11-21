<script>
	import { toggleSignInModal } from "$lib/context/ModalContext";
	import HeroHeader from "$lib/HeroHeader.svelte";

    const { toggleSUModal } = $props()
</script>
<HeroHeader toggleSIModal={toggleSignInModal}/>
<div class="container">
    <section class="hero bg-[#00703C] text-center text-white relative overflow-hidden" style="min-height: 78vh;">
        <!-- Hero Content -->
        <div class="hero-content relative z-20 flex flex-col justify-center items-center h-full">
            <h1 class="text-4xl font-bold mb-4">PartnerSync</h1>
            <p class="text-l mb-6 max-w-xl mx-auto">PartnerSync is a project matching tool that connects Algonquin faculty, students and external partners. It is used to collaborate, submit project requests, and explore partnership opportunities. 
            </p>
            <button class="get-started-btn bg-[#EAC117] text-white px-6 py-3 rounded" onclick={toggleSUModal}>Get Started</button>
        </div>

        <!-- Graphic Layer -->
        <div class="graphic-layer absolute bottom-0 left-0 right-0 z-10">
            <img src="/images/PartnerSync banner.svg" alt="Hero Banner Graphic" class="w-full h-auto">
        </div>
    </section>

    <!-- Features Section -->
    <section class="features py-16 px-4 text-center">
        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="feature p-6 border rounded-lg shadow-md">
                <img src="/images/PartnerSync graphics-01.svg" alt="Create an Account" class="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                <h3 class="text-2xl font-bold mb-2">Create an Account</h3>
                <p>Sign up by identifying yourself as a Algonquin Faculty Member or Industry Partner to tailor your experience.</p>
            </div>
            <div class="feature p-6 border rounded-lg shadow-md">
                <img src="/images/PartnerSync graphics-02.svg" alt="Submit a Request" class="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                <h3 class="text-2xl font-bold mb-2">Submit a Request</h3>
                <p>Provide details about your project idea or area of interest to get started.</p>
            </div>
            <div class="feature p-6 border rounded-lg shadow-md">
                <img src="/images/PartnerSync graphics-03.svg" alt="Explore Collaboration Opportunities" class="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                <h3 class="text-2xl font-bold mb-2">Explore Collaboration Opportunities</h3>
                <p>Browse through partner organizations or courses at Algonquin College to find your ideal collaborators and start working together!</p>
            </div>
        </div>
    </section>
</div>

<style>

    .container{
        display: flex;
        flex-direction: column;
        min-width: 100vw;
    }
</style>