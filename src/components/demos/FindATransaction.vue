<template>
  <section class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">Find a transaction</div>
          <div class="card-body">
            <form>
              <label for="txId" class="form-label">Transaction id:</label>
              <input
                id="txId"
                type="text"
                class="form-control"
                v-model="txId"
              />
              <br />
              <button type="button" class="btn btn-primary">Find</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col">
        <h4>Transaction:</h4>
        <div v-if="foundTx">
          {{ JSON.stringify(foundTx) }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      txId: '0',
    };
  },
  computed: {
    foundTx() {
      /*
      let transactions = this.$store.state.tx.items;
      return transactions.find( ( tx ) => {
        if ( tx.id === this.txId ) {
          return true;
        }
      } );
      */
      return this.$store.getters.getTxById( this.txId );
    },
  },
};
</script>

<style>
</style>
