<script lang="ts">
	import { onMount } from 'svelte'
	import { supabase } from '../../lib/superbaseClient'
	import type { AuthSession } from '@supabase/supabase-js'
	import Account from '../../lib/Account.svelte'
	import Auth from '../../lib/Auth.svelte'
	import EditAccount from '../../lib/EditAccount.svelte'

	let session: AuthSession | null
  
	onMount(() => {
	  supabase.auth.getSession().then(({ data }) => {
		session = data.session
	  })
  
	  supabase.auth.onAuthStateChange((_event, _session) => {
		session = _session
	  })
	})

    let loading = false
    let username: string | null = null

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
  </script>
  <div >
	{#if !session}
	<Auth />
	{:else}
		{#if !username}
			<EditAccount {session}/>
		{:else}
			<Account {session} />
		{/if}
	{/if}
</div>