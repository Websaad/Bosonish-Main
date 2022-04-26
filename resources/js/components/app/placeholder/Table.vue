<template>
  <Loading>
    <table>
      <tbody>
        <tr v-for="index in times" :key="index">
          <td>
            <div :class="{ 'dark:bg-gray-600' : $data.isDark }" class="bg-gray-300 loading-item" />
          </td>
          <td>
            <div :class="{ 'dark:bg-gray-600' : $data.isDark }" class="bg-gray-300 loading-item" />
          </td>
          <td>
            <div :class="{ 'dark:bg-gray-600' : $data.isDark }" class="bg-gray-300 loading-item" />
          </td>
          <td>
            <div :class="{ 'dark:bg-gray-600' : $data.isDark }" class="bg-gray-300 loading-item" />
          </td>
          <td>
            <div :class="{ 'dark:bg-gray-600' : $data.isDark }" class="bg-gray-300 loading-item" />
          </td>
          <td>
            <div :class="{ 'dark:bg-gray-600' : $data.isDark }" class="bg-gray-300 loading-item" />
          </td>
        </tr>
      </tbody>
    </table>
  </Loading>
</template>
<script>
import Loading from './Index.vue'
export default {
  components: {
    Loading
  },
  props: {
    times: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      uuid: this.$uuid.v1()
    }
  }
}
</script>

<style scoped>
  table{
    width: 100%;
  }
</style>
