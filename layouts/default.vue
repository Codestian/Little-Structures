<template>
  <div class="default-container">
    <LtToolbar />
    <Nuxt />
    <div
      v-if="watermarkDisplay"
      class="watermark"
      @click="watermarkDisplay = false"
    >
      <span
        >LittleTiles Beta Build 0.9.0<br />User interface is subject to
        changes.<br />Click to hide watermark.</span
      >
    </div>
    <LtToast />
    <LtFooter />
  </div>
</template>

<script>
import LtToolbar from '@/components/LtToolbar'
import LtToast from '@/components/LtToast'
import LtFooter from '@/components/LtFooter'

export default {
  components: { LtToolbar, LtToast, LtFooter },
  data: () => ({
    watermarkDisplay: true,
  }),
}
</script>

<style lang="scss" scoped>
.default-container {
  width: 100%;
  min-height: 100vh;
  background: $secondary;
}

.watermark {
  position: fixed;
  bottom: 0;
  right: 0;
  color: $white;
  padding: 16px;
  text-align: right;
  z-index: 90000000;
  user-select: none;
  cursor: pointer;
  span {
    line-height: 150%;
    font-size: 0.8rem;
  }
}
</style>
