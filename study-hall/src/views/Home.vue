<template>
  <div>
    <Navbar />
    <div class="d-flex justify-content-center align-items-end">
      <div class="row">
        <AudioPlayer />
      </div>
      <!--Button Motivation-->
      <div class="row ms-3 align-items-center mb-2">
        <button @click.prevent="showQuote" type="button" class="btn btn-info">
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
          console.log(data);
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
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
