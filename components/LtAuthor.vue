<template>
  <div class="profile-container">
    <div class="profile-hero">
      <div class="profile-head">
        <img
          v-if="authorUid"
          :src="'https://crafatar.com/avatars/' + authorUid"
          alt
        />
      </div>
      <div class="profile-info">
        <slot name="info" />
      </div>
    </div>
    <div class="structures-container">
      <div class="title">
        <h2>Structures</h2>
      </div>
      <div class="structures">
        <nuxt-link
          v-if="$nuxt.$route.name === 'profile'"
          to="/structure/add"
          class="structures-add-card"
        >
          <fa :icon="['fas', 'plus']" />
          <span>Add structure</span>
        </nuxt-link>
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
  </div>
</template>

<script>
import LtCard from '@/components/LtCard'

export default {
  components: { LtCard },
  props: {
    authorUid: {
      type: String,
      default: '',
    },
    structures: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.profile-container {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  .profile-hero {
    width: 100%;
    padding: 128px 0px 64px 0px;
    background: rgb(20, 20, 20);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: $breakpoint-phone) {
      flex-direction: column;
      padding: 96px 0px 32px 0px;
    }
    .profile-head {
      width: 120px;
      height: 120px;
      position: relative;
      background: $black;
      border: 1px solid rgba(255, 255, 255, 0.1);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        image-rendering: pixelated;
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: 0 -3px rgba(0, 0, 0, 0.3) inset,
          0 3px rgba(255, 255, 255, 0.5) inset,
          -3px 0 rgba(255, 255, 255, 0.5) inset, 3px 0 rgba(0, 0, 0, 0.3) inset,
          0px 3px 0px 0px rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 100%;
        z-index: 10;
      }
    }
    .profile-info {
      padding-left: 32px;
      color: $white;

      @media screen and (max-width: $breakpoint-phone) {
        padding-left: 0;
        padding-top: 24px;
        text-align: center;
      }

      .profile-username {
        font-weight: 700;
        font-size: 1.4rem;
        padding-bottom: 12px;
      }

      .profile-data {
        padding-bottom: 16px;
      }
    }
  }
  .structures-container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .title {
      width: 100%;
      max-width: $breakpoint-laptop;
      padding: 24px;
      h2 {
        color: $white;
        font-weight: bold;
        font-size: 1.8rem;

        @media screen and (max-width: $breakpoint-phone) {
          font-size: 1.4rem;
        }
      }

      @media screen and (max-width: $breakpoint-phone) {
        padding: 32px 32px 24px 32px;
      }
    }

    .structures {
      padding: 0px 24px 24px 24px;
      width: 100%;
      max-width: $breakpoint-laptop;

      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-rows: auto;
      grid-gap: 24px;

      .structures-add-card {
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.1);
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: $white;
        user-select: none;

        &:focus {
          outline: 2px solid $white;
        }

        svg {
          font-size: 2.4rem;
          margin-bottom: 16px;
        }

        span {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
