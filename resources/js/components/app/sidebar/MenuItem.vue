<template>
  <li class="relative px-6 py-3">
    <span v-if="active"
          class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
    />
    <!-- :href="isLink ? href: false" -->
    <component
      :is="tag"
      :to="{ name: to }"
      :class="{'text-gray-800 dark:text-gray-100': active, 'justify-between': !isLink}"
      class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
      @click="toggleSubmenu"
    >
      <template v-if="!isLink">
        <span class="inline-flex items-center">
          <slot name="icon" />
          <span class="ml-4">{{ title }}</span>
        </span>
        <CaretIcon />
      </template>
      <template v-else>
        <slot name="icon" />
        <span class="ml-4">{{ title }}</span>
      </template>
    </component>
    <template v-if="!isLink">
      <transition name="dropdown-menu">
        <ul v-show="isSubMenuOpen" class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900" aria-label="submenu">
          <template v-for="(submenu_item, i) in submenu">
            <li v-if="$can(submenu_item.permissions)"
                :key="i"
                class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                :class="{'text-gray-900 dark:text-gray-100': submenu_item.active}"
            >
              <router-link
                :to="{ name: submenu_item.to }"
                class="w-full"
              >
                <span class="ml-4">{{ submenu_item.title }}</span>
              </router-link>
            </li>
          </template>
        </ul>
      </transition>
    </template>
  </li>
</template>

<script>
import CaretIcon from './CaretIcon'
export default {
  name: 'MenuItem',
  components: {
    CaretIcon
  },
  props: {
    to: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Link Title'
    },
    active: {
      type: Boolean,
      default: false
    },
    submenu: {
      type: Array,
      default: () => []
    }
  },
  data: () => {
    return {
      isSubMenuOpen: false
    }
  },
  computed: {
    tag () {
      return this.isLink ? 'router-link' : 'button'
    },
    isLink () {
      return !(this.submenu && this.submenu.length > 0)
    }
  },
  mounted () {
    setTimeout(() => {
      this.isSubMenuOpen = this.active
    }, 0)
  },
  methods: {
    toggleSubmenu () {
      if (!this.isLink) {
        this.isSubMenuOpen = !this.isSubMenuOpen
      } else {
        this.isSubMenuOpen = false
      }
    }
  }
}
</script>
