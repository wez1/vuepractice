<template>
  <div id="app">
    <page-header/>
    <b-container style="background-color:#fff; padding-bottom:90px; padding-top:30px;">
      <b-row>
        <b-col lg="6">
          <map-component/>
        </b-col>
        <b-col lg="6">
          <chart-page/>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12">
          <job-table />
        </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import MapComponent from '@/components/MapComponent.vue'
import ChartPage from '@/components/ChartPage.vue'
import JobTable from '@/components/JobTable.vue'
export default {
  name: 'App',
  components: {
    PageHeader,
    MapComponent,
    ChartPage,
    JobTable
  }
}
</script>

<style>
body {
  background: fixed no-repeat #eee;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
