<template>
  <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
    <div class="w-full">
      <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        {{ $t('verify_email') }}
      </h1>
      <div v-if="success" class="w-full">
        <p class="text-green-900">
          {{ success }}
        </p>
        <t-button tag-name="a" class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" variant="link" :to="{ name: 'login'}">
          {{ $t('login') }}
        </t-button>
      </div>
      <div v-else>
        <p class="text-red-900">
          {{ error || $t('failed_to_verify_email') }}
        </p>
        <t-button tag-name="a" class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" variant="link" :to="{ name: 'verification.resend' }">
          {{ $t('resend_verification_link') }}
        </t-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const qs = (params) => Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

export default {
  async beforeRouteEnter (to, from, next) {
    try {
      const { data } = await axios.post(`/api/email/verify/${to.params.id}?${qs(to.query)}`)

      next(vm => { vm.success = data.status })
    } catch (e) {
      next(vm => { vm.error = e.response.data.status })
    }
  },

  layout: 'guestLayout',
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('verify_email') }
  },

  data: () => ({
    error: '',
    success: ''
  })
}
</script>
