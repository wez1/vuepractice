<template>
  <div id="divchart">
    <bar-chart :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></bar-chart>
  </div>
</template>

<script>
import DataRequestService from '@/services/DataRequestService'
import BarChart from '@/components/BarChart.js'

export default {
  components: {
    BarChart
  },
  data () {
    return {
      datacollection: null
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    async fillData () {
      try {
        const response = await DataRequestService.requestChartData()
        this.datacollection = response.data.datacollection
      } catch (e) {
        this.error = e
      }
    }
  }
}
</script>

<style scoped>
</style>
