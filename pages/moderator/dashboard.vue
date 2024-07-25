<template>
  <div class="dashboard-container">
    <nav>
      <div class="nav-container">
        <div class="left">
          <nuxt-link to="/">LittleTiles<span>Dashboard</span></nuxt-link>
        </div>
      </div>
    </nav>
    <div class="dashboard">
      <h1>Dashboard</h1>
      <h2>You are recommended to use this page on a computer.</h2>
      <table class="table-pending">
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Author</th>
          <th>Date created</th>
          <th>Actions</th>
        </tr>
        <tr v-for="(structure, index) in pendingStructures" :key="index">
          <td>{{ index + 1 }}</td>
          <td class="cell-name">{{ structure.name }}</td>
          <td>{{ structure.author.username }}</td>
          <td>{{ structure.created_at }}</td>
          <td class="cell-actions">
            <LtButton
              label="preview structure"
              text="preview"
              font-size="0.8rem"
              color="secondary"
              @click="previewStructure(structure.uid)"
            />
            <LtButton
              label="reject structure"
              text="reject"
              font-size="0.8rem"
              color="danger"
              @click="setStructureState(structure.uid, 'refused')"
            />
            <LtButton
              label="approve structure"
              text="approve"
              font-size="0.8rem"
              @click="setStructureState(structure.uid, 'approved')"
            />
          </td>
        </tr>
      </table>
    </div>
    <LtFooter />
  </div>
</template>

<script>
import LtFooter from '@/components/LtFooter'
import LtButton from '@/components/LtButton'
import { mapGetters } from 'vuex'

export default {
  layout: 'empty',
  components: { LtFooter, LtButton },
  data: () => ({
    pendingStructures: [],
  }),
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  beforeMount() {
    if (
      !this.loggedInUser.permissions.includes(
        'littlestructures.review_structure'
      )
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
  async mounted() {
    const pendingStructures = await this.$axios.$get(
      'https://api.littletiles.net/1.0/structures?state=pending'
    )
    this.pendingStructures = pendingStructures.data
  },
  methods: {
    previewStructure(uid) {
      this.$router.push('/structure?s=' + uid)
    },
    async setStructureState(uid, state) {
      try {
        await this.$axios.$put(
          'https://api.littletiles.net/1.0/structures/' + uid + '/review',
          {
            state,
          },
          {
            headers: {
              Authorization: this.$auth.getToken('local1'),
            },
          }
        )
        alert('STRUCTURE HAS BEEN SUCCESSFULLY ' + state)
      } catch (err) {
        alert('ERROR OCCURRED: ' + err.response)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  width: 100%;
  min-height: 100vh;
  background: $secondary;

  nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 64px;

    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(16px);

    z-index: 1000;

    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .nav-container {
      width: 100%;
      max-width: $breakpoint-laptop;
      height: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px 16px;

      @media screen and (max-width: $breakpoint-tablet) {
        flex-direction: column;
        justify-content: flex-start;
      }

      .left {
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: max-content;

        a {
          color: $white;
          font-weight: 700;
          user-select: none;
          cursor: pointer;
          font-size: 1.2rem;
          display: flex;
          align-items: center;

          span {
            padding-left: 6px;
            font-weight: 700;
            color: $primary;
            font-size: 0.8rem;
            text-transform: uppercase;
          }
        }
      }
    }
  }
  .dashboard {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 64px;

    h1,
    h2 {
      color: $white;
      font-weight: 700;
    }

    h1 {
      font-size: 1.4rem;
      padding: 24px 0px 12px 0px;
    }

    h2 {
      padding-bottom: 16px;
    }

    .moderator-login-form {
      display: flex;
      flex-direction: column;

      label {
        color: $white;
        padding-bottom: 12px;
      }

      input {
        margin-bottom: 12px;
        padding: 8px;
      }
    }

    .table-pending {
      overflow-x: auto;
      color: $white;
      border: 1px solid rgba(255, 255, 255, 0.1);

      th {
        background: black;
      }

      td {
        background: rgba(0, 0, 0, 0.4);
      }

      th,
      td {
        padding: 16px;
      }

      .cell-name {
        width: 240px;
      }

      .cell-actions {
        display: flex;
      }
    }
  }
}
</style>
