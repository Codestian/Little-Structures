<template>
  <div class="structure-id-container">
    <LtStructure :prev-path="prevPath">
      <template #top class="content-top">
        <span
          v-if="structure.state !== 'approved'"
          :class="
            structure.state === 'refused'
              ? 'state state-rejected'
              : 'state state-pending'
          "
          >{{
            structure.state === 'refused' ? 'rejected' : structure.state
          }}</span
        >
      </template>
      <template #left class="content-left">
        <LtImageSlider :images="structure.images" />
        <LtButton
          :icon="['fas', 'copy']"
          label="copy structure"
          :text="copyButtonText"
          style="margin: 16px 0px;"
          @click="copyStructure"
        />
        <textarea
          id="structure-data"
          v-model="structureData"
          style="position: absolute; top: -200%;"
        ></textarea>
        <div v-if="!structureBelongsToUser" class="structure-actions">
          <LtButton
            :icon="['fas', 'heart']"
            label="like structure"
            style="margin-right: 8px;"
            text="like"
            color="secondary"
            @click="featureSoon('Like')"
          />
          <LtButton
            :icon="['fas', 'bookmark']"
            label="add to favorites"
            style="margin-left: 8px;"
            text="favorite"
            color="secondary"
            @click="featureSoon('Add to favourites')"
          />
        </div>
        <div v-if="structureBelongsToUser" class="structure-actions">
          <LtButton
            label="edit structure"
            :icon="['fas', 'edit']"
            style="margin-right: 8px;"
            text="edit"
            color="warning"
            @click="featureSoon('Edit')"
          />
          <LtButton
            label="delete structure"
            :icon="['fas', 'trash']"
            style="margin-left: 8px;"
            text="delete"
            color="danger"
            @click="featureSoon('Delete')"
          />
        </div>
        <div class="structure-specs">
          <span>Grid: {{ structure.grid }}</span>
          <span
            >X: {{ structure.size_x }} Y: {{ structure.size_y }} Z:
            {{ structure.size_z }}</span
          >
        </div>
      </template>
      <template #right class="content-right">
        <div class="structure-info">
          <h1 class="structure-name">{{ structure.name }}</h1>
          <div class="structure-author">
            <img
              class="structure-author-head"
              :src="
                structure.author.minecraft_uid === ''
                  ? ''
                  : `https://crafatar.com/avatars/${structure.author.minecraft_uid}`
              "
              alt=""
            />
            <nuxt-link
              class="structure-author-name"
              :to="'/author?a=' + structure.author.username"
              >{{ structure.author.username }}</nuxt-link
            >
          </div>
          <p class="structure-description">
            {{ structure.description }}
          </p>
          <div class="structure-date">
            {{
              structure.created_at === ''
                ? 'Loading...'
                : $moment.unix(structure.created_at).format('MM/DD/YYYY hh:mmA')
            }}
          </div>
        </div>
        <div v-if="structure.tags.length > 0" class="structure-tags">
          <nuxt-link
            v-for="tag in structure.tags"
            :key="tag.id"
            :to="`/tag?t=${tag.name}`"
            >#{{ tag.name }}</nuxt-link
          >
        </div>
        <div class="section-header">
          <h2 class="section-title">Comments</h2>
          <div
            class="expand"
            @click="toggleSection.comments = !toggleSection.comments"
          >
            <fa
              :icon="[
                'fas',
                toggleSection.comments ? 'chevron-up' : 'chevron-down',
              ]"
            />
          </div>
        </div>
        <div v-if="toggleSection.comments" class="structure-comments">
          <LtComment
            v-for="(comment, index) in comments"
            :key="index"
            :minecraft-uid="comment.author.minecraft_uid"
            :username="comment.author.username"
            :description="comment.comment"
            date-created="test"
          />
        </div>
        <div class="section-header">
          <h2 class="section-title">Suggested</h2>
          <div
            class="expand"
            @click="toggleSection.suggested = !toggleSection.suggested"
          >
            <fa
              :icon="[
                'fas',
                toggleSection.suggested ? 'chevron-up' : 'chevron-down',
              ]"
            />
          </div>
        </div>
        <div v-if="toggleSection.suggested" class="structure-suggestions"></div>
        <div class="section-header">
          <h2 class="section-title">Remixes</h2>
          <div
            class="expand"
            @click="toggleSection.remixes = !toggleSection.remixes"
          >
            <fa
              :icon="[
                'fas',
                toggleSection.remixes ? 'chevron-up' : 'chevron-down',
              ]"
            />
          </div>
        </div>
        <div v-if="toggleSection.remixes" class="structure-remixes"></div>
      </template>
    </LtStructure>
  </div>
</template>

<script>
import LtStructure from '@/components/LtStructure'
import LtImageSlider from '@/components/LtImageSlider'
import LtComment from '@/components/LtComment'
import { mapGetters } from 'vuex'

