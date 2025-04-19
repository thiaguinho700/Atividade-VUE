import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/Home.vue';
import Main from '../src/Main.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/Home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
