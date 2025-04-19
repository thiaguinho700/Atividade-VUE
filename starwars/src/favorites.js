// src/favorites.js
import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    list: []
  }),
  actions: {
    add(person) {
      if (!this.list.some(p => p.name === person.name)) {
        this.list.push({ ...person, imageUrl: '' }); // inicializa sem imagem
      }
    },
    updateImage(name, url) {
      const fav = this.list.find(p => p.name === name);
      if (fav) fav.imageUrl = url;
    }
  }
});
