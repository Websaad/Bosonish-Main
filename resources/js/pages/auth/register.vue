<template>
  <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
    <div class="w-full">
      <h1
        class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
      >
        Create account
      </h1>
      <form @submit.prevent="register" @keydown="form.onKeydown($event)">
        <label class="block text-sm">
          <span class="text-gray-700 dark:text-gray-400">Name</span>
          <t-input v-model="form.name" type="text" name="name" placeholder="Jane Doe" :variant="{'danger': form.errors.has('name')}" />
          <has-error :errors="form.errors" field="name" />
        </label>
        <label class="block mt-4 text-sm">
          <span class="text-gray-700 dark:text-gray-400">Email</span>
          <t-input v-model="form.email" type="email" name="email" placeholder="someone@example.com" :variant="{'danger': form.errors.has('email')}" />
          <has-error :errors="form.errors" field="email" />
        </label>
        <label class="block mt-4 text-sm">
          <span class="text-gray-700 dark:text-gray-400">Password</span>
          <t-input v-model="form.password" type="password" name="password" placeholder="***************" :variant="{'danger': form.errors.has('password')}" />
          <has-error :errors="form.errors" field="password" />
        </label>
        <label class="block mt-4 text-sm">
          <span class="text-gray-700 dark:text-gray-400">
            Confirm password
          </span>
          <t-input v-model="form.password_confirmation" type="password" name="password_confirmation" placeholder="***************" :variant="{'danger': form.errors.has('password_confirmation')}" />
          <has-error :errors="form.errors" field="password_confirmation" />
        </label>

        <div class="flex mt-6 text-sm">
          <label class="flex items-center dark:text-gray-400">
            <t-checkbox />
            <span class="ml-2">
              I agree to the
              <span class="underline">privacy policy</span>
            </span>
          </label>
        </div>

        <!-- You should use a button here, as the anchor is only used for the example  -->
        <button type="submit"
                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                href="./login.html"
        >
          Create account
        </button>
      </form>

      <hr class="my-8">

      <p class="mt-4">
        <router-link to="login"
                     class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
        >
          Already have an account? Login
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Form from 'vform'

export default {
  components: {
  },
  layout: 'guest',
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }),
    mustVerifyEmail: false
  }),

  methods: {
    async register () {
      // Register the user.
      const { data } = await this.form.post('/api/register')

      // Must verify email fist.
      if (data.status) {
        this.mustVerifyEmail = true
        this.$notify({ group: 'success', title: 'Success', text: data.status }, 4000)
        this.$router.push({ name: 'verification.resend' })
      } else {
        // Log in the user.
        const { data: { token } } = await this.form.post('/api/login')

        // Save the token.
        this.$store.dispatch('auth/saveToken', { token })

        // Update the user.
        await this.$store.dispatch('auth/updateUser', { user: data })

        // Redirect home.
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>
