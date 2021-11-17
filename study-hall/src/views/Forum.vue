<template>
  <div>
    <Navbar />
    <div class="container">
        <ForumCard />
    </div>
  </div>
</template>

<script>
import ForumCard from '../components/ForumCard.vue';
import Navbar from "../components/Navbar.vue";
export default {
  name: "Forum",
  components: {
    Navbar,
    ForumCard
  },
};
</script>

<style></style>
