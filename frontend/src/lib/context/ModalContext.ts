import { writable } from 'svelte/store';

export const modalStore = writable({
    signIn: false,
    signUp: false
});

export function toggleSignInModal() {
    modalStore.update(state => ({ ...state, signIn: !state.signIn }));
}

export function toggleSignUpModal() {
    modalStore.update(state => ({ ...state, signUp: !state.signUp }));
}

export function openSignInModal() {
    modalStore.update(state => ({ ...state, signIn: true }));
}

export function openSignUpModal() {
    modalStore.update(state => ({ ...state, signUp: true }));
}

export function closeAllModals() {
    modalStore.set({ signIn: false, signUp: false });
}