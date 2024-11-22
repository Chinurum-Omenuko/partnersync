import { writable } from 'svelte/store';
import { db } from './firebase';

function createFirestoreStore(collectionName) {
  const { subscribe, set } = writable([]);

  async function fetchData() {
    try {
      const snapshot = await fetch('/api/courses');
      const courses = await snapshot.json();
      set(courses);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData();

  return {
    subscribe,
    refresh: fetchData
  };
}

export default createFirestoreStore;
