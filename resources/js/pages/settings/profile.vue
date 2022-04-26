<template>
  <div class="container px-6 py-8 mx-auto grid bg-gray-100 dark:bg-gray-900 text-gray-600">
    <PageTitle :title="$t('manage_profile')" />
    <app-tabs
      ref="tabs"
      class=""
      :tab-list="tabList"
    >
      <template #tabPanel-1>
        <!-- Business Profile -->
        <section>
          <h3 class="text-xl leading-snug text-gray-800 font-bold mb-1 dark:text-gray-200">
            {{ $t('my_profile') }}
          </h3>
          <div class="text-sm">
            Update your profile information.
          </div>
          <ProfileInformation />
        </section>
      </template>
      <template #tabPanel-2>
        <section>
          <h3 class="text-xl leading-snug text-gray-800 font-bold mb-1 dark:text-gray-200">
            Change Password
          </h3>
          <div class="text-sm">
            Update your password.
          </div>
          <ChangePassword />
        </section>
      </template>
    </app-tabs>
  </div>
</template>
<script>
import PageTitle from '~/components/page/PageTitle'
import AppTabs from '~/components/app/tab/AppTabs'
import ProfileInformation from '~/pages/settings/partials/ProfileInformation'
import ChangePassword from '~/pages/settings/partials/ChangePassword'

export default {
  components: {
    PageTitle,
    AppTabs,
    ProfileInformation,
    ChangePassword
  },
  data () {
    return {
      tabList: [
        {
          title: 'Personal Informations',
          icons: {
            paths: [
              'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
            ]
          }
        },
        {
          title: 'Change Password',
          icons: {
            paths: [
              'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
            ]
          }
        }
      ]
    }
  },
  mounted () {
    this.$refs.tabs.changeTab(this.$route.query.tab)
  }
}
</script>
