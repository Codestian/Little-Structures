<template>
  <div
    v-if="isModalOpen"
    :id="id"
    class="modal-container"
    @click="closeModal($event)"
  >
    <slot name="modal" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'modal',
      required: true,
    },
    isModalOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  methods: {
    closeModal(e) {
      if (e.target.id === this.id) {
        this.$emit('closeModal')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-container {
  width: 100%;
  height: calc(100% + 64px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px 64px 16px;
  transition: all 0.35s ease;
}
</style>
