<template>
  <div class="author-container">
    <LtAuthor :author-uid="author.minecraft_uid" :structures="structures">
      <template #info>
        <span class="profile-username">{{ author.username }}</span>
        <span class="profile-data"
          >{{ structures.length > 0 ? structures.length : 0 }} structures | 0
          likes</span
        >
      </template>
    </LtAuthor>
  </div>
</template>

<script>
import LtAuthor from '@/components/LtAuthor'

export default {
  loading: false,
  auth: false,
  components: { LtAuthor },
  data: () => ({
    author: {
      minecraft_uid: '',
      username: 'Loading...',
    },
    structures: [],
  }),
  async mounted() {
    if (this.$route.query.a) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      const author = await this.$axios.$get(
        'https://api.littletiles.net/1.0/authors?username=' +
          this.$route.query.a,
        { progress: false }
      )
      const structures = await this.$axios.$get(
        'https://api.littletiles.net/1.0/structures?state=approved&author=' +
          author.data[0].minecraft_uid
      )
      this.author = author.data[0]
      this.structures = structures.data
    } else {
      this.$router.push('/')
    }
  },
  head() {
    return {
      title: `LittleTiles | ${this.author.username}`,
    }
  },
}
</script>

<style scoped>
.author-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
</style>
