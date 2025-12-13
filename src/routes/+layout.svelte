<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { injectAnalytics } from '@vercel/analytics/sveltekit'

	injectAnalytics();

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>MixLab Connect | Create your Legacy</title>
	<meta name="description" content="Streamline your creative workflow. Download MixLab Connect for instant access to session management, service brochures, explore the music by learning and our proprietary sound library." />
</svelte:head>
{@render children()}