export default {
  loading: false,
  auth: false,
  component: { LtStructure, LtImageSlider, LtComment },
  data: () => ({
    copyButtonText: 'copy',
    structure: {
      state: 'approved',
      author: {
        username: 'Loading...',
        minecraft_uid: '',
      },
      name: 'Loading...',
      description: 'Loading...',
      created_at: '',
      grid: '0',
      size_x: '0',
      size_y: '0',
      size_z: '0',
      images: [
        {
          url:
            'https://media1.tenor.com/images/a388b52cb0b98b71066ce08b9fcc21c5/tenor.gif?itemid=5435835',
          type: 'main',
        },
      ],
      tags: [],
    },
    comments: [
      {
        author: {
          minecraft_uid: 'b2cafd15-98ed-4c2d-8d05-0663a151f73c',
          username: 'Codestian',
        },
        comment: 'Hello world test',
        created_at: '',
      },
      {
        author: {
          minecraft_uid: 'b2cafd15-98ed-4c2d-8d05-0663a151f73c',
          username: 'Codestian',
        },
        comment: 'Hello world test',
        created_at: '',
      },
      {
        author: {
          minecraft_uid: 'b2cafd15-98ed-4c2d-8d05-0663a151f73c',
          username: 'Codestian',
        },
        comment: 'Hello world test',
        created_at: '',
      },
      {
        author: {
          minecraft_uid: 'b2cafd15-98ed-4c2d-8d05-0663a151f73c',
          username: 'Codestian',
        },
        comment: 'Hello world test',
        created_at: '',
      },
      {
        author: {
          minecraft_uid: 'b2cafd15-98ed-4c2d-8d05-0663a151f73c',
          username: 'Codestian',
        },
        comment: 'Hello world test',
        created_at: '',
      },
      {
        author: {
          minecraft_uid: 'b2cafd15-98ed-4c2d-8d05-0663a151f73c',
          username: 'Codestian',
        },
        comment: 'Hello world test',
        created_at: '',
      },
    ],
    structureData: '',
    prevPath: '/',
    toggleSection: {
      comments: true,
      suggested: true,
      remixes: true,
    },
  }),
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevPath = from.fullPath
    })
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    structureBelongsToUser() {
      if (
        this.isAuthenticated &&
        this.structure.author.minecraft_uid === this.loggedInUser.minecraft_uid
      ) {
        return true
      } else {
        return false
      }
    },
  },
  async mounted() {
    if (this.$route.query.s) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })

      const structure = await this.$axios.$get(
        'https://api.littletiles.net/1.0/structures/' + this.$route.query.s,
        { progress: false }
      )

      const structureData = await this.$axios.$get(
        'https://api.littletiles.net/1.0/structures/' +
          this.$route.query.s +
          '/data'
      )

      this.structure = structure.data
      this.structureData = structureData.data
    }
  },
  methods: {
    featureSoon(feature) {
      this.$store.commit('toggleToast', {
        tag: 'Alert',
        description: `${feature} feature is in development`,
        isOpen: true,
      })
      setTimeout(() => {
        this.$store.commit('toggleToast', {
          isOpen: false,
        })
      }, 2000)
    },
    copyStructure() {
      const structureDataTextArea = document.querySelector('#structure-data')

      structureDataTextArea.select()
      document.execCommand('copy')
      document.getSelection().removeAllRanges()

      this.copyButtonText = 'copied!'

      this.$store.commit('toggleToast', {
        tag: 'Success',
        description: 'Structure has been copied',
        isOpen: true,
      })
      setTimeout(() => {
        this.$store.commit('toggleToast', {
          isOpen: false,
        })
        this.copyButtonText = 'copy'
      }, 2000)
    },
  },
  head() {
    return {
      title: `LittleTiles | ${this.structure.name}`,
    }
  },
}
</script>

<style lang="scss" scoped>
.structure-id-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;

  .content-top {
    .state {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.8rem;
      padding: 8px 12px;
    }

    .state-pending {
      background: $warning;
      color: $black;
    }

    .state-rejected {
      background: $danger;
      color: $white;
    }
  }

  .content-left {
    .like-container {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 24px;
      align-items: center;
      .like {
        font-weight: 700;
        color: white;
        font-size: 1.2rem;
        padding: 0px 24px;
      }
    }
    .structure-actions {
      display: flex;
      margin-bottom: 16px;

      button {
        flex: 1;
      }
    }

    .structure-specs {
      margin: 0px 0px 16px 0px;
      padding: 16px;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.1);
      span {
        color: $white;
        font-weight: 700;
        padding: 8px;
        text-transform: uppercase;
      }
    }
  }

  .content-right {
    .structure-info {
      padding-bottom: 24px;

      .structure-name {
        font-size: 2rem;
        font-weight: 700;
        color: $white;
        line-height: 125%;
        padding-bottom: 12px;

        @media screen and (max-width: $breakpoint-phone) {
          font-size: 1.6rem;
        }
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

      .structure-description {
        color: $white;
        line-height: 150%;
        padding-bottom: 24px;
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

      a {
        height: 36px;
        color: $white;
        background: rgba(0, 0, 0, 0.4);
        outline: 1px solid rgba(255, 255, 255, 0.1);
        padding: 12px 16px;
        margin: 0px 12px 16px 0px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.75rem;
        user-select: none;
        cursor: pointer;

        &:focus {
          outline: 1px solid $white;
        }
      }
    }

    .section-header {
      width: 100%;
      padding: 0px 0px 24px 0px;
      color: $white;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .section-title {
        font-size: 1.4rem;
        font-weight: 700;
        flex: 1;
      }

      .expand {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;

        svg {
          font-size: 1.2rem;
        }
      }
    }

    .structure-comments {
      width: 100%;
    }

    .structure-suggestions,
    .structure-remixes {
      width: 100%;
      height: 300px;
      background: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
