<template>
    <div class="carousel-wrapper">
        <div class="cards">
            <CarouselCard v-for="cc in 15" :key="cc" />
        </div>
        <div class="navigation">
            <span class="arrows left-arrow" @click="scrollLeft">&larr;</span>
            <span class="arrows right-arrow" @click="scrollRight">&rarr;</span>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import CarouselCard from "./CarouselCard.vue";

const carouselWrapper = ref(null);

onMounted(() => {
  carouselWrapper.value = document.querySelector(".carousel-wrapper .cards");

})

const scrollLeft = () => {
  carouselWrapper.value.scrollLeft -= 316;
  carouselWrapper.value.scrollLeft === 0;
};

const scrollRight = () => {
  carouselWrapper.value.scrollLeft += 316;
  carouselWrapper.value.scrollLeft === 0;
};
</script>

<style lang="scss" scoped>
.carousel-wrapper {
    width: 1400px;
    
    .cards {
        display: flex;
        gap: 1rem;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    .navigation {
        margin-top: 2rem;
        display: flex;
        justify-content: end;
        gap: 1rem;

        .arrows {
            font-size: 28px;
            font-weight: bold;
            border: 1px solid #e3e3e3;
            border-radius: 50%;
            height: 32px;
            width: 32px;
            line-height: 0.7;
            cursor: pointer;
        }
    }
}


</style>