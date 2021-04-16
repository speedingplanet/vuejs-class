<template>
  <div class="row">
    <div class="col">
      <h3>Route Params</h3>
      <p>Params list:</p>
      <ul>
        <li>First: {{ first || '' }}</li>
        <li>Second: {{ second || '' }}</li>
        <li>Third: {{ third || '' }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: this.$route.params.first,
      second: this.$route.params.second,
      third: this.$route.params.third,
    };
  },
};
</script>

<style>
</style>
