<template>
  <div class="page-container">
    <h1>What Our Customer Said</h1>
    <Carousel />
  </div>
</template>


<script setup>
import Carousel from './components/Carousel.vue'
</script>

<style scoped>
.page-container {
  width: 1440px;
  margin: 0 auto;
}

h1 {
  margin: 3rem auto;
  text-align: center;
}
</style>
