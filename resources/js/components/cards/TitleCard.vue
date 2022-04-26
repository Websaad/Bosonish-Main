<template>
  <div
    class="min-w-0 p-4  rounded-lg shadow-xs dark:bg-gray-800" :class="getColorClasses"
  >
    <slot name="content" />
  </div>
</template>
<script>

export default {
  name: 'TitleCard',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    desc: {
      type: String,
      default: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.'
    },
    color: {
      type: String,
      default: 'white'
    }

  },
  data () {
    return {
      variants: {
        white: 'bg-white text-gray-600',
        blue: 'text-white bg-purple-600'
      }
    }
  },
  computed: {
    getColorClasses () {
      return this.variants[this.color]
    }
  }
}
</script>
