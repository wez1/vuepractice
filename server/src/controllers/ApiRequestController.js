const axios = require('axios')

module.exports = {
  request (req, res) {
    const url = 'https://gis.vantaa.fi/rest/tyopaikat/v1/kaikki'
    axios
      .get(url)
      .then(response => {
        const marks = []
        response.data.forEach(item => {
          marks.push({
            position: {lat: item.y, lng: item.x}
          })
        })
        res.send(marks) // <= send data to the client
        return response.data
      })
      .catch(err => {
        console.log(err)
        res.send({ err }) // <= send error
      })
  }
}
