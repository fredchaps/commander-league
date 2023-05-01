<script lang="ts">
    import { onMount } from "svelte";
    import type { AuthSession } from "@supabase/supabase-js";
    import { supabase } from "./superbaseClient";
    import Leaderboard from "./Leaderboard.svelte";

    export let session: AuthSession;

    let loading = false
    let username: string | null = null

    onMount(() => {
        getProfile()
    })

    const getProfile = async () => {
        try {
        loading = true
        const { user } = session

        const { data, error, status } = await supabase
            .from('profiles')
            .select('username')
            .eq('id', user.id)
            .single()

        if (error && status !== 406) throw error

        if (data) {
            username = data.username
        }
        } catch (error) {
        if (error instanceof Error) {
            alert(error.message)
        }
        } finally {
        loading = false
        }
    }
</script>

<section>
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <header class="max-w-screen-md mb-8 flex justify-between">
            <h2>Hey {username}!</h2>
        </header>

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
  