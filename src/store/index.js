import { createStore } from 'vuex';
import { demosModule } from '../components/demos/demos-module';
import { txModule } from '../components/demos/transactions-module';

const store = createStore( {
  modules: {
    demos: demosModule,
    tx: txModule,
  },
} );

store.dispatch( 'fetchTx' );
export default store;

/*
// Original
export default createStore( {
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {},
} );
*/
