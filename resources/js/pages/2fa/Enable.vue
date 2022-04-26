<template>
  <div class="row align-items-center mt-3">
    <div class="col-md-12 ">
      <div class="card">
        <div class="card-header">
          Enable Two Factor Authentication
        </div>
        <div v-if="qr_image != null" class="card-body">
          <template v-if="qr_image != ''">
            <!-- eslint-disable vue/no-v-html -->
            <div v-html="qr_image" />
            <!--eslint-enable-->
            <div class="form-group">
              <label for="code">Enter Verification Code</label>
              <input v-model="form.verify_code" name="code" type="number" class="form-control">
            </div>
            <div class="mt-3">
              <t-button variant="primary" @click="handleEnable">
                Enable
              </t-button>
            </div>
          </template>
          <div v-else>
            <t-button variant="primary" @click="handleGenerate">
              Generate Secret Key to Enable 2FA
            </t-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import { mapGetters, mapActions } from 'vuex'
import { TWO_FA_ACTIONS } from '~/store/action-types'
export default {
  name: 'Enable',
  data () {
    return {
      form: new Form({
        password: ''
      }),
      formVarification: new Form({
        verify_code: ''
      }),
      qr_image: ''
    }
  },
  computed: mapGetters({
    user: 'auth/user'
  }),
  methods: {
    ...mapActions('2fa', {
      get: 'GET',
      generate: `${TWO_FA_ACTIONS.GENERATE}`,
      enable: `${TWO_FA_ACTIONS.ENABLE}`,
      disable: `${TWO_FA_ACTIONS.DISABLE}`
    }),
    async handleVerification () {
      await this.formVarification.post('/api/user/two-verify-code')
    },
    async handleGenerate () {
      await this.form.post('/api/user/two-factor-enable')
      // this.qr_image = response.data
    }
  }
}
</script>

<style scoped>

</style>
