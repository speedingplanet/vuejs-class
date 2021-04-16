import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Demos from '../views/Demos.vue';
import People from '../views/People.vue';

const routes = [
  {
    path: '/demos',
    name: 'Demos',
    component: Demos,
  },
  {
    path: '/people',
    name: 'People',
    component: People,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  routes,
} );

export default router;
