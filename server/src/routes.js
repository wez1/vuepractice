const ApiRequestController = require('./controllers/ApiRequestController')

module.exports = (app) => {
  app.get('/request',
    ApiRequestController.request)
}
