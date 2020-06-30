import axios from 'axios'
import errorHandle from './errorHandle'

class HttpRequest {
    constructor (baseUrl) {
        this.baseUrl = baseUrl
    }
    getInsideConfig () {
        const config = {
            baseUrl: this.baseUrl,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            timeout: 10000
        }
        return config
    }

    // 设置拦截器
    interceptors (instance) {
        instance.interceptors.request.use((config) => {
            return config
        }, (err) => {
            errorHandle(err)
            return Promise.reject(err)
        })
    }
}