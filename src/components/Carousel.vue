<template>
    <div class="carousel-wrapper">
        <div class="cards" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
            <CarouselCard v-for="review in reviewsStore?.getReviews" :key="review.id" :review="review" />
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
import { useReviewsStore } from "@/stores/reviews";
import { useHandleTouchEvents } from "@/composables/touchEvents";

const carouselWrapper = ref(null);
const reviewsStore = useReviewsStore();
const { handleTouchStart, handleTouchMove, handleTouchEnd } = useHandleTouchEvents(scrollLeft, scrollRight);

onMounted(() => {
  carouselWrapper.value = document.querySelector(".carousel-wrapper .cards");

})

function scrollLeft() {
  carouselWrapper.value.scrollLeft -= 316;
  carouselWrapper.value.scrollLeft === 0;
};

function scrollRight() {
  carouselWrapper.value.scrollLeft += 316;
  carouselWrapper.value.scrollLeft === 0;
};
</script>

<style lang="scss" scoped>
.carousel-wrapper {
    // width: 1400px;
    
    .cards {
        display: flex;
        gap: 1rem;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    .navigation {
        margin: 2rem 1rem 0;
        display: flex;
        justify-content: end;
        gap: 1rem;

        .arrows {
            font-size: 18px;
            font-weight: bold;
            border: 1px solid #e3e3e3;
            border-radius: 50%;
            height: 32px;
            width: 32px;
            line-height: 1.7;
            cursor: pointer;
            text-align: center;
        }
    }
}


</style>