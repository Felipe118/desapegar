
import RegisterService from "@/services/register.service"

const actions = {
    register(params){ 
        console.log(params)
        console.log('Vuex Register')
        return RegisterService.register(params)
      },
}

export default actions