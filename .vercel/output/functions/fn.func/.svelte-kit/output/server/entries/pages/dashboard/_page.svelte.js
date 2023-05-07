import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "../../../chunks/superbaseClient.js";
import { A as Auth } from "../../../chunks/Auth.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${`${validate_component(Auth, "Auth").$$render($$result, {}, {}, {})}`}</div>`;
});
export {
  Page as default
};
