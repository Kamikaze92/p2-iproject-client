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
          <CommentCard />
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
import CommentCard from "../components/CommentCard.vue";
export default {
  name: "Forum",
  components: {
    Navbar,
    CommentCard
  },
};
</script>

<style></style>
