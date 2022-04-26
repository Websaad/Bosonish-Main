<template>
  <div class="container px-6 mx-auto grid">
    <PageTitle title="Modals" />
    <CTA />
    <div>
      <t-modal
        v-model="showModal"
        header="Title of the modal"
      >
        Content of the modal.
        <template #footer>
          <div class="flex justify-between">
            <t-button type="button" variant="danger" @click="showModal =false">
              Cancel
            </t-button>
            <t-button type="button" variant="success" @click="showModal =false">
              Ok
            </t-button>
          </div>
        </template>
      </t-modal>

      <t-button variant="primary" type="button" @click="showModal=true">
        Show modal
      </t-button>
    </div>
  </div>
</template>

<script>
import PageTitle from '../components/page/PageTitle'
import CTA from '../components/page/CTA'

export default {
  components: {
    PageTitle,
    CTA
  },

  middleware: 'auth',
  data () {
    return {
      showModal: false
    }
  },

  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>
