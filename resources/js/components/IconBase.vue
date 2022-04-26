<template>
  <svg
    aria-hidden="true"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    :viewBox="viewBox"
    stroke="currentColor"
  >
    <slot>
      <template v-for="(path, i) in paths">
        <path :key="i" :d="path" />
      </template>
    </slot>

  </svg>
</template>

<script>

export default {
  props: {
    paths: {
      type: Array,
      default: () => { return [] }
    },
    viewBox: {
      type: String,
      default: '0 0 24 24'
    }
  }
}

</script>
