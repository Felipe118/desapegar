

import AuthService from "@/services/auth.service"



export default {
  state: {
    user: {
        name: '',
        email: '',
    },
    user_register: {
      name: '',
      email: '',
      password: '',
      phone: '',
    },
    loggedIn: false,

  },
  getters: {
  },
  mutations: {
      SET_USER (state,user){
        state.user = user
        state.loggedIn = true
      },
      LOGOUT (state){
          state.user = {
              name: '',
              email: '',
          }
          state.loggedIn = false
      }
  },
  actions: {
    auth({state},params){
      state.loggedIn
        console.log(params)
          console.log('Vuex Register')
      return AuthService.auth(params)
    },
    
    register(_, params){ 
        // state.user_register
        console.log('Vuex Register')
        return AuthService.register(params)
      },
  
  },  
  modules: {
   
  }
}

