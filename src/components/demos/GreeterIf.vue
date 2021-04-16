<template>
  <p>Greetings {{ firstName }}.</p>
  <div v-if="showAddress">
    <p>You are from:</p>
    <ul>
      <li>City: {{ address.city }}</li>
      <li>State: {{ address.state }}</li>
    </ul>
  </div>
  <div v-else>
    <p>I don't know where you live</p>
  </div>
  <button class="btn btn-success" @click="showAddress = !showAddress">
    Toggle
  </button>
</template>

<script>
export default {
  data() {
    return {
      showAddress: true,
      firstName: 'John',
      address: {
        city: 'Nutley',
        state: 'NJ',
      },
    };
  },
};
</script>

<style></style>
