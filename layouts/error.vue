<template>
  <div class="error-container">
    <div>
      <h1 style="font-size: 4rem;">:(</h1>
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <nuxt-link to="/">Back to home page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  head() {
    return {
      title: 'LittleTiles | Page not found',
    }
  },
}
</script>

<style lang="scss" scoped>
.error-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: $white;
    font-weight: 700;
    font-size: 2.4rem;
    padding-bottom: 24px;
  }

  a {
    color: $primary;
    text-transform: uppercase;
    font-weight: 700;
  }
}
</style>
