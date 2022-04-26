<template>
  <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
    <div class="w-full">
      <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        Two Factor Authentication
      </h1>
      <form @submit.prevent="twoFactor" @keydown="form.onKeydown($event)">
        <!-- Code -->
        <label v-if="!use_recovery_code" class="block text-sm">
          <span class="text-gray-700 dark:text-gray-400">Code</span>
          <t-input
            v-model="form.code"
            type="text"
            name="code"
            autocomplete="off"
            :variant="{ danger: form.errors.has('code') }"
          />
          <has-error :errors="form.errors" field="code" />
        </label>
        <!-- Recovery Code -->

        <label v-else class="block mt-4 text-sm">
          <span class="text-gray-700 dark:text-gray-400">Recovery Code</span>
          <t-input
            v-model="form.recovery_code"
            type="text"
            name="recovery_code"
            autocomplete="off"
            :variant="{ danger: form.errors.has('recovery_code') }"
          />
          <has-error :errors="form.errors" field="recovery_code" />
        </label>
        <div class="flex items-center justify-end mt-4">
          <t-button type="button" variant="link" @click="toggleType">
            Use Recovery Code
          </t-button>
        </div>
        <t-button type="submit" class="block w-full mt-4" variant="primary">
          Verify
        </t-button>
      </form>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import { mapActions, mapGetters } from 'vuex'
import { TWO_FA_ACTIONS } from '~/store/action-types'
export default {
  components: {},
  layout: 'guestLayout',
  middleware: 'auth',

  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      recovery_code: '',
      code: ''
    }),
    use_recovery_code: false
  }),
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  mounted () {
  },

  methods: {
    ...mapActions('2fa', {
      verify: `${TWO_FA_ACTIONS.VERIFY}`
    }),
    toggleType () {
      this.use_recovery_code = !this.use_recovery_code
    },
    async twoFactor () {
      this.verify(this.form).then(response => {
        if (response.data.success) {
          this.$notify({ group: 'success', title: 'Success', text: response.data.message }, 4000)
          this.$router.push({ name: 'settings.2fa' })
        }
      })
    }
  }
}
</script>
