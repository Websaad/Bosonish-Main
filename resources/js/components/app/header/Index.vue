<template>
  <header class="z-10 py-4 bg-white dark:bg-gray-800">
    <div
      class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300"
    >
      <Hamburger />
      <!-- <h2 class="md:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-200 sm:text-xl text-2xl">
        Manage Roles
      </h2> -->
      <!-- <SearchBox /> -->
      <ul class="flex items-center flex-1 justify-end space-x-6">
        <GlobalSearch v-model="openSearchBox" />
        <!-- Button -->
        <button
          class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full"
          @click="openSearchBox = !openSearchBox"
        >
          <span class="sr-only">Search</span>
          <svg class="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-current text-gray-500" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
            <path class="fill-current text-gray-400" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
          </svg>
        </button>
        <!-- Modal backdrop -->
        <!-- <li >Open Search</li> -->
        <LocalDropdown />
        <ThemeToggler />
        <NotificationsMenu />
        <ProfileMenu />
      </ul>
    </div>
  </header>
</template>

<script>
import Hamburger from './Hamburger'
import ThemeToggler from './ThemeToggler'
// import SearchBox from './SearchBox'
import NotificationsMenu from './NotificationsMenu'
import ProfileMenu from './ProfileMenu'
import GlobalSearch from './GlobalSearch.vue'
import LocalDropdown from './LocalDropdown.vue'

export default {
  name: 'TheHeader',
  components: {
    Hamburger,
    ThemeToggler,
    // SearchBox,
    NotificationsMenu,
    ProfileMenu,
    GlobalSearch,
    LocalDropdown
  },

  data: () => ({
    appName: window.config.appName,
    openSearchBox: false
  }),

  methods: {

  }
}
</script>
