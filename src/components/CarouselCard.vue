<template>
  <div class="card">
    <div>
      <div class="rating-stars">
        <Star />
      </div>
      <p class="review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum ipsum repellendus aperiam
        qui praesentium quos repellat delectus in incidunt modi impedit quas suscipit, dignissimos illum officiis
        temporibus tempora obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum ipsum repellendus aperiam
        qui praesentium quos repellat delectus in incidunt modi impedit quas suscipit, dignissimos illum officiis
        temporibus tempora obcaecati.</p>
    </div>
    <div class="reviewer">
      <img src="@/assets/images/r1.jpeg" alt="reviewer">
      <div class="reviewer_info">
        <h4>Abdelrahman</h4>
        <span>Software Engineer</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Star from "@/components/icons/Star.vue";
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

  .rating-stars {
    display: flex;
    gap: 0 0.5rem;
  }

  .review {
    margin: 1rem 0;
    line-height: 1.5;
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
