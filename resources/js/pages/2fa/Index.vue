<template>
  <div class="container px-6 mx-auto grid">
    <PageTitle title="Two-Factor Authentication" />

    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Enable v-if="enabled == 0" @enable="handleEnable" @generate="handleGenerate" />
      <Disable v-else @disable="handleDisable" />
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/page/PageTitle'
import Enable from './Enable'
import Disable from './Disable'

export default {
  name: 'Index',
  components: {
    PageTitle,
    Enable,
    Disable
  },
  data () {
    return {
      enabled: 0
    }
  },
  created () {
    // this.get()
  },

  methods: {

    handleEnable (form) {
      this.enable(form).then(({ data }) => {
        this.getInfo()
        // toastr.success(data.message)
      })
    },
    handleDisable (form) {
      this.disable(form).then(({ data }) => {
        this.getInfo()
        //  toastr.success(data.message)
      })
    },
    handleGenerate () {
      this.generate().then(({ data }) => {
        this.getInfo()
      }).catch((e) => {
        //  toastr.error(e.response)
      })
    },
    getInfo () {
      // Get User Info
    }
  }
}
</script>

<style scoped>

</style>
