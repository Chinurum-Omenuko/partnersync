<script>
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';
	export let data;
	let firstname = data?.claims.first_name;
	let username = data?.claims.full_name;
	let email = data?.claims.email

	
	console.log(data?.claims.full_name);
</script>

<section class="mx-auto h-full max-w-7xl overflow-scroll bg-[#00703C] px-4 py-6 sm:px-6 lg:px-8" id="greenbox">
	<!-- <div class=" "> -->
	<!-- Main Content Section -->
	<div class="flex flex-col rounded-lg bg-[#00703C] p-6 lg:col-span-4">
		<h1 class="mb-4 text-2xl font-bold text-white md:text-3xl">Welcome Home, {firstname}</h1>

		<!-- What's New & Profile Grid -->
		<div class="flex flex-row gap-4">
			<!-- What's New Section -->
			<div class="col-span-1 rounded-lg bg-white p-6 md:col-span-2 lg:col-span-2 md:w-3/4">
				<h2 class="mb-4 text-xl font-semibold">What's New</h2>
				<ul>
					<p class="text-gray-500">No new activities</p>
					
				</ul>
				
			</div>

			<!-- Profile Card -->
			<div class="col-span-1 rounded-lg bg-white p-6 h-80">
				<div class="mb-4">
					<h3 class="text-center text-lg font-bold">{username}</h3>
				</div>
				<div class="space-y-2">
					<p><span class="font-semibold">Course:</span> Applied Projects</p>
					<p><span class="font-semibold">Program:</span> Media Design</p>
					<p><span class="font-semibold">Email:</span> {email}</p>
				</div>
			</div>
		</div>
		<!-- Requests Section -->
		<div class="mt-8 flex flex-col">
			<h2 class="mb-4 text-2xl font-bold text-white">My Requests</h2>

			<!-- For Medium and Larger Devices: Carousel -->
			<div class="items-left flex">
				<!-- Carousel Wrapper -->
				<div id="carousel" class="flex flex-wrap gap-4">
					<!-- Request Card 1 -->
					<div class="w-64 shrink-0 rounded-lg bg-white p-6">
						<h3 class="text-lg font-semibold">UX/UI Project</h3>
						<p class="text-sm text-gray-500">
							Our IMD Level 4 class is seeking a UX/UI Project to take on.
						</p>
					</div>
					<!-- Request Card 2 -->
					<div class="w-64 shrink-0 rounded-lg bg-white p-6">
						<h3 class="text-lg font-semibold">Video Project</h3>
						<p class="text-sm text-gray-500">Our IMD Level 4 class is seeking a video project to take on.</p>
					</div>
					<!-- Request Card 3 -->
					<div class="w-64 shrink-0 rounded-lg bg-white p-6">
						<h3 class="text-lg font-semibold">Visual Design Project</h3>
						<p class="text-sm text-gray-500">Our IMD Level 4 class is seeking a Visual Project to take on.</p>
					</div>

					<!-- Request Card 4 -->
					<div class="w-64 shrink-0 rounded-lg bg-white p-6">
						<h3 class="text-lg font-semibold">SEO Project</h3>
						<p class="text-sm text-gray-500">Our IMD Level 4 class is seeking an SEO Project to take on.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- </div> -->
	<SignedIn let:user />
	<!-- <SignOutButton /> -->
</section>


<style>
	section{
		border-top-left-radius: 5cap;
	}
</style>