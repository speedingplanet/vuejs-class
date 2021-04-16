<template>
  <p>Greetings {{ firstName }}.</p>
  <ul>
    <li>You are from:</li>
    <li>City: {{ address.city }}</li>
    <li>State: {{ address.state }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    firstName: String,
    address: {
      type: Object,
      default() {
        return {
          city: 'Default city',
          state: 'Default state'
        };
      }
    }
  }
};
</script>

<style></style>
