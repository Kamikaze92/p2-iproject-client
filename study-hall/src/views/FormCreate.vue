<template>
  <div class="create-form">
    <div class="container">
      <div class="row" style="justify-content: center">
        <div class="col-6 mb-4" style="margin-top: 8%">
          <form @submit.prevent="createForm">
            <div style="text-align: center">
              <h3>Create Thread</h3>
              <h6 class="fw-light">
                Please fill in this form to create a Thread.
              </h6>
            </div>
            <div class="mt-3">
              <!--Facility-->
              <label for="add-description" class="form-label">Description</label>
              <textarea
                v-model="description"
                type="text"
                class="form-control"
                id="add-description"
                name="description"
                placeholder="Write your Thread"
              ></textarea>
            </div>
            <div class="row">
              <div
                class="column d-flex justify-content-between"
                style="padding: 5%"
              >
                <button
                  @click.prevent="goBack"
                  class="btn col-5"
                  type="submit"
                  style="background-color: #9e9e9e; color: whitesmoke"
                >
                  Cancel
                </button>
                <button
                  class="btn col-5"
                  type="submit"
                  style="background-color: #039be5; color: whitesmoke"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: 'FormCreate',
    data: function() {
      return {
        description: ''
      }
    },
    methods: {
      goBack: function () {
        this.$router.push('/forum')
      },
      createForm: function () {
        const payload = {
          description: this.description
          
        }
        this.$store.dispatch('createForm', payload)
      .then(({ data }) => {
        Swal.fire({
          icon: 'success',
          text: data.message
        })
        this.$router.push('/forum')
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: err.response.data
        });
      })
      }
    }
}
</script>

<style>

</style>