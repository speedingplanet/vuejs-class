<template>
  <div>
    <button type="button" @click="handleButtonClick('John', $event)">
      Click me</button
    ><br />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Default message',
    };
  },
  methods: {
    handleButtonClick( name, event ) {
      // console.log( name + ' clicked on the button!' );
      // this.message = name + ' clicked on the button!';
      this.message = `${name} clicked on the button!`;
      // console.log( 'Event: ', event );
    },
  },
};
</script>

<style></style>
