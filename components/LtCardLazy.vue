<template>
  <div v-if="isVisible" class="card-lazy">
    <div class="lazy-title"></div>
    <div class="lazy-author"></div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-lazy {
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-left: 5px solid rgba(255, 255, 255, 0.1);
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .lazy-title {
    width: 75%;
    height: 20px;
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .lazy-author {
    width: 50%;
    height: 16px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
