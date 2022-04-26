<template>
  <!-- Mobile hamburger -->
  <button
    class="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:ring-purple"
    aria-label="Menu"
    @click="toggleSideMenu"
  >
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Hamburger',
  methods: {
    ...mapActions({
      toggleSideMenu: 'sidebar/toggleIt'
    })
  }
}
</script>

<style scoped>

</style>
