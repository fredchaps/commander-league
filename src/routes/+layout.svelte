<script lang="ts">
	import { onMount } from 'svelte'
	import { supabase } from '../lib/superbaseClient'
	import type { AuthSession } from '@supabase/supabase-js'

	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { LightSwitch, AppBar, Modal, storePopup} from '@skeletonlabs/skeleton';
    import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';

	let session: AuthSession | null;
	
	onMount(() => {
	  supabase.auth.getSession().then(({ data }) => {
		session = data.session
	  })
  
	  supabase.auth.onAuthStateChange((_event, _session) => {
		session = _session
	  })
	})

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>
<div>
	<Modal />
	<nav class="sticky top-0">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				CL
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				{#if session}
					<a class="btn" href="/admin">Admin</a>
					<button type="button" class="btn block" on:click={() => supabase.auth.signOut()}>
						Sign Out
					</button>
				{/if}
			</svelte:fragment>
		</AppBar>
	</nav>
	<slot />
</div>
