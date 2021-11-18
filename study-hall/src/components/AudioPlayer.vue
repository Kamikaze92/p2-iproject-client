<template>
  <div>
      <div>
    <!--Audio player-->
    <audio controls autoplay>
      <source src="horse.ogg" type="audio/ogg" />
      <source src="horse.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AudioPlayer'
}
</script>

<style>

</style>