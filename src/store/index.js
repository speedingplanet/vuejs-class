import { createStore } from 'vuex';
import { demosModule } from '../components/demos/demos-module';

export default createStore( {
  modules: {
    demos: demosModule,
  },
} );

/* Original
export default createStore( {
  state: {},
  mutations: {},
  actions: {},
  modules: {},
} );
*/
