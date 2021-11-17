<template>
    <!--Form Login-->
    <div class="login-form">
      <div class="container">
        <div class="row" style="justify-content: center">
          <div class="col-5 mb-4" style="margin-top: 7%">
            <div style="text-align: center">
              <h3>Login</h3>
              <h6 class="fw-light">Login to access your account</h6>
            </div>
            <form @submit.prevent="login">
              <!--Email-->
              <div>
                <label for="login-email" class="form-label"
                  >Email Address</label
                >
                <input
                  v-model="email"
                  type="text"
                  class="form-control"
                  id="login-email"
                  name="email"
                  placeholder="JhonnyDoe@gmail.com"
                />
              </div>
              <!--Password-->
              <div class="mt-3">
                <label for="login-password" class="form-label">Password</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="login-password"
                  name="password"
                  placeholder="Your Secret Password"
                />
              </div>
              <div class="d-grid gap-2 col-12 mt-3">
                <button
                  class="btn"
                  type="submit"
                  style="background-color: #039be5; color: whitesmoke"
                >
                  Login
                </button>
              </div>
              <div class="mt-3 fw-light" style="text-align: center">
                <p>
                  Don't have an account yet?
                  <a href="" style="text-decoration: none">Register</a>
                </p>
                <p>Or Login with</p>
                <center>
                  <!-- SPotify Login-->
                  <p>SPOTIFY LOGIN</p>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data: function(){
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function(){
        const payload = {
          email: this.email,
          password: this.password,
        }
        this.$store.dispatch("login", payload)
        .then(({ data }) => {
          console.log(data);
          localStorage.setItem("access_token", data.access_token)
          localStorage.setItem("email", data.email)
          localStorage.setItem("id", data.id)
          localStorage.setItem("username", data.username)
          this.$store.commit("SET_IS_LOGIN", true)
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
}
</script>

<style>

</style>