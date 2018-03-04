const axios = require('axios')

module.exports = {
  request (req, res) {
    const url = 'https://gis.vantaa.fi/rest/tyopaikat/v1/kaikki'
    axios
      .get(url)
      .then(response => {
        let items = []
        for (let i = 0; i < response.data.length; i++) {
          items.push(
            {
              haku_paattyy_pvm: response.data[ i ].haku_paattyy_pvm, ammattiala: response.data[ i ].ammattiala, tyotehtava: response.data[ i ].tyotehtava
            }
          )
        }
        res.send(items) // <= send data to the client
        return response.data
      })
      .catch(err => {
        console.log(err)
        res.send({ err }) // <= send error
      })
  }
}
