<template>
  <div>
    <router-link
      :to="{
        path: '/Home',
        state: { favorites: favorites },
      }"
      class="btn"
    >
      Ir para Home
    </router-link>
    <br />

    <button @click="fetchData">Buscar Pessoas</button>

    <ul v-if="people.length">
      <li v-for="person in people" :key="person.name">
        {{ person.name }}
        <input type="checkbox" @change="addToFavorites(person)" />
      </li>
    </ul>

    <h2>Favoritos</h2>
    <ul v-if="favoritesStore.list.length">
      <li v-for="fav in favoritesStore.list" :key="fav.name">
        <div>
          <strong>{{ fav.name }}</strong>
          <input
            type="text"
            placeholder="URL da imagem"
            v-model="fav.imageUrl"
            @change="updateImage(fav.name, fav.imageUrl)"
          />
          <img v-if="fav.imageUrl" :src="fav.imageUrl" alt="img" width="80" />
        </div>
      </li>
    </ul>

    <router-view />
  </div>
</template>

<script>
import axios from 'axios';
import { useFavoritesStore } from '../src/favorites.js';
import { watch } from 'vue';

export default {
  data() {
    return {
      people: []
    };
  },
  setup() {
    const favoritesStore = useFavoritesStore();

    // Watch para reatividade no v-model + store
    watch(
      () => favoritesStore.list,
      (newList) => {
        // Trigger update quando a lista mudar, se necessário
      },
      { deep: true }
    );

    return { favoritesStore };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("https://swapi.py4e.com/api/people/");
        this.people = response.data.results;
      } catch (error) {
        console.error("Erro ao buscar dados:", error.message, error);
      }
    },
    addToFavorites(person) {
      this.favoritesStore.add(person);
    },
    updateImage(name, url) {
      this.favoritesStore.updateImage(name, url);
    }
  }
};
</script>
