<template>
  <div class="container px-6 mx-auto py-8 text-gray-600">
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 text-center sm:text-left">
        <PageTitle title="Manage Users" />
      </div>
      <div class="w-full sm:w-1/2 flex justify-center sm:justify-end items-center mb-3">
        <div v-if="selectedRows.length > 0" class="flex items-center">
          <span class="mr-2">{{ selectedRows.length }} items selected</span>
          <t-button variant="danger" class="flex justify-between mr-2" @click="archive">
            <span class="px-4 ">Archive</span>
          </t-button>
        </div>
        <t-button variant="primary" class="flex justify-between mr-2" @click="showuserPanel = true">
          <IconBase class="w-4 h-4" viewBox="0 0 16 16" :paths="['M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z']" />
          <span class="px-4 ">Add User</span>
        </t-button>
      </div>
    </div>

    <TablePlaceholder v-if="!data" />
    <DataTable
      v-if="data"
      title="All User"
      search-placeholder="Search Users"
      :meta.sync="meta"
      @refresh="getData()"
    >
      <template slot="table">
        <TheTable class="w-full" :headers="headers" :data.sync="data" no-local-sort
                  :sort-by.sync="meta.sortBy" :sort-desc.sync="meta.sortDesc" has-selectable
                  :selected-rows.sync="selectedRows" selection-key="id" @sorting="getData"
        >
          <template #[`roles`]="{ row }">
            <span v-if="row.roles.length <= 0">
              <span class="text-gray-500">No Roles</span>
            </span>
            <span v-for="role in row.roles" v-else :key="role.id">
              <Badge :label="role.display_name" />
            </span>
          </template>
          <template #actions="{ row }">
            <t-dropdown variant="table" text="Action" blureable>
              <div slot="trigger" slot-scope="{mousedownHandler,focusHandler,blurHandler,keydownHandler}">
                <t-button variant="icon" @mousedown="mousedownHandler" @focus="focusHandler" @blur="blurHandler" @keydown="keydownHandler">
                  <IconBase class="w-5 h-5" :paths="['M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z']" />
                </t-button>
              </div>
              <div slot-scope="{ hide }" class="py-1 rounded-md shadow-xs">
                <t-button variant="dropdown" @click="hide();editRecord(row)">
                  <IconBase class="w-3 h-3 mr-2" :paths="['M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z']" />
                  <span>Edit</span>
                </t-button>
                <t-button variant="dropdown" @click="hide();deleteRecord(row)">
                  <IconBase class="w-3 h-3 mr-2" :paths="['M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16']" />
                  <span>Delete</span>
                </t-button>
                <t-button variant="dropdown" @click="hide();assignRole(row)">
                  <IconBase class="w-3 h-3 mr-2" :paths="['M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z']" />
                  <span>Assign Roles</span>
                </t-button>
              </div>
            </t-dropdown>
          </template>
        </TheTable>
      </template>
    </DataTable>

    <SidePanel v-model="showuserPanel" :record="user" @submitted="getData" />
    <AssignRole v-model="showRoleAssignPanel" :record="assign" @closed="closed" @submitted="getData();closed()" />
  </div>
</template>
<script>
import PageTitle from '~/components/page/PageTitle'
import TheTable from '~/components/tables/TheTable'
import DataTable from '~/components/tables/DataTable'
import SidePanel from './sidepanel'
import AssignRole from './assing_role_panel'
import Badge from '~/components/Badge'
import Api from '~/services/user'
import TablePlaceholder from '~/components/app/placeholder/Table'

export default {
  components: {
    PageTitle,
    TheTable,
    DataTable,
    SidePanel,
    Badge,
    AssignRole,
    TablePlaceholder
  },

  middleware: 'auth',

  metaInfo () {
    return { title: 'Manage Users' }
  },
  data () {
    return {
      meta: {
        length: 10,
        search: '',
        sortBy: 'id',
        sortDesc: true,
        page: 1,
        total: 0,
        withTrashed: false
      },
      headers: [
        { key: 'name', label: 'Name', sortable: true, tdExtraClasses: 'font-medium' },
        { key: 'email', label: 'Email', sortable: true, tdExtraClasses: 'font-medium' },
        { key: 'roles', label: 'roles', sortable: false, tdExtraClasses: 'font-medium' },
        { key: 'actions', label: 'Actions', sortable: false, extraClasses: 'text-center' }
      ],
      selectedRows: [],
      data: null,
      showuserPanel: false,
      showRoleAssignPanel: false,
      user: {
        id: null,
        name: '',
        email: '',
        password: ''
      },
      assign: {
        id: null,
        roles: [],
        old_roles: []
      }

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
    archive (row) {
      this.$dialog.confirm({
        okButtonText: 'Yes, Delete',
        cancelButtonText: 'Cancel',
        title: 'Delete User',
        text: 'Are you sure you want to delete this user?',
        icon: 'warning'
      }).then(async (result) => {
        if (result.isOk) {
          const { data } = await Api.delete(row.id)
          this.$notify({ group: 'success', title: 'Success', text: data.message }, 2000)
          this.getData()
        }
      })
    },
    archive () {
      this.$dialog.confirm({
        okButtonText: 'Yes, Archive',
        cancelButtonText: 'Cancel',
        title: 'Archive Users',
        text: 'Are you sure you want to archive these users?',
        icon: 'warning'
      }).then(async (result) => {
        if (result.isOk) {
          const { data } = await Api.archive(this.selectedRows)
          this.$notify({ group: 'success', title: 'Success', text: data.message }, 2000)
          this.getData()
        }
      })
    },
    editRecord (row) {
      this.showuserPanel = true
      this.user = row
    },
    assignRole (row) {
      this.showRoleAssignPanel = true
      this.assign.id = row.id
      this.assign.roles = row.roles.map(role => role.id)
    },
    closed () {
      this.showRoleAssignPanel = false
      this.assign.id = null
      this.assign.roles = []
    }

  }
}
</script>
