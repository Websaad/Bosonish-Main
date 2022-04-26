import store from '~/store'

export default async (to, from, next) => {
  if (!store.getters['auth/check'] && store.getters['auth/token']) {
    try {
      await store.dispatch('auth/fetchUser')
      await store.dispatch('auth/fetchUserRolesAndPermissions')
      await store.dispatch('auth/fetchUserUnreadNotifications')
    } catch (e) { }
  }

  next()
}
