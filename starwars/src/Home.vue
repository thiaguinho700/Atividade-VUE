<template>
    <div>
      <h1>Home</h1>
      <h2>Seus Favoritos</h2>
      <ul>
        <li v-for="p in favoritesStore.list" :key="p.name">
          <div>
            <strong>{{ p.name }}</strong>
            <div v-if="p.imageUrl">
              <img :src="p.imageUrl" alt="img" width="100" />
            </div>
            <div v-else>
              <em>Nenhuma imagem adicionada.</em>
            </div>
          </div>
        </li>
      </ul>
  
      <router-link to="/" class="btn">Voltar</router-link>
    </div>
  </template>
  
  <script>
  import { useFavoritesStore } from '../src/favorites';
  
  export default {
    setup() {
      const favoritesStore = useFavoritesStore();
      return { favoritesStore };
    }
  };
  </script>
  