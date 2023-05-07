import * as server from '../entries/pages/dashboard/_layout.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/dashboard/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+layout.server.js";
export const imports = ["_app/immutable/entry/dashboard-layout.svelte.0f4396f3.js","_app/immutable/chunks/index.8015430d.js","_app/immutable/chunks/superbaseClient.4f021c0e.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/floating-ui.dom.browser.min.ea0482c6.js","_app/immutable/chunks/index.472fc310.js","_app/immutable/chunks/stores.f3a65562.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.3f362358.js"];
export const stylesheets = ["_app/immutable/assets/floating-ui.dom.browser.5e2abef4.css","_app/immutable/assets/ProgressBar.05e4960c.css"];
export const fonts = [];
