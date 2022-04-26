import Vue from 'vue'
import store from '~/store'
Vue.directive('can', {
  inserted (el, binding, vnode) {
    const permission = binding.value

    const permissions = store.getters['auth/permissions']

    let allowed = true
    if (!permission) return allowed

    if (Array.isArray(permission)) {
      allowed = permission.some((p) => hasPermission(permissions, p))
    } else {
      allowed = !!permissions.includes(permission)
    }
    console.log(permission)
    if (!allowed) {
      // Hide Current Element
      el.style.display = 'none'
    }
  }
})
function hasPermission (permissions, permission) {
  return !!permissions.includes(permission)
}
