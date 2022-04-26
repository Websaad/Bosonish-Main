<template>
  <div class="container px-6 mx-auto py-8 text-gray-600">
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 text-center sm:text-left">
        <PageTitle title="Manage Permissions" />
      </div>
      <div class="w-full sm:w-1/2 flex justify-center sm:justify-end items-center mb-3">
        <div v-if="selectedRows.length > 0" class="flex items-center">
          <span class="mr-2">{{ selectedRows.length }} items selected</span>
          <t-button variant="danger" class="flex justify-between mr-2">
            <span class="px-4 ">Archive</span>
          </t-button>
        </div>

        <t-button variant="primary" class="flex justify-between mr-2" @click="form.addForm = !form.addForm">
          <IconBase class="w-4 h-4" viewBox="0 0 16 16" :paths="['M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z']" />
          <span class="px-4 ">Add Permission</span>
        </t-button>
      </div>
    </div>

    <DataTable
      v-if="data"
      title="All Permissions"
      search-placeholder="Search Permissions"
      :search.sync="tableData.search"
      :per-page.sync="tableData.length"
      :current-page.sync="tableData.page"
      :pagination="data.meta"
      @update:current-page="getData()"
      @update:per-page="getData()"
      @update:search="getData()"
    >
      <template slot="table">
        <TheTable class="w-full"
                  :headers="headers"
                  :data="data.data"
                  no-local-sort
                  :sort-by.sync="tableData.sortBy"
                  :sort-desc.sync="tableData.sortDesc"
                  @sorting="getData"
        >
          <template slot="th_selectable">
            <t-checkbox v-model="isSelectAll" @change="selectAll()" />
          </template>
          <template #selectable="{ row }">
            <t-checkbox v-model="selectedRows" :value="row.id" />
          </template>
          <template #actions="{ row }">
            <t-dropdown variant="table" text="Action" blureable>
              <div slot-scope="{ hide }" class="py-1 rounded-md shadow-xs">
                <t-button variant="dropdown" @click="hide();editRecord(row)">
                  <IconBase class="w-3 h-3 mr-2" :paths="['M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z']" />
                  <span>Edit</span>
                </t-button>
                <t-button variant="dropdown" @click="hide();deleteRecord(row)">
                  <IconBase class="w-3 h-3 mr-2" :paths="['M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16']" />
                  <span>Delete</span>
                </t-button>
              </div>
            </t-dropdown>
          </template>
        </TheTable>
      </template>
    </DataTable>

    <!-- Add Role -->
    <slide-out-panel v-model="form.addForm" :outside-close="true" tag="form" @closed="form.reset()" @formSubmit="handleSubmit">
      <template slot="header">
        <div class="">
          <h2 class=" text-white font-semibold">
            {{ form.id ? 'Edit Permission' : 'Add Permission' }}
          </h2>
        </div>
      </template>
      <template slot="body">
        <!-- Display Name -->
        <fieldset class="w-full mb-2">
          <label class="block text-sm font-medium mb-1" for="display_name">Display Name</label>
          <t-input v-model="form.display_name" type="display_name" name="display_name" :variant="{'danger': form.errors.has('display_name')}" @input="form.name = (form.display_name.replace(/\s\s+/g,' ').toLowerCase().split(' ').join('-')).trim()" />
          <has-error :errors="form.errors" field="display_name" />
        </fieldset>
        <!-- Name -->
        <fieldset class="w-full mb-2">
          <label class="block text-sm font-medium mb-1" for="name">Name</label>
          <t-input v-model="form.name" readonly type="text" name="name" :variant="{'danger': form.errors.has('name')}" />
          <has-error :errors="form.errors" field="name" />
        </fieldset>
        <!-- Description -->
        <fieldset class="w-full mb-2">
          <label class="block text-sm font-medium mb-1" for="description">Description</label>
          <t-textarea v-model="form.description" type="description" name="description" :variant="{'danger': form.errors.has('description') }" />
          <has-error :errors="form.errors" field="description" />
        </fieldset>
        <fieldset class="w-full mb-2">
          <label class="block text-sm font-medium mb-1" for="group">Group</label>
          <t-select v-model="form.group" :options="group" name="group" :variant="{'danger': form.errors.has('group') }" />
          <has-error :errors="form.errors" field="group" />
        </fieldset>
      </template>
      <template slot="footer">
        <div class="flex justify-end items-end space-x-2 px-4">
          <t-button class="" variant="default" @click="form.addForm = !form.addForm">
            Cancel
          </t-button>
          <t-button :loading="form.busy" variant="primary">
            Submit
          </t-button>
        </div>
      </template>
    </slide-out-panel>
  </div>
</template>
<script>
import PageTitle from '~/components/page/PageTitle'
import TheTable from '~/components/tables/TheTable'
import DataTable from '~/components/tables/DataTable'
import Form from 'vform'
import SlideOutPanel from '~/components/app/panel/SlideOutPanel.vue'
import Api from '~/services/permission'

export default {
  components: {
    PageTitle,
    TheTable,
    DataTable,
    SlideOutPanel
  },
  data () {
    return {
      tableData: {
        length: 10,
        search: '',
        sortBy: 'display_name',
        sortDesc: true,
        page: 1
      },
      group: [
        'General',
        'Dashboard',
        'Settings',
        'Profile'
      ],
      headers: [
        { key: 'selectable', label: '', sortable: false, extraClasses: 'w-1' },
        { key: 'display_name', label: 'Role', sortable: true, tdExtraClasses: 'font-medium' },
        { key: 'description', label: 'Description', sortable: true, tdExtraClasses: 'font-medium' },
        { key: 'group', label: 'group', sortable: true, tdExtraClasses: 'font-medium' },
        { key: 'actions', label: 'Actions', sortable: false, extraClasses: 'text-center' }
      ],
      form: new Form({
        name: '',
        display_name: '',
        description: '',
        addForm: false,
        group: 'General'
      }),
      selectedRows: [],
      isSelectAll: false,
      data: null

    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    selectAll () {
      (this.isSelectAll) ? this.selectedRows = this.data.data.map(row => row.id) : this.selectedRows = []
    },
    async getData () {
      const { data } = await Api.get(this.tableData)
      this.data = data
    },
    async handleSubmit () {
      const { data } = await Api.save(this.form)
      this.form.reset()
      this.$notify({ group: 'success', title: 'Success', text: data.message }, 2000)
      this.getData()
    },
    deleteRecord (row) {
      this.$dialog.confirm({
        okButtonText: 'Yes, Delete',
        cancelButtonText: 'Cancel',
        title: 'Delete Permission',
        text: 'Are you sure you want to delete this permission?',
        icon: 'warning'
      }).then(async (result) => {
        if (result.isOk) {
          const { data } = await Api.delete(row.id)
          this.$notify({ group: 'success', title: 'Success', text: data.message }, 2000)
          this.getData()
        }
      })
    },
    editRecord (row) {
      const { id, name, display_name, description, group } = row
      this.form.id = id
      this.form.name = name
      this.form.display_name = display_name
      this.form.description = description
      this.form.group = group
      this.form.addForm = true
    }

  }
}
</script>
