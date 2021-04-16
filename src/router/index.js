import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Demos from '../views/Demos.vue';
import People from '../views/People.vue';
import BasicComponent from '../components/demos/BasicComponent.vue';
import DemoButton from '../components/demos/DemoButton.vue';
import DemoDataButton from '../components/demos/DemoDataButton.vue';
import GreeterDefaults from '../components/demos/GreeterDefaults.vue';
import GreeterIf from '../components/demos/GreeterIf.vue';
import GreeterShow from '../components/demos/GreeterShow.vue';

const routes = [
  {
    path: '/demos',
    name: 'Demos',
    component: Demos,
    children: [
      {
        path: 'basic-component',
        component: BasicComponent,
      },
      {
        path: 'event-handling',
        component: DemoButton,
      },
      {
        path: 'event-handling-data',
        component: DemoDataButton,
      },
      {
        path: 'greeter',
        component: GreeterDefaults,
      },
      {
        path: 'greeter-if',
        component: GreeterIf,
      },
      {
        path: 'greeter-show',
        component: GreeterShow,
      },
    ],
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
