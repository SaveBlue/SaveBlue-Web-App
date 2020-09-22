<template>
  <!-- sign in card -->
  <div class="signin-card mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col
      mdl-cell--4-col-tablet mdl-cell--2-offset-tablet">

    <form @submit.prevent="logIn">

      <div class="mdl-card__title mdl-color--primary mdl-color-text--white relative">
        <h2 class="mdl-card__title-text">Sign In</h2>
      </div>

      <div class="mdl-card__supporting-text">

        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label textInputWide">
          <input class="mdl-textfield__input" type="text" id="username">
          <label class="mdl-textfield__label" for="username">Username</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label textInputWide">
          <input class="mdl-textfield__input" type="password" id="passwordLogin">
          <label class="mdl-textfield__label" for="passwordLogin">Password</label>
        </div>
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
            <a v-on:click="registerDialog" class="mdl-color-text--primary signup-text">Sign up!</a>

          </div>
        </div>

      </div>
    </form>

    <RegisterDialog/>

  </div>
</template>

<script>
import RegisterDialog from "@/components/RegisterDialog";
export default {
  name: "SignInCard",
  components: {RegisterDialog},
  methods:{
    logIn: function (){
      //alert("login")
    },
    registerDialog: function (){

      let dialog = document.querySelector('dialog');
      dialog.showModal();
    }
  }
}


</script>

<style scoped>
.textInputWide {
  width: 100%;
}
</style>