<template>
  <div class="tag-container">
    <div class="tag-hero">
      <div class="tag-info">
        <h1>#{{ tag }}</h1>
        <span>{{ structures.length }} structures</span>
      </div>
    </div>
    <div class="structures-container">
      <LtCard
        v-for="structure in structures"
        :id="structure.uid"
        :key="structure.uid"
        :title="structure.name"
        :author="structure.author.username"
        :minecraft-uid="structure.author.minecraft_uid"
        :image="
          structure.images[0]
            ? structure.images[0].url
            : 'https://miro.medium.com/max/978/1*pUEZd8z__1p-7ICIO1NZFA.png'
        "
        :state="structure.state"
      />
    </div>
  </div>
</template>

<script>
import LtCard from '@/components/LtCard'

export default {
  loading: false,
  auth: false,
  components: { LtCard },
  data: () => ({
    structures: [],
    tag: '',
  }),
  mounted() {
    if (this.$route.query.t) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      this.tag = this.$route.query.t
      this.getTag()
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    async getTag() {
      const tags = await this.$axios.$get(
        'https://api.littletiles.net/1.0/tags?name=' + this.tag,
        { progress: false }
      )

      if (this.tag === tags.data[0].name) {
        this.getStructuresByTag(tags.data[0].id)
      } else {
        this.$router.push('/')
      }
    },
    async getStructuresByTag(id) {
      const structures = await this.$axios.$get(
        'https://api.littletiles.net/1.0/structures?tag=' + id
      )
      this.structures = structures.data
    },
  },
  head() {
    return {
      title: `LittleTiles | #${this.tag}`,
    }
  },
}
</script>

<style lang="scss" scoped>
.tag-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 64px;
  .tag-hero {
    width: 100%;
    padding: 72px 0px 72px 0px;
    background: rgb(20, 20, 20);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: $breakpoint-phone) {
      flex-direction: column;
      padding: 48px 0px 48px 0px;
    }

    .tag-info {
      color: $white;
      display: flex;
      flex-direction: column;
      text-align: center;

      h1 {
        font-size: 2.2rem;
        font-weight: 700;
        padding-bottom: 16px;

        @media screen and (max-width: $breakpoint-phone) {
          font-size: 2rem;
        }
      }
    }
  }
  .structures-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 24px;
    padding: 36px;
  }
}
</style>
