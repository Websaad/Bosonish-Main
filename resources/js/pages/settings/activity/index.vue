<template>
  <div class="container px-6 mx-auto py-8 text-gray-600">
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 text-center sm:text-left">
        <PageTitle title="Activity Logs" />
      </div>
    </div>
    <DataTable
      v-if="data"
      title="All Activities"
      search-placeholder="Search Logs"
      :meta.sync="meta"
      @refresh="getData()"
    >
      <template slot="table">
        <TheTable class="w-full" :headers="headers" :data.sync="data" no-local-sort
                  :sort-by.sync="meta.sortBy" :sort-desc.sync="meta.sortDesc" has-selectable
                  :selected-rows.sync="selectedRows" selection-key="id" @sorting="getData"
        >
          <template #subject_column="{ row }">
            {{ row.properties.attributes[row.subject.subject_column]  }}
          </template>
          <template #created_at="{ row }">
            {{ $dateFormat(row.created_at)  }}
          </template>
          <template #actions="{ row }">
            <t-dropdown variant="table" text="Action" blureable>
              <div slot="trigger" slot-scope="{mousedownHandler,focusHandler,blurHandler,keydownHandler}">
                <t-button variant="icon" @mousedown="mousedownHandler" @focus="focusHandler" @blur="blurHandler" @keydown="keydownHandler">
                  <IconBase class="w-5 h-5" :paths="['M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z']" />
                </t-button>
              </div>
              <div slot-scope="{ hide }" class="py-1 rounded-md shadow-xs">
                <t-button variant="dropdown" @click="hide();viewActivity(row)">
                  <IconBase class="h-4 mr-2 w-full" :paths="['M15 12a3 3 0 11-6 0 3 3 0 016 0z','M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z']" />
                  <span>View</span>
                </t-button>
              </div>
            </t-dropdown>
          </template>
        </TheTable>
      </template>
    </DataTable>

    <SidePanel v-model="showRoleSidePanel" :record="record" @submitted="getData" />
  </div>
</template>
<script>
import PageTitle from '~/components/page/PageTitle'
import TheTable from '~/components/tables/TheTable'
import DataTable from '~/components/tables/DataTable'
import SidePanel from './sidepanel'
import Api from '~/services/activity'

export default {
  components: {
    PageTitle,
    TheTable,
    DataTable,
    SidePanel
  },

  middleware: ['auth', 'permission:manage-activities'],

  metaInfo () {
    return { title: 'Activity Logs' }
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
        { key: 'causer.name', label: 'Causer', sortable: true, tdExtraClasses: 'font-medium' },
        { key: 'event', label: 'Event', sortable: true, tdExtraClasses: 'font-medium' },
        { key: 'subject_column', label: 'Subject', tdExtraClasses: 'font-medium' },
        { key: 'log_name', label: 'Log Name', sortable: true, tdExtraClasses: 'font-medium' },
        // { key: 'subject_type', label: 'Subject', sortable: true, tdExtraClasses: 'font-medium' },
        { key: 'created_at', label: 'created_at', sortable: true, tdExtraClasses: 'font-medium' },
        { key: 'actions', label: 'Actions', sortable: false, extraClasses: 'text-center' }
      ],
      selectedRows: [],
      data: null,
      showRoleSidePanel: false,
      record: {}

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
    deleteRecord (row) {
      this.$dialog.confirm({
        okButtonText: 'Yes, Delete',
        cancelButtonText: 'Cancel',
        title: 'Delete Role',
        text: 'Are you sure you want to delete this role?',
        icon: 'warning'
      }).then(async (result) => {
        if (result.isOk) {
          const { data } = await Api.delete(row.id)
          this.$notify({ group: 'success', title: 'Success', text: data.message }, 2000)
          this.getData()
        }
      })
    },
    viewActivity (row) {
      console.log(row)
      this.showRoleSidePanel = true
      this.record = row
    }

  }
}
</script>
