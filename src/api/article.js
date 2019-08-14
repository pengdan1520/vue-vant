import base from '../servers/base' // 导入接口域名列表
import axios from '../servers/request' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块

const article = {
  reqDemo () {
    // http://46.149.201.152:8081/api/login/shiwan
    return axios.post(`${base.BASE_URL}/api/login/shiwan`, {})
  },
  articleDetail (id, params) {
    return axios.get(`${base.BASE_URL}/topic/${id}`, {
      params: params
    })
  },
  // post提交
  login (params) {
    return axios.post(`${base.BASE_URL}/accesstoken`, qs.stringify(params))
  }
  // 其他接口…………
}

export default article
