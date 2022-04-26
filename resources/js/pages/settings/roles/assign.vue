<template>
  <div class="container px-6 mx-auto py-8 text-gray-600">
    <PageTitle title="Assign Permissions" />
    <template v-for="(group,ind) in permissionGroups">
      <div :key="ind">
        <h3 class="text-xl font-semibold my-3">
          {{ ind }}
        </h3>
        <ul class="mx-auto">
          <template v-for="(permission,index) in group">
            <SelectableCardListItem :key="index" v-model="selected" name="permissions" :title="permission.display_name"
                                    :description="permission.description" :option-value="permission.id"
            />
          </template>
        </ul>
      </div>
    </template>

    <div class="flex justify-end items-end space-x-2 mt-4">
      <t-button variant="default" :to="{ name: 'settings.roles' }">
        Cancel
      </t-button>
      <t-button variant="primary" @click="handleAssignPermission">
        Save
      </t-button>
    </div>
  </div>
</template>
<script>
import PageTitle from '~/components/page/PageTitle'
import Api from '~/services/permission'
import SelectableCardListItem from '~/components/utilities/SelectableCardListItem'
export default {
  components: {
    PageTitle,
    SelectableCardListItem
  },
  middleware: ['auth', 'permission:assign-permission'],
  data () {
    return {
      permissionGroups: [],
      selected: []
    }
  },
  mounted () {
    this.getGroupWisePermissions()
  },
  methods: {
    async getGroupWisePermissions () {
      const { data } = await Api.getRolePermissionsGroupWise({ role: this.$route.params.id })
      this.permissionGroups = data.data.permissions
      this.selected = data.data.role_permissions
    },
    async handleAssignPermission () {
      const { data } = await Api.assignPermissions({
        role: this.$route.params.id,
        permissions: this.selected
      })
      await this.$store.dispatch('auth/fetchUserRolesAndPermissions')
      this.$notify({ group: 'success', title: 'Success', text: data.message }, 400000)
      this.$router.push({ name: 'settings.roles' })
    }
  }
}
</script>
