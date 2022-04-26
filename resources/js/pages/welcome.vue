<template>
  <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
    <div class="w-full">
      <template v-if="authenticated">
        <t-button variant="primary" :to="{ name: 'home' }">
          {{ $t('home') }}
        </t-button>
      </template>
      <template v-else>
        <t-button variant="primary" :to="{ name: 'login' }">
          {{ $t('login') }}
        </t-button>
        <t-button variant="primary" :to="{ name: 'register' }">
          {{ $t('register') }}
        </t-button>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'basic',

  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: window.config.appName
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>
