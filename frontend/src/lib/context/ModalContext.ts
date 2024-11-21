import { writable } from 'svelte/store';

export const modalStore = writable({
    signIn: false,
    signUp: false,
    registration: false
});

export function toggleSignInModal() {
    modalStore.update(state => ({ ...state, signIn: !state.signIn }));
    console.log("toggled")
}

export function toggleSignUpModal() {
    modalStore.update(state => ({ ...state, signUp: !state.signUp }));
}
export function toggleRegistrationModal() {
    modalStore.update(state => ({ ...state, registration: !state.registration }));
}

export function openSignInModal() {
    modalStore.update(state => ({ ...state, signIn: true }));
}

export function openSignUpModal() {
    modalStore.update(state => ({ ...state, signUp: true }));
}
export function openRegistrationModal() {
    modalStore.update(state => ({ ...state, registration: true }));
}

export function closeAllModals() {
    modalStore.set({ signIn: false, signUp: false, registration: false});
}