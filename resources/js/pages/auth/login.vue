<template>
  <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
    <div class="w-full">
      <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        Login
      </h1>
      <form @submit.prevent="login" @keydown="form.onKeydown($event)">
        <!-- Email -->
        <label class="block text-sm">
          <span class="text-gray-700 dark:text-gray-400">{{ $t('email') }}</span>
          <t-input v-model="form.email" type="email" name="email" :variant="{'danger': form.errors.has('email')}" />
          <has-error :errors="form.errors" field="email" />
        </label>
        <!-- Password -->

        <label class="block mt-4 text-sm">
          <span class="text-gray-700 dark:text-gray-400">{{ $t('password') }}</span>
          <t-input v-model="form.password" type="password" name="email" :variant="{'danger': form.errors.has('password') || form.errors.has('email') }" />
          <has-error :errors="form.errors" field="password" />
        </label>

        <t-button type="submit" class="block w-full mt-4" variant="primary">
          {{ $t('login') }}
        </t-button>

        <hr class="my-8">

        <p class="mt-4">
          <t-button tag-name="a" variant="link" :to="{ name: 'password.request' }">
            Forgot your password?
          </t-button>
        </p>
        <p class="mt-1">
          <t-button tag-name="a" class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" variant="link" to="register" href="register">
            Create account
          </t-button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import Cookies from 'js-cookie'
import { mapGetters } from 'vuex'
export default {
  components: {
  },
  layout: 'guestLayout',
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),

  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')
      await this.$store.dispatch('auth/fetchUserRolesAndPermissions')
      await this.$store.dispatch('auth/fetchUserUnreadNotifications')

      this.$notify({ group: 'success', title: 'Success', text: data.message }, 4000)

      // Redirect home.
      this.redirect()
    },

    redirect () {
      const intendedUrl = Cookies.get('intended_url')

      if (intendedUrl) {
        Cookies.remove('intended_url')
        this.$router.push({ path: intendedUrl })
      } else {
        if (this.user.two_factor_enabled === 1) {
          this.$router.push({ name: 'verify.2fa' })
        } else {
          this.$router.push({ name: 'home' })
        }
      }
    }
  }
}
</script>
