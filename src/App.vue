<template>
  <div id="app">
    <NavBarPage />
    <router-view></router-view>
    
  </div>
</template>

<script>
import NavBarPage from './components/NavBarPage.vue'

export default {
  name: 'App',
  components: {
    NavBarPage
  },

  

  
}
</script>

<style>

</style>
