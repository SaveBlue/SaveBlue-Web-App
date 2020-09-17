<template>
  <header  class="mdl-layout__header">
    <!-- Always shows a header, even in smaller screens. -->
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">SaveBlue</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Header Menu -->
      <HeaderMenu/>
    </div>
    <!-- Tabs -->
    <div v-if="test" class="mdl-layout__tab-bar mdl-layout--fixed-tabs">
      <a href="#overview-tab" class="mdl-layout__tab is-active">Overview</a>
      <a href="#expenses-tab" class="mdl-layout__tab">Expenses</a>
      <a href="#incomes-tab" class="mdl-layout__tab">Incomes</a>
      <a href="#budgets-tab" class="mdl-layout__tab">Budgets</a>
      <a href="#goals-tab" class="mdl-layout__tab">Goals</a>
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
  },
  computed: {
    test() {
      return this.$route.name === 'AccountDetails';
    },
  },
}
</script>

<style scoped>
</style>