<template>
  <div class="container px-6 mx-auto grid">
    <PageTitle title="Charts" />
    <CTA />

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
        <canvas id="planet-chart" />
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
      <div
        class="min-w-0 p-4 bg-white rounded-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800"
      >
        <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Revenue
        </h4>
        <canvas id="bar" />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../components/page/PageTitle'
import CTA from '../components/page/CTA'
import Chart from 'chart.js'
import pieChartData from '../src/js/charts-pie'
import lineChartData from '../src/js/charts-lines'
import barChartData from '../src/js/charts-bars'
// import axios from 'axios'
export default {
  components: {
    PageTitle,
    CTA
  },
  middleware: 'auth',
  data () {
    return {
      pieChartData: pieChartData,
      lineChartData: lineChartData,
      barChartData: barChartData
    }
  },
  // async asyncData () {
  //   const { data: projects } = await axios.get('/api/projects')

  //   return {
  //     projects
  //   }
  // },
  mounted () {
    const ctx1 = document.getElementById('planet-chart')
    new Chart(ctx1, this.pieChartData)
    const ctx2 = document.getElementById('line')
    new Chart(ctx2, this.lineChartData)
    const ctx3 = document.getElementById('bar')
    new Chart(ctx3, this.barChartData)
  },
  metaInfo () {
    return { title: this.$t('charts') }
  }

}
</script>
