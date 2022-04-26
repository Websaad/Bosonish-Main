<template>
  <!-- Profile menu -->
  <li class="relative">
    <button class="flex items-center text-sm" aria-label="Account" aria-haspopup="true"
            @click="toggleProfileMenu" @keydown.escape="closeProfileMenu"
    >
      <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
        <img src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
             alt="Profile Image" loading="lazy" class="object-cover w-8 h-8 rounded-full"
        >
        <div aria-hidden="true" class="absolute inset-0 rounded-full shadow-inner" />
      </div>
      <div>
        <p class="font-semibold text-gray-600 dark:text-gray-400">
          {{ user.name }}
        </p>
        <p class="text-xs">
          Area Manager
        </p>
      </div>
    </button>
    <template v-if="show_profile_menu">
      <ul
        v-click-outside="closeProfileMenu"
        class="absolute right-0 w-72 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
        aria-label="submenu"
        @keydown.escape="closeProfileMenu"
      >
        <li class="flex" @click="closeProfileMenu">
          <router-link :to="{ name: 'settings.profile' }"
                       class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                       href="#"
          >
            <svg
              class="w-4 h-4 mr-3"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Profile</span>
          </router-link>
        </li>
        <li v-if="$can('two-factor-authentication')" class="flex" @click="closeProfileMenu">
          <router-link :to="{ name: 'settings.2fa' }"
                       class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <svg
              class="w-4 h-4 mr-3"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Two-Factor Authentication</span>
          </router-link>
        </li>
        <li class="flex" @click="closeProfileMenu">
          <a class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
             href="#"
             @click.prevent="logout"
          >
            <svg
              class="w-4 h-4 mr-3"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            <span>{{ $t('logout') }}</span>
          </a>
        </li>
      </ul>
    </template>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProfileMenu',
  data () {
    return {
      show_profile_menu: false
    }
  },
  computed: mapGetters({
    user: 'auth/user'
  }),
  methods: {

    toggleProfileMenu () {
      this.show_profile_menu = !this.show_profile_menu
    },

    closeProfileMenu () {
      this.show_profile_menu = false
    },

    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>

</style>
