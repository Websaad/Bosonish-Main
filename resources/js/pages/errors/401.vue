<template>
  <div class="container flex flex-col items-center px-6 mx-auto mt-10">
    🔐
    <h1 class="text-6xl font-semibold text-gray-700 dark:text-gray-200">
      401
    </h1>
    <p class="text-gray-700 dark:text-gray-300 m-2">
      You are not authorized!
    </p>
    <p class="mb-2">
      You are not allowed to access this page. Please contact the administrator.
    </p>
    <a
      class="text-purple-600 hover:underline dark:text-purple-300"
      @click="$router.go(-1)"
    >
      go back
    </a>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  layout: 'errorLayout'
}
</script>
