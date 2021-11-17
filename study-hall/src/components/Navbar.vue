<template>
  <div>
    <!--Navbar-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <div class="d-flex flex-row-reverse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <button class="btn btn-login">Home</button>
              </li>
              <li class="nav-item">
                <button v-if="isLogin" class="btn btn-login">Ask Everyone</button>
              </li>
              <li class="nav-item">
                <button @click.prevent="login" v-if="!isLogin" class="btn btn-login">Login</button>
              </li>
              <li class="nav-item">
                <button @click.prevent="register" v-if="!isLogin" class="btn btn-login">Register</button>
              </li>
              <li class="nav-item">
                <button @click.prevent="logout" v-if="isLogin" class="btn btn-login">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
          <VueClock class="mt-3"/>
  </div>
</template>

<script>
import VueClock from "@dangvanthanh/vue-clock";
export default {
  name: "Navbar",
  computed: {
      isLogin: function () {
        return this.$store.state.isLogin
      }
    },
    methods: {
      logout: function () {
        localStorage.clear()
        this.$store.commit("SET_LOGIN", false)
        this.$router.push("/login")
      },
      register: function () {
        this.$router.push("/register")
      },
      login: function () {
        this.$router.push("/login")
      }
    },
  components: {
    VueClock,
  },
};
</script>

<style></style>
