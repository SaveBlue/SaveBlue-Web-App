<template>
  <!-- sign in card -->
  <div class="signin-card mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col
      mdl-cell--4-col-tablet mdl-cell--2-offset-tablet">
    <div class="mdl-card__title mdl-color--primary mdl-color-text--white relative">
      <h2 class="mdl-card__title-text">Sign In</h2>
    </div>

    <div class="mdl-card__supporting-text">
      <form action="#">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label textInputWide">
          <input class="mdl-textfield__input" type="text" id="usename">
          <label class="mdl-textfield__label" for="usename">Username</label>
        </div>
      </form>
      <form action="#">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label textInputWide">
          <input class="mdl-textfield__input" type="password" id="pass">
          <label class="mdl-textfield__label" for="pass">Password</label>
        </div>
      </form>
    </div>

    <!-- Sign in button-->
    <div class="mdl-card__actions mdl-card--border">
      <button
          class="mdl-cell mdl-cell--10-col mdl-cell--1-offset-desktop mdl-button mdl-button--raised mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
        Sign In
      </button>

      <!-- Sign up reference text-->
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--10-col mdl-cell--1-offset-desktop">
          <a class="mdl-color-text--primary">Sign up!</a>

        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "SignInCard"
}
</script>

<style scoped>
.textInputWide {
  width: 100%;
}
</style>