<template>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">SaveBlue</span>
    <nav class="mdl-navigation">
      <router-link class="mdl-navigation__link" to="/">Home</router-link>
      <router-link class="mdl-navigation__link" to="/about">About</router-link>
      <router-link class="mdl-navigation__link" to="/expenses">Expenses</router-link>
      <router-link class="mdl-navigation__link" to="/dashboard">Dashboard</router-link>
      <router-link class="mdl-navigation__link" to="/accountDetails">Account Details</router-link>
    </nav>
  </div>
</template>

<script>
export default {
name: "NavigationDrawer"
}
</script>

<style scoped>

</style>
