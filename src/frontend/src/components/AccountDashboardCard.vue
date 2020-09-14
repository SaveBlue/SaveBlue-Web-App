<template>
  <div class="account-dashboard-card mdl-card mdl-shadow--2dp mdl-cell
       mdl-cell--6-col-desktop  ">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">Account Name</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris sagittis pellentesque lacus eleifend lacinia...</h5>
      <h5>
        Account Balance: €€€
      </h5>
    </div>

    <div class="mdl-card__menu">
      <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">edit</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountDashboardCard"
}
</script>

<style scoped>

</style>