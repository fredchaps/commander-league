<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '../lib/superbaseClient';
	import type { AuthSession } from '@supabase/supabase-js';
	// import Auth from '../lib/Auth.svelte'
	// import Dashboard from '$lib/Dashboard.svelte';
	import Homepage from './pages/Homepage.svelte';
	let session: AuthSession | null;

	onMount(() => {
		supabase.auth.getSession().then(({ data }) => {
			session = data.session;
		});

		supabase.auth.onAuthStateChange((_event, _session) => {
			session = _session;
		});
		//   window.document.body.classList.toggle('dark-mode')
	});
</script>

<div>
	<Homepage />
</div>
