<template>
  <LtModal
    id="modal-slider"
    class="modal-container"
    :is-modal-open="isModalOpen"
    @closeModal="closeModal"
  >
    <template #modal>
      <div class="upload-container">
        <div class="modal-close">
          <div class="close" @click="closeModal">
            <fa :icon="['fas', 'times']" />
          </div>
        </div>
        <div
          class="upload-drag-container"
          @dragenter="TEST($event)"
          @dragover="TEST($event)"
          @dragleave="TEST1($event)"
          @drop="TEST2($event)"
        >
          <label for="inputFile" class="upload-drag">
            <fa :icon="['fas', 'plus']" />
            <input
              id="inputFile"
              type="file"
              name="inputFile"
              accept="image/png, image/jpeg"
              @change="verifyImage($event)"
            />
            <span for="inputFile"
              >Drop or click here <br />
              to upload your picture</span
            >
          </label>
        </div>
        <div v-if="images.length > 0" class="upload-images">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="upload-image-container"
          >
            <div class="upload-image-position">
              <div class="icon" @click="moveImageUp(index)">
                <fa :icon="['fas', 'chevron-up']" />
              </div>
              <div class="icon" @click="moveImageDown(index)">
                <fa :icon="['fas', 'chevron-down']" />
              </div>
            </div>
            <div class="upload-image">
              <div class="image">
                <img :src="image.url" alt="" />
              </div>
            </div>
            <div class="upload-actions">
              <div class="icon icon-delete" @click="images.splice(index, 1)">
                <fa :icon="['fas', 'trash-alt']" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </LtModal>
</template>

<script>
import LtModal from '@/components/LtModal'

export default {
  components: { LtModal },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    isModalOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    verifyImage(e) {
      const inputFile = e.target.files
      const vm = this
      const reader = new FileReader()

      if (inputFile.length > 0) {
        if (inputFile[0].size < 2000000) {
          if (
            inputFile[0].type === 'image/png' ||
            inputFile[0].type === 'image/jpeg'
          ) {
            reader.onloadend = () => {
              vm.images.push({
                type: vm.images.length === 0 ? 'main' : 'additional',
                url: reader.result,
              })
            }
            reader.readAsDataURL(inputFile[0])
          } else {
            this.$store.commit('toggleToast', {
              tag: 'Alert',
              description: 'File must be either .png or .jpeg',
              isOpen: true,
            })
            setTimeout(() => {
              this.$store.commit('toggleToast', {
                isOpen: false,
              })
            }, 3000)
          }
        } else {
          this.$store.commit('toggleToast', {
            tag: 'Alert',
            description: 'File must be less than 2mb',
            isOpen: true,
          })
          setTimeout(() => {
            this.$store.commit('toggleToast', {
              isOpen: false,
            })
          }, 3000)
        }
      }
    },
    closeModal() {
      this.$emit('closeModal')
    },
    moveImageUp(index) {
      const image = { ...this.images[index] }
      const prevIndex = index - 1

      this.images.splice(index, 1)
      this.images.splice(prevIndex, 0, image)
    },
    moveImageDown(index) {
      const image = { ...this.images[index] }
      const nextIndex = index + 1

      this.images.splice(index, 1)
      this.images.splice(nextIndex, 0, image)
    },
    TEST(e) {
      e.preventDefault()
      e.stopPropagation()
      const uploadDragContainer = document.querySelector(
        '.upload-drag-container'
      )
      uploadDragContainer.classList =
        'upload-drag-container upload-drag-container--over'
    },
    TEST1(e) {
      e.preventDefault()
      e.stopPropagation()
      const uploadDragContainer = document.querySelector(
        '.upload-drag-container'
      )
      uploadDragContainer.classList = 'upload-drag-container'
    },
    TEST2(e) {
      e.preventDefault()
      e.stopPropagation()
      this.TEST1(e)
      const dt = e.dataTransfer
      const inputFile = dt.files

      const vm = this
      const reader = new FileReader()

      if (inputFile.length > 0) {
        if (inputFile[0].size < 2000000) {
          if (
            inputFile[0].type === 'image/png' ||
            inputFile[0].type === 'image/jpeg'
          ) {
            reader.onloadend = () => {
              vm.images.push({
                type: vm.images.length === 0 ? 'main' : 'additional',
                url: reader.result,
              })
            }
            reader.readAsDataURL(inputFile[0])
          } else {
            this.$store.commit('toggleToast', {
              tag: 'Alert',
              description: 'File must be either .png or .jpeg',
              isOpen: true,
            })
            setTimeout(() => {
              this.$store.commit('toggleToast', {
                isOpen: false,
              })
            }, 3000)
          }
        } else {
          this.$store.commit('toggleToast', {
            tag: 'Alert',
            description: 'File must be less than 2mb',
            isOpen: true,
          })
          setTimeout(() => {
            this.$store.commit('toggleToast', {
              isOpen: false,
            })
          }, 3000)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.upload-container {
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

  .upload-drag-container {
    width: 100%;
    padding: 64px;
    background: rgba(0, 0, 0, 0.6);
    position: relative;
    border: 2px solid transparent;

    .upload-drag {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      user-select: none;
      color: $white;
      cursor: pointer;

      input {
        display: none;
      }

      svg {
        font-size: 1.4rem;
        margin-bottom: 8px;
      }

      span {
        font-weight: 700;
        line-height: 150%;
        font-size: 0.8rem;
      }
    }
  }

  .upload-drag-container--over {
    border: 2px solid rgba(255, 255, 255, 0.4);
  }

  .upload-images {
    width: 100%;
    padding: 16px;
    max-height: 300px;
    overflow-y: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    .upload-image-container {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 12px 0px;
      transition: all 0.35s ease;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      &:first-of-type {
        padding-top: 0px;
      }

      &:last-of-type {
        padding-bottom: 0px;
        border-bottom: none;
      }

      .upload-image-position {
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        width: 32px;

        .icon {
          width: 32px;
          height: 32px;
          padding: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.2);

          svg {
            font-size: 1.2rem;
          }

          @media (hover: hover) {
            &:hover {
              color: $white;
            }
          }
        }
      }
      .upload-image {
        margin-left: 12px;
        flex: 1;
        .image {
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 100px;
          height: calc(100px * 2 / 3);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .upload-actions {
        height: 100%;
        width: 32px;
        .icon {
          width: 32px;
          height: 32px;
          padding: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          svg {
            font-size: 1.2rem;
          }
        }
        .icon-delete {
          color: $danger;
        }
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
