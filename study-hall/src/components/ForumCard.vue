<template>
  <div class="row" style="justify-content: center">
    <div
      class="col-5 mb-4 card my-5"
      style="
        width: 40rem;
        background-color: #b2bec3;
        border-radius: 20px;
        box-shadow: 0 10px 8px 3px rgba(0, 0, 0, 0.2);
      "
    >
      <!--TITLE-->
      <div>
        <h2>Thread By {{thread.User.username}}</h2>
        <div class="card-body style">
          <div
            class="border ps-3 pe-3 pb-2"
            style="border-radius: 20px; background-color: #dfe6e9"
          >
            <h5 class="card-title">{{thread.User.username}}</h5>
            <p class="card-text">{{thread.description}}</p>
          </div>
        </div>
      </div>
      <!--Comment-->
      <div>
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
      </div>
      <div>
        <form>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Answer This Thread</label
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
    <div class="col-5 mb-4 card my-5" style="width: 40rem; background-color : #b2bec3; border-radius: 20px; box-shadow: 0 10px 8px 3px rgba(0,0,0,0.2);">
          <!--TITLE-->
          <div>
            <h2>Thread By Asep</h2>
            <div class="card-body style">
                <div class="border ps-3 pe-3 pb-2" style="border-radius: 20px; background-color : #dfe6e9;">
                  <h5 class="card-title">Asep</h5>
                  <p class="card-text">Fisika adalah hal yang menyenangkan?</p>
              </div>
            </div>
          </div>
          <!--Comment-->
          <div>
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
          </div>
          <div>
            <form>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Answer This Thread</label
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
</template>

<script>
export default {
  name: "ForumCard",
  props:['thread']
};
</script>

<style></style>
