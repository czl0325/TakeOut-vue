import axios from 'axios'

axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export default function ajax(url, params={}, method="GET") {
    return new Promise((resolve, reject)=>{
        let promise = method === "GET" ? axios.get(url, {params: params}) : axios.post(url, params)
        promise.then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}
