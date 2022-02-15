
<template>
  <div class="app">
    <navbar v-if="$route.meta.showNavbar"/>
    <sidebar class="sidebar" v-if="$route.meta.showSidebar" /> 
    <router-view /> 
  </div>
</template>

<script>
import navbar from './components/Navbar.vue';
import sidebar from './components/Dashboard/Sidebar-dashboard.vue'

export default {
    name: 'app',
    components: {
      navbar,
      sidebar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

* {
  padding: 0;
  margin: 0;
  height: auto;
}

.app {
  font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;

  .sidebar {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    width: 300px;
    height: 100vh;
  }

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media screen and  (max-width: 720px)
{
  .app {
    height: 320vh;
  }
}
  

</style>
