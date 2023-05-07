<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import { supabase } from '../lib/superbaseClient';
	import type { AuthSession } from '@supabase/supabase-js';

	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import '../lib/localStore';

	import { LightSwitch, AppBar, Modal, storePopup, Toast } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';

	let session: AuthSession | null;

	onMount(() => {
		supabase.auth.getSession().then(({ data }) => {
			session = data.session;
		});

		const { data } = supabase.auth.onAuthStateChange((_event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div>
	<Modal />
	<Toast position="t" />
	<nav class="sticky top-0 w-full">
		<AppBar
			background="none"
			gridcolumns="grid-cols-3"
			slotdefault="place-self-center"
			slottrail="place-content-end"
		>
			<svelte:fragment slot="lead">
				<a class="btn" href="/">RBN</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if session}
					<a class="btn" href="/dashboard">dashboard</a>
					<a class="btn" href="/dashboard/admin">admin</a>
					<button type="button" class="btn block" on:click={() => supabase.auth.signOut()}>
						Sign Out
					</button>
					<LightSwitch />
				{:else}
					<a class="btn" href="/dashboard">Sign In</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</nav>
	<slot />
</div>
