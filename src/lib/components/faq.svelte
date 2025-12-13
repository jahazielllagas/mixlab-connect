<script>
    async function toggleItem(index) {
		openItems[index] = !openItems[index];
	}

	// Array to track which FAQ items are open
	let openItems = [false, false, false, false];

	// FAQ data
	const faqs = [
		{
			question: 'What is MixLab Connect?',
			answer:
				'MixLab Connect is an application where you can learn, create your legacy through recording, and rehearsal to your music needs.'
		},
		{
			question: 'Will it gonna be available on Google Play Store & Apple Store?',
			answer:
				'Yes, MixLab Connect will be available on both Google Play Store and Apple App Store once the official release is completed.'
		},
		{
			question: 'What is the application can do?',
			answer:
				'The application provides session management, access to service brochures, our proprietary sound library, and tools for recording and rehearsal.'
		},
		{
			question: 'When would be the official release fo the application?',
			answer:
				'The official release date will be announced soon. We are currently in open beta testing phase.'
		}
	];
</script>

<!-- FAQ Section -->
<div
	id="faq"
	class="min-h-[50%] sm:min-h-[95vh] snap-start bg-[url(../lib/assets/faq-bg.png)] bg-no-repeat bg-cover px-6 py-12 md:px-8 md:py-16"
>
	<div class="mx-auto max-w-5xl">
		<h1 class="mb-8 md:mb-12 text-4xl md:text-6xl font-bold">Frequently Asked Question</h1>

		<div class="space-y-4 md:space-y-6">
			{#each faqs as faq, index}
				<div
					class="overflow-hidden rounded-2xl border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
				>
					<!-- Question Button -->
					<button
						on:click={() => toggleItem(index)}
						class="flex w-full items-center justify-between p-4 md:p-6 text-left transition-colors hover:bg-gray-50"
					>
						<div class="flex items-center space-x-3 md:space-x-4">
							<div
								class="flex h-8 w-8 md:h-10 md:w-10 flex-shrink-0 items-center justify-center rounded-full bg-black text-lg md:text-xl font-bold text-white"
							>
								?
							</div>
							<span class="text-sm md:text-lg font-semibold">{faq.question}</span>
						</div>
						<svg
							class="h-6 w-6 md:h-8 md:w-8 flex-shrink-0 transition-transform duration-300 {openItems[index]
								? 'rotate-180'
								: ''}"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="3"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>

					<!-- Answer Panel -->
					{#if openItems[index]}
						<div class="animate-slideDown border-t-4 border-black bg-gray-900 p-4 md:p-6 text-white">
							<div class="flex items-start space-x-3 md:space-x-4">
								<div
									class="flex h-8 w-8 md:h-10 md:w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-xl md:text-2xl font-bold text-black"
								>
									!
								</div>
								<p class="pt-1 md:pt-2 text-sm md:text-base leading-relaxed">{faq.answer}</p>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>