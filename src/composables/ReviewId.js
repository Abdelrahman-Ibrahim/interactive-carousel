import { ref } from "vue";

const reviewId = ref(0);

export function useReviewId() {
  return {
    reviewId,
  }
}