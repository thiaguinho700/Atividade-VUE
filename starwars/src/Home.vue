<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-4">Favoritos</h1>

    <div class="grid">
      <div
        v-for="p in favoritesStore.list"
        :key="p.name"
        class="col-12 md:col-4"
      >
        <div
          class="flip-card"
          :class="{ flipped: p === flippedCard, expanded: p === expandedCard }"
          @click="toggleFlip(p)"
          @dblclick="expandCard(p)"
        >
          <div class="flip-card-inner">
            <!-- Frente -->
            <div
              class="flip-card-front surface-card border-round p-4 shadow-2 text-center"
            >
              <h2 class="text-xl font-bold mb-2">{{ p.name }}</h2>
              <img
                v-if="p.imageUrl"
                :src="p.imageUrl"
                alt="Foto"
                class="border-round mb-3"
                width="120"
                height="120"
                style="object-fit: cover"
              />
              <p class="text-500">Clique para ver mais</p>
            </div>

            <!-- Verso -->
            <div
              class="flip-card-back surface-200 border-round p-4 shadow-2 text-left"
            >
              <h3 class="text-lg font-semibold">{{ p.name }}</h3>
              <p><strong>Altura:</strong> {{ p.height }}</p>
              <p><strong>Peso:</strong> {{ p.mass }}</p>
              <p><strong>Nascimento:</strong> {{ p.birth_year }}</p>
              <p><strong>Gênero:</strong> {{ p.gender }}</p>
              <router-link
                :to="{
                  path: '/Home',
                  state: { favorites: favorites },
                }"
                class="btn"
              >
                Ir para Home
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-link to="/" class="p-button p-button-secondary mt-5"
      >Voltar</router-link
    >
  </div>
</template>

<script>
import { useFavoritesStore } from "../src/favorites.js";

export default {
  setup() {
    const favoritesStore = useFavoritesStore();
    console.log(favoritesStore.list);

    return { favoritesStore };
  },
  data() {
    return {
      flippedCard: null,
      expandedCard: null, // Variável para controlar a expansão do card
    };
  },
  methods: {
    toggleFlip(card) {
      this.flippedCard = this.flippedCard === card ? null : card;
    },
    expandCard(card) {
      // Lógica para expandir ou minimizar o card
      this.expandedCard = this.expandedCard === card ? null : card;
    },
  },
};
</script>

<style scoped>
/* Estilo para o cartão flip */
.flip-card {
  perspective: 1000px;
  cursor: pointer;
  width: 100%;
  height: 350px;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
  overflow: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

/* Efeito de expansão */
.flip-card.expanded {
  transform: scale(1.2); /* Aumenta o tamanho do card */
  z-index: 1000; /* Garante que o card expandido fique acima dos outros */
}

/* Adicionando sombra e arredondamento para os cartões */
.surface-card {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.surface-200 {
  background-color: #f9f9f9;
}

/* Estilos para o layout e texto */
.text-500 {
  color: #6b7280;
}
.text-3xl {
  font-size: 2rem;
}
.text-xl {
  font-size: 1.25rem;
}
.text-lg {
  font-size: 1.125rem;
}
.font-bold {
  font-weight: 700;
}
.font-semibold {
  font-weight: 600;
}

/* Adicionando responsividade */
@media (max-width: 768px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 769px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
