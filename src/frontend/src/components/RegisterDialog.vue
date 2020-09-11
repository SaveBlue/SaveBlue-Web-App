<template>
  <dialog class="mdl-dialog mdl-shadow--24dp">
    <h4 class="mdl-dialog__title mdl-color--primary mdl-color-text--white ">Register</h4>
    <div class="mdl-dialog__content">


      <div class="registration-txt mdl-textfield mdl-js-textfield mdl-textfield--floating-label textInputWide">
        <input class="mdl-textfield__input" type="text" id="username">
        <label class="mdl-textfield__label" for="username">Username</label>
      </div>
      <div class="registration-txt mdl-textfield mdl-js-textfield mdl-textfield--floating-label textInputWide">
        <input class="mdl-textfield__input" type="email" id="email">
        <label class="mdl-textfield__label" for="email">Email</label>
      </div>
      <div class="registration-txt mdl-textfield mdl-js-textfield mdl-textfield--floating-label textInputWide">
        <input class="mdl-textfield__input" type="password" id="pass">
        <label class="mdl-textfield__label" for="pass">Password</label>
      </div>
      <div class="registration-txt mdl-textfield mdl-js-textfield mdl-textfield--floating-label textInputWide">
        <input class="mdl-textfield__input" type="password" id="pass2">
        <label class="mdl-textfield__label" for="pass2">Retype password</label>
      </div>
    </div>

    <div class="mdl-dialog__actions">
      <button v-on:click="register" type="button" class="mdl-button mdl-button--raised mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--white">Register</button>
      <button v-on:click="close" type="button" class="mdl-button close">Cancel</button>
    </div>
  </dialog>
</template>

<script>

export default {
  name: "RegisterDialog",
  components: {},
  methods:{
    close: function (){
      let dialog = document.querySelector('dialog');
      dialog.close();
    },
    register: function (){
      alert('register')
    }
  }
}
</script>

<style scoped>
.mdl-dialog {
  width: 80%;
  min-width: 250px;
  max-width: 650px;
  padding: 0;
}

.registration-txt{
  width: 100%;
}

h4 {
  padding: 30px;
}
</style>