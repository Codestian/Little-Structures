<template>
  <LtModal
    id="modal-slider"
    class="modal-container"
    :is-modal-open="isModalOpen"
    @closeModal="closeModal"
  >
    <template #modal>
      <div class="tag-select-container">
        <div class="modal-close">
          <div class="close" @click="closeModal">
            <fa :icon="['fas', 'times']" />
          </div>
        </div>
        <div class="tag-search">
          <input
            v-model="searchInput"
            type="text"
            placeholder="Search for tags..."
            @keyup.enter="getTags"
          />
          <LtButton
            :icon="['fas', 'chevron-right']"
            label="Search tags"
            @click="getTags"
          />
        </div>
        <div class="tag-results-container">
          <div
            v-if="showInputInResult"
            class="tag-result"
            @click="appendTag({ name: searchInputResult })"
          >
            <span class="result-name">#{{ searchInputResult }}</span>
            <span class="result-structures">0 structures</span>
          </div>
          <div
            v-for="(tag, index) in fetchedTags"
            :key="index"
            class="tag-result"
            @click="appendTag(tag)"
          >
            <span class="result-name">#{{ tag.name }}</span>
            <span class="result-structures">340 structures</span>
          </div>
        </div>
      </div>
    </template>
  </LtModal>
</template>

<script>
import LtModal from '@/components/LtModal'
import LtButton from '@/components/LtButton'

export default {
  components: { LtModal, LtButton },
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
    isModalOpen: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    searchInput: '',
    searchInputResult: '',
    fetchedTags: [],
    showInputInResult: false,
  }),
  watch: {
    searchInput(newVal) {
      const re = /[^A-Z0-9]/gi
      this.$set(this, 'searchInput', newVal.replace(re, '').toLowerCase())
    },
  },
  methods: {
    async getTags() {
      this.$nuxt.$loading.start()

      const fetchedTags = await this.$axios.$get(
        'https://api.littletiles.net/1.0/tags?name=' + this.searchInput
      )

      if (
        fetchedTags.data.some((e) => e.name === this.searchInput) ||
        this.searchInput === ''
      ) {
        this.showInputInResult = false
      } else {
        this.searchInputResult = this.searchInput
        this.showInputInResult = true
      }

      this.fetchedTags = fetchedTags.data
    },
    closeModal() {
      this.searchInput = ''
      this.searchInputResult = ''
      this.showInputInResult = false
      this.fetchedTags = []
      this.$emit('closeModal')
    },
    appendTag(tag) {
      if (this.tags.some((e) => e.name === tag.name)) {
        this.$store.commit('toggleToast', {
          tag: 'Alert',
          description: 'You have already chosen this tag',
          isOpen: true,
        })
        setTimeout(() => {
          this.$store.commit('toggleToast', {
            isOpen: false,
          })
        }, 2000)
      } else {
        this.tags.push(tag)
        this.closeModal()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.tag-select-container {
  width: 100%;
  max-width: 420px;
  background: $secondary;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  animation-name: modalAnimation;
  animation-duration: 0.35s;

  .modal-close {
    position: absolute;
    top: -40px;
    right: -8px;
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .close {
      width: 36px;
      height: 36px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $white;
      font-size: 1.2rem;
    }
  }

  .tag-search {
    display: flex;
    padding: 16px;

    input {
      flex: 1;
      padding-left: 12px;
      background: $black;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: $white;
    }

    button {
      width: 48px;
      height: 48px;
    }
  }

  .tag-results-container {
    width: 100%;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;

    .tag-result {
      width: calc(100% - 36px);
      padding: 16px 0px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;

      &:first-child {
        padding: 0px 0px 16px 0px;
      }

      .result-name {
        font-weight: 700;
        color: $white;
        padding-bottom: 8px;
      }

      .result-structures {
        color: rgba(255, 255, 255, 0.6);
        text-transform: uppercase;
        font-size: 0.6rem;
      }
    }
  }
}

@keyframes modalAnimation {
  0% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
