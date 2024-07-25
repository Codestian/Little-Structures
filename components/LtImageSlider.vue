<template>
  <div class="image-slider-container">
    <div class="image-container">
      <div class="image">
        <div v-if="images.length > 0" class="navigate">
          <LtButton
            label="Slider previous image"
            :icon="['fas', 'chevron-left']"
            font-size="0.8rem"
            @click="navigateSlider(false)"
          />
          <div class="fullscreen" @click="isSliderModalOpen = true">
            <fa :icon="['fas', 'expand']" />
          </div>
          <LtButton
            label="Slider next image"
            :icon="['fas', 'chevron-right']"
            font-size="0.8rem"
            @click="navigateSlider(true)"
          />
        </div>
        <img v-if="images.length > 0" :src="images[sliderNo].url" alt="" />
        <div v-if="images.length === 0" class="empty">
          <fa :icon="['fas', 'image']" />
          <p>
            Pictures of your structure will appear here.<br />Click on manage
            pictures to get started.
          </p>
        </div>
      </div>
    </div>
    <div v-if="images.length > 0" class="slider-container">
      <div class="slider">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="slider-image"
          @click="jumpSlider(index)"
        >
          <img :src="image.url" draggable="false" alt="" />
        </div>
      </div>
    </div>
    <LtModal
      id="modal-slider"
      class="modal-container"
      :is-modal-open="isSliderModalOpen"
      @closeModal="isSliderModalOpen = false"
    >
      <template #modal>
        <div class="modal-image">
          <div class="modal-close">
            <div class="close" @click="isSliderModalOpen = false">
              <fa :icon="['fas', 'times']" />
            </div>
          </div>
          <img :src="images[sliderNo].url" alt="" />
          <div class="modal-original">
            <a :href="images[sliderNo].url" target="_blank">Open original</a>
          </div>
        </div>
      </template>
    </LtModal>
  </div>
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
  },
  data: () => ({
    sliderNo: 0,
    sliderTranslate: 0,
    isSliderModalOpen: false,
  }),
  watch: {
    images() {
      if (this.images.length === 1) {
        this.$nextTick(() => {
          this.highlightSliderImage(0)
        })
      }
    },
  },
  mounted() {
    if (this.images.length > 0) {
      this.$nextTick(() => {
        this.highlightSliderImage(0)
      })
    }
  },
  methods: {
    jumpSlider(index) {
      const slider = document.querySelector('.slider')

      // TODO SIMPLIFY THIS LOGIC

      if (this.sliderNo < index) {
        const indexJump = index - this.sliderNo

        if (this.sliderNo === 0) {
          // console.log(indexJump)
          this.sliderTranslate =
            this.sliderTranslate - 15 * ((6 / 3) * indexJump - 1)
        } else {
          this.sliderTranslate = this.sliderTranslate - 30 * indexJump
        }
        this.sliderNo = index
        slider.style.transform = `translate(${this.sliderTranslate}%, 0)`
      } else {
        if (this.sliderNo === 1) {
          this.sliderTranslate = this.sliderTranslate + 15
        } else if (this.sliderNo !== 0) {
          this.sliderTranslate = this.sliderTranslate + 30
        }
        this.sliderNo = index
        slider.style.transform = `translate(${this.sliderTranslate}%, 0)`
      }

      this.highlightSliderImage(this.sliderNo)
    },
    navigateSlider(direction) {
      const slider = document.querySelector('.slider')
      const sliderImage = document.querySelectorAll('.slider-image')

      if (direction === true && this.sliderNo < sliderImage.length - 1) {
        if (this.sliderNo === 0) {
          this.sliderTranslate -= 15
        } else {
          this.sliderTranslate -= 30
        }

        this.sliderNo++
      }

      if (direction === false && this.sliderNo > 0) {
        if (this.sliderNo === 1) {
          this.sliderTranslate += 15
        } else {
          this.sliderTranslate += 30
        }
        this.sliderNo--
      }

      slider.style.transform = `translate(${this.sliderTranslate}%, 0)`
      this.highlightSliderImage(this.sliderNo)
    },
    highlightSliderImage(sliderNo) {
      const sliderImage = document.querySelectorAll('.slider-image')
      sliderImage.forEach((image) => {
        image.style.opacity = '0.4'
      })
      sliderImage[sliderNo].style.opacity = '1'
    },
  },
}
</script>

<style lang="scss" scoped>
.image-slider-container {
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .image-container {
    width: 100%;
    padding-top: (2/3 * 100%);
    position: relative;

    .image {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;

      .navigate {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.35s ease;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        opacity: 0;

        &:hover {
          opacity: 1;
        }

        .fullscreen {
          cursor: pointer;
          color: white;
          padding: 8px;
        }

        button {
          width: 36px;
          height: 36px;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .empty {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        padding: 64px;
        color: $white;

        svg {
          font-size: 3rem;
          margin-bottom: 8px;
        }

        p {
          line-height: 150%;
          font-weight: 700;
          font-size: 0.8rem;
          user-select: none;
        }
      }
    }
  }
  .slider-container {
    width: 100%;
    height: 80px;
    transition: all 0.35s ease;
    overflow-x: hidden;

    .slider {
      width: 100%;
      height: 100%;
      display: flex;
      transition: all 0.35s ease;

      .slider-image {
        height: 100%;
        width: 30%;
        flex-shrink: 0;
        padding: 8px 0px 8px 8px;
        opacity: 0.4;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.1);
          user-select: none;
          cursor: pointer;
        }
      }
    }
  }
  .modal-container {
    .modal-image {
      width: 50%;
      padding-top: calc(100% / 3);
      background: $secondary;
      border: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      animation-name: modalAnimation;
      animation-duration: 0.35s;

      @media screen and (max-width: $breakpoint-tablet) {
        width: 100%;
        padding-top: calc(200% / 3);
      }

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

      .modal-original {
        position: absolute;
        bottom: -32px;
        width: 100%;
        height: 32px;
        display: flex;
        align-items: center;
        z-index: 1;

        a {
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          font-size: 0.8rem;
        }
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
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
