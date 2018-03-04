<template>
  <div>
    <gmap-map
      :center="{lat: 60.3, lng: 25.0}"
      :zoom="10"
      style="height: 400px;"
    ></gmap-map>
  </div>
</template>

<script>
import Vue from 'vue'

if (process.browser) {
  const VueGoogleMaps = require('vue2-google-maps')
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCWrq2H9IAid7BS3J_v1257APMJITYmj7I'
    }
  })
}

export default {

}
</script>

<style scoped>
</style>
