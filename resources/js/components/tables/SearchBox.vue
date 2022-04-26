<template>
  <!-- Search input -->
  <div class="flex justify-end flex-1">
    <div class="relative w-full max-w-xl focus-within:text-primary-500">
      <div class="absolute inset-y-0 flex items-center pl-2">
        <svg class="w-4 h-4"
             aria-hidden="true"
             fill="currentColor"
             viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <input
        v-debounce="(this,500)"
        class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 dark:placeholder-gray-500 dark:focus:ring-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-primary-300 focus:outline-none focus:ring-primary form-input rounded"
        type="text"
        :value="value"
        :placeholder="placeholder" @debounce-change="$emit('input',$event.target.value)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  props: {
    value: { type: String, required: false, default: '' },
    placeholder: { type: String, required: false, default: '' }
  }
}
</script>

<style scoped>

</style>
