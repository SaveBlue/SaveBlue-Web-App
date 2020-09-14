<template>
  <button v-on:click="fabClick" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
    <i class="material-icons">add</i>
  </button>
</template>

<script>
export default {
name: "FAB",
methods: {
  fabClick: function (){
    alert('fab')
  }
}
}
</script>

<style scoped>
  button{
    position: fixed;
    right: 24px;
    bottom: 24px;
    padding-top: 24px;
    margin-bottom: 0;
    z-index: 998;
  }
</style>