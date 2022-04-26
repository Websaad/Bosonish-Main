<template>
  <div>
    <div class="flex items-center min-h-screen p-6 dark:bg-gray-900">
      <div
        class="flex-1 h-full max-w-4xl mx-auto overflow-hidden"
      >
        <div class="flex flex-col overflow-y-auto md:flex-row">
          <child />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout'
}
</script>
