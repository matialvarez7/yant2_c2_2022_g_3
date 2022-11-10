<template>
<div>
<!--class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register"-->
    <form @submit="formValidate"
    novalidate="true">
  <!-- 2 column grid layout with text inputs for the first and last names -->
        <div class="row mb-4">
            <div class="col">
                <div class="form-outline">
                    <input type="text" v-model="firstName" id="fName" class="form-control" />
                        <label class="form-label" for="fName">First name</label>
                </div>
            </div>
            <div class="col">
                <div class="form-outline">
                    <input type="text" v-model="lastName" id="fLname" class="form-control" />
                        <label class="form-label" for="fLname">Last name</label>
                </div>
            </div>
        </div>

  <!-- Email input -->
                <div class="form-outline mb-4">
                    <input type="email" v-model="email" id="form3Example3" class="form-control" />
                        <label class="form-label" for="form3Example3">Email address</label>
                </div>

  <!-- Password input -->
                <div class="form-outline mb-4">
                    <input type="password" id="fPassw" class="form-control" />
                        <label class="form-label" for="fPass">Password</label>
                </div>

                <!-- Errors -->
                <p v-if="errors.length">
                <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                <ul>
                <li v-for="error in errors" :key="error.id">{{ error }}</li>
                </ul>
                </p>

  <!-- Checkbox -->
                <!-- <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                        <label class="form-check-label" for="form2Example33">
                            Subscribe to our newsletter
                        </label>
                </div> -->

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>
    </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      email: null,
      firstName: null,
      lastName: null,
    };
  },
  methods: {
    formValidate: function (e) {
      this.errors = [];

      if (!this.firstName) {
        this.errors.push("El nombre es obligatorio.");
      }
      if (!this.firstName) {
        this.errors.push("El apellido es obligatorio.");
      }
      if (!this.email) {
        this.errors.push("El correo electrónico es obligatorio.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("El correo electrónico debe ser válido.");
      }

      if (!this.errors.length) {
        this.$swal(
                    'Bien hecho!!!',
                    'Gracias por unirte a Vaporcito',
                    'success'
                        )
        this.$router.push("/Login");
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>