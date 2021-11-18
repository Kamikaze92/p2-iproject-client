<template>
  <div>
    <!--Form Register-->
    <div class="register-form">
      <div class="container">
        <div class="row" style="justify-content: center">
          <div class="col-5 mb-4" style="margin-top: 5%">
            <form @submit.prevent="register">
              <div style="text-align: center">
                <h3>Register</h3>
                <h6 class="fw-light">
                  Please fill in this form to create an account.
                </h6>
              </div>
              <div class="mt-3">
                <!--Username-->
                <label for="register-username" class="form-label"
                  >Username</label
                >
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  id="register-username"
                  name="username"
                  placeholder="Jhonny Doe"
                />

                <!--Email-->
                <label for="register-email" class="form-label"
                  >Email Address</label
                >
                <input
                v-model="email"
                  type="text"
                  class="form-control"
                  id="register-email"
                  name="email"
                  placeholder="JhonnyDoe@gmail.com"
                />

                <!--Password-->
                <label for="register-password" class="form-label"
                  >Password</label
                >
                <input
                v-model="password"
                  type="password"
                  class="form-control"
                  id="register-password"
                  name="password"
                  placeholder="Your Secret Password"
                />
              <div class="d-grid gap-2 col-12 mt-3">
                <button
                  class="btn"
                  type="submit"
                  style="background-color: #039be5; color: whitesmoke"
                >
                  Register
                </button>
              </div>

              <div class="mt-3 fw-light" style="text-align: center">
                <p>
                  Already have an account yet?
                  <a
                    @click.prevent="login"
                    href=""
                    style="text-decoration: none"
                    >Login</a
                  >
                </p>
                <p>Or Login with</p>
                <center>
                  <!-- SPotify Login-->
                  <p>SPOTIFY LOGIN</p>
                </center>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from  'sweetalert2'
export default {
    name: 'Register',
    data: function() {
      return {
        username: '',
        email: '',
        password: ''
      }
    },
    methods: {
      register: function () {
        const payload = {
        username: this.username,
        email: this.email,
        password: this.password
        }
        this.$store.dispatch("register", payload)
        .then(() => {
          Swal.fire({
            icon: 'success',
            text: 'register success'
          })
          this.$router.push('/login')
        })
        .catch((err) => {
         Swal.fire({
            icon: 'error',
            text: err.response.message || "something wrong"
          }) 
        })
      },
      login: function () {
        this.$router.push("/login")
      }
    }
}
</script>

<style>

</style>