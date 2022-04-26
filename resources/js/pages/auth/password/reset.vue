<template>
  <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
    <div class="w-full">
      <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        {{ $t('reset_password') }}
      </h1>
      <form @submit.prevent="reset" @keydown="form.onKeydown($event)">
        <!-- Email -->
        <InputGroup v-model="form.email" readonly tag="t-input" label="Email" field="email" :errors="form.errors" />
        <InputGroup v-model="form.password" tag="t-input" label="Password" field="password" :errors="form.errors" />
        <InputGroup v-model="form.password_confirmation" tag="t-input" label="Confirm Password" field="password_confirmation" :errors="form.errors" />
        <p class="mt-1">
          <t-button :loading="form.busy" type="submit" class="block w-full mt-4" variant="primary">
            {{ $t('reset_password') }}
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
    status: '',
    form: new Form({
      token: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),

  created () {
    this.form.email = this.$route.query.email
    this.form.token = this.$route.params.token
  },

  methods: {
    async reset () {
      const { data } = await this.form.post('/api/password/reset')

      this.$notify({ group: 'success', title: 'Success', text: data.status }, 2000)

      this.form.reset()

      this.$router.push({ name: 'login' })
    }
  }
}
</script>
