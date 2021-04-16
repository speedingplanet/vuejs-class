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
import ComponentFetch from '../components/demos/ComponentFetch.vue';
import ListData from '../components/demos/ListData.vue';
import FindATransaction from '../components/demos/FindATransaction.vue';
import VuexCounter from '../components/demos/VuexCounter.vue';
import RouteParams from '../components/demos/RouteParams';
import RoutedWrapper from '../components/demos/param-wrapper/RoutedWrapper';
import RouteParamsProps from '../components/demos/RouteParamsProps';

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
      {
        path: 'component-fetch',
        component: ComponentFetch,
      },
      {
        path: 'vuex-counter',
        component: VuexCounter,
      },
      {
        path: 'find-tx',
        component: FindATransaction,
      },
      {
        path: 'list-data',
        component: ListData,
      },
      {
        path: 'routed-wrapper/:first/:second/:third',
        component: RoutedWrapper,
      },
      {
        path: 'route-params/:first/:second/:third',
        component: RouteParams,
      },
      {
        // <RouteParamsProps first="..." second="..." third="..." />
        path: 'route-params-props/:first/:second/:third',
        component: RouteParamsProps,
        props: true,
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
