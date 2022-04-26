<template>
  <div>
    <ul
      class="flex items-center mb-6' list-none bg-gray-300 bg-opacity-30 rounded-sm text-center overflow-auto whitespace-nowrap"
    >
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="w-full px-4 py-2 border"
        :class="{
          ' text-primary-900 bg-white font-semibold': index + 1 === activeTab,
          'text-gray-600': index + 1 !== activeTab,
        }"
      >
        <label
          :for="`${_uid}${index}`"
          class="cursor-pointer block"
          v-text="tab.title"
        />
        <input
          :id="`${_uid}${index}`"
          v-model="activeTab"
          type="radio"
          :name="`${_uid}-tab`"
          :value="index + 1"
          class="hidden"
        >
      </li>
    </ul>
    <template v-for="(tab, index) in tabList">
      <div
        v-if="index + 1 === activeTab"
        :key="index"
        class="flex-grow bg-white shadow-xl p-4"
      >
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
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
  }
}
</script>
