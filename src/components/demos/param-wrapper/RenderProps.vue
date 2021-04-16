<template>
  <div class="row">
    <div class="col">
      <h3>Render Props</h3>
      <p>Props list:</p>
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
