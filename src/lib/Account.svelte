<script lang="ts">
    import { onMount } from "svelte";
    import type { AuthSession } from "@supabase/supabase-js";
    import { supabase } from "./superbaseClient";
  
    export let session: AuthSession;
  
    let loading = false
    let username: string | null = null
    let website: string | null = null
    let avatarUrl: string | null = null
  
    onMount(() => {
      getProfile()
    })
  
    const getProfile = async () => {
      try {
        loading = true
        const { user } = session
  
        const { data, error, status } = await supabase
          .from('profiles')
          .select('username, website, avatar_url')
          .eq('id', user.id)
          .single()
  
        if (error && status !== 406) throw error
  
        if (data) {
          console.log(data)
          username = data.username
          website = data.website
          avatarUrl = data.avatar_url
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
        <div class="max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">hello</h2>
            <p class="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.</p>
            <input class="input">
        </div>
    </div>
</section>
  