<template>
<div class="row text">
    <div class="col-4"></div>
    <div class="col-4">
      <div class=" tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form @submit="loginValidate"
          novalidate="true">
      <div class="text-center mb-3">
        <p>Sign in:</p>
      </div>

      <!-- Email input -->
      <div class="form-outline mb-4">
        <input type="text" v-model="userName" id="loginName" class="form-control" />
        <label class="form-label" for="loginName">Username</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" v-model="userPass" id="loginPassword" class="form-control" />
        <label class="form-label" for="loginPassword">Password</label>
      </div>

      <!-- 2 column grid layout -->
      <div class="row mb-4">
        <!-- <div class="col-md-6 d-flex justify-content-center"> -->
          <!-- Checkbox -->
          <!-- <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div> -->

        <div class="col-md-6 d-flex justify-content-center">
          <!-- Simple link -->
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

      <!-- Register buttons -->
      <div class="text-center">
        <p>Not a member? <router-link to ="/register">Register</router-link></p>
      </div>
    </form>
  </div>
</div>
    </div>
    <div class="col-4"></div>

    
                <!-- Errors -->
      <div>
         <p v-if="errors.length">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
          <li v-for="error in errors" :key="error.id">{{ error }}</li>
        </ul>
        </p>
      </div>
  </div>
</template>

<style scoped>
.text {
  color: rgb(245, 237, 237);
}
</style>

<script>
import { myStore } from "../store";
export default {
  setup() {
    const store = myStore();
    return { store };
  },
  data() {
    return {
      errors: [],
      // users: [
      //   {id:1,user:"Eze",password:"Ezequiel89"},
      //   {id:2,user:"Matias",password:"Matias92"},
      //   {id:3,user:"Brian",password:"Brian95"}
      // ],
      userName: null,
      userPass: null,
    };
  },
  methods: {
    loginValidate() {
      this.errors = [];
      if (!this.userName) {
        this.errors.push("El nombre es obligatorio.");
      }
      if (!this.userPass) {
        this.errors.push("Password is required");
      }
      //Verifico si existe el usuario con el username y pass ingresados, y lo guardo en store.userLogued 
      //sino existe, quedara un objeto vacio
      this.store.userLogued = this.userValid(this.userName, this.userPass)
      if (!this.store.userLogued) {
        this.errors.push("User name or password incorrect");
      }

      if (!this.errors.length) {
        this.$swal("Success!!!");
        this.store.changeAuthLog();
        this.$router.push("/");
      }

      // e.preventDefault();
    },
    userValid(name, pass) {
      const result = this.store.users.find(
        (elem) => elem.email == name && elem.password == pass
      );
      return result;
    },
  },
};
</script>
