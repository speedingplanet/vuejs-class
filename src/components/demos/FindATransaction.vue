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
              <button class="btn btn-primary">Find</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col">
        <h4>Transaction:</h4>
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
};
</script>

<style>
</style>
