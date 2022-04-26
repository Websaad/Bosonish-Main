<template>
  <div class="bg-white dark:bg-gray-800 shadow-lg rounded-sm mb-8">
    <div class="flex flex-col md:flex-row md:-mr-px">
      <div class="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-x-gray-700 min-w-60 md:space-y-3">
        <ul class="flex flex-nowrap md:block mr-3 md:mr-0">
          <li
            v-for="(tab, index) in tabList"
            :key="index"
            class="mr-0.5 md:mr-0 md:mb-0.5 cursor-pointer"
            :class="{
              'text-blue-600 bg-white dark:bg-gray-900': index + 1 === activeTab,
              'text-white': index + 1 !== activeTab,
            }"
          >
            <label class="flex items-center px-2.5 py-2 rounded whitespace-nowrap cursor-pointer" :for="`${_uid}${index}`"
                   :class="{
                     'bg-indigo-50 dark:bg-gray-900' : index + 1 === activeTab
                   }"
            >
              <IconBase class="w-4 h-4 shrink-0 fill-current text-gray-400 mr-2" :class="{
                'text-indigo-500' : index + 1 === activeTab,
                'text-gray-500' : index + 1 !== activeTab
              }" :paths="tab.icons.paths"
              />
              <span class="text-sm font-medium text-gray-600"
                    :class="{
                      'text-indigo-500' : index + 1 === activeTab
                    }"
              >{{ tab.title }}</span>
            </label>

            <input
              :id="`${_uid}${index}`"
              v-model="activeTab"
              type="radio"
              :name="`${_uid}-tab`"
              :value="index + 1"
              class="hidden"
              @input="changeTab()"
            >
          </li>
        </ul>
      </div>
      <template v-for="(tab, index) in tabList">
        <div
          v-if="index + 1 === activeTab"
          :key="index"
          class="grow"
        >
          <div class="p-6 space-y-6">
            <slot :name="`tabPanel-${index + 1}`" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// import ItemIcon from '~/components/app/sidebar/ItemIcon'
export default {
  components: {
    // ItemIcon
  },
  props: {
    tabList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeTab: 1
    }
  },
  methods: {
    changeTab () {
      const tab = this.$route.query.tab
      if (tab) {
        this.activeTab = parseInt(tab)
      }
    }
  }
}
</script>
