
import RegisterService from "@/services/register.service"


export default {
  state: {
    user_register: {
        name: '',
        email: '',
        phone: '',
    },
  },
  getters: {
  },
  mutations: {
    SET_USER_REGISTER (state,user){
        state.user_register = user
      },
  },
  actions: {
    register(params){
      return RegisterService.register(params)
    },

  },  
  modules: {
   
  }
}

