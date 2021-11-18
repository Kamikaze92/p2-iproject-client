<template>
  <div>
    <div class="bg"></div>
    <Navbar />
    <div class="d-flex justify-content-center align-items-end">
      <div class="row">
        <AudioPlayer />
      </div>
      <!--Button Motivation-->
      <div class="row ms-3 align-items-center mb-2">
        <button @click.prevent="showQuote" type="button" class="btn btn-dark mt-3">
          Boost me!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AudioPlayer from "../components/AudioPlayer.vue";
import Navbar from "../components/Navbar.vue";
import Swal from "sweetalert2";

export default {
  name: "Home",
  components: {
    Navbar,
    AudioPlayer,
  },
  methods: {
    showQuote: function () {
      this.$store
        .dispatch("showQuote")
        .then(({ data }) => {
          Swal.fire({
            title: "Have some Boost",
            text: data,
            imageUrl:
              "https://i0.wp.com/dariusforoux.com/wp-content/uploads/2015/08/motivational-quotes.png?fit=2048%2C1536&ssl=1",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
          });
        })
        .catch((err) => {
          Swal.fire({
          icon: "error",
          title: "Oops..",
          text: err.response.data
        });
        });
    },
  },
};
</script>

<style scoped>
.bg{
  background-image: url("https://wallpapercave.com/wp/wp8422895.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
}
</style>

