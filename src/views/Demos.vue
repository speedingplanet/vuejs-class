<template>
  <section class="container">
    <header class="row">
      <h2>Demos</h2>
    </header>
    <div class="row">
      <div class="col-3">
        <ul class="list-unstyled">
          <li>
            <router-link to="/demos/basic-component"
              >Basic Component</router-link
            >
          </li>
          <li>
            <router-link to="/demos/event-handling">Event Handling</router-link>
          </li>
          <li>
            <router-link to="/demos/event-handling-data"
              >Event Handling with data()</router-link
            >
          </li>
          <li>
            <router-link to="/demos/greeter">Greeter</router-link>
          </li>
          <li>
            <router-link to="/demos/greeter-if">Greeter + v-if</router-link>
          </li>
          <li>
            <router-link to="/demos/greeter-show">Greeter + v-show</router-link>
          </li>
          <li>
            <router-link to="/demos/component-fetch"
              >Fetching with a component</router-link
            >
          </li>
          <li>
            <router-link to="/demos/list-data">List data</router-link>
          </li>
          <li>
            <router-link to="/demos/vuex-counter">Vuex Counter</router-link>
          </li>
          <li>
            <router-link to="/demos/find-tx">Find a Transaction</router-link>
          </li>
          <li>
            <router-link to="/demos/route-params/alpha/beta/gamma"
              >Route Params</router-link
            >
          </li>
          <li>
            <router-link to="/demos/route-params-props/apple/banana/cat"
              >Route Params (via props)</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
