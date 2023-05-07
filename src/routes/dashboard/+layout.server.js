import { supabase } from '../../lib/superbaseClient'

/**
 * @type {import("@supabase/gotrue-js").Session | null}
 */
let session;

export async function load() {

    // Get our logged user
    supabase.auth.getSession().then(({ data }) => {
        session = data.session
    })


    // Check if the user is logged
    if (session === null) {

    // Redirect if no logged in
    return { props: {}, redirect: { destination: "/login" } };
    }

    // If logged return the user
    return { props: { session } };
  }