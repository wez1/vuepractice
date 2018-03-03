const axios = require('axios')

module.exports = {
  request (req, res) {
    const url = 'https://gis.vantaa.fi/rest/tyopaikat/v1/kaikki'
    axios
      .get(url)
      .then(response => {
        console.log(response.data)
        res.send(response.data) // <= send data to the client
        return response.data
      })
      .catch(err => {
        console.log(err)
        res.send({ err }) // <= send error
      })
  }
}
