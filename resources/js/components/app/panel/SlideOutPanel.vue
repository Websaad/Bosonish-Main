
<template>
  <div>
    <transition name="overlay">
      <div v-if="value" class="z-50 absolute inset-0 bg-gray-900 bg-opacity-50 transition-opacity" aria-hidden="true" />
    </transition>
    <transition name="slide-over">
      <div v-if="value" class="z-50 fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div v-if="value" v-click-outside="outsideCloseAble" class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <div class="relative w-screen max-w-xl">
              <div class="absolute top-0 right-0 pt-4 pr-10 flex">
                <button type="button" class="z-20 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="checkOpen">
                  <span class="sr-only">Close panel</span>
                  <!-- Heroicon name: outline/x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <component :is="tag" class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll dark:bg-gray-800" @submit.prevent="$emit('formSubmit',$event)">
                <div class="py-4 px-4 sm:px-6 bg-indigo-600 sticky w-full z-10 top-0">
                  <slot name="header" />
                </div>
                <div class="mt-6 relative flex-1 px-4 sm:px-6">
                  <slot name="body" />
                </div>
                <div class="border-t dark:border-gray-600 py-4 px-4">
                  <slot name="footer" />
                </div>
              </component>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    outsideClose: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  methods: {
    checkOpen (e) {
      if (this.value) {
        this.$emit('input', false)
        this.$emit('closed')
      }
    },
    outsideCloseAble () {
      console.log(this.outsideClose)
      if (this.outsideClose) {
        this.checkOpen()
      }
    }
  }
}
</script>
