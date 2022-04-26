<template>
  <!-- Card -->
  <span
    class="px-2 py-1 text-xs font-semibold leading-tight mr-1 rounded-full" :class="getColorClasses"
  >
    {{ label }}
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    label: {
      type: String,
      default: 'approved'
    },
    color: {
      type: String,
      default: 'blue'
    }
  },
  data: () => {
    return {
      variants: {
        blue: 'text-blue-700 bg-blue-100 dark:text-white dark:bg-blue-600',
        orange: 'text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600',
        teal: 'text-teal-700 bg-teal-100 dark:text-white dark:bg-teal-600',
        green: 'text-green-700 bg-green-100 dark:text-white dark:bg-green-600'
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
