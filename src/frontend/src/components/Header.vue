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
    <!-- Tabs -->
    <div v-if="this.$route.name === 'Account Details'" class="mdl-layout__tab-bar mdl-layout--fixed-tabs mdl-js-ripple-effect">
      <a v-on:click="activeTab=0" v-bind:class="{ 'is-active': activeTab === 0 }" href="#overview-tab" class="mdl-layout__tab">Overview</a>
      <a v-on:click="activeTab=1" v-bind:class="{ 'is-active': activeTab === 1 }" href="#expenses-tab" class="mdl-layout__tab">Expenses</a>
      <a v-on:click="activeTab=2" v-bind:class="{ 'is-active': activeTab === 2 }" href="#incomes-tab" class="mdl-layout__tab">Incomes</a>
      <a v-on:click="activeTab=3" v-bind:class="{ 'is-active': activeTab === 3 }" href="#budgets-tab" class="mdl-layout__tab">Budgets</a>
      <a v-on:click="activeTab=4" v-bind:class="{ 'is-active': activeTab === 4 }" href="#goals-tab" class="mdl-layout__tab">Goals</a>
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
  data() {
    return {
      activeTab: 0
    }
  }

}

</script>

<style scoped>

</style>
