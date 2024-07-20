<template>
  <div class="page-container">
    <h1>What Our Customers Said</h1>
    <Carousel />

    <ReviewForm />
  </div>
</template>


<script setup>
import Carousel from '@/components/Carousel.vue'
import ReviewForm from "@/components/ReviewForm.vue";
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
