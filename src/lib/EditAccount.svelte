<script lang="ts">
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabase } from './superbaseClient';

	export let session: AuthSession;

	let loading = false;
	let username: string | null = null;
	let website: string | null = null;
	let avatarUrl: string | null = null;
	let hasUsername: boolean = false;

	onMount(() => {
		getProfile();
	});

	const getProfile = async () => {
		try {
			loading = true;
			const { user } = session;

			const { data, error, status } = await supabase
				.from('profiles')
				.select('username, website, avatar_url')
				.eq('id', user.id)
				.single();

			if (error && status !== 406) throw error;

			if (data) {
				username = data.username;
				website = data.website;
				avatarUrl = data.avatar_url;
				hasUsername = Boolean(data.username);
			}
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	const updateProfile = async () => {
		try {
			loading = true;
			const { user } = session;

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url: avatarUrl,
				updated_at: new Date().toISOString()
			};

			let { error } = await supabase.from('profiles').upsert(updates);

			if (error) {
				throw error;
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
	<div class="py-8 px-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		<div class="max-w-screen-md">
			<div class="mb-5">
				<h1>Edit Your Account</h1>
			</div>
			<form on:submit|preventDefault={updateProfile} class="form-widget">
				{#if !hasUsername}
					<div class="alert variant-ghost-primary mb-5" role="alert">
						<p>Before you can play you'll need to set a username!</p>
					</div>
				{/if}

				<div>
					<label class="label mb-6">
						<span>Username</span>
						<input class="input" type="text" placeholder="Username" bind:value={username} />
					</label>

					<label class="label mb-6">
						<span>Email</span>
						<input
							class="input"
							disabled
							type="text"
							placeholder="Username"
							value={session.user.email}
						/>
					</label>
				</div>
				<div>
					<button type="submit" class="btn variant-filled-primary" disabled={loading}>
						{loading ? 'Saving ...' : 'Update profile'}
					</button>
				</div>
			</form>
		</div>
	</div>
</section>
