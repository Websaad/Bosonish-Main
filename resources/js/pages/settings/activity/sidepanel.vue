<template>
  <!-- Add Role -->
  <slide-out-panel v-model="show" :outside-close="true" tag="form" @closed="handleHide" @formSubmit="handleSubmit">
    <template slot="header">
      <div class="">
        <h2 class=" text-white font-semibold">
         Activity Details
        </h2>
      </div>
    </template>
    <template slot="body">
      <h2 class="font-semibold text-gray-800 dark:text-gray-200 mb-2">Updated Record</h2>
      <table class=" table-auto w-full border" v-if="record.properties">
        <thead class="text-xs font-semibold uppercase text-gray-500 bg-gray-50 border-t border-b border-gray-200 dark:border-gray-600">
          <tr class="text-xs font-semibold tracking-wide text-gray-500 uppercase dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
            v-for="(value,key,index) in record.properties.attributes" :key="index">{{ key.replace('_',' ').toUpperCase() }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap dark:text-gray-200 text-center" v-for="(value,key,index) in record.properties.attributes" :key="index">{{ value }}</td>
          </tr>
        </tbody>
      </table>
      <h2 class="font-semibold text-gray-800 dark:text-gray-200 mt-2 mb-2">Old Record</h2>
      <table class=" table-auto w-full border" v-if="record.properties && record.properties.old">
        <thead class="text-xs font-semibold uppercase text-gray-500 bg-gray-50 border-t border-b border-gray-200 dark:border-gray-600">
          <tr class="text-xs font-semibold tracking-wide text-gray-500 uppercase dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
            v-for="(value,key,index) in record.properties.old" :key="index">{{ key.replace('_',' ').toUpperCase() }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap dark:text-gray-200 text-center" v-for="(value,key,index) in record.properties.old" :key="index">{{ value }}</td>
          </tr>
        </tbody>
      </table>
      <span v-else>No Old Records Found</span>
      <!-- {{ record }} -->
    </template>
    <template slot="footer">
      <div class="flex justify-end items-end space-x-2 px-4">
        <t-button type="button" variant="default" @click="handleHide">
          Cancel
        </t-button>
      </div>
    </template>
  </slide-out-panel>
</template>

<script>
import SlideOutPanel from '~/components/app/panel/SlideOutPanel.vue'
import InputGroup from '~/components/utilities/InputGroup'
import Api from '~/services/role'
import Form from 'vform'
export default {
  name: 'RoleSidePanel',
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
      form: new Form(this.record)
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
