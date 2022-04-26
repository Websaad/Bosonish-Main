<template>
  <div v-click-outside="away" class="relative" @click="toggle">
    <slot name="toggler">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg> -->
      <button type="button" class="dark:text-gray-200  inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-1 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
        Action
        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </slot>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppDropdown',
  provide () {
    return {
      sharedState: this.sharedState
    }
  },
  data () {
    return {
      sharedState: {
        active: false
      }
    }
  },
  methods: {
    toggle () {
      this.sharedState.active = !this.sharedState.active
    },
    away () {
      this.sharedState.active = false
    }
  }
}
</script>
