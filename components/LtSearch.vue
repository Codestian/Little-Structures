<template>
  <div class="search-container">
    <div class="search">
      <span v-for="(tag, index) in tags" :key="index" class="search-tag"
        >#{{ tag }}
        <div class="close" @click="removeTag(index)">
          <fa :icon="['fas', 'times']" />
        </div>
      </span>
      <input
        type="text"
        placeholder="Search..."
        :value="searchInput"
        @input="updateSearchInput($event.target.value)"
        @keydown.backspace="doBackspace($event)"
        @keydown.enter="search"
      />
    </div>
    <LtButton
      label="search"
      :icon="['fas', 'chevron-right']"
      padding="0px"
      @click="search"
    />
  </div>
</template>

<script>
import LtButton from '@/components/LtButton'

export default {
  components: { LtButton },
  props: {
    searchInput: {
      type: String,
      default: '',
      required: true,
    },
  },
  data: () => ({
    tags: [],
  }),
  watch: {
    searchInput() {
      this.testEvent()
    },
  },
  methods: {
    search() {
      this.$emit('search')
    },
    updateSearchInput(value) {
      this.$emit('updateSearchInput', value)
    },
    removeTag(index) {
      this.tags.splice(index, 1)
    },
    testEvent() {
      const search = document.querySelector('.search')

      let searchTags = this.searchInput.match(/#[A-Za-z0-9]+\s/gi)
        ? this.searchInput.match(/#[A-Za-z0-9]+\s/gi)
        : []

      searchTags = searchTags.map((tag) => {
        this.$emit(
          'updateSearchInput',
          this.searchInput.replace(new RegExp(tag), '')
        )
        return tag.trim().replace('#', '').toLowerCase()
      })

      if (searchTags.length > 0) {
        this.tags = this.tags.concat(searchTags)
        this.tags = [...new Set([...this.tags, ...searchTags])]
      }

      search.scrollLeft = 600000000
    },
    doBackspace(e) {
      if (e.target.selectionStart === 0 && e.target.selectionEnd === 0) {
        this.tags.pop()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  justify-content: center;
  height: 48px;
  width: 100%;
  width: 100%;
  max-width: 600px;
  .search {
    display: flex;
    align-items: center;
    background: $white;
    overflow-x: hidden;
    flex: 1;
    width: 0;

    .search-tag {
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      background: $light;
      color: $black;
      padding-left: 8px;
      margin-left: 8px;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      .close {
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;

        svg {
          font-size: 0.8rem;
        }
      }
    }

    input {
      height: 100%;
      padding: 8px;
      flex: 1 1 auto;
    }
  }

  button {
    height: 48px;
    width: 48px;
  }
}
</style>
