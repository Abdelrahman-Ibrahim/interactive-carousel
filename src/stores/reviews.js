import { defineStore } from 'pinia';
import { reviewsList } from '@/data/reviewsList';


export const useReviewsStore = defineStore('reviewsStore', {
  state: () => {
    return { reviews: reviewsList }
  },

  getters: {
    getReviews (state) {
        return state.reviews;
    }
  },

  actions: {
    addReview(review) {
        this.reviews.push(review);
    },
    editReview(index, review) {
        this.reviews[index] = review;
    }

  },
})