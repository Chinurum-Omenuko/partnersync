<script>
	const { isOpen, closeModal, course, sendInterest, isAdmin } = $props();
	console.log({ isAdmin });
</script>

{#if isOpen}
	<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div
			class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
			aria-hidden="true"
		></div>
		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-full items-end p-4 text-center sm:items-center sm:p-0">
				<div class="mx-auto h-3/4 w-full max-w-7xl overflow-y-auto rounded bg-white p-6 shadow-lg">
					<div class="flex items-center justify-between">
						<h2 class="mb-4 text-2xl font-bold" id="modalTitle">
							{course?.code} - {course?.program}
						</h2>
						<button onclick={closeModal} class="cursor-pointer text-4xl text-gray-600"
							>&times;</button
						>
					</div>
					<div class="text-left">
						<strong>Course Summary:</strong><br />
						{course.summary}<br />
						<strong>Skill Set:</strong><br />
						{course.skills}<br />
						<strong>Program:</strong><br />
						{course.program}<br />
						<strong>Term:</strong><br />
						{course.term}<br />
						<strong>Level:</strong><br />
						{course.level}<br />
						<strong>Duration:</strong><br />
						{course.duration}<br />
						<strong>Staff:</strong><br />
						{course.staff}<br />
					</div>
					{#if isAdmin}
						<button onclick={sendInterest} class=" rounded bg-[#EAC117] px-3 py-1 text-white"
							>Confirm Request</button
						>
					{:else}
						<button onclick={sendInterest} class=" rounded bg-[#EAC117] px-3 py-1 text-white"
							>I'm interested</button
						>
					{/if}
				</div>
			</div>
		</div>
	</div>
{:else}
	<div></div>
{/if}
