<template>
    <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <h3 class="mb-4">Registrar</h3>
          <form>
            <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Nome</label>
                <input type="text" v-model="name" class="form-control form-control-lg" placeholder="Nome"/>
            </div>

            <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Email</label>
                <input type="email" v-model="email" class="form-control form-control-lg" placeholder="E-mail"/>
            </div>
            <!-- Email input -->
            <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Telefone</label>
                <input type="text" v-model="phone" class="form-control form-control-lg" placeholder="Telefone"/>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4">Senha</label>
                <input type="password" v-model="password" class="form-control form-control-lg" placeholder="Senha"/>
            </div>


            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="button" @click.prevent="register" class="btn btn-dark btn-lg" style="padding-left: 2.5rem; padding-right: 2.5rem">
                Registrar-se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer-auth/>

  </section>
</template>

<script>
  import { ref } from '@vue/reactivity';
  import { useStore } from 'vuex'
  import FooterAuth from '../components/FooterAuth.vue';

  export default {

    components: {
      FooterAuth
    },

    name:'Register',

    setup() {
      const store = useStore();
      const email = ref("");
      const password = ref("");
      const phone = ref("");
      const name = ref("");

      const register = () => {
        store.dispatch('register', {
          email: email.value,
          password: password.value,
          phone: phone.value,
          name: name.value,
        })
        .then((response) => {
          console.log(response)
          console.log('response') 
        })
        .catch((error) => {
          console.log(error) 
          console.log('erro')
        })

        
      }
        return {
          register,
          email,
          password,
          name,
          phone
        }
    },
  };
</script>


<style> 
  .divider:after,
  .divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
  }
  .h-custom {
    height: calc(100% - 73px);
  }
  @media (max-width: 450px) {
    .h-custom { 
      height: 100%;
    }
  }
  @media (max-width: 450px) {
    .h-custom { 
      height: 100%;
    }
  }
</style>