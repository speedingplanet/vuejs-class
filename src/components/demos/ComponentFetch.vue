<template>
  <section>
    <p v-if="userCount">There are {{ userCount }} users.</p>
    <p v-else>I don't know how many users there are ... yet.</p>
  </section>
</template>

<script>
import { dao } from '@speedingplanet/rest-server';

export default {
  data() {
    return {
      userCount: 0,
    };
  },
  mounted() {
    dao
      .findAllUsers( { _delay: 3000 } )
      .then( ( { data: users } ) => ( this.userCount = users.length ) );
  },
};
</script>

<style>
</style>
