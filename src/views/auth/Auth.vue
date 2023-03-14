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
          <form>
            <!-- Email input -->
            <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Email</label>
              <input
                type="email"
                v-model="email"
                id="form3Example3"
                class="form-control form-control-lg"
                placeholder="E-mail"
              />
             
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">

              <label class="form-label" for="form3Example4">Password</label>
              <input
                type="password"
                v-model="password"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder="Senha"
              />
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <a href="#!" class="text-body">Esqueceu a senha ?</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="button" @click.prevent="auth" class="btn btn-dark btn-lg" style="padding-left: 2.5rem; padding-right: 2.5rem">
                Login
              </button> 
              <p class="small fw-bold mt-2 pt-1 mb-0">
                Não tem conta ?
                <a href="#!" class="link-danger">Registre-se</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer-auth/>
  </section>
</template>

<script>
import router from '@/router';
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';

import FooterAuth from '../components/FooterAuth.vue';

export default {
  name: 'Auth',
  setup() {
    const store = useStore() 
    const email = ref("")
    const password = ref("")

 
    const auth = () => {
      // loading.value = true
      store.dispatch('auth', {
          email: email.value,
          password: password.value,
      })
      .then(() => router.push({name: 'index'}))
      .catch(error => console.log(error))
      // .finally(() =>   loading.value = false)
    }

      return {
          auth,
          email,
          password,
      }
  },

  components: {
    FooterAuth
  }
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
</style>