<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <ul v-if="people.length">
      <li v-for="person in people" :key="person.name">
        {{ person.name }}
        <!-- <button @click="addToFavorites(person)">Add to Favorites</button> -->
        <input @click="addToFavorites(person)" va type="checkbox" />
      </li>
    </ul>

    <h2>Favorites</h2>
    <ul v-if="favorites.length">
      <li v-for="fav in favorites" :key="fav.name">{{ fav.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      people: [],
      favorites: [],
    };
  },
  
  methods: {
    async fetchData() {
      await axios
        .get("http://swapi.co/api/people")
        .then((response) => {
          console.log("Dados recebidos:", response.data);
          this.people = response.data.results;
        })
        .catch((error) => {
          console.error("Erro ao buscar dados:", error.message, error);
        });
    },
    addToFavorites(person) {
      if (!this.favorites.some((fav) => fav.name === person.name)) {
        this.favorites.push(person);
      }
    },
  },
};
</script>
