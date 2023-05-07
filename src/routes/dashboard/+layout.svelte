<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '../../lib/superbaseClient';
	import type { AuthSession } from '@supabase/supabase-js';

	import '../../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../../app.postcss';

	import { Modal, storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';

	let session: AuthSession | null;

	onMount(() => {
		supabase.auth.getSession().then(({ data }) => {
			session = data.session;
		});

		supabase.auth.onAuthStateChange((_event, _session) => {
			session = _session;
		});
	});

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div>
	<Modal />
	<slot />
</div>
