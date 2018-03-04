const ApiRequestController = require('./controllers/ApiRequestController')
const ChartRequestController = require('./controllers/ChartRequestController')
const TableRequestController = require('./controllers/TableRequestController')

module.exports = (app) => {
  app.get('/reqmap',
    ApiRequestController.request)
  app.get('/reqchart',
    ChartRequestController.request)
  app.get('/reqtable',
    TableRequestController.request)
}
