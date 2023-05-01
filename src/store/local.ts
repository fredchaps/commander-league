import { writable } from 'svelte/store'

// Get the value out of storage on load.
const stored = localStorage.theme
// or localStorage.getItem('content')

// Set the stored value or a sane default.
export const content = writable(stored || 'light')

// Anytime the store changes, update the local storage value.
content.subscribe((value) => localStorage.content = value)

// or localStorage.setItem('content', value)
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
