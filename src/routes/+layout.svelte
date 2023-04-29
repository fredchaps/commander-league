<script>
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-sahara.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<nav class="sticky top-0">
	<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		(title)
		<svelte:fragment slot="trail">(actions)</svelte:fragment>
	</AppBar>
</nav>
<slot />
