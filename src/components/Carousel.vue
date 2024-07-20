<template>
    <div class="carousel-wrapper">
        <CarouselCard v-for="cc in 5" :key="cc" />
    </div>
</template>

<script setup>
import CarouselCard from "./CarouselCard.vue";
</script>

<style lang="scss" scoped>
.carousel-wrapper {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    gap: 1rem;
    overflow-x: hidden;
}

</style>