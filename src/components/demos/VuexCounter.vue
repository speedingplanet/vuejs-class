<template>
  <section class="container">
    <div class="row">
      <div class="col">
        <div className="card">
          <div className="card-header bg-secondary">Vuex-enabled counter</div>
          <div className="card-body">
            <div className="text-center mb-4">
              <h3>{{ counter }}</h3>
            </div>
            <div className="text-center">
              <button className="btn btn-danger" @click="subtractOne">
                <span role="img" aria-label="heavy minus sign"> ➖ </span>
                <br />
                <span>Decrement</span>
              </button>
              &nbsp;
              <button className="btn btn-success" @click="addOne">
                <span role="img" aria-label="heavy plus sign"> ➕ </span>
                <br />
                <span>Increment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form>
              <label for="amount" class="form-label">Amount:</label>
              <input
                type="number"
                id="amount"
                v-model="amount"
                class="form-control"
              />
              <div class="mt-2">
                <button
                  type="button"
                  @click="handleAdd"
                  class="btn btn-warning"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      amount: 0,
    };
  },
  computed: {
    counter() {
      return this.$store.state.demos.counter;
    },
  },
  methods: {
    /*
    increment() {
      this.$store.commit( 'increment' );
    },
    decrement() {
      this.$store.commit( 'decrement' );
    },
    */

    handleAdd() {
      // if ( isNaN( amount ) ) amount = 5;
      if ( isNaN( this.amount ) ) this.amount = 0;
      this.$store.commit( 'addVal', Number( this.amount ) );
    },
    // ...mapMutations( [ 'increment', 'decrement' ] ),
    ...mapMutations( { addOne: 'increment', subtractOne: 'decrement' } ),
  },
};
</script>

<style>
</style>
