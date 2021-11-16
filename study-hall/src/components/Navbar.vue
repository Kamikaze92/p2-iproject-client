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
                <button class="btn btn-login" 
                  >Ask Everyone</button
                >
              <li class="nav-item">
                <button class="btn btn-login" 
                  >Login</button
                >
              </li>
              <li class="nav-item">
                <button class="btn btn-login"
                  >Register</button
                >
              </li>
              <li class="nav-item">
                <button class="btn btn-login"
                  >Logout</button
                >
              </li>
              <li class="nav-item">
                  <div>
                <VueClock />
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import VueClock from '@dangvanthanh/vue-clock';
export default {
    name: 'Navbar',
    components: {
        VueClock,

    }
}
</script>

<style>

</style>