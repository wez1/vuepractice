<template>
  <div>
    <h1>Request Data Page</h1>
    <br>
    <b-button
      variant="secondary"
      @click="request">
        Request Data
    </b-button>
    <ul id='joujou'>
    </ul>
  </div>
</template>

<script>
import DataRequestService from '@/services/DataRequestService'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    async request () {
      const response = await DataRequestService.request()
      console.log(response.data)
      document.getElementById('joujou').innerHTML = ''
      response.data.forEach(job => {
        document.getElementById('joujou').innerHTML +=
        '<li>' + job.tyotehtava + '</li>'
      })
      return response.data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
