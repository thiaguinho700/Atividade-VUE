<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <ul v-if="people.length">
      <li v-for="person in people" :key="person.name">
        {{ person.name }}
        <!-- <button @click="addToFavorites(person)">Add to Favorites</button> -->
        <input @click="addToFavorites(person)" va type="checkbox">
      </li>
    </ul>
    
    <h2>Favorites</h2>
    <ul v-if="favorites.length">
      <li v-for="fav in favorites" :key="fav.name">{{ fav.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      people: [],
      favorites: []
    };
  },
  methods: {
    fetchData() {
      axios.get("https://swapi.dev/api/people")
        .then(response => {
          this.people = response.data.results;
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    },
    addToFavorites(person) {
      if (!this.favorites.some(fav => fav.name === person.name)) {
        this.favorites.push(person);
      }
    }
  }
};
</script>
