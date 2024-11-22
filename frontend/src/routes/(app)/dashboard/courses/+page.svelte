<script>
	import CourseModal from '$lib/Modals/CourseModal.svelte';
	import mockCourses from './mockCourses';
	import mockRequestCourses from './mockRequestCourses';

	const { data } = $props();

	console.log('courses', data);

	let courses = $state(mockCourses);

	let isAdmin = $state(data?.claims?.role === 'org:admin' || false);
	let showModal = $state(false);
	let course = $state({});
	let selectedRequestList = $state('register');

	function sendCourseForm() {
		showModal = true;
	}
	function closeModal() {
		showModal = false;
	}

	function displayCourseModal(courseDisplayed) {
		console.log(courseDisplayed);
		course = courseDisplayed;
		showModal = true;
	}

	function sendInterest() {
		//add logic to send interest
		showModal = false;
	}

	function handleRequestList(option) {
		if (option === 'request') {
			courses = mockRequestCourses;
			selectedRequestList = 'request';
		} else {
			courses = mockCourses;
			selectedRequestList = 'register';
		}
	}
</script>

<CourseModal {course} isOpen={showModal} {closeModal} {sendInterest} {isAdmin} />
<div class="mx-auto h-full max-w-7xl overflow-scroll bg-[#00703C] px-4 py-6 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl bg-white px-4 py-6 sm:px-6 lg:px-8">
		<!-- Courses Heading -->
		<div class="mb-6">
			<h1 class="mb-4 text-4xl font-bold">Courses</h1>
			<hr class="my-4 h-px border-0 bg-gray-200 dark:bg-green-700" />
			{#if isAdmin}
				<a
					onclick={() => handleRequestList('register')}
					class="{selectedRequestList === 'register' ? 'font-bold' : ''} rounded px-6 py-3"
					>Register</a
				>
				<a
					onclick={() => handleRequestList('request')}
					class="{selectedRequestList === 'request' ? 'font-bold' : ''} rounded px-6 py-3"
					>Request</a
				>
				<hr class="my-4 h-px border-0 bg-gray-200 dark:bg-green-700" />
			{/if}
		</div>

		<!-- Courses Table -->
		<div class="overflow-x-auto">
			<table class="min-w-full border border-gray-200 bg-white">
				<thead>
					<tr class="border-b border-gray-200 bg-gray-100">
						<th class="px-6 py-3 text-left font-semibold text-gray-700">Name</th>
						<th class="px-6 py-3 text-left font-semibold text-gray-700">Program</th>
						<th class="px-6 py-3 text-left font-semibold text-gray-700">School/department</th>
						<th class="px-6 py-3 text-left font-semibold text-gray-700">Level</th>
						<th class="px-6 py-3 text-left font-semibold text-gray-700">Staff</th>
					</tr>
				</thead>
				<tbody>
					{#each courses as course}
						<tr
							class="cursor-pointer border-b border-gray-200"
							onclick={() => displayCourseModal(course)}
						>
							<td class="px-6 py-4 text-gray-900">{course.code ?? ''}</td>
							<td class="px-6 py-4 text-gray-900">{course.program ?? ''}</td>
							<td class="px-6 py-4 text-gray-900">{course.schoolDepartment ?? ''}</td>
							<td class="px-6 py-4 text-gray-900">{course.level ?? ''}</td>
							<td class="px-6 py-4 text-gray-900">{course.staff ?? ''}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
