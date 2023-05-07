<script lang="ts">
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabase } from './superbaseClient';
	import Leaderboard from './Leaderboard.svelte';

	export let session: AuthSession;

	let loading = false;
	let username: string | null = '';
	let currentGame: {
		//<reference types="svelte" />
		game_id?: any;
		games?:
			| {
					active: boolean;
					created_at: string;
					id: string | number;
					game_table: number;
			  }
			| { [x: string]: any }
			| null;
	};
	// let currentGame: currentGame | null

	onMount(() => {
		getProfile();
		getPlayerCurrentGame();
	});

	const getProfile = async () => {
		try {
			loading = true;
			const { user } = session;

			const { data, error, status } = await supabase
				.from('profiles')
				.select('username')
				.eq('id', user.id)
				.single();

			if (error && status !== 406) throw error;

			if (data) {
				username = data.username;
			}
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	const getPlayerCurrentGame = async () => {
		try {
			loading = true;
			const { user } = session;

			const { data, error, status } = await supabase
				.from('game_players')
				.select('game_id, games(*)')
				.eq('player_id', user.id)
				.eq('games.active', true)
				.single();

			if (error && status !== 406) throw error;

			if (data) {
				currentGame = data;
				console.log(currentGame);
			}
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<section>
	<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		{#if currentGame?.games?.active}
			<aside class="alert variant-ghost-primary mb-8">
				<!-- Message -->
				<div class="alert-message">
					<h3>Your game has started</h3>
					<p>You're playing at table {currentGame?.games.game_table} sitting in seat 1</p>
				</div>
			</aside>
		{/if}

		<div class="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-y-6">
			<div class="col-span-1">
				<div class="bounty-card">
					<div class="bounty-card--count">0</div>
					<div class="bounty-card--text">Bounty Points</div>
				</div>
			</div>

			<div class="col-span-2">
				<Leaderboard />
			</div>
		</div>
	</div>
</section>
