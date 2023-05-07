<script lang="ts">
	import { onMount } from 'svelte'
	import { supabase } from '../../../lib/superbaseClient'
	import type { AuthSession } from '@supabase/supabase-js'
	// import Account from '../../../lib/Account.svelte'
	// import Auth from '../../../lib/Auth.svelte'
	// import EditAccount from '../../../lib/EditAccount.svelte'
  import Games from '../../../lib/Games.svelte'
  import { modalStore, toastStore } from '@skeletonlabs/skeleton';
  import type { ModalSettings, ToastSettings } from '@skeletonlabs/skeleton';

  let session: AuthSession | null
  let username: string | null = null
  let loading = false
  
  supabase.auth.onAuthStateChange((_event, _session) => {
  session = _session
  })

	onMount(() => {
      getProfile()
    })
  
    const getProfile = async () => {
      try {
        loading = true
  
        const { data, error, status } = await supabase
          .from('profiles')
          .select('username')
          .eq('id', session?.user.id)
          .single()
  
        if (error && status !== 406) throw error
  
        if (data) {
          console.log(data)
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

  const handleNewGames = async () => {
      try {
        loading = true
  
        const { data, error, status } = await supabase
          .rpc('handle_new_games')
  
        if (error && status !== 406) {
            toastStore.trigger({
            message: 'Error',
            background: 'variant-filled-error'
          })
        }

        if (!error) {
          toastStore.trigger({
            message: 'Success',
            background: 'variant-filled-success'
          })
        }
  
        if (data) {
          console.log(data)
        }
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        loading = false
      }
    }

  const confirm: ModalSettings = {
    type: 'confirm',
    // Data
    title: 'Ready to start',
    body: 'Are you sure you wish to proceed?',
    // TRUE if confirm pressed, FALSE if cancel pressed
    response: (r: boolean) => r && handleNewGames(),
  };

</script>

<div>
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <header class="max-w-screen-md mb-8 flex justify-between">
        <h2>Admin</h2>
    </header>
    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-y-6">
      <div class="col-span-1">
        <div class="bounty-card">
          <button class="btn variant-filled-primary" on:click={() => modalStore.trigger(confirm)}>Create new game</button>
        </div>
      </div>
      <div class="col-span-2">
        <Games/>
      </div>
    </div>
</div>
</div>