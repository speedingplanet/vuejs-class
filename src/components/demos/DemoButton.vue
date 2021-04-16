<template>
  <div>
    <!-- <button type="button" v-on:click="handleButtonClick">Click me</button><br /> -->
    <!-- <button type="button" @click="handleButtonClick">Click me</button><br /> -->
    <!-- <button type="button" @click="handleButtonClick('John')">Click me</button -->
    <button type="button" @click="handleButtonClick('John', $event)">
      Click me</button
    ><br />
    <p>Someday, a message will appear here.</p>
  </div>
</template>

<script>
export default {
  methods: {
    handleButtonClick( name, event ) {
      console.log( name + ' clicked on the button!' );
      console.log( 'Event: ', event );
    },
  },
};
</script>

<style></style>
