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
};
</script>

<style>
</style>
