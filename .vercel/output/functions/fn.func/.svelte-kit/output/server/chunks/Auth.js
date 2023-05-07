import { c as create_ssr_component, b as add_attribute, e as escape } from "./index2.js";
import "./superbaseClient.js";
const Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  return `<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"><div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"><div class="p-6 space-y-4 md:space-y-6 sm:p-8"><h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">Sign in with your email below
			</h1>
			<form class="space-y-4 md:space-y-6"><div><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
					<input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com"${add_attribute("value", email, 0)}></div>
				
				<button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><span>${escape("Send magic link")}</span></button></form></div></div></div>`;
});
export {
  Auth as A
};
