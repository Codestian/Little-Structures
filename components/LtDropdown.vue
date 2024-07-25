<template>
  <div class="dropdown">
    <div class="selected">
      <span class="dropdown-name">{{ name }}:</span>
      <span class="dropdown-selected">{{ items[0] }}</span>
      <fa style="margin-left: 8px;" :icon="['fas', 'chevron-down']" />
    </div>
    <!-- <div class="options">
      <span v-for="(item, index) in items" :key="index">{{ item }}</span>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
      default: '',
    },
    items: {
      required: true,
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  width: max-content;
  z-index: 50;
  margin-right: 12px;

  .selected {
    background: $black;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 12px;
    display: flex;
    cursor: pointer;

    .dropdown-name,
    .dropdown-selected,
    svg {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.8rem;
    }

    .dropdown-name {
      color: rgba(255, 255, 255, 0.6);
      margin-right: 8px;
    }

    .dropdown-selected,
    svg {
      color: $white;
    }
  }

  .options {
    width: 100%;
    position: absolute;
    margin-top: 6px;
    background: $black;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 16px;

    span {
      color: $white;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.8rem;
      padding: 16px 12px 0px 12px;
      cursor: pointer;
    }
  }
}
</style>
