import axios from 'axios'


const serverError = (json) => (dispatch,state) => {
    switch (json.code){
        case -201 :
            alert('登录失效，重新登录')
            break;
        default :
            alert(json.message)
            break;
    }

}

const getPostConfig = (pms) => {
    pms.headers = pms.headers || {
        "Content-Type": "application/json"
    }
    pms.data = pms.body || ''
    pms.params = ''
    if(pms.headers["Content-Type"] == "application/x-www-form-urlencoded"){
        pms.transformRequest = [
            (data) => {
                const fobj = (object) => {
                    if(typeof object == 'object') return JSON.stringify(object)
                    else return object
                }
                let temp = ''
                for(let i in data){
                    temp += i + '=' + fobj(data[i]) + '&'
                }
                return temp.replace(/&$/g,'');
            }
        ]
    }else{
        pms.transformRequest = []
    }
    return pms
}


const interceptor = (params = {}) => {
    params.method = params.method || 'GET'
    params.params = params.body || ''
    params.toast = params.toast == false ? false : params.toast || true
    //跨域 params.withCredentials = params.credentials || true

    let config = params.method.toUpperCase() == 'POST' ? getPostConfig(params) : params

    // if(config.toast) dispatch(showToast('loading'))
    return axios(config)
            .then(function(res){
                if(res.status == 200){
                    if(res.data.code < 0) dispatch(serverError(res.data))
                    config.callback(res.data)
                }else{
                    alert('服务器异常')
                }
            })
            .catch(function(err){
                alert('网络异常')
            })
}
export default interceptor