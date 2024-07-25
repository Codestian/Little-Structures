<template>
  <transition name="fade">
    <div v-if="toast.isOpen" class="toast-container">
      <div class="toast-left">
        <fa
          v-if="toast.tag == 'Success'"
          class="toast-left-success"
          :icon="['fas', 'check']"
        />
        <fa
          v-if="toast.tag == 'Warning'"
          class="toast-left-warning"
          :icon="['fas', 'exclamation-triangle']"
        />
        <fa
          v-if="toast.tag == 'Alert'"
          class="toast-left-danger"
          :icon="['fas', 'exclamation-triangle']"
        />
      </div>
      <div class="toast-right">
        <p class="title">{{ toast.tag }}</p>
        <p class="description">{{ toast.description }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['toast']),
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.toast-container {
  max-width: 420px;
  width: 100%;
  margin-bottom: 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 1600;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: $white;
  display: flex;

  @media screen and (max-width: $breakpoint-phone) {
    margin: 8px;
    width: calc(100% - 16px);
  }

  .toast-left {
    min-height: 72px;
    width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
  }

  .toast-left-success {
    color: $primary;
  }

  .toast-left-danger {
    color: $danger;
  }

  .toast-left-warning {
    color: $warning;
  }

  .toast-right {
    flex: 1;
    padding: 16px 16px 16px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      font-weight: 700;
      padding-bottom: 4px;
    }

    .description {
      font-weight: 700;
      line-height: 150%;
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0.95);
  margin-bottom: -12px;
}
</style>
