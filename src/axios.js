import axios from 'axios'
axios.defaults.baseURL = 'https://open.duyiedu.com';
axios.interceptors.request.use(function(config){
    config.params = {
        ...config.params,
        appkey:'xpj_web_1590495270968'
    }
    return config
},function(error){
    return Promise.reject(error)
})

export default axios