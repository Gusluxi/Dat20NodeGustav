import { writable } from "svelte/store";

export const supermarket = writable({
    tomatos: 55,
    milk: 120,
    candy: 14,
    apples: 60
});
