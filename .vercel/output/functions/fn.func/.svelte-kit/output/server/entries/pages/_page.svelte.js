import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import "../../chunks/superbaseClient.js";
const Homepage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="theme-background"><div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6"><div class="relative pt-36 ml-auto"><div class="lg:w-2/3 text-center mx-auto"><h1 class="text-surface-900 dark:text-primary-400 text-8xl xl:text-9xl unstyled theme-heading">Commander League
				</h1>
				<p class="mt-8 text-gray-700 dark:text-gray-300">A progressive draft format for Commander
				</p>

				<div class="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between"><div class="text-left"><h6 class="text-lg font-semibold text-gray-700 dark:text-white">Night 1</h6>
						<p class="my-2 text-gray-200">Draft 3 packs from</p>
						<ul class="text-gray-400"><li>Commander Legends</li></ul></div>
					<div class="text-left"><h6 class="text-lg font-semibold text-gray-700 dark:text-white">Nights 2-9</h6>
						<p class="my-2 text-gray-200">Draft 1 pack each game from</p>
						<ul class="text-gray-400"><li>Dominaria Remastered</li>
							<li>Adventures in the Forgotten Realms</li>
							<li>Born of the Gods</li>
							<li>Core Set 2019</li>
							<li>Core Set 2020</li>
							<li>Core Set 2021</li>
							<li>Dominaria</li>
							<li>Dominaria United</li>
							<li>Dragon&#39;s Maze</li>
							<li>Gatecrash</li>
							<li>Hour of Devastation</li>
							<li>Innistrad: Crimson Vow</li>
							<li>Innistrad: Midnight Hunt</li>
							<li>Ixalan</li>
							<li>Journey into Nyx</li>
							<li>Kaladesh</li>
							<li>Kaldheim Draft</li>
							<li>Kamigawa: Neon Dynasty</li>
							<li>Khans of Tarkir</li>
							<li>Streets of New Capenna</li>
							<li>Strixhaven: School of Mages</li>
							<li>Theros Beyond Death</li>
							<li>Theros</li>
							<li>Throne of Eldraine</li>
							<li>Zendikar Rising</li></ul></div>
					<div class="text-left"><h6 class="text-lg font-semibold text-gray-700 dark:text-white">Night 10</h6>
						<p class="my-2 text-gray-200">Final Draft</p>
						<ul class="text-gray-400"><li>Commander Masters</li></ul></div></div></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Homepage, "Homepage").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
