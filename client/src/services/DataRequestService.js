import Api from '@/services/Api'

export default {
  requestMapData () {
    return Api().get('reqmap')
  },
  requestChartData () {
    return Api().get('reqchart')
  },
  requestTableData () {
    return Api().get('reqtable')
  }
}
