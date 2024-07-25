<template>
  <div class="structure-add-container">
    <LtStructure prev-path="/profile">
      <template #left class="content-left">
        <LtImageSlider :images="structure.images" />
        <LtButton
          label="submit structure"
          text="submit"
          style="margin-top: 24px;"
          @click="submit"
        />
        <LtButton
          label="manage pictures"
          text="manage pictures"
          color="secondary"
          style="margin-top: 16px;"
          @click="isImageUploadModalOpen = true"
        />
        <LtImageUpload
          :images="structure.images"
          :is-modal-open="isImageUploadModalOpen"
          @closeModal="isImageUploadModalOpen = false"
        />
        <LtCode
          :data="structure.data"
          @updateStructureData="updateStructureData"
        />
      </template>
      <template #right class="content-right">
        <div class="structure-info">
          <input
            v-model="structure.name"
            maxlength="56"
            type="text"
            placeholder="Name..."
            class="structure-name"
          />
          <span v-if="structure.name === ''" class="structure-info-warning"
            >Structure name required</span
          >
          <div class="structure-author">
            <img
              class="structure-author-head"
              :src="`https://crafatar.com/avatars/${loggedInUser.minecraft_uid}`"
              alt=""
            />
            <nuxt-link class="structure-author-name" to="/profile">{{
              loggedInUser.username
            }}</nuxt-link>
          </div>
          <textarea
            v-model="structure.description"
            max-length="128"
            class="structure-description"
            placeholder="Type in a description..."
            maxlength="256"
          ></textarea>
          <span
            v-if="structure.description === ''"
            class="structure-info-warning"
            >Structure description required</span
          >
          <div class="structure-date">06/16/2020 04:54PM</div>
        </div>
        <div class="structure-tags">
          <span v-for="(tag, index) in structure.tags" :key="index" class="tag"
            >#{{ tag.name }}
            <div class="close" @click="removeTag(index)">
              <fa :icon="['fas', 'times']" />
            </div>
          </span>
          <span class="add-tag" @click="isTagSelectModalOpen = true"
            ><fa :icon="['fas', 'plus']" style="margin-right: 8px;" />Add
            tag</span
          >
          <LtTagSelect
            :tags="structure.tags"
            :is-modal-open="isTagSelectModalOpen"
            @closeModal="isTagSelectModalOpen = false"
          />
        </div>
      </template>
    </LtStructure>
  </div>
</template>

<script>
import LtStructure from '@/components/LtStructure'
import LtImageUpload from '@/components/LtImageUpload'
import LtTagSelect from '@/components/LtTagSelect'

import LtImageSlider from '@/components/LtImageSlider'
import LtCode from '@/components/LtCode'
import { mapGetters } from 'vuex'

export default {
  loading: false,
  auth: false,
  data: () => ({
    isImageUploadModalOpen: false,
    isTagSelectModalOpen: false,
    structure: {
      name: '',
      data: '',
      description: '',
      tags: [],
      images: [],
    },
  }),
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  beforeMount() {
    if (
      !this.loggedInUser.permissions.includes('littlestructures.add_structure')
    ) {
      this.$router.push('/')
      this.$store.commit('toggleToast', {
        tag: 'Alert',
        description: `You do not have the right permissions`,
        isOpen: true,
      })
      setTimeout(() => {
        this.$store.commit('toggleToast', {
          isOpen: false,
        })
      }, 2000)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  component: { LtStructure, LtImageUpload, LtTagSelect, LtImageSlider, LtCode },
  methods: {
    async submit() {
      if (
        this.structure.name !== '' &&
        this.structure.data !== '' &&
        this.structure.description !== '' &&
        this.structure.tags.length > 0 &&
        this.structure.images.length > 0
      ) {
        const arr = this.structure.images.map((one, index) => {
          return {
            type: index === 0 ? 'main' : 'additional',
            data: one.url.split(',')[1],
          }
        })

        const finalStructure = { ...this.structure }

        finalStructure.images = arr

        try {
          await this.$axios.$post(
            'https://api.littletiles.net/1.0/structures',
            finalStructure
          )
          this.$router.push('/profile', () => {
            this.$store.commit('toggleToast', {
              tag: 'Success',
              description: 'Structure added',
              isOpen: true,
            })
            setTimeout(() => {
              this.$store.commit('toggleToast', {
                isOpen: false,
              })
            }, 3000)
          })
        } catch (err) {
          alert('An error has occured, please try again')
          // console.log(err.response)
        }
      } else {
        this.$store.commit('toggleToast', {
          tag: 'Warning',
          description: 'Ensure all fields are filled up',
          isOpen: true,
        })
        setTimeout(() => {
          this.$store.commit('toggleToast', {
            isOpen: false,
          })
        }, 2000)
      }
    },
    updateStructureData(variable) {
      this.structure.data = variable
    },
    removeTag(index) {
      this.structure.tags.splice(index, 1)
    },
  },
  head() {
    return {
      title: 'LittleTiles | Add Structure',
    }
  },
}
</script>

<style lang="scss" scoped>
.structure-add-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;

  .content-right {
    .structure-info {
      padding-bottom: 24px;

      .structure-name {
        font-size: 2rem;
        font-weight: 700;
        color: $white;
        line-height: 125%;
        padding-bottom: 12px;
        background: none;
        width: 100%;
      }
      .structure-author {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        .structure-author-head {
          width: 24px;
          height: 24px;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .structure-author-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: $primary;
          padding-left: 12px;
          display: inline-block;
          text-transform: uppercase;

          &:hover {
            text-decoration: underline;
          }
        }
      }
      p {
        color: $white;
        line-height: 150%;
        padding-bottom: 12px;
      }
      .structure-description {
        color: $white;
        line-height: 150%;
        resize: none;
        width: 100%;
        height: auto;
        height: 140px;
        background: none;
        padding-bottom: 24px;
      }
      .structure-info-warning {
        color: $danger;
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        padding-bottom: 16px;
      }
      .structure-date {
        color: $primary;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        font-weight: 700;
        font-size: 0.8rem;
        padding-bottom: 16px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
    }
    .structure-tags {
      width: 100%;
      margin-bottom: 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 8px;

      .add-tag {
        height: 36px;
        color: $black;
        background: $light;
        padding: 10px 16px;
        margin: 0px 16px 16px 0px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.75rem;
        user-select: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .tag {
        color: $white;
        background: rgba(255, 255, 255, 0.05);
        outline: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0px 0px 0px 16px;
        margin: 0px 12px 16px 0px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.75rem;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;

        .close {
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          margin-left: 16px;
          background: black;
          width: 36px;
          height: 36px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
