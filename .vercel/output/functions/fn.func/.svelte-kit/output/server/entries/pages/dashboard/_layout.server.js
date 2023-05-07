import { s as supabase } from "../../../chunks/superbaseClient.js";
let session;
async function load() {
  supabase.auth.getSession().then(({ data }) => {
    session = data.session;
  });
  if (session === null) {
    return { props: {}, redirect: { destination: "/login" } };
  }
  return { props: { session } };
}
export {
  load
};
