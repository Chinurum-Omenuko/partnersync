<script>
    const logo = '../../../static/images/white_logo.svg';
</script>

<footer class="bg-black text-white py-8">
    <div class="footer-content max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
        <!-- Company and Legal Information -->
        <div class="info-section flex flex-col md:flex-row gap-8">
            <!-- Company Information -->
            <div class="company-info">
                <h4 class="text-lg font-bold mb-2">Company</h4>
                <p><a href="https://www.algonquincollege.com/applied-research/" class="text-white hover:text-gray-400">About Applied Research</a></p>
                <p><a href="https://www.algonquincollege.com/" class="text-white hover:text-gray-400">Algonquin College</a></p>
            </div>

            <!-- Legal Information -->
            <div class="legal-info mt-4 md:mt-0">
                <h4 class="text-lg font-bold mb-2">Legal</h4>
                <p><a href="https://www.algonquincollege.com/policies/privacy/" class="text-white hover:text-gray-400">Privacy Policy</a></p>
            </div>
        </div>

        <!-- Logo Section -->
        <div class="footer-logo mt-4 md:mt-0 w-80 flex justify-center">
            <img src={logo} alt="PartnerSync Logo" class="h-32 w-auto md:h-36 lg:h-40">
        </div>
    </div>

    <!-- Copyright Information -->
    <p class="text-center mt-8">&copy; 2024 PartnerSync. All rights reserved.</p>
</footer>