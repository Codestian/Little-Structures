<template>
  <div class="download-container">
    <div class="title">Download LittleTiles</div>
    <div class="download">
      <div class="download-creative-core">
        <div class="download-center">
          <h2>CreativeCore<img src="@/assets/icon.png" /></h2>
          <LtButton
            text="download"
            label="Download creativecore"
            @click="
              openURL(
                'https://www.curseforge.com/minecraft/mc-mods/creativecore/files'
              )
            "
          />
        </div>
      </div>
      <div class="download-plus">
        <fa :icon="['fas', 'plus']" />
      </div>
      <div class="download-littletiles">
        <div class="download-center">
          <h2>LittleTiles<img src="@/assets/icon.png" /></h2>
          <LtButton
            text="download"
            label="Download littletiles"
            @click="
              openURL(
                'https://www.curseforge.com/minecraft/mc-mods/littletiles/files'
              )
            "
          />
        </div>
      </div>
    </div>
    <div class="statement">
      To install LittleTiles, you also need to install CreativeCore.<br />
      Ensure you have Minecraft Forge installed.<br />
      Place both mod files in the mod folder.<br />
      LittleTiles is only available for the Minecraft Java Edition.
    </div>
  </div>
</template>

<script>
import LtButton from '@/components/LtButton'

export default {
  loading: false,
  auth: false,
  components: { LtButton },
  methods: {
    openURL(url) {
      window.open(url)
    },
  },
  head() {
    return {
      title: 'LittleTiles | Download',
    }
  },
}
</script>

<style lang="scss" scoped>
.download-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    text-align: center;
    width: 100%;
    max-width: $breakpoint-laptop;
    color: $white;
    font-weight: 700;
    font-size: 1.8rem;
    padding: 48px 32px 0px 32px;
    line-height: 150%;

    @media screen and (max-width: $breakpoint-tablet) {
      font-size: 1.6rem;
    }
  }
  .download {
    width: 100%;
    padding: 72px 32px;
    max-width: $breakpoint-laptop;
    display: flex;

    @media screen and (max-width: $breakpoint-tablet) {
      flex-direction: column;
      padding: 64px 0px;
    }

    .download-creative-core,
    .download-littletiles {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;

      .download-center {
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;
        h2 {
          color: $white;
          font-size: 1.6rem;
          font-weight: bold;
          padding-bottom: 24px;
          display: flex;
          align-items: center;

          img {
            width: 32px;
            height: 32px;
            object-fit: cover;
            margin-left: 8px;
          }
        }
      }
    }

    .download-creative-core {
      align-items: flex-end;

      @media screen and (max-width: $breakpoint-tablet) {
        align-items: center;
      }
    }
    .download-littletiles {
      align-items: flex-start;
      @media screen and (max-width: $breakpoint-tablet) {
        align-items: center;
      }
    }
    .download-plus {
      color: $white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 32px 64px;
      font-size: 2rem;
    }
  }
  .statement {
    text-align: center;
    width: 100%;
    max-width: $breakpoint-laptop;
    color: $white;
    line-height: 175%;
    padding: 0px 32px 32px 32px;

    @media screen and (max-width: $breakpoint-tablet) {
      font-size: 1rem;
    }
  }
}
</style>
