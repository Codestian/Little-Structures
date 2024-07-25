<template>
  <nuxt-link class="card-author" :to="`/author?a=${username}`">
    <img :src="`https://crafatar.com/avatars/${minecraftUid}`" alt="" />
    <div class="card-author-info">
      <h3>{{ username }}</h3>
      <h4>{{ structures }} structures</h4>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
      default: '',
    },
    minecraftUid: {
      type: String,
      required: true,
      default: '',
    },
    structures: {
      type: Number,
      required: true,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-author {
  display: flex;
  align-items: center;
  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    margin-right: 16px;
  }
  .card-author-info {
    color: $white;
    h3 {
      font-weight: 700;
      font-size: 1.2rem;
      padding-bottom: 8px;
    }
  }
}
</style>
