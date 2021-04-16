<template>
  <section>
    <DemoButton />
  </section>
</template>

<script>
// import BasicComponent from './components/BasicComponent.vue';
// import Greeter from './components/GreeterIf.vue';
import DemoButton from './components/DemoDataButton.vue';

export default {
  name: 'App',
  components: {
    DemoButton
    // BasicComponent,
    // Greeter
  },
  data() {
    return {
      location: {
        city: 'Nutley',
        state: 'NJ'
      }
    };
  }
};
</script>

<style></style>
