<template>
  <!-- Notifications menu -->
  <li class="relative">
    <button
      class="relative align-middle rounded-md focus:outline-none focus:ring-purple"

      aria-label="Notifications"
      aria-haspopup="true"
      @click="toggleNotificationsMenu"
      @keydown.escape="closeNotificationsMenu"
    >
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
        />
      </svg>
      <!-- Notification badge -->
      <span
        v-if="notifications.length"
        aria-hidden="true"
        class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
      />
    </button>
    <template v-if="show_notifications_menu">
      <div class=" w-80 origin-top-right z-10 absolute top-full right-0 -mr-48 sm:mr-0 min-w-80 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1">
        <div class="text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-4">
          Notifications
        </div>
        <ul v-click-outside="closeNotificationsMenu" @keydown.escape="closeNotificationsMenu">
          <li v-for="notification in notifications" :key="notification.id" class="border-b border-gray-200 last:border-0">
            <a class="block py-2 px-4 hover:bg-gray-50 text-gray-600" href="#0" @click="open = false" @focus="open = true" @focusout="open = false">
              <span class="block text-sm mb-2">📣 {{ notification.data.body }}</span>
              <span class="block text-xs font-medium text-gray-400">{{ notification.created_at }}</span>
            </a>
          </li>
        </ul>

        <div class="text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-4">
          <router-link class="w-full text-center" :to="{ name:'settings.notifications' }">
            See All
          </router-link>
        </div>
      </div>
    </template>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NotificationsMenu',
  data () {
    return {
      show_notifications_menu: false
    }
  },
  computed: {
    ...mapGetters({
      notifications: 'auth/notifications'
    })
  },
  methods: {

    toggleNotificationsMenu () {
      this.show_notifications_menu = !this.show_notifications_menu
    },

    closeNotificationsMenu () {
      this.show_notifications_menu = false
    }
  }
}
</script>
