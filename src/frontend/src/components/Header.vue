<template>
  <header  class="mdl-layout__header">
    <!-- Always shows a header, even in smaller screens. -->
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">SaveBlue</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Header Menu -->
      <HeaderMenu v-if="!isLoggedIn"/>
    </div>
  </header>

</template>

<script>

import HeaderMenu from "@/components/HeaderMenu";

export default {
  name: "Header",
  components: {
    HeaderMenu
  },
  computed: {
    isLoggedIn() {
      return !(this.$route.name === 'Home' || this.$route.name === 'About');
    },
  },

}

</script>

<style scoped>

</style>
