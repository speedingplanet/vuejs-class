<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-2 container">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" active-class="active" class="nav-link"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/demos" active-class="active" class="nav-link"
              >Demos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/people" active-class="active" class="nav-link"
              >People</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
