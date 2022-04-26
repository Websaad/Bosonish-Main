<template>
  <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
    <div class="w-full">
      <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        {{ $t('reset_password') }}
      </h1>
      <form @submit.prevent="send" @keydown="form.onKeydown($event)">
        <!-- Email -->
        <InputGroup v-model="form.email" tag="t-input" label="Email" field="email" :errors="form.errors" />
        <p class="mt-1">
          <t-button type="submit" class="block w-full mt-4" variant="primary">
            {{ $t('send_password_reset_link') }}
          </t-button>
        </p>
        <hr class="my-8">
        <p class="mt-1">
          <t-button tag-name="a" class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" variant="link" :to="{ name:'login' }">
            Back to Login
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
    return { title: this.$t('reset_password') }
  },

  data: () => ({
    form: new Form({
      email: ''
    })
  }),

  methods: {
    async send () {
      const { data } = await this.form.post('/api/password/email')

      this.$notify({ group: 'success', title: 'Success', text: data.status }, 2000)

      this.form.reset()
    }
  }
}
</script>
