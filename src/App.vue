<template>
  <div class="page-container">
    <h1 class="section-title">What Our Customers Said</h1>
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
  width: 80%;
  margin: 0 auto;
}

.section-title {
  font-weight: bold;
  color: #405391;
  margin: 3rem auto;
  text-align: center;
}
</style>
