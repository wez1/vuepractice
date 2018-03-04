const axios = require('axios')

module.exports = {
  request (req, res) {
    const url = 'https://gis.vantaa.fi/rest/tyopaikat/v1'
    axios
      .get(url)
      .then(response => {
        let datacollection = {
          labels: [],
          datasets: [{
            data: []
          }]
        }
        datacollection.datasets[0].label = 'Ammattialoittain'
        datacollection.datasets[0].backgroundColor = '#f87979'
        for (let i = 1; i < response.data.length; i++) {
          datacollection.labels.push(response.data[ i ].ammattiala)
          datacollection.datasets.forEach((data) => {
            data.data[(i - 1)] = response.data[ i ].lukumäärä
          })
        }
        res.send({datacollection}) // <= send data to the client
        return response
      })
      .catch(err => {
        console.log(err)
        res.send({ err }) // <= send error
      })
  }
}
