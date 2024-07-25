<template>
  <div class="comments-container">
    <div class="comments-author">
      <img
        :src="'https://crafatar.com/avatars/' + minecraftUid"
        alt=""
        class="comments-author-head"
      />
      <nuxt-link :to="'/author?a=' + username" class="comments-author-name">{{
        username
      }}</nuxt-link>
    </div>
    <p class="comments-description">
      {{ description }}
    </p>
    <div class="comments-date">{{ dateCreated }}</div>
  </div>
</template>

<script>
export default {
  props: {
    minecraftUid: {
      type: String,
      required: true,
      default: '',
    },
    username: {
      type: String,
      required: true,
      default: '',
    },
    description: {
      type: String,
      required: true,
      default: '',
    },
    dateCreated: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.comments-container {
  width: 100%;
  padding-bottom: 24px;

  .comments-author {
    display: flex;
    align-items: center;
    padding-bottom: 16px;

    .comments-author-head {
      width: 24px;
      height: 24px;
      object-fit: cover;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .comments-author-name {
      color: $primary;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      display: inline-block;
      padding-left: 12px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .comments-description {
    color: $white;
    line-height: 150%;
    padding-bottom: 16px;
    font-size: 0.8rem;
  }

  .comments-date {
    color: $primary;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-weight: 700;
    font-size: 0.8rem;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
