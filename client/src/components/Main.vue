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
export default {
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
