<template>
  <div>
    <Navbar />
    <div>
      <div>
      <!--Audio player-->
      <audio controls autoplay>
        <source src="horse.ogg" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      </div>
      <div>
        <!--Button Motivation-->
        <button type="button" class="btn btn-info">Boost me!</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style>

</style>