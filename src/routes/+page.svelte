<script>
	import logo from '$lib/assets/MixLab Logo BG.png';
	import Hero from '$lib/components/hero.svelte';
	import Faq from '$lib/components/faq.svelte';
	import SignUp from '$lib/components/signUp.svelte';

	let mobileMenuOpen = false;
</script>

<!-- Navigation -->
<nav class="border-b border-gray-400 bg-[#E5E5E5]">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
		<div class="flex items-center space-x-3">
			<img src={logo} alt="MixLab Logo" class="h-10 w-10 md:h-12 md:w-12 object-contain" />
			<span class="text-lg md:text-xl font-semibold">MixLab Connect</span>
		</div>
		
		<!-- Mobile Menu Button -->
		<button aria-label="a"
			class="md:hidden"
			on:click={() => mobileMenuOpen = !mobileMenuOpen}
		>	
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
			</svg>
		</button>
		
		<!-- Desktop Menu -->
		<div class="hidden md:flex items-center space-x-12">
			<a href="#hero" class="font-medium text-gray-800 hover:text-gray-600">Home</a>
			<a href="#signup" class="font-medium text-gray-800 hover:text-gray-600">Download</a>
			<a href="#faq" class="font-medium text-gray-800 hover:text-gray-600">FAQ</a>
		</div>
	</div>
	
	<!-- Mobile Menu Dropdown -->
	{#if mobileMenuOpen}
		<div class="md:hidden border-t border-gray-400 bg-[#E5E5E5]">
			<div class="flex flex-col space-y-2 px-6 py-4">
				<a href="#hero" class="font-medium text-gray-800 hover:text-gray-600 py-2">Homepage</a>
				<a href="#signup" class="font-medium text-gray-800 hover:text-gray-600 py-2">Download</a>
				<a href="#faq" class="font-medium text-gray-800 hover:text-gray-600 py-2">FAQ</a>
			</div>
		</div>
	{/if}
</nav>

<!-- Hero Section -->
<Hero/>

<!-- Signup Section -->
<SignUp/>

<!-- FAQ Section -->
<Faq/>

<!-- Footer -->
<footer class="border-t border-gray-400 bg-[#E5E5E5]">
	<div class="mx-auto flex flex-col md:flex-row max-w-7xl items-center justify-between px-6 py-6 md:px-8 space-y-4 md:space-y-0">
		<div class="text-xs md:text-sm text-gray-600 text-center md:text-left">
			© 2025 MixLab Music Studios Inc.
		</div>
		
		<!-- Mobile: Social Label -->
		<div class="md:hidden text-sm font-semibold text-gray-700">Social</div>
		
		<div class="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
			<!-- Instagram -->
			<a
				href="https://www.instagram.com/mixlabmusicstudios.ph"
				target="_blank"
				class="flex items-center space-x-2 text-gray-800 transition-colors hover:text-gray-600"
			>
				<svg class="h-6 w-6 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
					/>
				</svg>
				<span class="md:hidden text-sm">Instagram</span>
			</a>
			<!-- Facebook -->
			<a
				href="https://www.facebook.com/mixlabmusicstudios"
				target="_blank"
				class="flex items-center space-x-2 text-gray-800 transition-colors hover:text-gray-600"
			>
				<svg class="h-6 w-6 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
					/>
				</svg>
				<span class="md:hidden text-sm">Facebook</span>
			</a>
			<!-- TikTok -->
			<a
				href="https://tiktok.com/@mixlabmusicstudios"
				target="_blank"
				class="flex items-center space-x-2 text-gray-800 transition-colors hover:text-gray-600"
			>
				<svg class="h-6 w-6 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
					/>
				</svg>
				<span class="md:hidden text-sm">TikTok</span>
			</a>
		</div>
	</div>
</footer>

<style>
	@keyframes slideDown {
		from {
			opacity: 0;
			max-height: 0;
		}
		to {
			opacity: 1;
			max-height: 500px;
		}
	}

	.animate-slideDown {
		animation: slideDown 0.3s ease-out;
	}
</style>