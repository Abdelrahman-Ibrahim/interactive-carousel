<template>
  <div class="card">
    <div>
      <div class="card_header">
        <div class="rating-stars">
          <Star v-for="star in Math.round(review.rating)" :key="star"/>
        </div>
        <span class="edit" @click="editReview">&#9998;</span>
      </div>
      <p class="review">{{ review?.review }}</p>
    </div>
    <div class="reviewer">
      <img src="@/assets/images/r1.jpeg" alt="reviewer">
      <div class="reviewer_info">
        <h4>{{ review?.name }}</h4>
        <span>{{ review?.jobTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Star from "@/components/icons/Star.vue";
import { useReviewId } from "@/composables/ReviewId.js";

const { reviewId } = useReviewId();
const props = defineProps({
  review: {
    type: Object,
    default: () => {
      return {}
    }
  }
});

function editReview() {
  reviewId.value = props.review.id;
}

</script>

<style lang="scss" scoped>
.card {
  width: 300px;
  background-color: #F2F4F7;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  flex: none;

  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .edit {
      cursor: pointer;
    }
  }

  .rating-stars {
    display: flex;
    gap: 0 0.5rem;
  }

  .review {
    margin: 1rem 0;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    word-break: break-word;

  }

  .reviewer {
    display: flex;
    align-items: center;
    
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      margin-inline-end: 0.75rem;
    }

    &_info {
      h4 {
        margin-bottom: 0.25rem;
        font-weight: bold;
      }
      span {
        color: #667085;
      }
    }

  }

}
</style>
