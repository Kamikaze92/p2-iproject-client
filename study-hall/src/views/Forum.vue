<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row" style="justify-content: center">
        <div class="col-5 mb-4 card my-5" style="width: 40rem; background-color : #b0bec5; opacity: 2">
          <div class="card-body">
              <div class="border-bottom border-3">
                <h5 class="card-title">Asep</h5>
                <p class="card-text">Fisika adalah hal yang menyenangkan?</p>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Budi</h5>
            <p class="card-text">
              Tentu fisika adalah hal yang menyenangkan namun itu juga sulit
            </p>
          </div>
          <div class="card-body">
            <h5 class="card-title">Andhika</h5>
            <p class="card-text">Aku heran ada yang suka fisika</p>
          </div>
          <div class="card-body">
            <h5 class="card-title">Alex</h5>
            <p class="card-text">Fisika sangat sulit</p>
          </div>
          <div>
            <form>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Answer This Question</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                <button class="btn btn-primary mt-2">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div class="card px-3" style="width: 40rem">
          <div class="card-body">
            <h5 class="card-title">Asep</h5>
            <p class="card-text">Fisika adalah hal yang menyenangkan?</p>
          </div>
          <div class="card-body">
            <h5 class="card-title">Budi</h5>
            <p class="card-text">
              Tentu fisika adalah hal yang menyenangkan namun itu juga sulit
            </p>
          </div>
          <div class="card-body">
            <h5 class="card-title">Andhika</h5>
            <p class="card-text">Aku heran ada yang suka fisika</p>
          </div>
          <div class="card-body">
            <h5 class="card-title">Alex</h5>
            <p class="card-text">Fisika sangat sulit</p>
          </div>
          <div>
            <form>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Answer This Question</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                <button class="btn btn-primary mt-2">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Forum",
  components: {
    Navbar,
  },
};
</script>

<style></style>
