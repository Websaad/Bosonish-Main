<template>
  <div>
    <slide-out-panel v-model="isOpen">
      <t-input />
    </slide-out-panel>
    <button @click="isOpen = !isOpen">
      Open Panel
    </button>
    <slide-out-panel v-model="isOpen2" :outside-close="true">
      <t-input />
    </slide-out-panel>
    <button @click="isOpen2 = !isOpen2">
      Open Panel 2
    </button>
  </div>
</template>
<script>
import SlideOutPanel from '~/components/app/panel/SlideOutPanel'
export default {
  components: {
    SlideOutPanel
  },
  data () {
    return {
      isOpen: false,
      isOpen2: false,
      isOpenOffcanvas: false,
      visible: false
    }
  },
  methods: {
  }
}
</script>
