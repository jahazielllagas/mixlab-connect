<script>
    import phoneImage from '$lib/assets/phone-mockup.png';
</script>

<!-- Hero Section -->
<div
	id="hero"
	class="flex min-h-[50%] sm:min-h-[95vh] snap-start items-center bg-[url(../lib/assets/Hero_Section.png)] bg-cover bg-center bg-no-repeat"
>
	<div class="mx-auto w-full max-w-7xl px-6 py-8 md:px-8 md:py-5">
		<div class="grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2">
			<!-- Mobile: Phone Mockup -->
			<div class="flex justify-center lg:justify-start order-1 lg:order-1">
				<div class="relative">
					<img
						src={phoneImage}
						alt="MixLab Connect App Interface"
						class="h-[400px] w-[300px] md:h-[600px] md:w-[450px] object-contain drop-shadow-2xl"
					/>
				</div>
			</div>

			<!-- Mobile: Text Content -->
			<div
				class="space-y-6 md:space-y-8 rounded-[16px] border-4 border-black bg-white p-6 md:p-10 shadow-2xl order-2 lg:order-2"
			>
				<h1 class="text-4xl md:text-7xl leading-tight font-bold">
					Rehearse. Record. <br class="md:hidden" /> Repeat.
				</h1>
				<p class="text-base md:text-xl leading-relaxed text-gray-700">
					Streamline your creative workflow. Download MixLab Connect for instant
					access to session management, service brochures, explore the music by learning and our proprietary sound library.
				</p>
				<div class="flex flex-col md:flex-row items-stretch md:items-center space-y-3 md:space-y-0 md:space-x-4">
					<a
						href="#signup"
						class="text-center rounded-lg bg-gradient-to-r from-[#B4A063] to-[#DEDAA0] px-6 md:px-8 py-3 md:py-4 font-semibold text-gray-900 transition-colors hover:bg-[#d9bc5f]"
					>
						Download Open Beta
					</a>
					<button
						class="flex items-center justify-center space-x-2 rounded-lg bg-gray-900 px-6 md:px-8 py-3 md:py-4 font-semibold text-white transition-colors hover:bg-gray-800"
					>
						<svg
							class="h-4 w-4 md:h-5 md:w-5"
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
						<span class="text-sm md:text-base">Download on Play Store</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>