<template>
  <div>
    <gmap-map
      :center="{lat: 60.3, lng: 25.0}"
      :zoom="10"
      style="height: 400px;">
    <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        {{infoContent}}
        <br>
        <a :href="infoLinkki">Linkki</a>
    </gmap-info-window>
    <gmap-marker
      :key="i"
      v-for="(m, i) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="toggleInfoWindow(m,i)"
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
      center: {
        lat: 0,
        lng: 0
      },
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      // optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      markers: null,
      error: null,
      infoLinkki: null
    }
  },
  async created () {
    try {
      let response = await DataRequestService.requestMapData()
      this.markers = response.data.marks
    } catch (e) {
      this.error = JSON.stringify(e)
    }
  },
  methods: {
    toggleInfoWindow (marker, idx) {
      this.infoWindowPos = marker.position
      this.infoLinkki = marker.linkki
      this.infoContent = marker.infoText

      // check if its the same marker that was selected if yes toggle
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen
      } else {
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    }
  }
}

</script>

<style scoped>
</style>
