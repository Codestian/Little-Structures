<template>
  <div class="wiki-container">
    <div class="wiki">
      <h1>LittleTiles Wiki</h1>
      <nuxt-link v-for="(page, index) in arr" :key="index" :to="page.path"
        >- {{ page.name }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  loading: false,
  auth: false,
  async asyncData({ $content }) {
    const pages = await $content('wiki').fetch()

    const arr = pages.map((page) => {
      return {
        path: page.path,
        name: page.slug,
      }
    })

    return {
      arr,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  head() {
    return {
      title: `LittleTiles | Wiki`,
    }
  },
}
</script>

<style lang="scss" scoped>
.wiki-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 64px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .wiki {
    padding: 24px;
    width: 100%;
    max-width: $breakpoint-laptop;
    color: $white;
    display: flex;
    flex-direction: column;

    h1 {
      padding: 8px 0px;
      line-height: 150%;
      font-weight: 700;
      font-size: 1.6rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    a {
      padding: 12px;
      color: $white;

      &:first-of-type {
        padding-top: 32px;
      }
    }
  }
}
</style>
