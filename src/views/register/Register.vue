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

            <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Email</label>
                <input type="email" v-model="email" class="form-control form-control-lg" placeholder="E-mail"/>
            </div>
            <!-- Email input -->
            <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Email</label>
                <input type="email" v-model="email" class="form-control form-control-lg" placeholder="E-mail"/>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4">Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" placeholder="Senha"/>
            </div>


            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="button" @click.prevent="auth" class="btn btn-dark btn-lg" style="padding-left: 2.5rem; padding-right: 2.5rem">
                Registrar-se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      class="
        d-flex
        flex-column 
        text-center text-md-start
        justify-content-between
        py-4
        px-4 px-xl-5
        bg-light
      "
    >
      <!-- Copyright -->
      <div style="text-align: center;" class="text-dark mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div>
      <!-- Copyright -->
    </div> 
  </section>
</template>

<script>
    
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