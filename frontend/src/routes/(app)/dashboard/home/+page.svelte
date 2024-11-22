<script>
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';

	let username = '';

	export let data;
	console.log(data?.claims);
</script>

<div class="mx-auto h-full max-w-7xl overflow-scroll bg-[#00703C] px-4 py-6 sm:px-6 lg:px-8">
	<!-- <div class=" "> -->
	<!-- Main Content Section -->
	<div class="flex flex-col rounded-lg bg-[#00703C] p-6 lg:col-span-4">
		<h1 class="mb-4 text-2xl font-bold text-white md:text-3xl">Welcome Home, Sarah</h1>

		<!-- What's New & Profile Grid -->
		<div class="flex flex-row gap-4">
			<!-- What's New Section -->
			<div class="col-span-1 rounded-lg bg-white p-6 md:col-span-2 lg:col-span-2">
				<h2 class="mb-4 text-xl font-semibold">What's New</h2>
				<p class="text-gray-500">Lorem ipsum dolor sit amet...</p>
			</div>

			<!-- Profile Card -->
			<div class="col-span-1 rounded-lg bg-white p-6">
				<div class="mb-4">
					<h3 class="text-center text-lg font-bold">Sarah Smith</h3>
				</div>
				<div class="space-y-2">
					<p><span class="font-semibold">Course:</span> Applied Projects</p>
					<p><span class="font-semibold">Program:</span> Media Design</p>
					<p><span class="font-semibold">Email:</span> sarahsmith@companymail.com</p>
				</div>
			</div>
		</div>
		<!-- Requests Section -->
		<div class="mt-8 flex flex-col">
			<h2 class="mb-4 text-2xl font-bold text-white">My Requests</h2>

			<!-- For Medium and Larger Devices: Carousel -->
			<div class="items-left flex">
				<!-- Carousel Wrapper -->
				<div id="carousel" class="flex flex-wrap gap-6">
					<!-- Request Card 1 -->
					<div class="w-60 shrink-0 rounded-lg bg-white p-6">
						<h3 class="text-lg font-semibold">UX/UI Project</h3>
						<p class="text-sm text-gray-500">
							Our IMD Level 4 class is seeking a UX/UI Project to take on.
						</p>
					</div>
					<!-- Request Card 2 -->
					<div class="w-60 shrink-0 rounded-lg bg-white p-6">
						<h3 class="text-lg font-semibold">Request Title</h3>
						<p class="text-sm text-gray-500">Lorem ipsum...</p>
					</div>
					<!-- Request Card 3 -->
					<div class="w-60 shrink-0 rounded-lg bg-white p-6">
						<h3 class="text-lg font-semibold">Request Title</h3>
						<p class="text-sm text-gray-500">Lorem ipsum...</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- </div> -->
	<SignedIn let:user />
	<!-- <SignOutButton /> -->
</div>
