<script lang="ts">
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabase } from './superbaseClient';
	// import { format } from 'date-fns'
	import { modalStore } from '@skeletonlabs/skeleton';
	import EditGame from './EditGame.svelte';
	// export let session: AuthSession;

	let loading = false;
	let session: AuthSession | null;
	let username: string | null = null;
	let gameData: any[] = [];
	// supabase.auth.onAuthStateChange((_event, _session) => {
	// session = _session
	// })

	type GameTypes = {
		id: string;
		date_created: string;
		active: boolean;
		game_table: number;
	};
	onMount(() => {
		getGames();
	});

	const getGames = async () => {
		try {
			loading = true;

			const { data, error, status } = await supabase
				.from('games')
				.select()
				// .select('id', 'game_table')
				.eq('active', true);

			if (error && status !== 406) throw error;

			if (data) {
				gameData = data;
				console.log(data);
			}
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	const modalComponent: ModalComponent = {
		// Pass a reference to your custom component
		ref: EditGame,
		// Add the component properties as key/value pairs
		props: { background: 'bg-red-500' },
		// Provide a template literal for the default component slot
		slot: ''
	};

	const editGame: ModalSettings = {
		type: 'component',
		component: modalComponent,
		title: 'Edit Game'
	};

	const setModalData = (row: GameTypes) => {
		const editGame: ModalSettings = {
			type: 'component',
			component: modalComponent,
			title: 'Edit Game',
			meta: {
				game_id: row.id
			}
		};
		modalStore.trigger(editGame);
	};
</script>

<section>
	<!-- Responsive Container (recommended) -->
	<div class="table-container">
		<!-- Native Table Element -->
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Table</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				{#each gameData as row, i}
					<tr on:click={() => setModalData(row)}>
						<td>{row.game_table}</td>
						<td>{row.created_at}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<!-- <Table source={gameData.length ? tableSimple : tableSimple2} interactive on:selected={(row) => setModalData(row)}/> -->
</section>
