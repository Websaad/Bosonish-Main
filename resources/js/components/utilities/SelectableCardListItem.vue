<template>
  <label :for="uuid" class="block last:border-b border-x border-t dark:text-gray-400 last:rounded-b-lg first:rounded-t-lg overflow-hidden relative bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 cursor-pointer focus:outline-none hover:bg-gray-50"
         :class="{'bg-indigo-50 hover:bg-indigo-50': isSelected}"
  >
    <input :id="uuid" v-model="selected_value" class="sr-only peer" type="checkbox" :value="optionValue" :name="name" @change="handleChange">
    <div class="absolute w-4 h-4 top-6 left-3 rounded-xl bg-gray-300 flex items-center justify-center"
         :class="{'bg-indigo-600': isSelected}"
    >
      <div class="w-1 h-1 rounded-xl bg-white scale-150" />
    </div>
    <div class="flex p-5 cursor-pointer">
      <div class="ml-8">
        <h3 class="font-semibold" :class="{'text-indigo-900 dark:text-gray-200' : isSelected}">{{ title }}</h3>
        <p class=" text-sm" :class="{'text-indigo-600 dark:text-gray-200' : isSelected}">{{ description }}</p>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'SelectableCardListItem',
  props: {

    value: {
      type: Array,
      required: true
    },

    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    optionValue: {
      type: [String, Boolean, Object, Number],
      required: true
    }
  },
  data () {
    return {
      uuid: this.$uuid.v1(),
      selected_value: []
    }
  },
  computed: {
    isSelected () {
      return this.selected_value.includes(this.optionValue)
    }
  },
  watch: {
    value: {
      handler (val) {
        this.selected_value = val
      }
    }
  },
  mounted () {
    this.selected_value = this.value
  },
  methods: {
    handleChange () {
      this.$emit('input', this.selected_value)
    }
  }
}
</script>

<style scoped>

</style>
