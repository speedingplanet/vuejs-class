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
  props: {
    first: String,
    second: String,
    third: String,
  },
};
</script>

<style>
</style>
