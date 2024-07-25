<template>
  <button
    :aria-label="label"
    :class="color"
    :style="{ padding }"
    @click="$emit('click')"
  >
    <fa v-if="icon.length !== 0" :icon="icon" :style="{ fontSize }" />
    <span v-if="text" :style="{ fontSize }">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    fontSize: {
      type: String,
      default: '1rem',
    },
    padding: {
      type: String,
      default: '16px',
    },
    icon: {
      type: Array,
      default: () => [],
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => {
        return (
          ['primary', 'secondary', 'warning', 'danger'].includes(value) !== -1
        )
      },
    },
    label: {
      type: String,
      default: 'button',
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  user-select: none;
  cursor: pointer;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  // &:focus {
  //   outline: 3px solid $white;
  // }

  span {
    font-weight: 700;
    text-transform: uppercase;
    margin: 0px 8px;
  }

  //Inset box shadow effect
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 -3px rgba(0, 0, 0, 0.3) inset,
      0 3px rgba(255, 255, 255, 0.2) inset,
      -3px 0 rgba(255, 255, 255, 0.2) inset, 3px 0 rgba(0, 0, 0, 0.3) inset,
      0px 3px 0px 0px rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
  }
}

.primary {
  background: $primary;
  color: $white;
  text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.4);
}

.secondary {
  background: $light;
  color: $black;
}

.warning {
  background: $warning;
  color: $black;
}

.danger {
  background: $danger;
  color: $white;
  text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.4);
}
</style>
