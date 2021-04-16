<template>
  <p>Greetings {{ firstName }}.</p>
  <div v-if="address">
    <p>You are from:</p>
    <ul>
      <li>City: {{ address.city }}</li>
      <li>State: {{ address.state }}</li>
    </ul>
  </div>
  <div v-else>
    <p>I don't know where you live</p>
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
