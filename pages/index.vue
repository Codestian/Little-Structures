<template>
  <div class="index-container">
    <div class="hero">
      <div class="hero-slider">
        <div class="slider">
          <div
            v-for="number in 4"
            :key="number"
            class="slider-image"
            :style="{
              background: `url('${require(`@/assets/images/backgrounds/wallpaper0${number}.png`)}')`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
            }"
          ></div>
        </div>
      </div>
      <div class="hero-container">
        <div>
          <h1>LT structures made by the community</h1>
          <h2>Find your favourite structures here!</h2>
          <LtSearch
            :search-input="searchInput"
            @updateSearchInput="updateSearchInput"
            @search="search"
          />
          <span class="search-help"
            >You can search structures by tags, such as #chair</span
          >
        </div>
      </div>
    </div>
    <!-- <div class="content-overlay"></div> -->
    <section class="content-container">
      <h2>Search results</h2>
      <div class="filter-container">
        <LtDropdown name="type" :items="['structure', 'author', 'bundle']" />
      </div>
      <div class="structures-container">
        <!-- <span v-if="structures.length < 1" class="structures-empty"
          >No structures found matching query</span
        > -->
        <LtCardLazy
          v-for="index in structureSearchLimit"
          :key="index"
          :is-visible="islazyVisible"
        />
        <LtCard
          v-for="structure in structures"
          :id="structure.uid"
          :key="structure.uid"
          :is-visible="!islazyVisible"
          :title="structure.name"
          :author="structure.author.username"
          :minecraft-uid="structure.author.minecraft_uid"
          :image="
            structure.images[0]
              ? structure.images[0].url
              : 'https://miro.medium.com/max/978/1*pUEZd8z__1p-7ICIO1NZFA.png'
          "
          :state="structure.state"
        />
      </div>
      <LtPaginate
        :pagination-no="structurePagination"
        @prev-click="paginateStructures(false)"
        @next-click="paginateStructures(true)"
      />
      <!-- <div class="content-pagination">
        <LtButton
          :icon="['fas', 'chevron-left']"
          label="previous page"
          @click="paginateStructures(false)"
        />
        <span>{{ structurePagination }}</span>
        <LtButton
          :icon="['fas', 'chevron-right']"
          label="next page"
          @click="paginateStructures(true)"
        />
      </div> -->
    </section>
  </div>
</template>

<script>
import LtSearch from '@/components/LtSearch'
import LtCard from '@/components/LtCard'
import LtCardLazy from '@/components/LtCardLazy'
import LtDropdown from '@/components/LtDropdown'
import LtPaginate from '@/components/LtPaginate'

// import LtCardAuthor from '@/components/LtCardAuthor'

export default {
  loading: false,
  auth: false,
  components: { LtSearch, LtCard, LtCardLazy, LtDropdown, LtPaginate },
  data: () => ({
    authors: [],
    structures: [],
    sliderPosition: 0,
    sliderInterval: () => {},
    searchInput: '',
    structurePagination: 1,
    authorPagination: 1,
    structureSearchLimit: 20,
    authorSearchLimit: 8,
    islazyVisible: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 0)
    })

    if (this.$route.query.search) {
      this.searchInput = this.$route.query.search
    }
    if (this.$route.query.page) {
      if (!isNaN(parseInt(this.$route.query.page))) {
        if (parseInt(this.$route.query.page) === 0) {
          this.structurePagination = 1
        } else {
          this.structurePagination = parseInt(this.$route.query.page)
        }
      }
    }

    this.sliderInterval = setInterval(this.moveHeroSlider, 4000)

    this.getStructures()

    this.$router.push({
      path: '/',
      query: {
        search: this.searchInput.trim(),
        page: this.structurePagination,
      },
    })
  },
  beforeDestroy() {
    clearInterval(this.sliderInterval)
  },
  methods: {
    updateStructuresList(structures) {
      this.structures = structures
    },
    moveHeroSlider() {
      const slider = document.querySelector('.slider')
      if (this.sliderPosition === -300) {
        this.sliderPosition = 0
      } else {
        this.sliderPosition = this.sliderPosition - 100
      }
      slider.style.marginLeft = `${this.sliderPosition}%`
    },
    updateSearchInput(value) {
      this.searchInput = value
    },
    search() {
      this.structurePagination = 1
      this.getStructures()
    },
    async getStructures() {
      this.islazyVisible = true
      window.scroll({ top: 0, behavior: 'smooth' })

      const structures = await this.$axios.$get(
        `https://api.littletiles.net/1.0/structures?state=approved&limit=${
          this.structureSearchLimit
        }&offset=${
          (this.structurePagination - 1) * this.structureSearchLimit
        }&name=${this.searchInput.trim()}`
      )
      this.structures = structures.data
      this.islazyVisible = false

      this.$router.push({
        path: '/',
        query: {
          search: this.searchInput.trim(),
          page: this.structurePagination,
        },
      })
    },
    paginateStructures(isNext) {
      if (isNext) {
        this.$nuxt.$loading.start()
        this.structurePagination++
        this.getStructures()
      } else if (!isNext && this.structurePagination !== 1) {
        this.$nuxt.$loading.start()
        this.structurePagination--
        this.getStructures()
      }
    },
  },
  head() {
    return {
      title: 'LittleTiles | Home',
    }
  },
}
</script>

<style lang="scss" scoped>
.index-container {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .hero {
    width: 100%;
    height: 384px;
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .hero-slider {
      width: 100%;
      height: 100%;
      overflow-x: hidden;

      .slider {
        display: flex;
        width: 100%;
        height: 100%;
        transition: all 0.35s ease-out;

        .slider-image {
          width: 100%;
          height: 100%;
          flex: 0 0 auto;
        }
      }
    }

    .hero-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      color: $white;

      padding: 16px;

      h1 {
        font-weight: 700;
        font-size: 1.6rem;
        padding-top: 64px;
        padding-bottom: 16px;
        line-height: 125%;
      }
      h2 {
        font-weight: 700;
        font-size: 1.2rem;
        padding-bottom: 24px;
        line-height: 125%;
      }

      .search-help {
        padding-top: 8px;
        text-transform: uppercase;
        font-size: 0.6rem;
        text-align: left;
      }

      @media screen and (max-width: $breakpoint-phone) {
        padding: 24px;
      }
    }
  }

  .content-overlay {
    margin-top: 384px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    z-index: 40;
  }

  .content-container {
    width: 100%;
    max-width: $breakpoint-laptop;
    padding: 0px 24px 24px 24px;

    h2 {
      color: $white;
      font-weight: 700;
      font-size: 1.6rem;
      width: 100%;
      padding: 24px 0px;

      @media screen and (max-width: $breakpoint-phone) {
        font-size: 1.4rem;
      }
    }

    .filter-container {
      width: 100%;
      margin-bottom: 24px;
      display: flex;
    }

    .structures-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-rows: auto;
      grid-gap: 24px;

      .structures-empty {
        color: $white;
        font-weight: 700;
      }
    }
  }
}
</style>
