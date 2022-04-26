<template>
  <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
    <div class="w-full">
      <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        {{ $t('resend_verification_link') }}
      </h1>
      <form @submit.prevent="send" @keydown="form.onKeydown($event)">
        <InputGroup v-model="form.email" tag="t-input" label="Email" field="email" :errors="form.errors" />
        <p class="mt-1">
          <t-button :loading="form.busy" type="submit" class="block w-full mt-4" variant="primary">
            {{ $t('send_verification_link') }}
          </t-button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Form from 'vform'

export default {
  layout: 'guestLayout',
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('verify_email') }
  },

  data: () => ({
    status: '',
    form: new Form({
      email: ''
    })
  }),

  created () {
    if (this.$route.query.email) {
      this.form.email = this.$route.query.email
    }
  },

  methods: {
    async send () {
      const { data } = await this.form.post('/api/email/resend')
      this.form.reset()
      this.$notify({ group: 'success', title: 'Success', text: data.status }, 2000)
    }
  }
}
</script>
