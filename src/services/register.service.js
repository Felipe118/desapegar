import BaseService from "./base.service"

export default class RegisterService extends BaseService {

    static async register(params) {
    
      return new Promise((resolve,reject) => {
        console.log(params)
        console.log('register service')
        this.request()
        .post('/register', params)
        .then(response => {
            
            resolve(response)
        }) 
        .catch(error => reject(error.response))
      })
    }
 
} 