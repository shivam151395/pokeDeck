import axios from 'axios'
import { serializeQueryParams } from './apiUtils'
export default {
  makeGetRequest (path, params) {
    path += serializeQueryParams(params)
    return axios.get(path, {
      headers: { 'Access-Control-Allow-Origin': '*' }, withCredentials: false
    }).catch(() => Promise.resolve({}))
  }
}
