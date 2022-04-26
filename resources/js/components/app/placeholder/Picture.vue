<template>
  <Loading>
    <h1>Loading Content with Image</h1>
    <div class="loading-item" style="width: 100px; height: 100px" />
    <div class="loading-item" :style="`width: 60%;`" />
    <div class="loading-item" :style="`width: 70%;`" />
    <div class="loading-item" :style="`width: 80%;`" />
  </Loading>
</template>
<script>
import Loading from './Index.vue'
export default {
  components: {
    Loading
  }
}
</script>
