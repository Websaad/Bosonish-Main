import store from '~/store'

/**
 * This is middleware to check the current user permissions.
 */

export default (to, from, next, permissions) => {
  const abilities = store.getters['auth/permissions']
  permissions = permissions.split(',')

  // Check if the user has all of the required permissions...
  if (!permissions.every(p => abilities.includes(p))) {
    next('/unauthorized')
  }
  next()
}
