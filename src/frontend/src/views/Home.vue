<template>
  <div class="home">
    <SignIn />

    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SignIn from "@/components/SignIn";


export default {
  name: 'Home',
  components: {
    SignIn,
    HelloWorld
  }
}
</script>

<style>

</style>
