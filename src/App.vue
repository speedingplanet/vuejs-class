<template>
  <main>
    <header class="container">
      <h1>Vue.js 3 class</h1>
    </header>
    <Navbar />
    <router-view />
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
</style>
