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
              <button className="btn btn-danger" @click="decrement">
                <span role="img" aria-label="heavy minus sign"> ➖ </span>
                <br />
                <span>Decrement</span>
              </button>
              &nbsp;
              <button className="btn btn-success" @click="increment">
                <span role="img" aria-label="heavy plus sign"> ➕ </span>
                <br />
                <span>Increment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.demos.counter;
    },
  },
  methods: {
    increment() {
      this.$store.commit( 'increment' );
    },
    decrement() {
      this.$store.commit( 'decrement' );
    },
  },
};
</script>

<style>
</style>
