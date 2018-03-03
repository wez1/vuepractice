import Api from '@/services/Api'

export default {
  request () {
    return Api().get('request')
  }
}
