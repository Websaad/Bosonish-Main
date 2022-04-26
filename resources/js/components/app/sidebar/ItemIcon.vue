<template>
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
    <slot>
      <template v-for="(path, i) in paths">
        <path :key="i" :d="path" />
      </template>
    </slot>
  </svg>
</template>

<script>

export default {
  name: 'ItemIcon',
  props: {
    paths: {
      type: Array,
      default: () => { return [] }
    }
  }
}

</script>
