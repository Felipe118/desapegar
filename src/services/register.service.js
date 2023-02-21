import BaseService from "./base.service"

export default class RegisterService extends BaseService {

    static async register(params) {
      return new Promise((resolve,reject) => {
        this.request()
        .post('/register', params)
        .then(response => {
            console.log(params)
            resolve(response)
        }) 
        .catch(error => reject(error.response))
      })
    }

} 