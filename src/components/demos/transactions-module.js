import { dao } from '@speedingplanet/rest-server';

export const txModule = {
  state: {
    items: [],
    fetchingTx: false,
    error: null,
  },
  mutations: {
    requestingTx( state ) {
      state.fetchingTx = true;
      state.error = null;
    },
    successLoadTx( state, tx ) {
      state.fetchingTx = false;
      state.items = tx;
    },
    failedLoadTx( state, error ) {
      state.fetchingTx = false;
      state.error = error;
    },
  },
  actions: {
    // commit, state, getters, dispatch
    async fetchTx( { commit } ) {
      try {
        commit( 'requestingTx' );
        const response = await dao.findAllTransactions();
        commit( 'successLoadTx', response.data );
      } catch ( error ) {
        commit( 'failedLoadTx', error );
      }
    },
  },
  getters: {
    /*
    getTxById: state => id => {
      return state.items ? state.items.find( tx => tx.id === id ) : null;
    },
    */
    getFirstTx: function( state ) {
      return state.items[0];
    },
    getTxById: function( state ) {
      return function( id ) {
        if ( !state.items ) {
          return null;
        } else {
          let foundTx = state.items.find( tx => tx.id === id );
          return foundTx;
        }
      };
    },
  },
};
