<template>
  <nuxt-link
    v-if="isVisible"
    :class="
      state === 'approved'
        ? 'card card-approved'
        : state === 'pending'
        ? 'card card-pending'
        : 'card card-rejected'
    "
    :to="`/structure?s=${id}`"
  >
    <img :src="image" draggable="false" alt="" />
    <div class="card-info">
      <span class="card-title">{{ title }}</span>
      <nuxt-link tag="span" class="card-author" :to="'/author?a=' + author">
        <img :src="`https://crafatar.com/avatars/${minecraftUid}`" alt="" />
        {{ author }}</nuxt-link
      >
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    author: { type: String, default: '' },
    minecraftUid: { type: String, default: '' },
    image: { type: String, default: '' },
    id: { type: String, default: '' },
    state: { type: String, default: '' },
    isVisible: { type: Boolean, default: true },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  background: black;
  z-index: 1;
  position: relative;
  height: 200px;
  cursor: pointer;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:focus {
    outline: 2px solid $white;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
  }

  .card-info {
    bottom: 16px;
    position: absolute;
    left: 16px;
    color: $white;

    .card-title {
      font-weight: 700;
      font-size: 1.2rem;
      padding-bottom: 8px;
      line-height: 125%;
    }

    .card-author {
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      display: flex;
      align-items: center;

      img {
        width: 24px;
        height: 24px;
        object-fit: cover;
        margin-right: 8px;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8));
  }
}

.card-approved {
  border-left: 5px solid $primary;
}

.card-pending {
  border-left: 5px solid $warning;
}

.card-rejected {
  border-left: 5px solid $danger;
}
</style>
