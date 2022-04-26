<template>
  <div class="container px-6 py-8 mx-auto grid text-gray-600">
    <PageTitle title="Vertical Tabs" />
    <app-tabs
      class=""
      :tab-list="tabList"
    >
      <template #tabPanel-1>
        <!-- Business Profile -->
        <section>
          <h3 class="text-xl leading-snug text-gray-800 font-bold mb-1">
            Business Profile
          </h3>
          <div class="text-sm">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </div>
          <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <fieldset class="w-full">
              <label class="block text-sm font-medium mb-1" for="name">Business Name</label>
              <t-input placeholder="Business Name" />
            </fieldset>
            <fieldset class="w-full">
              <label class="block text-sm font-medium mb-1" for="name">Business Name</label>
              <t-input />
            </fieldset>
            <fieldset class="w-full">
              <label class="block text-sm font-medium mb-1" for="name">Business Name</label>
              <t-input />
            </fieldset>
          </div>
        </section>
        <!-- Business Profile -->
        <section>
          <h3 class="text-xl leading-snug text-gray-800 font-bold mb-1">
            Business Profile
          </h3>
          <div class="text-sm">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </div>
          <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <fieldset class="w-full">
              <label class="block text-sm font-medium mb-1" for="name">Business Name</label>
              <t-input placeholder="Business Name" />
            </fieldset>
            <fieldset class="w-full">
              <label class="block text-sm font-medium mb-1" for="name">Business Name</label>
              <t-input />
            </fieldset>
            <fieldset class="w-full">
              <label class="block text-sm font-medium mb-1" for="name">Business Name</label>
              <t-input />
            </fieldset>
          </div>
        </section>
        <!-- Business Profile -->
        <section>
          <h3 class="text-xl leading-snug text-gray-800 font-bold mb-1">
            Business Profile
          </h3>
          <div class="text-sm">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </div>
          <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <fieldset class="w-full">
              <label class="block text-sm font-medium mb-1" for="name">Business Name</label>
              <t-input placeholder="Business Name" />
            </fieldset>
            <fieldset class="w-full">
              <label class="block text-sm font-medium mb-1" for="name">Business Name</label>
              <t-input />
            </fieldset>
            <fieldset class="w-full">
              <label class="block text-sm font-medium mb-1" for="name">Business Name</label>
              <t-input />
            </fieldset>
          </div>
        </section>
        <!-- Business Profile -->
        <section>
          <h3 class="text-xl leading-snug text-gray-800 font-bold mb-1">
            Business Profile
          </h3>
          <div class="text-sm">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </div>
          <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <fieldset class="w-full">
              <label class="block text-sm font-medium mb-1" for="name">Business Name</label>
              <t-input placeholder="Business Name" />
            </fieldset>
            <fieldset class="w-full">
              <label class="block text-sm font-medium mb-1" for="name">Business Name</label>
              <t-input />
            </fieldset>
            <fieldset class="w-full">
              <label class="block text-sm font-medium mb-1" for="name">Business Name</label>
              <t-input />
            </fieldset>
          </div>
        </section>
      </template>
      <template #tabPanel-2>
        Content 2
      </template>
      <template #tabPanel-3>
        Content 3
      </template>
      <template #tabPanel-4>
        Content 4
      </template>
    </app-tabs>

    <AppTabsVertical :tab-list="tabList">
      <template #tabPanel-1>
        Content 1
      </template>
      <template #tabPanel-2>
        Content 2
      </template>
      <template #tabPanel-3>
        Content 3
      </template>
      <template #tabPanel-4>
        Content 4
      </template>
    </AppTabsVertical>
  </div>
</template>
<script>
import PageTitle from '~/components/page/PageTitle'
import AppTabs from '~/components/app/tab/AppTabs'
import AppTabsVertical from '~/components/app/tab/AppTabsVertical'
export default {
  components: {
    PageTitle,
    AppTabs,
    AppTabsVertical
  },
  data () {
    return {
      tabList: [
        {
          title: 'My Account',
          icons: {
            paths: [
              'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
            ]
          }
        },
        {
          title: 'My Notifications',
          icons: {
            paths: [
              'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
            ]
          }
        },
        {
          title: 'Connected Apps',
          icons: {
            paths: [
              'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
            ]
          }
        },
        {
          title: 'Plans',
          icons: {
            paths: [
              'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
            ]
          }
        }
      ]
    }
  }
}
</script>
