import { a as assign, i as is_function, c as create_ssr_component, e as escape, b as add_attribute, d as compute_slots, f as subscribe, g as each, v as validate_component } from "../../chunks/index2.js";
import "../../chunks/superbaseClient.js";
import { s as storePopup, M as Modal } from "../../chunks/Modal.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../chunks/index.js";
import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
if (typeof window !== "undefined") {
  document.documentElement.classList.add("dark");
}
const toastDefaults = { message: "Missing Toast Message", autohide: true, timeout: 5e3 };
function randomUUID() {
  const random = Math.random();
  return Number(random).toString(32);
}
function handleAutoHide(toast) {
  if (toast.autohide === true) {
    return setTimeout(() => {
      toastStore.close(toast.id);
    }, toast.timeout);
  }
}
function toastService() {
  const { subscribe: subscribe2, set, update } = writable([]);
  return {
    subscribe: subscribe2,
    /** Add a new toast to the queue. */
    trigger: (toast) => update((tStore) => {
      const id = randomUUID();
      if (toast && toast.callback)
        toast.callback({ id, status: "queued" });
      const tMerged = { ...toastDefaults, ...toast, id };
      tMerged.timeoutId = handleAutoHide(tMerged);
      tStore.push(tMerged);
      return tStore;
    }),
    /** Remove first toast in queue */
    close: (id) => update((tStore) => {
      if (tStore.length > 0) {
        const index = tStore.findIndex((t) => t.id === id);
        const selectedToast = tStore[index];
        if (selectedToast) {
          if (selectedToast.callback)
            selectedToast.callback({ id, status: "closed" });
          if (selectedToast.timeoutId)
            clearTimeout(selectedToast.timeoutId);
          tStore.splice(index, 1);
        }
      }
      return tStore;
    }),
    /** Remove all toasts from queue */
    clear: () => set([])
  };
}
const toastStore = toastService();
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function crossfade(_a) {
  var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
  const to_receive = /* @__PURE__ */ new Map();
  const to_send = /* @__PURE__ */ new Map();
  function crossfade2(from_node, node, params) {
    const { delay = 0, duration = (d2) => Math.sqrt(d2) * 30, easing = cubicOut } = assign(assign({}, defaults), params);
    const from = from_node.getBoundingClientRect();
    const to = node.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const dw = from.width / to.width;
    const dh = from.height / to.height;
    const d = Math.sqrt(dx * dx + dy * dy);
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;
    const opacity = +style.opacity;
    return {
      delay,
      duration: is_function(duration) ? duration(d) : duration,
      easing,
      css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
    };
  }
  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, node);
      return () => {
        if (counterparts.has(params.key)) {
          const other_node = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossfade2(other_node, node, params);
        }
        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }
  return [
    transition(to_send, to_receive, false),
    transition(to_receive, to_send, true)
  ];
}
const cBase = "flex flex-col";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0)
    $$bindings.gridColumns(gridColumns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0)
    $$bindings.regionRowMain(regionRowMain);
  if ($$props.regionRowHeadline === void 0 && $$bindings.regionRowHeadline && regionRowHeadline !== void 0)
    $$bindings.regionRowHeadline(regionRowHeadline);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0)
    $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0)
    $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`;
  classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
  classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
  classesSlotLead = `${cSlotLead} ${slotLead}`;
  classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
  classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="app-bar" role="toolbar"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}>
	<div class="${"app-bar-row-main " + escape(classesRowMain, true)}">
		${$$slots.lead ? `<div class="${"app-bar-slot-lead " + escape(classesSlotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
		
		<div class="${"app-bar-slot-default " + escape(classesSlotDefault, true)}">${slots.default ? slots.default({}) : ``}</div>
		
		${$$slots.trail ? `<div class="${"app-bar-slot-trail " + escape(classesSlotTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>
	
	${$$slots.headline ? `<div class="${"app-bar-row-headline " + escape(classesRowHeadline, true)}">${slots.headline ? slots.headline({}) : ``}</div>` : ``}</div>`;
});
const cWrapper = "flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none";
const cSnackbar = "flex flex-col space-y-2";
const cToast = "flex justify-between items-center pointer-events-auto";
const cToastActions = "flex items-center space-x-2";
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesWrapper;
  let classesSnackbar;
  let classesToast;
  let filteredToasts;
  let $toastStore, $$unsubscribe_toastStore;
  $$unsubscribe_toastStore = subscribe(toastStore, (value) => $toastStore = value);
  let { position = "b" } = $$props;
  let { max = 3 } = $$props;
  let { duration = 250 } = $$props;
  let { background = "variant-filled-secondary" } = $$props;
  let { width = "max-w-[640px]" } = $$props;
  let { color = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-x-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-lg" } = $$props;
  let { zIndex = "z-[888]" } = $$props;
  let { buttonAction = "btn variant-filled" } = $$props;
  let { buttonDismiss = "btn-icon btn-icon-sm variant-filled" } = $$props;
  let { buttonDismissLabel = "✕" } = $$props;
  let cPosition;
  let cAlign;
  let animAxis = { x: 0, y: 0 };
  switch (position) {
    case "t":
      cPosition = "justify-center items-start";
      cAlign = "items-center";
      animAxis = { x: 0, y: -100 };
      break;
    case "b":
      cPosition = "justify-center items-end";
      cAlign = "items-center";
      animAxis = { x: 0, y: 100 };
      break;
    case "l":
      cPosition = "justify-start items-center";
      cAlign = "items-start";
      animAxis = { x: -100, y: 0 };
      break;
    case "r":
      cPosition = "justify-end items-center";
      cAlign = "items-end";
      animAxis = { x: 100, y: 0 };
      break;
    case "tl":
      cPosition = "justify-start items-start";
      cAlign = "items-start";
      animAxis = { x: -100, y: 0 };
      break;
    case "tr":
      cPosition = "justify-end items-start";
      cAlign = "items-end";
      animAxis = { x: 100, y: 0 };
      break;
    case "bl":
      cPosition = "justify-start items-end";
      cAlign = "items-start";
      animAxis = { x: -100, y: 0 };
      break;
    case "br":
      cPosition = "justify-end items-end";
      cAlign = "items-end";
      animAxis = { x: 100, y: 0 };
      break;
  }
  crossfade({
    duration: (d) => Math.sqrt(d * duration),
    fallback(node) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;
      return {
        duration,
        easing: cubicInOut,
        css: (t, u) => `
					transform: ${transform} scale(${t}) translate(${u * animAxis.x}%, ${u * animAxis.y}%);
					opacity: ${t}
				`
      };
    }
  });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.buttonAction === void 0 && $$bindings.buttonAction && buttonAction !== void 0)
    $$bindings.buttonAction(buttonAction);
  if ($$props.buttonDismiss === void 0 && $$bindings.buttonDismiss && buttonDismiss !== void 0)
    $$bindings.buttonDismiss(buttonDismiss);
  if ($$props.buttonDismissLabel === void 0 && $$bindings.buttonDismissLabel && buttonDismissLabel !== void 0)
    $$bindings.buttonDismissLabel(buttonDismissLabel);
  classesWrapper = `${cWrapper} ${cPosition} ${zIndex} ${$$props.class || ""}`;
  classesSnackbar = `${cSnackbar} ${cAlign} ${padding}`;
  classesToast = `${cToast} ${width} ${color} ${padding} ${spacing} ${rounded} ${shadow}`;
  filteredToasts = Array.from($toastStore).slice(0, max);
  $$unsubscribe_toastStore();
  return `${$toastStore.length ? `
	<div class="${"snackbar-wrapper " + escape(classesWrapper, true)}" data-testid="snackbar-wrapper">
		<div class="${"snackbar " + escape(classesSnackbar, true)}">${each(filteredToasts, (t, i) => {
    return `<div>
					<div class="${"toast " + escape(classesToast, true) + " " + escape(t.background ?? background, true) + " " + escape(t.classes, true)}" role="alert" aria-live="polite" data-testid="toast"><div class="text-base"><!-- HTML_TAG_START -->${t.message}<!-- HTML_TAG_END --></div>
						<div class="${"toast-actions " + escape(cToastActions, true)}">${t.action ? `<button${add_attribute("class", buttonAction, 0)}><!-- HTML_TAG_START -->${t.action.label}<!-- HTML_TAG_END --></button>` : ``}
							<button${add_attribute("class", buttonDismiss, 0)}>${escape(buttonDismissLabel)}</button>
						</div></div>
				</div>`;
  })}</div></div>` : ``}`;
});
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
	${validate_component(Toast, "Toast").$$render($$result, { position: "t" }, {}, {})}
	<nav class="sticky top-0 w-full">${validate_component(AppBar, "AppBar").$$render(
    $$result,
    {
      background: "none",
      gridcolumns: "grid-cols-3",
      slotdefault: "place-self-center",
      slottrail: "place-content-end"
    },
    {},
    {
      trail: () => {
        return `${`<a class="btn" href="/dashboard">Sign In</a>`}
			`;
      },
      lead: () => {
        return `<a class="btn" href="/">RBN</a>`;
      }
    }
  )}</nav>
	${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
