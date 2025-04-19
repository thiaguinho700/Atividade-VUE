<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-3">Home</h1>
    <h2 class="text-xl font-medium mb-4">Seus Favoritos</h2>

    <ul class="grid gap-4">
      <li
        v-for="p in favoritesStore.list"
        :key="p.name"
        class="surface-card border-round shadow-2 p-3"
      >
        <div class="flex flex-column align-items-center text-center">
          <strong class="mb-2 text-lg">{{ p.name }}</strong>

          <div v-if="p.imageUrl" class="mb-2">
            <img
              :src="p.imageUrl"
              alt="img"
              class="border-round shadow-1"
              width="150"
              height="150"
              style="object-fit: cover"
            />
          </div>

          <div v-else class="text-500 italic mb-2">
            Nenhuma imagem adicionada.
          </div>
        </div>
      </li>
    </ul>

    <div class="mt-5">
      <router-link to="/" class="p-button p-button-outlined"
        >Voltar</router-link
      >
    </div>
  </div>
</template>

<script>
import { useFavoritesStore } from "../src/favorites";

export default {
  setup() {
    const favoritesStore = useFavoritesStore();
    return { favoritesStore };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  transition: transform 0.2s ease;
}

li:hover {
  transform: scale(1.02);
}
</style>
