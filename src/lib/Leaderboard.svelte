<script lang="ts">
	import { Table, tableMapperValues, type TableSource } from "@skeletonlabs/skeleton";
    // import { onMount } from "svelte";
    // import type { AuthSession } from "@supabase/supabase-js";
    // import { supabase } from "./superbaseClient";
  
    // export let session: AuthSession;

    interface leaderboard {
        name: string,
        points: number,
        wins: number
    }
  
    let loading = false
    let leaderboardData: leaderboard[] = [
            {
                name: 'patrick',
                points: 2,
                wins: 0
            },
            {
                name: 'fred',
                points: 4,
                wins: 1
            }
        ]
  
    // onMount(() => {
    //   getLeaderboard()
    // })

    // const getLeaderboard = () => {
    //     leaderboardData = 
    // }

    const tableSimple: TableSource = {
	// A list of heading labels.
	head: ['name', 'Points', 'Wins'],
	// The data visibly shown in your table body UI.
	body: tableMapperValues(leaderboardData, ['name', 'points', 'wins']),
	// Optional: The data returned when interactive is enabled and a row is clicked.
	meta: tableMapperValues(leaderboardData, ['name', 'points', 'wins'])
};
  </script>

<section>
    <Table source={tableSimple} />
</section>
  