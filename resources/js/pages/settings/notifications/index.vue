<template>
  <div class="container px-6 mx-auto py-8 text-gray-600">
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 text-center sm:text-left">
        <PageTitle title="Manage Notifications" />
      </div>
      <div class="w-full sm:w-1/2 flex justify-center sm:justify-end items-center mb-3">
        <div v-if="selectedRows.length > 0" class="flex items-center">
          <span class="mr-2">{{ selectedRows.length }} items selected</span>
          <t-button variant="primary" class="flex justify-between mr-2" @click="markAsRead(null)">
            <span class="px-4 ">Mark as Read</span>
          </t-button>
          <t-button variant="danger" class="flex justify-between mr-2" @click="markAsUnRead(null)">
            <span class="px-4 ">Mark as Unread</span>
          </t-button>
        </div>
      </div>
    </div>
    <DataTable
      v-if="data"
      title="All Notifications"
      search-placeholder="Search Notifications"
      :meta.sync="meta"
      :search-able="false"
      :header-required="false"
      :paginate-able="false"
      @refresh="getData()"
    >
      <template slot="table">
        <TheTable class="w-full" :headers="headers" :data.sync="data" no-local-sort
                  :sort-by.sync="meta.sortBy" :sort-desc.sync="meta.sortDesc" has-selectable
                  :selected-rows.sync="selectedRows" selection-key="id" @sorting="getData"
        >
          <template #actions="{ row }">
            <t-button v-if="row.read_at == null" variant="icon" class="hover:bg-indigo-200 hover:shadow-md" @click="markAsRead(row.id)">
              <IconBase class="w-5 h-5" :paths="['M5 13l4 4L19 7']" />
            </t-button>
            <t-button v-if="row.read_at" variant="icon" class="hover:bg-indigo-200 hover:shadow-md" @click="markAsUnRead(row.id)">
              <IconBase class="w-5 h-5" :paths="['M6 18L18 6M6 6l12 12']" />
            </t-button>
          </template>
        </TheTable>
      </template>
    </DataTable>
  </div>
</template>
<script>
import PageTitle from '~/components/page/PageTitle'
import TheTable from '~/components/tables/TheTable'
import DataTable from '~/components/tables/DataTable'
import Api from '~/services/notification'

export default {
  components: {
    PageTitle,
    TheTable,
    DataTable
  },

  middleware: 'auth',

  metaInfo () {
    return { title: 'Manage Notifications' }
  },
  data () {
    return {
      meta: {
        length: 10,
        search: '',
        sortBy: 'id',
        sortDesc: true,
        page: 1,
        total: 0
      },
      headers: [
        { key: 'data.body', label: 'Message', sortable: true, tdExtraClasses: 'font-medium' },
        { key: 'type', label: 'Type', sortable: true, tdExtraClasses: 'font-medium' },
        { key: 'actions', label: 'Actions', sortable: false, extraClasses: 'text-center' }
      ],
      selectedRows: [],
      data: null
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const { data } = await Api.get(this.meta)
      this.data = data.data
      this.meta = {
        ...this.meta,
        ...data.meta
      }
    },
    async markAsRead (id = null) {
      const form = (id) || this.selectedRows
      const { data } = await Api.markAsRead(form)
      this.selectedRows = []
      this.getData()
      this.$notify({ group: 'success', title: 'Success', text: data.message }, 2000)
    },
    async markAsUnRead (id = null) {
      const form = (id) || this.selectedRows
      const { data } = await Api.markAsUnread(form)
      this.selectedRows = []
      this.getData()
      this.$notify({ group: 'success', title: 'Success', text: data.message }, 2000)
    }
  }
}
</script>
