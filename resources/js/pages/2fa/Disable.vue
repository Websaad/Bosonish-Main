<template>
  <div class="row align-items-center mt-3">
    <div class="col-md-12 ">
      <div class="card">
        <div class="card-header">
          Disable Two Factor Authentication
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="password">Enter Password</label>
            <input v-model="form.current_password" name="password" type="password" class="form-control">
          </div>
          <div class="mt-3">
            <button class="btn btn-primary" @click="handleDisable">
              Disable
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
export default {
  name: 'Disable',
  data () {
    return {
      form: new Form({
        current_password: null
      })
    }
  },
  methods: {
    handleDisable () {
      this.$emit('disable', this.form)
    }
  }
}
</script>

<style scoped>

</style>
