<template>
<div>
<!--class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register"-->
    <form @submit="formValidate"
    novalidate="true">
  <!-- 2 column grid layout with text inputs for the first and last names -->
      <div class="container row">
        <div class="col-md-8"></div>
        <div class="col-md-4">
        <div class="nombreApe row">
            <div class="col">
                <div class="form-outline">
                    <input type="text" v-model="firstName" id="fName" class="form-control" />
                        <label class="etiquetas form-label" for="fName">First name</label>
                </div>
            </div>
            <div class="col">
                <div class="form-outline">
                    <input type="text" v-model="lastName" id="fLname" class="form-control" />
                        <label class="etiquetas form-label" for="fLname">Last name</label>
                </div>
            </div>
        </div>

  <!-- Email input -->
                <div class="form-outline mb-4">
                    <input type="email" v-model="email" class="form-control" />
                        <label class="etiquetas form-label" for="form3Example3">Email address</label>
                </div>

  <!-- Password input -->
                <div class="form-outline mb-4">
                    <input type="password"  v-model="fPassw" id="fPassw" class="form-control" />
                        <label class="etiquetas form-label" for="fPass">Password</label>
                </div>

 <!-- Confirm Password input -->
                <div class="form-outline mb-4">
                    <input type="password"  v-model="fConfPassw" id="fConfPassw" class="form-control" />
                        <label class="etiquetas form-label" for="fConfPass" aria-placeholder="Confirm Password">Confirm Password</label>
                </div>

                <!-- Errors -->
                <div class="errores">
                <p v-if="errors.length">
                <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                <ul>
                <li  v-for="error in errors" :key="error.id">{{ error }}</li>
                </ul>
                </p></div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>
  </div>
  
  </div>
    </form>
</div>
</template>

<style scoped>
  .errores {
    color: antiquewhite;
  }
  .etiquetas {
    color: antiquewhite;
  }

  .formulario {
    align-items: center;
  }

</style>

<script>
import { myStore } from '../store'

export default {
  setup() {
    const store = myStore()
    return store
  },
  data() {
    return {
      errors: [],
      email: null,
      firstName: null,
      lastName: null,
      fPassw: null,
      fConfPassw:null
    };
  },
  methods: {
     async formValidate (e) {
      this.errors = [];

      if (!this.firstName) {
        this.errors.push("El nombre es obligatorio.");
      }
      if (!this.lastName) {
        this.errors.push("El apellido es obligatorio.");
      }
       if (!this.fPassw) {
        this.errors.push("La password es obligatorio.");
      }
      if (!this.fConfPassw) {
        this.errors.push("Debe ingresar la confirmación de la password");
      }
       if (this.fConfPassw != this.fPassw) {
        this.errors.push("La password y la confirmación no coinciden");
      }
      if (!this.email) {
        this.errors.push("El correo electrónico es obligatorio.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("El correo electrónico debe ser válido.");
      }

      if (!this.errors.length) {
        await this.registerUser('gaspar','decarlo','email@gmail.com','pepito1234')
        this.$swal(
                    'Well done!!!',
                    'Thanks for join us',
                    'success'
                        )
        this.$router.push("/Login");
      }

      // e.preventDefault();
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    async registerUser(fName,lName,mail,pass) {
          // const userId = this.usersList.length + 1
          const newUser = {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
              body: JSON.stringify({
              firstName: fName,
              lastName: lName,
              email: mail,
              password: pass,
              juegos: []
              }),
            };
          console.log();
          try {
            const response = await fetch ('https://6380052d2f8f56e28e9a442f.mockapi.io/users',newUser)
            const data = await response.json()
            return data
          } catch (error) {
            return error
          }
        }
      }
  };
</script>