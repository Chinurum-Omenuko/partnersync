<script lang="ts">
    import mockProjectList from './mockProjectList';
    import mockCategories from './mockCategories';

	let projectList = mockProjectList;
    let categories = mockCategories
    let displayDropdown = 'hidden';
</script>

<!-- <div class="flex h-full items-center justify-center overflow-scroll bg-[#00703C] mx-auto"> -->
<div class="mx-auto h-full max-w-7xl overflow-scroll bg-[#00703C] px-4 py-6 sm:px-6 lg:px-8">
	<!-- Projects Section -->
	<div class="mx-auto w-full max-w-4xl space-y-6 rounded-lg bg-white p-8">
		<!-- Header -->
		<div>
			<h1 class="text-3xl font-bold">Projects</h1>
			<hr class="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
		</div>

		<!-- Dropdown -->
		<div class="relative inline-block w-full md:w-auto">
			<button
                on:click={() => (displayDropdown = displayDropdown === 'hidden' ? 'block' : 'hidden')}
				class="inline-flex w-full items-center rounded bg-yellow-400 px-4 py-2 font-semibold text-white md:w-auto"
			>
				<span>Categories</span>
				<svg class="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
					<path
						d="M5.23 7.21a.75.75 0 011.06 0L10 10.92l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
					/>
				</svg>
			</button>
			<!-- Dropdown Content -->
			<div class="absolute mt-1 {displayDropdown} w-full rounded-md bg-white shadow-lg">
				<ul class="py-2 text-gray-700">
                    {#each categories as category}
                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">{category.name}</a></li>
                    {/each}
				</ul>
			</div>
		</div>

		<!-- Project List -->
		<div>
			{#each projectList as project}
				<div class="mb-4 cursor-pointer rounded bg-white p-4 shadow">
					<h2 class="text-xl">{project.title} - {project.organization}</h2>
					<p>
						{project.description}
					</p>
				</div>
				<!-- Do something -->
			{/each}
		</div>
	</div>
</div>
