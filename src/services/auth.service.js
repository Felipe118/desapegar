import BaseService from "./base.service"
import { TOKEN_NAME } from '@/configs/index'

export default class AuthService extends BaseService {

    static async auth (params) {

      return new Promise((resolve,reject) => {
        this.request()
            .post('/login', params)
            .then(response => {
              localStorage.setItem(TOKEN_NAME, response.data.token)
                resolve(response)
            })
            .catch(error => reject(error.response))
      })
    }

    static async register(params) {
      return new Promise((resolve,reject) => {
        this.request()
        .post('/register', params)
            .then(response => {
                console.log(response)
                resolve(response)
            })
            .catch(error => reject(error.response))
      })
    }

} 