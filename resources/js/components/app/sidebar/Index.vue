<template>
  <div class="">
    <!-- Desktop sidebar -->
    <aside :class="{'-translate-x-full': !isSideMenuOpen}"
           class="h-full absolute md:relative z-20 md:z-10 w-80 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 mt-16 md:h-full md:mt-0 md:inset-y-0 left-0 transform md:translate-x-0 transition duration-200 ease-in-out shadow-md"
    >
      <div class="py-4 text-gray-500 dark:text-gray-400">
        <a
          class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
          href="#"
        >
          {{ appName }}
        </a>
        <ul class="mt-6">
          <template v-for="(item, i) in menu">
            <MenuItem v-if="$can(item.permissions) && item.visible"
                      :key="i"
                      :to="item.to"
                      :active="item.active"
                      :title="item.title"
                      :submenu="item.submenu"
            >
              <!-- :href="item.submenu && item.submenu.length > 0 ? '#': ''" -->
              <template slot="icon">
                <ItemIcon :paths="item.icon.paths" />
              </template>
            </MenuItem>
          </template>
        </ul>
        <div class="px-6 my-6">
          <button
            class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-purple"
          >
            Create account
            <span class="ml-2" aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </aside>
    <!-- Mobile sidebar -->
    <!-- Backdrop -->
    <div
      v-if="isSideMenuOpen"
      class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center md:hidden"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import LocaleDropdown from './../LocaleDropdown'
import MenuItem from './MenuItem'
import ItemIcon from './ItemIcon'
// import CaretIcon from './CaretIcon'

import menu from './menu.json'

export default {
  name: 'Sidebar',
  components: {
    // LocaleDropdown,
    MenuItem,
    ItemIcon
    // CaretIcon
  },

  data: () => ({
    appName: window.config.appName,
    isPagesMenuOpen: false,
    menu
  }),

  computed: mapGetters({
    user: 'auth/user',
    isSideMenuOpen: 'sidebar/toggle'
  }),
  watch: {
    $route: {
      immediate: true,
      handler: 'setActiveMenu'
    }
  },

  methods: {
    toggleMenu () {
      this.isPagesMenuOpen = !this.isPagesMenuOpen
    },
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    },
    setActiveMenu () {
      this.menu.forEach(item => {
        item.active = false
        if (item.submenu) {
          item.submenu.forEach(subitem => {
            subitem.active = false
            if (subitem.to === this.$route.name) {
              item.active = true
              subitem.active = true
            }
          })
        } else if (item.to === this.$route.name) {
          item.active = true
        }
      })
    }
  }
}
</script>
