<script>

</script>

<header class="flex justify-between items-center bg-white px-4 ">
    <div class="flex items-center">
        <!-- Responsive logo size classes -->
        <img src="/images/green-logo.svg" alt="PartnerSync Logo" class="h-10 w-auto sm:h-12 md:h-16 lg:h-20">
    </div>
    <div class="flex items-center space-x-4">
        <!-- Notification Bell Icon -->
        <button class="text-gray-600 text-xl">
            <i class="fas fa-bell"></i>
        </button>
        <!-- Sign In Button (Visible on medium screens and up) -->
        <button class="hidden md:inline bg-[#EAC117] text-white px-3 py-1 rounded">Sign Out</button>
        <!-- Hamburger Menu for Mobile -->
        <button class="bg-[#EAC117] text-white px-3 py-1 rounded md:hidden">☰</button>
    </div>
</header>

<style>
    header{
        height: 15vh;
    }
</style>