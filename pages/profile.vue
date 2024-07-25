<template>
  <div class="profile-container">
    <LtAuthor :author-uid="loggedInUser.minecraft_uid" :structures="structures">
      <template #info class="profile-info">
        <span class="profile-username">{{ loggedInUser.username }}</span>
        <span class="profile-data"
          >{{ structures.length }} structures | 0 likes</span
        >
        <LtButton
          label="logout"
          text="logout"
          color="danger"
          padding="12px 24px"
          font-size="0.8rem"
          @click="logout"
        />
      </template>
    </LtAuthor>
  </div>
</template>

<script>
import LtAuthor from '@/components/LtAuthor'
import LtButton from '@/components/LtButton'
import { mapGetters } from 'vuex'

export default {
  loading: false,
  components: { LtAuthor, LtButton },
  data: () => ({
    structures: [],
  }),
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  async mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })

    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)

    const structures = await this.$axios.$get(
      'https://api.littletiles.net/1.0/structures?author=' +
        this.loggedInUser.minecraft_uid
    )

    this.structures = structures.data
  },
  methods: {
    logout() {
      this.$router.push('/')
      this.$auth.logout()
    },
    addStructure() {
      this.$router.push('/structure/add')
    },
  },
  head() {
    return {
      title: 'LittleTiles | Profile',
    }
  },
}
</script>

<style lang="scss" scoped>
.profile-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;

  .profile-info {
    button {
      width: 100%;
    }
  }

  .actions {
    button {
      @media screen and (max-width: $breakpoint-phone) {
        width: 100%;
      }
    }
  }
}
</style>
