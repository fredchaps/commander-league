<script lang="ts">
	import { Table, tableMapperValues, type ModalSettings, type ModalComponent, type TableSource} from "@skeletonlabs/skeleton";
    // import { onMount } from "svelte";
    // import type { AuthSession } from "@supabase/supabase-js";
    // import { supabase } from "./superbaseClient";
    import { format } from 'date-fns'
    import { modalStore } from '@skeletonlabs/skeleton';
    import EditGame from "./EditGame.svelte";
    // export let session: AuthSession;
  
    let loading = false
    let gameData: any[] = [
            {
                id: 1,
                table: 1,
                created_at: format(Date.now(),'M/d'),
                active: true
            },
    ]

    const modalComponent: ModalComponent = {
        // Pass a reference to your custom component
        ref: EditGame,
        // Add the component properties as key/value pairs
        props: { background: 'bg-red-500' },
        // Provide a template literal for the default component slot
        slot: '<p>hello</p>'
    };

    const editGame: ModalSettings = {
        type: 'component',
        component: modalComponent,
        title: 'Edit Game'
    };
  
    // onMount(() => {
    //   getLeaderboard()
    // })

    // const getLeaderboard = () => {
    //     leaderboardData = 
    // }

    const setModalData = (row:CustomEvent) => {
        const editGame: ModalSettings = {
        type: 'component',
        component: modalComponent,
        title: 'Edit Game',
        meta: {
            game_id: row.detail[0]
        }
    };
        modalStore.trigger(editGame)
    }

    const tableSimple: TableSource = {
	// A list of heading labels.
	head: ['table', 'Date', 'Active'],
	// The data visibly shown in your table body UI.
	body: tableMapperValues(gameData, ['table', 'created_at', 'active']),
	// Optional: The data returned when interactive is enabled and a row is clicked.
	meta: tableMapperValues(gameData, ['id','table', 'created_at', 'active'])
};
  </script>

<section>
    <Table source={tableSimple} interactive on:selected={(row) => setModalData(row)}/>
</section>
  