import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "../../../chunks/superbaseClient.js";
import { s as storePopup, M as Modal } from "../../../chunks/Modal.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  storePopup.set({
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow
  });
  return `<div>${validate_component(Modal, "Modal").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
