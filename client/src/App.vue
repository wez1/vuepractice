<template>
  <div id="app">
    <div id="navbar">
    <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand @click="navToMap" href="#">JobSearch Vantaa</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item @click="navToMap" href="#">Kartta</b-nav-item>
      <b-nav-item @click="navToChart" href="#">Statistiikka</b-nav-item>
      <b-nav-item @click="navToTable" href="#">Listaus</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
    </b-navbar>
  </div>
    <b-container style="background-color:#fff; padding-bottom:90px; padding-top:90px;">
      <b-row>
        <b-col lg="12" id="toppage">
          <h1>Vantaan Avoimet Työpaikat</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="6" id="mapcontainer">
          <map-component/>
        </b-col>
        <b-col lg="6" id="chartcontainer">
          <chart-page/>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12" id="tablecontainer">
          <job-table />
        </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import MapComponent from '@/components/MapComponent.vue'
import ChartPage from '@/components/ChartPage.vue'
import JobTable from '@/components/JobTable.vue'
export default {
  name: 'App',
  components: {
    MapComponent,
    ChartPage,
    JobTable
  },
  // eslint will not like jquery but we have it and it works
  // animated navs are so much easier in jquery so lets do it this way
  methods: {
    navToMap () {
      $('html, body').animate({
        scrollTop: $('#mapcontainer').offset().top - 140
      }, 500)
    },
    navToChart () {
      $('html, body').animate({
        scrollTop: $('#chartcontainer').offset().top - 140
      }, 500)
    },
    navToTable () {
      $('html, body').animate({
        scrollTop: $('#tablecontainer').offset().top - 140
      }, 500)
    }
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
