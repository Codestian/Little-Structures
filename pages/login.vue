<template>
  <div class="login-container">
    <div class="login">
      <form class="login-form" @submit.prevent>
        <h1>Log in</h1>
        <h2>Use your Mojang account to login</h2>
        <div v-if="showErrText" class="error">
          Wrong E-mail or password. Try again.
        </div>
        <label for="email">E-mail</label>
        <input id="email" type="email" name="email" />
        <label for="password">Password</label>
        <input id="password" type="password" name="password" />
        <LtButton
          label="login"
          :text="buttonText"
          :icon="['fas', 'lock']"
          @click="login"
        />
      </form>
      <div class="disclaimer">
        <p>
          Log in with the account you used for Minecraft.
          <br />Sign up on minecraft.net if you do not have one. <br />We don't
          store or collect any data from your account.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import LtButton from '@/components/LtButton'

export default {
  layout: 'empty',
  components: { LtButton },
  data: () => ({
    buttonText: 'Log In',
    showErrText: false,
  }),
  mounted() {},
  auth: 'false',
  methods: {
    login() {
      const formData = new FormData(document.querySelector('form'))

      const username = formData.get('email')
      const password = formData.get('password')

      this.buttonText = 'Logging in...'

      if (username && password) {
        this.$auth
          .loginWith('local', {
            data: {
              username,
              password,
            },
          })
          .then((data) => {
            this.$auth.setToken(
              'local1',
              'Bearer ' + data.data.data.strong.token
            )
            this.buttonText = 'Redirecting...'
            this.showErrText = false

            this.$store.commit('toggleToast', {
              tag: 'Success',
              description: 'Welcome back',
              isOpen: true,
            })
            setTimeout(() => {
              this.$store.commit('toggleToast', {
                isOpen: false,
              })
            }, 2000)
          })
          .catch((err) => {
            this.buttonText = 'Log In'
            this.showErrText = true
            throw err
          })
      } else {
        this.buttonText = 'Log In'
      }
    },
  },
  head() {
    return {
      title: 'LittleTiles | Login',
    }
  },
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('../assets/images/backgrounds/wallpaper05.png');
  background-size: cover;
  background-position: 50% 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  .login {
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    width: 100%;
    max-width: 480px;
    form {
      padding: 32px;
      background: $white;
      color: rgb(70, 70, 70);
      h1 {
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 700;
        text-align: center;
        padding-bottom: 16px;
      }

      h2 {
        padding-bottom: 32px;
        text-align: center;
        line-height: 150%;
      }

      .error {
        background: rgb(212, 68, 26);
        color: white;
        padding: 24px;
        margin-bottom: 32px;
        font-size: 0.8rem;
        box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.2);
        line-height: 150%;
      }

      label {
        font-size: 0.8rem;
      }

      input {
        width: 100%;
        border: 1px solid $black;
        padding: 8px;
        margin: 8px 0px 16px 0px;
        font-size: 0.8rem;

        &:focus {
          outline: 1px solid $black;
        }
      }

      button {
        width: 100%;
        margin-top: 8px;

        &:focus {
          outline: 3px solid rgba(0, 0, 0, 0.4);
        }
      }
    }
    .disclaimer {
      padding: 24px;
      text-align: center;
      p {
        color: white;
        font-size: 0.8rem;
        line-height: 150%;
      }
    }
  }
}
</style>
