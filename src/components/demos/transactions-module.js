import { transactions, dao } from '@speedingplanet/rest-server';

export const txModule = {
  state: {
    tx: [],
    fetchingTx: false,
  },
  mutations: {
    loadTx( state, tx ) {
      state.fetchingTx = false;
      state.tx = tx;
    },
    requestingTx( state ) {
      state.fetchingTx = true;
    },
  },
  actions: {
    // commit, state, getters, dispatch
    resolveTx( { commit } ) {
      commit( 'loadTx', transactions );
    },
    async fetchTx( { commit } ) {
      try {
        commit( 'requestingTx' );
        const tx = await dao.findAllTransactions();
        commit( 'loadTx', tx );
      } catch ( error ) {}
    },
  },
  getters: {
    getTxById: state => id => {
      return state.tx.find( tx => tx.id === id );
    },
  },
};
