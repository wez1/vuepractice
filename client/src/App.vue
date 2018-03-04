<template>
  <div id="app">
    <page-header/>
    <b-container style="background-color:#fff;">
      <map-component/>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import MapComponent from '@/components/MapComponent.vue'
export default {
  name: 'App',
  components: {
    PageHeader,
    MapComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eee;
}
</style>
