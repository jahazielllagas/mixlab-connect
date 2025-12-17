<script lang="ts">
	import video from '$lib/assets/videos/MIxLab App teaser.mp4';

	let fullName: string = '';
	let emailAddress: string = '';
	let formSubmitted: boolean = false;
	let saving: boolean = false;
	let errorMessage: string | null = null;

	async function handleSubmit(): Promise<void> {
		errorMessage = null;
		saving = true;

		try {
			const response = await fetch('/api/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ fullName, emailAddress })
			});

			const result = await response.json();

			if (!response.ok) {
				errorMessage = result.error || 'Failed to save signup';
				console.error('[Client] Error response:', result);
				saving = false;
				return;
			}

			console.log('[Client] Signup successful:', result);
			formSubmitted = true;
			fullName = '';
			emailAddress = '';
		} catch (err) {
			console.error('[Client] Unexpected error:', err);
			errorMessage = (err as Error).message || 'Unexpected error';
		} finally {
			saving = false;
		}
	}
</script>

<div
	id="signup"
	class="flex min-h-[50%] snap-start items-center bg-[url(../lib/assets/signup-bg.png)] bg-cover bg-no-repeat sm:min-h-[95vh]"
>
	<div class="mx-auto w-full max-w-[1800px] px-6 py-8 md:px-16 md:py-12">
		<div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
			<!-- Mobile: Signup Form First (Desktop: Video First) -->
			<div class="order-2 flex justify-center px-0 md:px-8 lg:order-1 lg:justify-start">
				<video class="h-auto w-full rounded-3xl shadow-xl" controls autoplay muted loop>
					<source src={video} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>

			<!-- Mobile: Video Second (Desktop: Form Second) -->
			<!-- Replace the signup form section with this: -->
			<div class="order-1 flex justify-center px-0 md:px-8 lg:order-2 lg:justify-end">
				<div
					class="w-full max-w-md rounded-3xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-10"
				>
					{#if !formSubmitted}
						<!-- Original Form -->
						<h2 class="mb-4 text-center text-4xl font-bold md:text-4xl">
							Sign Up for<br />Open Beta
						</h2>
						<p class="mb-6 text-center text-xs text-gray-700 md:mb-8 md:text-sm">
							Please fill out the form below to request access to our exclusive beta version of our
							application. We will process your request and send you a download link via email
						</p>

						<form on:submit|preventDefault={handleSubmit} class="space-y-4 md:space-y-6">
							<div>
								<label for="fullName" class="mb-2 block text-xs font-semibold md:text-sm">
									FULL NAME:
								</label>
								<input
									type="text"
									id="fullName"
									bind:value={fullName}
									required
									class="w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-sm transition-colors focus:border-gray-500 focus:outline-none md:py-3 md:text-base"
									placeholder="Enter your full name here"
								/>
							</div>

							<div>
								<label for="emailAddress" class="mb-2 block text-xs font-semibold md:text-sm">
									EMAIL ADDRESS:
								</label>
								<input
									type="email"
									id="emailAddress"
									bind:value={emailAddress}
									required
									class="w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-sm transition-colors focus:border-gray-500 focus:outline-none md:py-3 md:text-base"
									placeholder="Enter your email address here"
								/>
							</div>

							{#if errorMessage}
								<p class="mt-3 text-sm text-red-600">{errorMessage}</p>
							{/if}

							<!-- optionally show saving state on the submit button -->
							<button
								type="submit"
								disabled={saving}
								class="w-full rounded-lg bg-gradient-to-r from-[#B4A063] to-[#DEDAA0] py-3 text-base font-bold text-gray-900 transition-colors hover:bg-[#d9bc5f] md:py-4 md:text-lg"
							>
								{#if saving}Saving...{:else}Submit{/if}
							</button>
						</form>
					{:else}
						<!-- Thank You Message -->
						<div class="space-y-6 text-center">
							<h2 class="text-3xl leading-tight font-bold md:text-4xl">
								Thank you for signing up.
							</h2>
							<p class="text-sm leading-relaxed text-gray-700 md:text-base">
								Please fill out the form below to request access to our exclusive beta version of
								our application. We will process your request and send you a download link via email
							</p>

							<div class="space-y-3 pt-4">
								<a
									href="https://expo.dev/artifacts/eas/xpoxpRoaLqBvVmKYA69udA.apk"
									class="block w-full rounded-lg bg-gradient-to-r from-[#B4A063] to-[#DEDAA0] py-3 text-center text-base font-bold text-gray-900 transition-colors hover:bg-[#d9bc5f] md:py-4 md:text-lg"
								>
									Download
								</a>

								<button
									class="flex w-full items-center justify-center space-x-2 rounded-lg bg-gray-900 py-3 text-base font-semibold text-white transition-colors hover:bg-gray-800 md:py-4 md:text-lg"
								>
									<svg
										class="h-5 w-5"
										viewBox="0 0 512 512"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g>
											<g>
												<path
													d="M451.908,224.327L91.42,6.615C84.152,2.226,76.962,0,70.05,0C55.38,0,40.576,10.917,40.576,35.305V476.8
			c0,24.314,14.712,35.198,29.292,35.2c0.002,0,0.002,0,0.003,0c6.945,0,14.172-2.266,21.479-6.734l360.726-220.618
			c12.329-7.54,19.381-18.553,19.348-30.215C471.391,242.771,464.279,231.797,451.908,224.327z M345.959,184.753l-51.028,55.149
			L110.965,42.832L345.959,184.753z M64.671,488.759c-2.794-3.224-3.197-8.967-3.197-11.959V35.305
			c0-3.534,0.494-8.627,2.938-11.716L280.7,255.281L64.671,488.759z M112.507,467.83l182.492-197.232l50.879,54.503L112.507,467.83z
			 M441.173,266.82l-77.096,47.152l-54.848-58.754l54.993-59.434l76.882,46.432c5.976,3.609,9.41,8.083,9.422,12.275
			C450.538,258.683,447.129,263.176,441.173,266.82z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													d="M93.657,177.152c-5.771,0-10.449,4.678-10.449,10.449v4.576c0,5.771,4.678,10.449,10.449,10.449
			s10.449-4.678,10.449-10.449v-4.576C104.106,181.83,99.428,177.152,93.657,177.152z"
												/>
											</g>
										</g>
										<g>
											<g>
												<path
													d="M93.657,214.79c-5.771,0-10.449,4.678-10.449,10.449v99.266c0,5.771,4.678,10.449,10.449,10.449
			s10.449-4.678,10.449-10.449v-99.266C104.106,219.468,99.428,214.79,93.657,214.79z"
												/>
											</g>
										</g>
									</svg>
									<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
										<path
											d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
										/>
									</svg>
									<span>Coming Soon</span>
								</button>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
