<template>
  <div>
    <div class="bg-white dark:bg-gray-800 dark:border-gray-600 shadow-lg rounded-sm border border-gray-200">
      <header v-if="headerRequired" class="px-5 py-4">
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 md:text-left text-center">
            <h2 class="font-semibold text-gray-800 dark:text-gray-200">
              {{ title }} <span class="text-gray-400 font-semibold">{{ meta.total }} items</span>
            </h2>
          </div>
          <!-- <slot name="buttons"></slot> -->
          <div v-if="searchAble" class="w-full sm:w-1/2">
            <SearchBox
              :placeholder="searchPlaceholder"
              @input="handleSearch"
            />
          </div>
        </div>
      </header>
      <div class="overflow-y-auto rounded-lg ring-1 ring-black ring-opacity-5">
        <slot name="table" />
      </div>
    </div>
    <div v-if="paginateAble" class="mt-4 flex flex-row justify-between items-center">
      <div>
        <select v-model="perPage" class="block focus:shadow-outline-primary border-primary-300 w-full pl-3 pr-10 py-1 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:shadow-outline-gray dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700">
          <option :value="10">
            10
          </option>
          <option :value="15">
            15
          </option>
          <option :value="20">
            20
          </option>
          <option :value="500">
            All
          </option>
        </select>
      </div>
      <div class="text-sm text-gray-500 text-center sm:text-left">
        <t-pagination
          v-model="currentPage"
          :total-items="meta.total"
          :per-page="perPage"
          :limit="meta.length"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Table Title'
    },
    searchPlaceholder: {
      type: String,
      default: 'Search Table'
    },
    searchAble: {
      type: Boolean,
      default: true
    },
    headerRequired: {
      type: Boolean,
      default: true
    },
    paginateAble: {
      type: Boolean,
      default: true
    },
    meta: {
      type: Object,
      default: () => {
        return {
          length: 10,
          search: '',
          sortBy: 'id',
          sortDesc: true,
          page: 1,
          total: 0
        }
      }
    }
  },
  computed: {
    currentPage: {
      get () {
        return this.meta.page
      },
      set (val) {
        this.refresh('page', val)
      }
    },
    perPage: {
      get () {
        return parseInt(this.meta.length)
      },
      set (val) {
        this.refresh('length', val)
      }
    }
  },
  methods: {
    handleSearch (value) {
      this.refresh('search', value)
    },
    refresh (key, val) {
      const meta = this.getNewMeta(key, val)
      this.$emit('update:meta', meta)
      this.$emit('refresh')
    },
    getNewMeta (key, val) {
      const meta = {
        ...this.meta
      }
      meta[key] = val
      return meta
    }
  }
}
</script>
