<template>
  <!-- Navigation. We hide it in small screens. -->
  <nav class="mdl-navigation mdl-layout--large-screen-only">
    <router-link class="mdl-navigation__link" to="/">Home</router-link>
    <router-link class="mdl-navigation__link" to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
name: "HeaderMenu"
}
</script>

<style scoped>

</style>
