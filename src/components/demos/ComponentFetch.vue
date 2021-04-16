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
      .then( ( { data: users } ) => ( this.userCount = users.length ) )
      // .then( ( response ) => ( this.userCount = response.data.length ) )
      // .then( ( { data } ) => ( this.userCount = data.length ) )
      /*
      .then( function( response ) {
        this.userCount = response.data.length;
      } )
      */
      .catch( ( error ) => console.error( error ) );
  },
};

/*
function add( x, y ) {
  return x + y;
}

let addArrow = ( x, y ) => x + y;

*/
</script>

<style>
</style>
