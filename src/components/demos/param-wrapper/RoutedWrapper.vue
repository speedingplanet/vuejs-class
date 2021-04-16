<template>
  <section class="container">
    <RenderProps :first="first" :second="second" :third="third" />
  </section>
</template>

<script>
import RenderProps from './RenderProps.vue';
export default {
  components: {
    RenderProps,
  },
  data() {
    return {
      first: this.$route.params.first,
      second: this.$route.params.second,
      third: this.$route.params.third,
    };
  },
  created() {
    let fnName = 'atiyasFunction';
    RenderProps[fnName]();
    /* On ANY JavaScript object, access properties dynamically with []
      let person = {
        firstName: 'John',
        lastName: 'Paxton',
        getFullName() {
          return this.firstName + ' ' + this.lastName;
        }
      }

      let propName = 'firstName';
      console.log(person[propName]); // Prints 'John'

      let functionName = 'getFullName';
      console.log(person[functionName]()); // Parens () invokes the function!
    */
  },
};
</script>

<style>
</style>
