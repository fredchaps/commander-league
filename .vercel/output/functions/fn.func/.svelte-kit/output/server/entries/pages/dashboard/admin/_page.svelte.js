import { c as create_ssr_component, g as each, e as escape, v as validate_component } from "../../../../chunks/index2.js";
import { s as supabase } from "../../../../chunks/superbaseClient.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const Games = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gameData = [];
  return `<section>
	<div class="table-container">
		<table class="table table-hover"><thead><tr><th>Table</th>
					<th>Date</th></tr></thead>
			<tbody>${each(gameData, (row, i) => {
    return `<tr><td>${escape(row.game_table)}</td>
						<td>${escape(row.created_at)}</td>
					</tr>`;
  })}</tbody></table></div>
	</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  supabase.auth.onAuthStateChange((_event, _session) => {
  });
  return `<div><div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"><header class="max-w-screen-md mb-8 flex justify-between"><h2>Admin</h2></header>
		<div class="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-y-6"><div class="col-span-1"><div class="bounty-card"><button class="btn variant-filled-primary">Create new game</button></div></div>
			<div class="col-span-2">${validate_component(Games, "Games").$$render($$result, {}, {}, {})}</div></div></div></div>`;
});
export {
  Page as default
};
