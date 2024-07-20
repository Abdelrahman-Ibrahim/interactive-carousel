<template>
  <div>
    <header>
      <Logo />
    </header>
    <div class="page-container">
      <h1 class="section-title">What Our Customers Said</h1>
      <Carousel />

      <ReviewForm />
    </div>
  </div>
</template>


<script setup>
import Logo from "@/components/icons/Logo.vue";
import Carousel from '@/components/Carousel.vue'
import ReviewForm from "@/components/ReviewForm.vue";
</script>

<style scoped>
header {
  background-color:  #fff;
  text-align: center;
  padding: 20px 32px 20px 32px;
}

.page-container {
  margin: 6rem auto 4rem 1rem;
}

.section-title {
  font-weight: bold;
  color: #405391;
  margin: 3rem auto;
  text-align: center;
}
</style>
