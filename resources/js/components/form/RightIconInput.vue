<template>
  <label class="block mt-4 text-sm">
    <span class="text-gray-700 dark:text-gray-400">{{ label }}</span>
    <!-- focus-within sets the color for the icon when input is focused -->
    <div
      class="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400"
    >
      <t-input />
      <div
        class="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  </label>
</template>
<script>
// import StatsCardIcon from '../cards/StatsCardIcon'

export default {
  components: {
    // StatsCardIcon
  },
  props: {
    label: {
      type: String,
      default: 'Label'
    }
  }

}
</script>
