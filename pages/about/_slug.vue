<template>
  <div class="about-md-container">
    <article class="about-md">
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  auth: false,
  async asyncData({ $content, params }) {
    const page = await $content('about', params.slug).fetch()

    return {
      page,
    }
  },
  head() {
    return {
      title: `LittleTiles | ${this.page.slug}`,
    }
  },
}
</script>

<style lang="scss">
.about-md-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 64px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .about-md {
    padding: 24px;
    width: 100%;
    max-width: $breakpoint-laptop;
    color: $white;
    overflow-x: auto;

    h1 {
      padding: 8px 0px;
      line-height: 150%;
      font-weight: 700;
      font-size: 1.6rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    h2 {
      padding: 8px 0px;
      line-height: 150%;
      font-weight: 700;
      font-size: 1.4rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    h3 {
      padding: 8px 0px;
      line-height: 150%;
      font-weight: 700;
      font-size: 1.2rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    p {
      padding: 16px 0px;
      line-height: 150%;

      &:first-of-type {
        img {
          width: 72px;
        }
      }
    }

    img {
      width: 480px;
      max-width: 100%;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    table {
      background: rgba(0, 0, 0, 0.6);

      th {
        font-weight: 700;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      th,
      td {
        padding: 16px;
        line-height: 150%;
      }
    }
  }
}
</style>
