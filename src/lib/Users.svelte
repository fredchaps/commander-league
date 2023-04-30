<script lang="ts">
    import { onMount } from "svelte";
    import { supabase } from "./superbaseClient";
	// import { dataTableHandler } from "@skeletonlabs/skeleton";
    
    let loading = false

    interface users {
        username: string;
    }

    let users: users[] = [];
  
    onMount(() => {
        getUsers()
    })
  
    const getUsers = async () => {
      try {
        loading = true
  
        const { data, error, status } = await supabase
          .from('profiles')
          .select('username')
  
        if (error && status !== 406) throw error
  
        if (data) {
        console.log(data)
        users = data;
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
  
<div>
<h1>users</h1>
<ul>
    {#each users as user}
    <li>{user.username}</li>
    {/each}
</ul>

</div>