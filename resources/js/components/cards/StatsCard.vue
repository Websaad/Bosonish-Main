<template>
  <!-- Card -->
  <div
    class="flex items-center p-4 bg-white rounded-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800"
  >
    <div :class="`text-${color}-500 bg-${color}-100 dark:text-${color}-100 dark:bg-${color}-500`"
         class="p-3 mr-4 rounded-full"
    >
      <slot name="icon">
        <StatsCardIcon :paths="iconPaths" />
      </slot>
    </div>
    <div>
      <p
        class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
      >
        {{ label }}
      </p>
      <p
        class="text-lg font-semibold text-gray-700 dark:text-gray-200"
      >
        {{ counter }}
      </p>
    </div>
  </div>
</template>

<script>
import StatsCardIcon from './StatsCardIcon'
export default {
  name: 'StatsCard',
  components: {
    StatsCardIcon
  },
  props: {
    label: {
      type: String,
      default: 'Label Text'
    },
    counter: {
      type: String,
      default: '64833'
    },
    color: {
      type: String,
      default: 'orange'
    },
    iconPaths: {
      type: Array,
      default: () => { return ['M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z'] }
    }
  },
  data: () => {
    return {
      variants: {
        blue: 'text-blue-500 bg-blue-100 dark:text-blue-100 dark:bg-blue-500',
        orange: 'text-orange-500 bg-orange-100 dark:text-orange-100 dark:bg-orange-500',
        teal: 'text-teal-500 bg-teal-100 dark:text-teal-100 dark:bg-teal-500',
        green: 'text-green-500 bg-green-100 dark:text-green-100 dark:bg-green-500'
      }
    }
  },
  computed: {
    getColorClasses () {
      return this.variants[this.color]
    }
  }
}
</script>
