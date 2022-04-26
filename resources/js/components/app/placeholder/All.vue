<template>
  <Loading>
    <h1>Loading Content</h1>
    <div class="loading-item" :style="`width: 60%;`" />
    <div class="loading-item" :style="`width: 70%;`" />
    <div class="loading-item" :style="`width: 80%;`" />

    <h1>Loading Content with Image</h1>
    <div class="loading-item" style="width: 100px; height: 100px" />
    <div class="loading-item" :style="`width: 60%;`" />
    <div class="loading-item" :style="`width: 70%;`" />
    <div class="loading-item" :style="`width: 80%;`" />

    <h1>Loading Table</h1>
    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 1</th>
          <th>Header 1</th>
          <th>Header 1</th>
          <th>Header 1</th>
          <th>Header 1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="loading-item" />
          </td>
          <td>
            <div class="loading-item" />
          </td>
          <td>
            <div class="loading-item" />
          </td>
          <td>
            <div class="loading-item" />
          </td>
          <td>
            <div class="loading-item" />
          </td>
          <td>
            <div class="loading-item" />
          </td>
        </tr>
        <tr>
          <td>
            <div class="loading-item" />
          </td>
          <td>
            <div class="loading-item" />
          </td>
          <td>
            <div class="loading-item" />
          </td>
          <td>
            <div class="loading-item" />
          </td>
          <td>
            <div class="loading-item" />
          </td>
          <td>
            <div class="loading-item" />
          </td>
        </tr>
      </tbody>
    </table>

    <h1>Loading with Status</h1>
    <button class="btn" @click="handleLoading()">
      Change status
    </button>
    <div v-if="isLoading" class="loading-item" />
    <div v-if="!isLoading">
      Occaecat duis reprehenderit eu culpa consequat amet dolor.
    </div>
  </Loading>
</template>
<script>
import Loading from './Index.vue'
export default {
  components: {
    Loading
  },
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  }
}
</script>
