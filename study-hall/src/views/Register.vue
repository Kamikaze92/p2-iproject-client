<template>
  <div>
    <!--Form Register-->
    <div class="register-form">
      <div class="container">
        <div class="row" style="justify-content: center">
          <div class="col-5 mb-4" style="margin-top: 5%">
            <form >
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
export default {
    name: 'Register'
}
</script>

<style>

</style>