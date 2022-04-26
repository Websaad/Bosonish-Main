<template>
  <form @submit.prevent="update" @keydown="form.onKeydown($event)">
    <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
      <InputGroup v-model="form.name" tag="t-input" label="Name" field="name" :errors="form.errors" />
      <InputGroup v-model="form.email" tag="t-input" label="Email" field="email" :errors="form.errors" />
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
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      form: new Form({
        name: '',
        email: ''
      })
    }
  },
  computed: mapGetters({
    user: 'auth/user'
  }),
  created () {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
  },
  methods: {
    async update () {
      const { data } = await this.form.patch('/api/settings/profile')
      this.$store.dispatch('auth/updateUser', { user: data.data })
      this.$notify({ group: 'success', title: 'Success', text: data.message }, 4000)
    }
  }
}
</script>
