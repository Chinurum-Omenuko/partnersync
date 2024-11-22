<script lang="ts">
	import InfoModal from '$lib/Modals/InfoModal.svelte';
	let showModal = false;
	function sendCourseForm() {
		showModal = true;
	}
	function closeModal() {
		showModal = false;
	}
  export let data
  console.log(data.user)
</script>

<InfoModal
	title="Your request has been sent for review"
	message="Your course has been sent for review to the department of Applied Research "
	isOpen={showModal}
	{closeModal}
/>
<div class="mx-auto h-full max-w-7xl overflow-y-scroll bg-[#00703C] px-4 py-6 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl bg-white px-4 py-6 sm:px-6 lg:px-8">
		<div>
			<h1 class="mb-4 text-4xl font-bold">Register your Course</h1>
      <hr class="h-px my-8 border-0 bg-[#00703C]" />
			<p>
        Please complete the form with the relevant course information required to identify a suitable external partner.			</p>
		</div>

		<div>
			<form>
				<div
					class="mt-10 grid w-full grid-flow-row grid-cols-1 gap-x-6 gap-y-8 overflow-auto md:grid-cols-6"
				>
					<div class="col-span-full md:col-span-2">
						<label for="name">Course Name</label>
						<div
							class="mt-2 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
						>
							<input
								type="text"
								name="name"
								id="name"
								autocomplete="name"
								class="w-full border-0 bg-neutral-100 py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div class="col-span-full md:col-span-2">
						<label for="course">Course Code</label>
						<div
							class=" mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
						>
							<input
								type="text"
								name="course"
								id="course"
								autocomplete="course"
								class="block flex-auto rounded-md border-0 bg-neutral-100 py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div class="col-span-full md:col-span-2">
						<label for="term">Term</label>
						<div
							class=" mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
						>
							<input
								type="text"
								name="term"
								id="term"
								autocomplete="term"
								class="block flex-auto rounded-md border-0 bg-neutral-100 py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div class="col-span-full md:col-span-2">
						<label for="program">Program</label>
						<div
							class=" mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
						>
							<input
								type="text"
								name="program"
								id="program"
								autocomplete="program"
								class="block flex-auto rounded-md border-0 bg-neutral-100 py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div class="col-span-full md:col-span-2">
						<label for="school">School</label>
						<div
							class=" mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
						>
							<input
								type="text"
								name="school"
								id="school"
								autocomplete="school"
								class="block flex-auto rounded-md border-0 bg-neutral-100 py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div class="col-span-full">
						<label for="skills">Skills</label>
						<div
							class="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
						>
							<input
								type="text"
								name="skills"
								id="skills"
								autocomplete="skills"
								class="block flex-auto rounded-md border-0 bg-neutral-100 py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div class="col-span-full">
						<label for="description">Description</label>
						<div class="mt-2">
							<textarea
								id="description"
								name="description"
								rows="3"
								class="text-black-900 block w-full rounded-md border-0 bg-neutral-100 py-1.5 pl-1 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							></textarea>
						</div>
					</div>

					<div class="col-span-full">
						<div class="mr-auto flex items-center">
							<input
								checked
								id="checked-checkbox"
								type="checkbox"
								value=""
								class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
							/>
							<label for="checked-checkbox" class="ms-2 text-sm text-gray-900"
								>I acknowledge that this information will be made public on the PartnerSync website.
							</label>
						</div>
					</div>

					<div class="col-span-full">
						<button
							on:click={sendCourseForm}
							class="get-started-btn ml-auto flex rounded bg-[#EAC117] px-6 py-3 text-white"
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
