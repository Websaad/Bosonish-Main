<template>
  <div class="flex justify-center">
    <nav class="flex" role="navigation" aria-label="Navigation">
      <ul class="inline-flex text-sm font-medium -space-x-px shadow-sm">
        <template v-for="(page,i) in pagination.links">
          <li :key="i" class="cursor-pointer"
              :class="{ 'cursor-not-allowed': (page.url == null) }"
              @click.prevent="changePage(page.url)"
          >
            <!-- eslint-disable vue/no-v-html -->
            <span
              :class="{
                'bg-indigo-600 text-white' : page.active,
                'bg-white text-primary-500' : !page.active,
                'cursor-not-allowed': (page.url == null)
              }"
              class="inline-flex items-center justify-center rounded-l leading-5 px-3.5 py-2 border border-gray-200"
              v-html="page.label"
            />
            <!--eslint-enable-->
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    isCurrentPage (page) {
      const newPage = this.$extractGetParams(page, 'page')
      return this.pagination.currentPage === newPage
    },
    changePage (url) {
      if (url) {
        let page = this.$extractGetParams(url, 'page')
        if (page > this.pagination.lastPage) {
          page = this.pagination.lastPage
        }
        // this.pagination.currentPage = page
        this.$emit('paginate', page)
      }
    }
  }
}
</script>
