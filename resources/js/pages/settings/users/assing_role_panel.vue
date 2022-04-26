<template>
  <!-- Add Role -->
  <slide-out-panel v-model="show" :outside-close="true" tag="form" @closed="handleHide" @formSubmit="handleSubmit">
    <template slot="header">
      <div class="">
        <h2 class=" text-white font-semibold">
          Assign Roles
        </h2>
      </div>
    </template>
    <template slot="body">
      <t-rich-select
        v-model="form.roles"
        multiple
        :close-on-select="false"
        :options="options"
        placeholder="Select multiple options"
      />
    </template>
    <template slot="footer">
      <div class="flex justify-end items-end space-x-2 px-4">
        <t-button type="button" variant="default" @click="handleHide">
          Cancel
        </t-button>
        <t-button :loading="form.busy" variant="primary">
          Submit
        </t-button>
      </div>
    </template>
  </slide-out-panel>
</template>

<script>
import SlideOutPanel from '~/components/app/panel/SlideOutPanel.vue'
import Api from '~/services/role'
import Form from 'vform'

export default {
  name: 'RoleSidePanel',
  components: {
    SlideOutPanel
  },
  props: {
    value: {
      type: Boolean,
      required: false
    },
    record: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      form: new Form(this.record),
      options: []
    }
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  watch: {
    record: {
      deep: true,
      handler (val) {
        this.form.fill(val)
      }
    }
  },
  mounted () {
    this.getRoles()
  },
  methods: {
    async getRoles () {
      const { data } = await Api.getRoles()
      this.options = data
    },
    async handleSubmit () {
      const { data } = await Api.assign(this.form)
      this.show = false
      this.form.reset()
      this.$notify({ group: 'success', title: 'Success', text: data.message }, 2000)
      this.$emit('submitted')
    },
    handleHide () {
      this.show = false
      this.form.reset()
      this.$emit('closed')
    }
  }
}
</script>

<style scoped>

</style>
