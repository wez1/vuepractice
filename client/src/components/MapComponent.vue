<template>
  <div>
    <gmap-map
      :center="{lat: 60.3, lng: 25.0}"
      :zoom="10"
      style="height: 400px;"
    >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
    </gmap-map>
    <br>
    <p>{{error}}</p>
  </div>
</template>

<script>
import DataRequestService from '@/services/DataRequestService'
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
  data () {
    return {
      markers: null,
      error: null
    }
  },
  async created () {
    try {
      let response = await DataRequestService.requestMapData()
      this.markers = response.data
    } catch (e) {
      this.error = e
    }
  }
}

</script>

<style scoped>
</style>
