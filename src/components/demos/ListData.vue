<template>
  <section>
    <header>
      <h3>List Data</h3>
    </header>
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.displayName }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import { users } from '@speedingplanet/rest-server';
export default {
  data() {
    return {
      users,
    };
  },
};
</script>

<style>
</style>
