import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      permissions: 'auth/permissions',
      roles: 'auth/roles'
    })
  },
  methods: {
    $can (permission) {
      if (!permission) return true

      if (Array.isArray(permission)) {
        return permission.some(p => this.$hasPermission(p))
      } else {
        return !!this.permissions.includes(permission)
      }
    },
    $isSuperAdmin () {
      return !!this.role.includes('super-admin')
    },
    $hasRole (role) {
      return !!this.role.includes(role)
    },
    $hasPermission (permission) {
      return !!this.permissions.includes(permission)
    }
  }

}
