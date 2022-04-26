<template>
  <div>
    <transition name="overlay">
      <div v-if="value" class="fixed inset-0 bg-gray-900 bg-opacity-30 dark:bg-opacity-80 z-50 transition-opacity" aria-hidden="true" />
    </transition>
    <transition name="global-search">
      <div
        v-if="value"
        class="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
      >
        <div v-click-outside="checkOpen" class="bg-white dark:bg-gray-800 overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg">
          <!-- Search form -->
          <form class="border-b border-gray-200" @submit.prevent>
            <div class="relative">
              <label for="modal-search" class="sr-only">Search</label>
              <input
                id="modal-search"
                v-model="search"
                v-debounce="(this,500)"
                type="text"
                class="dark:bg-gray-800 w-full border-0 focus:ring-transparent placeholder-gray-400 appearance-none py-3 pl-10 pr-4" placeholder="Search Anything…" x-ref="searchInput" @debounce-change="handleSearch"
              >
              <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                <svg class="w-4 h-4 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </div>
          </form>
          <div class="py-4 px-2">
            <!-- Recent searches -->
            <div class="mb-3 last:mb-0">
              <div v-if="results.length > 0" class="text-xs font-semibold text-gray-400 uppercase px-2 mb-2">
                Results
              </div>
              <ul class="text-sm">
                <template v-for="(result,index) in results">
                  <li :key="index" @click="checkOpen">
                    <router-link class="flex items-center p-2 dark:text-white text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                                 :to="result.url"
                    >
                      <svg class="w-4 h-4 fill-current text-gray-400 dark:text-white group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                        <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                      </svg>
                      <span><span class="font-medium text-gray-800 dark:text-white group-hover:text-white capitalize">{{ result.type }}</span> - {{ result.title }}</span>
                    </router-link>
                  </li>
                </template>
              </ul>
            </div>
            <!-- Recent pages -->
            <!-- <div class="mb-3 last:mb-0">
              <div class="text-xs font-semibold text-gray-400 uppercase px-2 mb-2">
                Recent pages
              </div>
              <ul class="text-sm">
                <li>
                  <a class="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group" href="#0" @click="searchOpen = false" @focus="searchOpen = true" @focusout="searchOpen = false">
                    <svg class="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                      <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                    </svg>
                    <span><span class="font-medium text-gray-800 group-hover:text-white">Messages</span> - Conversation / … / Mike Mills</span>
                  </a>
                </li>
                <li>
                  <a class="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group" href="#0" @click="searchOpen = false" @focus="searchOpen = true" @focusout="searchOpen = false">
                    <svg class="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                      <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                    </svg>
                    <span><span class="font-medium text-gray-800 group-hover:text-white">Messages</span> - Conversation / … / Eva Patrick</span>
                  </a>
                </li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      search: '',
      results: []
    }
  },
  methods: {
    checkOpen (e) {
      if (this.value) {
        this.$emit('input', false)
      }
    },
    handleSearch () {
      console.log('search', this.search)
      axios.get('/api/search?q=' + this.search)
        .then(res => {
          this.results = res.data
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
