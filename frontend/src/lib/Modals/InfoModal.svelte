<script>
	let { title, message, isOpen, closeModal } = $props();
</script>

{#if isOpen}
	<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div
			class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
			aria-hidden="true"
		></div>

		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div
					class="relative mx-10 w-[52rem] transform overflow-auto rounded-lg bg-white text-center shadow-xl transition-all"
				>
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<!-- svelte-ignore event_directive_deprecated -->
					<button
						on:click={closeModal}
						type="button"
						class="ml-auto flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
					<div class="bg-white px-40 pb-14 pt-5">
						<div class="flex flex-col items-center">
							<h1 class="mb-6 text-2xl font-bold">{title}</h1>
							<p class="text-lg">{message}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div></div>
{/if}
