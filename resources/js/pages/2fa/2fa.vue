<template>
  <div class=" pt-10 container px-6 mx-auto grid">
    <PageTitle title="Two-Factor Authentication" />
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h3 v-if="twoFactorEnabled" class="text-lg font-medium text-gray-900 dark:text-white">
        You have enabled two factor authentication.
      </h3>

      <h3 v-else class="text-lg font-medium text-gray-900 dark:text-white">
        You have not enabled two factor authentication.
      </h3>

      <div class="mt-3 max-w-xl text-sm text-gray-600 dark:text-white">
        <p>
          When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.
        </p>
      </div>

      <div v-if="twoFactorEnabled">
        <div v-if="qrCode">
          <div class="mt-4 max-w-xl text-sm text-gray-600 dark:text-white">
            <p class="font-semibold">
              Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application.
            </p>
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div class="mt-4" v-html="qrCode" />
          <!--eslint-enable-->
        </div>

        <div v-if="recoveryCodes.length > 0">
          <div class="mt-4 max-w-xl text-sm text-gray-600 dark:text-white">
            <p class="font-semibold">
              Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.
            </p>
          </div>

          <div class="grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg">
            <div v-for="(code,index) in recoveryCodes" :key="index">
              {{ code }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <div v-if="!twoFactorEnabled">
          <t-button variant="primary" :class="{ 'opacity-25': enabling }"
                    :disabled="enabling"
                    @click.native="enableTwoFactorAuthentication"
          >
            Enable
          </t-button>
        </div>

        <div v-else>
          <t-button v-if="recoveryCodes.length > 0" variant="primary"
                    class="mr-3"
                    @click.native="regenerateRecoveryCodes"
          >
            Regenerate Recovery Codes
          </t-button>

          <t-button v-else variant="primary"
                    class="mr-3"
                    @click.native="showRecoveryCodes"
          >
            Show Recovery Codes
          </t-button>

          <t-button variant="danger" :class="{ 'opacity-25': disabling }"
                    :disabled="disabling"
                    @click.native="disableTwoFactorAuthentication"
          >
            Disable
          </t-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageTitle from '~/components/page/PageTitle'
import { mapGetters, mapActions } from 'vuex'
import { TWO_FA_ACTIONS } from '~/store/action-types'
export default {
  components: {
    PageTitle
  },
  middleware: ['auth', 'permission:two-factor-authentication'],
  data () {
    return {
      enabling: false,
      disabling: false
      // qrCode: null,
      // recoveryCodes: [],
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      qrCode: '2fa/qrCode',
      recoveryCodes: '2fa/recoveryCodes',
      twoFactorEnabled: '2fa/twoFactorEnabled'
    })
  },
  mounted () {
    this.get()
    // this.$notify({ group: "success", title: "Success", text: 'kaber hussain ' },40000)
  },
  methods: {
    ...mapActions('2fa', {
      get: 'GET',
      generate: `${TWO_FA_ACTIONS.GENERATE}`,
      enable: `${TWO_FA_ACTIONS.ENABLE}`,
      disable: `${TWO_FA_ACTIONS.DISABLE}`,
      regenerate: `${TWO_FA_ACTIONS.REGENERATE}`
    }),
    enableTwoFactorAuthentication () {
      this.enabling = true
      this.generate().then((res) => {
        this.get()
        this.enabling = false
      })
    },
    regenerateRecoveryCodes () {
      this.regenerate()
    },
    disableTwoFactorAuthentication () {
      this.disabling = true
      this.disable().then((res) => {
        this.disabling = false
        this.get()
      })
    }
  }
}
</script>
