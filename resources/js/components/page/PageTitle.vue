<template>
  <div>
    <slot>
      <h2
        class="mb-6 md:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-200 sm:text-xl text-2xl"
      >
        {{ title }}
      </h2>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
