<template>
  <div class="container px-6 mx-auto py-8 text-gray-600">
    <PageTitle title="Assign Permissions" />
    <template v-for="(group, ind) in permissionGroups">
      <div :key="ind">
        <h3 class="text-xl font-semibold my-3">
          {{ ind }}
        </h3>
        <ul class="mx-auto">
          <template v-for="(permission, index) in group">
            <li
              :key="index"
              class="overflow-hidden last:border-b border-x border-t last:rounded-b-lg first:rounded-t-lg relative bg-white border-gray-300 cursor-pointer focus:outline-none hover:bg-gray-50"
            >
              <input
                :id="permission.id"
                v-model="selected"
                class="permission_checkbox sr-only peer"
                type="checkbox"
                :value="permission.id"
                name="permissions"
              >
              <div
                class="absolute w-4 h-4 peer-checked:block top-6 left-3 rounded-xl peer-checked:ring-indigo-900 peer-checked:ring-4 ring-gray-300 ring ring-inset"
              />
              <label
                class="peer-checked:text-indigo-900 peer-checked:bg-indigo-50 flex p-5 cursor-pointer"
                :for="permission.id"
              >
                <div class="ml-8">
                  <h3 class="font-semibold permission_title">
                    {{ permission.display_name }}
                  </h3>
                  <p class="text-sm">{{ permission.description }}</p>
                </div>
              </label>
            </li>
          </template>
        </ul>
      </div>
    </template>
  </div>
</template>
<script>
import PageTitle from '~/components/page/PageTitle'
import Api from '~/services/permission'

export default {
  components: {
    PageTitle
  },
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
      const { data } = await Api.getRolePermissionsGroupWise({
        role: this.$route.params.id
      })
      this.permissionGroups = data.data
    }
  }
}
</script>
