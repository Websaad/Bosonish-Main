<template>
  <component
    :is="tag"
    :to="to"
    class="w-full font-medium text-sm flex items-center py-1 px-3 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 text-gray-700 dark:text-gray-200"
    @click="$emit('click',$event)"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AppDropdownItem',
  props: {
    tag: {
      type: String,
      default: 'router-link'
    },
    to: {
      type: Object,
      default () {
        return {}
      }
    },
    title: {
      type: String,
      default: 'Link Title'
    }
  },
  data () {
    return {}
  },
  // computed: {
  //   tag () {
  //     return this.type ? 'router-link' : 'button'
  //   }
  // },
  methods: {}
}
</script>
