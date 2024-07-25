<template>
  <div class="structure-container">
    <div class="structure">
      <div class="structure-navigation">
        <LtButton
          label="back to previous page"
          :icon="['fas', 'chevron-left']"
          @click="goBack"
        />
        <div class="content-top">
          <slot name="top" />
        </div>
      </div>
      <div class="structure-content">
        <div class="content-left">
          <slot name="left" />
        </div>
        <div class="content-right">
          <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LtButton from '@/components/LtButton'

export default {
  components: { LtButton },
  props: {
    prevPath: { type: String, default: '' },
  },
  mounted() {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  },
  methods: {
    goBack() {
      window.history.back()
    },
  },
}
</script>

<style lang="scss" scoped>
.structure-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  .structure {
    width: 100%;
    max-width: $breakpoint-laptop;
    height: 100%;
    min-height: 100vh;
    padding: 64px;
    @media screen and (max-width: $breakpoint-tablet) {
      padding: 64px 24px 24px 24px;
    }
    .structure-navigation {
      width: 100%;
      height: 86px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        width: 48px;
        height: 48px;
      }
    }
    .structure-content {
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: row;

      @media screen and (max-width: $breakpoint-tablet) {
        flex-direction: column;
        align-items: center;
      }
      .content-left {
        width: 360px;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: $breakpoint-phone) {
          width: 100%;
        }
      }
      .content-right {
        width: 100%;
        flex: 1;
        padding-left: 32px;
        @media screen and (max-width: $breakpoint-tablet) {
          padding-left: 0px;
        }
      }
    }
  }
}
</style>
