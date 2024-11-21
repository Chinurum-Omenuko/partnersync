<script lang="ts">
    const logo = '../../static/images/white_logo.svg';
    const { toggleSIModal } = $props()
    
</script>
  
<header class="bg-[#00703C] p-4 flex justify-between items-center">
    <div class="container flex items-center">
        <img src={logo} alt="PartnerSync Logo" class="h-16 w-auto md:h-24 lg:h-32 mb-4">
        <a href="/signin"><button class="sign-in-btn bg-[#EAC117] text-white px-4 py-2 rounded ml-auto">Sign In</button></a>
    </div>
</header>


<style>
    .sign-in-button{
        border: solid 2px red;
    }

    .container{
        justify-content: space-between;
    }
</style>
