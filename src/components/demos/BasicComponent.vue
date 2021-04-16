<template>
  <section>
    <!-- HTML goes here -->
    <h2>My first component</h2>
    <h3>Test</h3>
    <p>Message: {{ message }}</p>
    <p>2 + 2 = {{ 2 + 2 }}</p>
    <p>My name is {{ getName() }}</p>
    <p>props.someProp: {{ someProp }}</p>
    <p>Epoch milliseconds {{ Date.now() }}</p>
    <p>Today is {{ new Date() }}</p>
  </section>
</template>

<script>
// JavaScript goes here
export default {
  data() {
    return {
      message: 'You have been warned!',
    };
  },
  props: {
    someProp: {
      type: String,
      default() {
        return 'someProp default value';
      },
    },
  },
  methods: {
    getName() {
      return 'John Paxton';
    },
  },
};
</script>

<style scoped>
/* CSS goes here */
h2 {
  text-decoration: underline;
}
h3 {
  color: green;
}
</style>
