export const state = () => ({
  toast: {
    tag: '',
    description: '',
    isOpen: false,
  },
  prevPath: '/',
})

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  },
  prevPath(state) {
    return state.prevPath
  },
  toast(state) {
    return state.toast
  },
}

export const mutations = {
  toggleToast(state, payload) {
    state.toast = payload
  },
  setPrevPath(state, payload) {
    state.prevPath = payload
  },
}
