<template>
  <div class="pagination">
    <LtButton
      :icon="['fas', 'chevron-left']"
      label="Previous page"
      @click="$emit('prev-click')"
    />
    <span>{{ paginationNo }}</span>
    <LtButton
      :icon="['fas', 'chevron-right']"
      label="Next page"
      @click="$emit('next-click')"
    />
  </div>
</template>

<script>
import LtButton from '@/components/LtButton'

export default {
  components: { LtButton },
  props: {
    paginationNo: {
      type: Number,
      default: 0,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0px 0px 0px;

  span {
    color: $white;
    font-size: 1.4rem;
    font-weight: 700;
    padding: 0px 24px;
  }

  button {
    width: 40px;
    height: 40px;
  }
}
</style>
