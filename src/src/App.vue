<template>
  <div v-mdl id="app">
    <!-- Content -->
    <div v-bind:class="{'mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header': isLoggedIn,
     'mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button': !isLoggedIn}">
      <!-- Header -->
      <Header/>
      <!-- Navigation Drawer, hide on big screens -->
      <NavigationDrawer/>
      <!-- Content -->
      <main class="mdl-layout__content">
        <div class="main-content-grid mdl-grid">
          <router-view/>
        </div>
        <!-- Footer -->
        <Footer/>
      </main>
    </div>


  </div>
</template>

<script>

import Header from "@/components/Header";
import NavigationDrawer from "@/components/NavigationDrawer";
import Footer from "@/components/Footer";

export default {
  components: {
    Footer,
    NavigationDrawer,
    Header
  },
  computed: {
    isLoggedIn() {
      return !(this.$route.name === 'Home' || this.$route.name === 'About');
    },
  },
  directives: {
    mdl: {
      updated() {
        window.componentHandler.upgradeDom();
      }
    }
  },


}

</script>


<style>
/* To govno je potrebno da ni roba okol slike */
.main-content-grid {
  padding: 0;
  background: antiquewhite;
}


/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
