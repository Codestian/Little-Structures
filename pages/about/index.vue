<template>
  <div class="about">
    <div class="top">
      <img
        style="width: 150px; height: 150px; margin-bottom: 16px;"
        src="@/assets/team/creativemd.png"
        alt
      />
      <h1 style="line-height: 150%;">
        LittleTiles is a Minecraft mod made by CreativeMD
      </h1>
      <h2 style="line-height: 150%; padding-bottom: 12px;">
        Bringing unlimited possibilities to Minecraft.
        <br />
        Vertical slabs, slopes, custom doors, furniture you name it.
      </h2>
      <div style="display: flex;" class="button-container">
        <!-- <LtBtn aria-label="discord" class="discord" @click="openDiscord"
          >Discord</LtBtn
        >
        <LtBtn
          aria-label="curseforge"
          class="curseforge"
          @click="openCurseForge"
          >Curseforge</LtBtn
        >
        <LtBtn aria-label="patreon" class="patreon" @click="openPatreon"
          >Patreon</LtBtn
        > -->
      </div>
    </div>
    <div class="bottom">
      <h2>Our team</h2>
      <div class="team-container">
        <!-- <LtTeam
          page="https://github.com/creativemd"
          icon="creativemd.png"
          name="CreativeMD"
          role="Lead Programmer, Founder"
        ></LtTeam>
        <LtTeam
          page="https://github.com/mstingl"
          icon="stenyx.png"
          name="stenyx"
          role="Software Architecture, Backend Development, Hosting"
        ></LtTeam>
        <LtTeam
          page="https://github.com/N247S"
          icon="n247s.png"
          name="N247S"
          role="Assistant Programmer"
        ></LtTeam>
        <LtTeam
          page="https://github.com/codestian"
          icon="codestian.png"
          name="Codestian"
          role="Frontend Development, UI/UX Design"
        ></LtTeam>
        <LtTeam
          page="https://github.com/color-space"
          icon="colorspace.png"
          name="colorspace"
          role="UI/UX Design Consultant"
        ></LtTeam>
        <LtTeam
          icon="kiro.png"
          name="Kiro"
          role="Wiki Maintainer, Bug Support, Discord Moderator, Builder"
        ></LtTeam>
        <LtTeam
          icon="taco.png"
          name="Taco"
          role="Wiki Contributor, Discord Moderator, Builder"
        ></LtTeam> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  loading: false,
  auth: false,
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  methods: {
    openDiscord() {
      window.open('https://discord.gg/W9QM3fS', '_blank')
    },
    openCurseForge() {
      window.open(
        'https://www.curseforge.com/minecraft/mc-mods/littletiles',
        '_blank'
      )
    },
    openPatreon() {
      window.open('https://www.patreon.com/creativemd', '_blank')
    },
  },
  head() {
    return {
      title: 'LittleTiles | About',
    }
  },
}
</script>

<style lang="scss" scoped>
.about {
  min-height: 100vh;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;

  .top {
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1 {
      font-size: 1.4rem;
      font-weight: bold;
      padding-bottom: 16px;
    }

    .button-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      button {
        padding: 16px 32px;
        margin: 0px 8px;
      }
      .discord {
        background: rgb(114, 137, 218);
      }
      .curseforge {
        background: rgb(100, 65, 164);
      }
      .patreon {
        background: rgb(232, 91, 70);
      }
      @media (max-width: 600px) {
        flex-direction: column;
        button {
          margin: 8px 0px;
          width: 100%;
        }
      }
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1366px;
    h2 {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .team-container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }
}
</style>
