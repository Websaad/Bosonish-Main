<template>
  <form @submit.prevent="update" @keydown="form.onKeydown($event)">
    <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
      <InputGroup v-model="form.password" tag="t-input" label="Password" field="password" :errors="form.errors" />
      <InputGroup v-model="form.password_confirmation" tag="t-input" label="Confirm Password" field="password_confirmation" :errors="form.errors" />
    </div>
    <div class="flex justify-end items-end space-x-2 mt-4">
      <t-button :loading="form.busy" variant="primary">
        Update
      </t-button>
    </div>
  </form>
</template>
<script>
import Form from 'vform'
export default {
  data () {
    return {
      form: new Form({
        password: '',
        password_confirmation: ''
      })
    }
  },
  methods: {
    async update () {
      const { data } = await this.form.patch('/api/settings/password')
      this.form.reset()
      this.$notify({ group: 'success', title: 'Success', text: data.message }, 40000)
    }
  }
}
</script>
