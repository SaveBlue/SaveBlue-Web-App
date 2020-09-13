<template>
  <div class="signin-background">
    <div class="mdl-grid signin-grid">
      <div class="welcome-text mdl-cell
      mdl-cell--4-col  mdl-cell--1-offset-desktop
       mdl-cell--6-col-tablet mdl-cell--1-offset-tablet
       mdl-cell--4-col-phone  ">
        <h2>Welcome</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est
          laborum.</p>
      </div>

      <div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--hide-tablet " />
      <SignInCard/>

    </div>
  </div>

</template>

<script>
import SignInCard from "@/components/SignInCard";

export default {
  name: "SignIn",
  components: {SignInCard}
}
</script>

<style scoped>
.signin-background {
  background-image: url('../assets/Civetta-3.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
}

.welcome-text {
  color: white;
}

.signin-grid {
  padding: 32px;

}




</style>
