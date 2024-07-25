<template>
  <div>
    <textarea
      :value="data"
      placeholder="Place structure code here..."
      cols="30"
      rows="10"
      class="structure-data"
      spellcheck="false"
      @input="structureDataValidate($event.target.value)"
    ></textarea>
    <span
      :class="
        checkStructure.hasError
          ? 'structure-data-check check-fail'
          : 'structure-data-check check-success'
      "
      >{{ checkStructure.text }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    checkStructure: {
      text: 'Structure text required',
      hasError: true,
    },
  }),
  methods: {
    structureDataValidate(value) {
      this.$emit('updateStructureData', value)
      if (value !== '') {
        try {
          const data = this.$nbt.parse(value)

          const keys = ['tiles', 'min', 'size', 'count']

          const missingKeys = keys
            .map((key) => {
              if (!data.map[key]) {
                return `'${key}'`
              }
            })
            .filter((key) => key !== undefined)
            .join(', ')

          if (missingKeys === '') {
            this.checkStructure.hasError = false
            this.checkStructure.text = `You're good to go!`
          } else {
            const keyError = { message: `Missing keys: ${missingKeys}` }
            throw keyError
          }
        } catch (e) {
          this.checkStructure.hasError = true
          this.checkStructure.text = e.message
        }
      } else {
        this.checkStructure.hasError = true
        this.checkStructure.text = 'Structure text required'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.structure-data {
  padding: 12px;
  margin: 16px 0px;
  width: 100%;
  color: $white;
  font-size: 0.8rem;
  font-family: 'Courier New', Courier, monospace;
  resize: none;
  overflow: auto;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  line-height: 125%;

  &:focus {
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
}
.structure-data-check {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  padding-bottom: 10px;
}

.check-success {
  color: $primary;
}
.check-fail {
  color: $danger;
}
</style>
