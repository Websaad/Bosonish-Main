<template>
  <div class="bg-gray-100 text-gray-600">
    <ToastNotifications />

    <div
      class="flex bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <sidebar />
      <div class="flex flex-col flex-1 bg-gray-100 dark:bg-gray-900 text-gray-600 w-full">
        <TheHeader />
        <main class="h-full pb-16 overflow-y-auto">
          <child />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import ToastNotifications from '~/components/app/ToastNotifications'

import Sidebar from '../components/app/sidebar/Index'
import TheHeader from '../components/app/header/Index'
import { mapGetters } from 'vuex'
export default {
  name: 'MainLayout',

  components: {
    TheHeader,
    Sidebar,
    ToastNotifications
  },
  computed: {
    ...mapGetters({
      isSideMenuOpen: 'sidebar/toggle'
    })
  }
}
</script>
