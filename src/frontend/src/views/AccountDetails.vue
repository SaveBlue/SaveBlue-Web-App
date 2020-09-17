<template>
  <div class="AccountDetails">
    <div class="mdl-card mdl-cell--10-col mdl-cell--1-offset-desktop  mdl-shadow--4dp">
      <div class="mdl-grid">
        <section class="mdl-layout__tab-panel is-active" id="overview-tab">
          <div class="page-content">a<!-- Your content goes here --></div>
        </section>
        <section class="mdl-layout__tab-panel" id="expenses-tab">
          <div class="page-content">b<!-- Your content goes here --></div>
        </section>
        <section class="mdl-layout__tab-panel" id="incomes-tab">
          <div class="page-content">c<!-- Your content goes here --></div>
        </section>
        <section class="mdl-layout__tab-panel" id="budgets-tab">
          <div class="page-content">d<!-- Your content goes here --></div>
        </section>
        <section class="mdl-layout__tab-panel" id="goals-tab">
          <div class="page-content">e<!-- Your content goes here --></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "AccountDetails"
}
</script>

<style scoped>

.AccountDetails {
  width: 100%;
  position: center;
}

</style>
