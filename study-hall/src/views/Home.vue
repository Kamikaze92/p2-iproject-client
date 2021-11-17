<template>
  <div>
    <Navbar />
    <div class="d-flex justify-content-center align-items-end">
      <div class="row">
        <AudioPlayer />
      </div>
      <!--Button Motivation-->
      <div class = "row ms-3 align-items-center mb-2">
      <button type="button" class="btn btn-info">Boost me!</button>
      </div>
    </div>
  </div>
</template>

<script>
import AudioPlayer from "../components/AudioPlayer.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    AudioPlayer,
  },
};
</script>

<style></style>
