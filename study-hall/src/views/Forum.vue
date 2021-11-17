<template>
  <div>
    <Navbar />
    <div class="container">
        <ForumCard 
        v-for="thread in threads" :key="thread.id" :thread="thread"/>
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
  created: function(){
    this.$store.dispatch("getForum")
  },
  computed: {
    threads: function () {
      return this.$store.state.threads
    }
  }
};
</script>

<style></style>
