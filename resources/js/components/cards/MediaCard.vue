<template>
  <!-- Card -->

  <div class="flex items-center text-sm">
    <!-- Avatar with inset shadow -->
    <div
      class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
    >
      <img
        class="object-cover w-full h-full rounded-full"
        :src="imagePath"
        alt=""
        loading="lazy"
      >
      <div
        class="absolute inset-0 rounded-full shadow-inner"
        aria-hidden="true"
      />
    </div>
    <div>
      <p class="font-semibold">
        {{ label }}
      </p>
      <p class="text-xs text-gray-600 dark:text-gray-400">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<script>
// import StatsCardIcon from './StatsCardIcon'
export default {
  name: 'UserDetailCard',
  props: {
    label: {
      type: String,
      default: 'Sami Ullah'
    },
    desc: {
      type: String,
      default: 'Unemployed'
    },
    imagePath: {
      type: String,
      default: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
    }
  }
}
</script>
