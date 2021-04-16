<template>
  <p>Greetings {{ firstName }}.</p>
  <div>
    <p>You are from:</p>
    <ul v-show="address">
      <li>City: {{ address.city }}</li>
      <li>State: {{ address.state }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    firstName: String,
    address: Object,
  },
};
</script>

<style></style>
