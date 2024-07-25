<template>
  <div>
    <nav>
      <div class="nav-container">
        <div class="left">
          <div style="display: flex;">
            <img src="@/assets/icon.png" />
            <nuxt-link to="/">LittleTiles<span>Beta</span></nuxt-link>
          </div>
          <LtButton
            label="toggle navigation menu"
            :icon="['fas', 'bars']"
            font-size="0.8rem"
            padding="0px"
            @click="toggleMenu"
          />
        </div>
        <div id="nav-right" class="right">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/download">Download</nuxt-link>
          <nuxt-link to="/wiki">Wiki</nuxt-link>
          <nuxt-link to="/about">About</nuxt-link>
          <LtButton
            id="primary-btn"
            :label="isAuthenticated ? 'profile' : 'login'"
            :text="isAuthenticated ? loggedInUser.username : 'Login'"
            padding="12px 24px"
            font-size="0.8rem"
            @click="clickButton"
          />
        </div>
      </div>
    </nav>
    <div class="nav-overlay" @click="closeMenu"></div>
  </div>
</template>

<script>
import LtButton from '@/components/LtButton'
import { mapGetters } from 'vuex'

export default {
  components: { LtButton },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  methods: {
    toggleMenu() {
      const nav = document.querySelector('nav')
      const navRight = document.querySelector('#nav-right')
      const navOverlay = document.querySelector('.nav-overlay')
      if (nav.classList.length > 0) {
        nav.classList.remove('nav-mobile')
        navRight.classList.remove('nav-right-flex')
        navOverlay.classList.remove('nav-overlay-display')
      } else {
        nav.classList.add('nav-mobile')
        navRight.classList.add('nav-right-flex')
        navOverlay.classList.add('nav-overlay-display')
      }
    },
    clickButton() {
      const primaryBtn = document.querySelector('#primary-btn')
      primaryBtn.blur()

      if (this.isAuthenticated) {
        this.$router.push({ path: '/profile' })
      } else {
        this.$router.push({ path: '/login' })
      }
    },
    closeMenu() {
      const nav = document.querySelector('nav')
      const navRight = document.querySelector('#nav-right')
      const navOverlay = document.querySelector('.nav-overlay')

      nav.classList.remove('nav-mobile')
      navRight.classList.remove('nav-right-flex')
      navOverlay.classList.remove('nav-overlay-display')
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;

  display: flex;
  justify-content: center;

  @supports (backdrop-filter: blur()) {
    backdrop-filter: blur(16px);
    background: rgba(0, 0, 0, 0.8);
  }

  @supports not (backdrop-filter: blur()) {
    background: rgba(0, 0, 0, 1);
  }

  z-index: 1000;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .nav-container {
    width: 100%;
    max-width: $breakpoint-laptop;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;

    @media screen and (max-width: $breakpoint-tablet) {
      flex-direction: column;
      justify-content: flex-start;
    }

    .left {
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: max-content;
      img {
        width: 24px;
        height: 24px;
        object-fit: cover;
      }
      a {
        color: $white;
        font-weight: 700;
        user-select: none;
        cursor: pointer;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        padding-left: 8px;

        span {
          padding-left: 6px;
          font-weight: 700;
          color: $primary;
          font-size: 0.8rem;
          text-transform: uppercase;
        }
      }

      button {
        display: none;
        height: 40px;
        width: 40px;

        @media screen and (max-width: $breakpoint-tablet) {
          display: block;
        }
      }

      @media screen and (max-width: $breakpoint-tablet) {
        width: 100%;
      }
    }

    .right {
      display: flex;
      flex-direction: row;
      align-items: center;
      a {
        color: $white;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.8rem;
        user-select: none;
        text-align: center;

        padding: 8px;
        margin: 0px 24px 0px 0px;

        &:hover {
          text-decoration: underline;
        }

        @media screen and (max-width: $breakpoint-tablet) {
          margin: 0px 0px 12px 0px;
          width: 100%;
        }
      }

      button {
        @media screen and (max-width: $breakpoint-tablet) {
          width: 100%;
          margin-bottom: 16px;
        }
      }

      @media screen and (max-width: $breakpoint-tablet) {
        flex-direction: column;
        width: 100%;
        display: none;
      }
    }
  }
}

.nav-overlay {
  position: absolute;
  width: 100%;
  height: calc(100% + 64px);
  background: rgba(0, 0, 0, 0.9);
  z-index: 900;
  display: none;
}

@media screen and (max-width: $breakpoint-tablet) {
  .nav-mobile {
    height: auto;
    border-bottom: 1px solid $primary;
  }
  .nav-right-flex {
    display: flex !important;
  }
  .nav-overlay-display {
    display: block;
  }
}
</style>
