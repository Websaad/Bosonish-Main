<template>
  <svg class="w-5" :class="'h-'+height" fill="currentColor" viewBox="0 0 20 20">
    <slot>
      <template v-for="(path, i) in paths">
        <path :key="i" :d="path" />
      </template>
    </slot>
  </svg>
</template>
<script>
export default {
  name: 'StatsCardIcon',
  props: {
    paths: {
      type: Array,
      default: () => { return [] }
    },
    height: {
      type: Number,
      default: 5
    }
  }
}
</script>
