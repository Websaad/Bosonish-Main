<template>
  <div class="container px-6 mx-auto py-8 text-gray-600">
    <PageTitle title="Dashboard" />
    <CTA />
    <!-- Cards -->
    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <StatsCard label="Total clients" counter="6389" />
      <StatsCard
        :icon-paths="['M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z']"
        label="Account balance" counter="$ 46,760.89" color="green"
      />
      <StatsCard
        :icon-paths="['M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z']"
        label="New sales" counter="376" color="blue"
      />
      <StatsCard
        :icon-paths="['M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z']"
        label="Pending contacts" counter="35" color="teal"
      />
    </div>

    <!-- Charts -->
    <h2
      class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
    >
      Charts
    </h2>
    <div class="grid gap-6 mb-8 md:grid-cols-2">
      <div
        class="min-w-0 p-4 bg-white rounded-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800"
      >
        <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Revenue
        </h4>
        <canvas id="pie" />
        <div
          class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
        >
          <!-- Chart legend -->
          <div class="flex items-center">
            <span
              class="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"
            />
            <span>Shirts</span>
          </div>
          <div class="flex items-center">
            <span
              class="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"
            />
            <span>Shoes</span>
          </div>
          <div class="flex items-center">
            <span
              class="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
            />
            <span>Bags</span>
          </div>
        </div>
      </div>
      <div
        class="min-w-0 p-4 bg-white rounded-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800"
      >
        <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Traffic
        </h4>
        <canvas id="line" />
        <div
          class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
        >
          <!-- Chart legend -->
          <div class="flex items-center">
            <span
              class="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"
            />
            <span>Organic</span>
          </div>
          <div class="flex items-center">
            <span
              class="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
            />
            <span>Paid</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../components/page/PageTitle'
import CTA from '../components/page/CTA'
import StatsCard from '../components/cards/StatsCard'
// import MediaCard from '../components/cards/MediaCard'
// import axios from 'axios'
export default {
  components: {
    PageTitle,
    CTA,
    StatsCard
    // MediaCard
  },
  middleware: 'auth',
  data () {
    return {

    }
  },

  metaInfo () {
    return { title: this.$t('home') }
  },
  methods: {
    handleSorting () {
      console.log(this.sortBy, this.sortDesc)
    }
  }
}
</script>
