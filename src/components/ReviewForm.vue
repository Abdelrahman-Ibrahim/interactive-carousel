<template>
    <div class="review-form">
        <h3 class="section-title">Add / Edit Review Card</h3>
        <form class="form" @submit.prevent="submitForm">
            <input v-model="formObj.name" name="name" type="text" placeholder="Name" />
            <input v-model="formObj.jobTitle" name="job" type="text" placeholder="Job Title" />
            <input v-model="formObj.rating" name="rating" type="number" placeholder="Rate from 1:5" />
            <textarea v-model="formObj.review" name="review" type="text" placeholder="Review" />
            <button type="submit">{{ editMode ? "Edit" : "Save" }}</button>
        </form>

    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useReviewsStore } from "@/stores/reviews";
import { cloneDeep } from "@/utils/objects.js";
import { useReviewId } from "@/composables/ReviewId.js";


const { reviewId } = useReviewId();
const reviewsStore = useReviewsStore();
const editMode = ref(false)
const reviewIndex = ref(-1);
const formObj = ref({
    name: "",
    jobTitle: "",
    rating: null,
    review: ""
});

watch(
    () => reviewId,
    () => {
        reviewIndex.value = reviewsStore.getReviews.findIndex(
            review => review.id === reviewId.value
        );
        
    if (reviewIndex.value >= 0) {
      formObj.value = cloneDeep(reviewsStore.getReviews[reviewIndex.value]);
      editMode.value = true;
    }
  },
  { deep: true }
);


function addReview () {
    const d = new Date();
    formObj.value.id = d.getMinutes() * d.getSeconds();
    reviewsStore.addReview(formObj.value);
    formObj.value = {};
}

function editReview() {
    reviewsStore.editReview(reviewIndex.value, formObj.value);
    editMode.value = false;
    formObj.value = {};
}

function submitForm() {
    editMode.value ? editReview() : addReview();
}

</script>

<style lang="scss" scoped>
.review-form {
    margin: 4rem 1rem;
}
.section-title {
     font-weight: bold;
}
.form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
    font-size: 16px;

    input, textarea {
        padding: 1rem;
        border: 1px solid #e3e3e3;
        border-radius: 8px;
        font-size: inherit;
    }

    textarea {
        resize: vertical;
    }

    button[type="submit"] {
        padding: 1rem;
        border: none;
        border-radius: 8px;
        background: #1570EF;
        color: #fff;
        font-weight: bold;
        font-size: inherit;
        cursor: pointer;

        &:hover {
            background: #2D7FF0;
        }
    }
}

</style>