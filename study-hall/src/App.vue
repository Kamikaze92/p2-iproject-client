<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created: function () {
    if (localStorage.getItem("access_token")){
      this.$store.commit("SET_IS_LOGIN", true)
    }
  }
};
</script>

<style></style>
