<script lang="ts">
	import { onMount } from 'svelte'
	import { supabase } from '../../lib/superbaseClient'
	import type { AuthSession } from '@supabase/supabase-js'
	import Account from '../../lib/Account.svelte'
	import Auth from '../../lib/Auth.svelte'
	import EditAccount from '../../lib/EditAccount.svelte'
  import Games from '../../lib/Games.svelte'

  let session: AuthSession | null
  
	// onMount(() => {
	//   supabase.auth.getSession().then(({ data }) => {
	// 	session = data.session
	//   })
  
	//   supabase.auth.onAuthStateChange((_event, _session) => {
	// 	session = _session
	//   })
	// })

  //   let loading = false
  //   let username: string | null = null

	// onMount(() => {
  //     getProfile()
  //   })
  
  //   const getProfile = async () => {
  //     try {
  //       loading = true
  
  //       const { data, error, status } = await supabase
  //         .from('profiles')
  //         .select('username')
  //         .eq('id', session?.user.id)
  //         .single()
  
  //       if (error && status !== 406) throw error
  
  //       if (data) {
  //         console.log(data)
  //         username = data.username
  //       }
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         alert(error.message)
  //       }
  //     } finally {
  //       loading = false
  //     }
  //   }
</script>

<div>
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <header class="max-w-screen-md mb-8 flex justify-between">
        <h2>Admin</h2>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-y-6">
      <div class="col-span-1">
        <div class="bounty-card">
          <button class="btn variant-filled-primary">Create new game</button>
        </div>
      </div>
      <div class="col-span-2">
        <Games/>
      </div>
    </div>
</div>
</div>