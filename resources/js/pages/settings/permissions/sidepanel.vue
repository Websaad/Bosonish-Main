<template>
  <!-- Add Permission -->
  <slide-out-panel v-model="show" :outside-close="true" tag="form" @closed="handleHide" @formSubmit="handleSubmit">
    <template slot="header">
      <div class="">
        <h2 class=" text-white font-semibold">
          {{ form.id ? 'Edit Permission' : 'Add Permission' }}
        </h2>
      </div>
    </template>
    <template slot="body">
      <InputGroup v-model="form.display_name" tag="t-input" label="Display Name" field="display_name" :errors="form.errors" @input="form.name = $slugify(form.display_name)" />
      <InputGroup v-model="form.name" tag="t-input" label="Name" field="name" :errors="form.errors" />
      <InputGroup v-model="form.description" tag="t-textarea" label="Description" field="description" :errors="form.errors" />
      <InputGroup v-model="form.group" tag="t-select" :options="groups" label="Permission Group" field="group" :errors="form.errors" />
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
import InputGroup from '~/components/utilities/InputGroup'
import Api from '~/services/permission'
import Form from 'vform'
export default {
  name: 'PermissionSidePanel',
  components: {
    SlideOutPanel,
    InputGroup
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
      groups: [
        'General',
        'Dashboard',
        'Settings',
        'Profile'
      ]
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
  methods: {

    async handleSubmit () {
      const { data } = await Api.save(this.form)
      this.show = false
      this.form.reset()
      this.$notify({ group: 'success', title: 'Success', text: data.message }, 2000)
      this.$emit('submitted')
    },
    handleHide () {
      this.show = false
      this.form.reset()
    }
  }
}
</script>

<style scoped>

</style>
