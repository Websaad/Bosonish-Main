<template>
  <transition name="dropdown-menu">
    <div
      v-if="active"
      class="origin-top-right z-10 absolute top-full left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 min-w-36 py-1.5 rounded shadow-lg overflow-hidden mt-1"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppDropdownContent',
  inject: ['sharedState'],
  computed: {
    active () {
      return this.sharedState.active
    }
  }
}
</script>

<style>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: all 0.2s;
}
.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
