<template>
  <div class="container px-6 mx-auto grid">
    <PageTitle title="Buttons" />
    <CTA />
    <!-- Button sizes -->
    <h4
      class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
    >
      Sizes
    </h4>

    <div class="mb-12">
      <h1 class="flex flex-col text-center">
        <span class="text-lg text-gray-800 font-semibold mb-2.5">Select your profile</span>
        <span class="text-xs text-gray-700 font-semibold">Logged in users can view full business profiles and can</span>
        <span class="text-xs text-gray-700 font-semibold">save contact details.</span>
      </h1>
    </div>
    <div class="w-full md:w-full lg:w-full mx-auto flex flex-col lg:flex-row md:flex-row lg:flex-wrap justify-center items-center space-y-4 md:space-y-0 lg:space-y-0 lg:space-x-4 md:space-x-4">
      <div class="flex justify-center items-center w-40 h-40 bg-blue-50 rounded-lg">
        <div class="flex flex-col justify-center items-center w-4/5 h-4/5 bg-white rounded-lg shadow-md">
          <picture class="w-2/5 h-auto mb-1.5">
            <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="" class="rounded-full">
          </picture>
          <h3 class="text-xs text-gray-800 font-medium tracking-tight mb-1.5">
            Marshall Davis
          </h3>
          <div class="">
            <button class="relative text-gray-700 bg-blue-50 hover:bg-blue-50 p-0.5 rounded-lg">
              <ul class="absolute top-7 -left-10 rounded-md bg-white shadow-lg p-1.5">
                <li class="">
                  <a href="#" class="flex items-center text-gray-600 hover:bg-blue-50 px-3 py-1 rounded-md"><span class="mr-2 items-baseline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></span><span class="text-sm font-semibold">Edit</span></a>
                </li>
                <li class="">
                  <a href="#" class="flex items-center text-gray-600 hover:bg-blue-50 px-3 py-1 rounded-md"><span class="mr-2 items-baseline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></span><span class="text-sm font-semibold">Delete</span></a>
                </li>
              </ul>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center w-40 h-40 bg-blue-50 rounded-lg">
        <div class="flex flex-col justify-center items-center w-4/5 h-4/5 bg-white rounded-lg shadow-md">
          <picture class="w-2/5 h-auto mb-1.5">
            <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="" class="rounded-full">
          </picture>
          <h3 class="text-xs text-gray-800 font-medium tracking-tight mb-1.5">
            Mary kyles
          </h3>
          <button class="text-gray-700 hover:bg-blue-50 p-0.5 rounded-lg">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center w-28 h-28">
        <a href="#" class="border-2 border-blue-50 p-1 text-blue-200 rounded-full"><svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg></a>
      </div>
    </div>

    <div class="flex flex-wrap items-start content-around justify-start text-xs font-semibold">
      <span class="px-2 mb-2 mr-2 text-orange-900 bg-orange-300 border border-orange-500 rounded-lg">component</span>
      <span class="px-2 mb-2 mr-2 text-red-900 bg-red-300 border border-red-500 rounded-lg">bug</span>
      <span class="px-2 mb-2 mr-2 text-purple-900 bg-purple-300 border border-purple-500 rounded-lg">hacktoberfest</span>
      <span class="px-2 mb-2 mr-2 text-blue-900 bg-blue-300 border border-blue-500 rounded-lg">enhancement</span>
      <span class="px-2 mb-2 mr-2 text-teal-900 bg-teal-300 border border-teal-500 rounded-lg">template</span>
      <span class="px-2 mb-2 mr-2 text-yellow-900 bg-yellow-300 border border-yellow-500 rounded-lg">invalid</span>
      <span class="px-2 mb-2 mr-2 text-gray-900 bg-gray-300 border border-gray-500 rounded-lg">wontfix</span>
    </div>

    <div class="flex flex-wrap items-start content-around justify-start text-xs font-semibold">
      <span class="flex items-center px-2 mb-2 mr-2 text-blue-900 bg-blue-300 border border-blue-500 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
          />
        </svg>
        verified
      </span>
      <span class="flex items-center px-2 mb-2 mr-2 text-gray-900 bg-gray-300 border border-gray-500 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
          />
        </svg>
        code
      </span>
      <span
        class="flex items-center px-2 mb-2 mr-2 text-orange-900 bg-orange-300 border border-orange-500 rounded-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clip-rule="evenodd"
          />
        </svg>
        hot
      </span>
      <span class="flex items-center px-2 mb-2 mr-2 text-red-900 bg-red-300 border border-red-500 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
          />
        </svg>
        love
      </span>
      <span
        class="flex items-center px-2 mb-2 mr-2 text-purple-900 bg-purple-300 border border-purple-500 rounded-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
          />
        </svg>
        question
      </span>
      <span class="flex items-center px-2 mb-2 mr-2 text-green-900 bg-green-300 border border-green-500 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clip-rule="evenodd"
          />
        </svg>
        annotated
      </span>
      <span
        class="flex items-center px-2 mb-2 mr-2 text-yellow-900 bg-yellow-300 border border-yellow-500 rounded-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
          />
        </svg>
        locked
      </span>
    </div>
    <div class="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
      <div class="flex space-x-2 animate-pulse">
        <div class="w-3 h-3 bg-gray-500 rounded-full" />
        <div class="w-3 h-3 bg-gray-500 rounded-full" />
        <div class="w-3 h-3 bg-gray-500 rounded-full" />
      </div>
      <button class="flex items-center px-3 py-2 space-x-2 text-sm leading-none bg-gray-200 border border-gray-400 rounded-md rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-700" viewBox="0 0 20 20"
             fill="currentColor"
        >
          <path fill-rule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
          />
        </svg>
        <span>Download</span>
      </button>

      <div class="relative flex items-center text-gray-500 cursor-pointer hover:text-gray-600"
           @mouseenter="hover = true" @mouseleave="hover = false"
      >
        <p>Hover Me</p>
        <div class="relative">
          <transition
            enter-active-class="transition ease-out duration-300"
            enter-class="opacity-0 transform scale-90"
            enter-to-class="opacity-100 transform scale-100"
            leave-active-class="transition ease-in duration-300"
            leave-class="opacity-100 transform scale-100"
            leave-to-class="opacity-0 transform scale-90" x-cloak
          >
            <div v-show="hover"
                 class="absolute bottom-0 inline-block w-64 px-4 py-3 mb-10 -ml-32 text-white bg-purple-600 rounded-lg"
                 x-cloak
            >
              <span class="inline-block text-sm leading-tight">Hello, I'm a quick tooltip that you can drop into any
                project.</span>
              <span class="absolute bottom-0 right-0 w-5 h-5 -mb-1 transform rotate-45 bg-purple-600"
                    style="left:50%;"
              />
            </div>
          </transition>
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      <!-- Divs are used just to display the examples. Use only the button. -->
      <t-button variant="larger">
        Larger button
      </t-button>
      <t-button variant="large">
        Large button
      </t-button>
      <t-button variant="primary">
        Regular
      </t-button>
      <t-button variant="disabled">
        Disabled
      </t-button>
      <t-button variant="small">
        Small
      </t-button>
    </div>
    <p class="mb-8 text-gray-700 dark:text-gray-400">
      Apply
      <code>w-full</code>
      to any button to create a block level button.
    </p>

    <!-- Buttons with icons -->
    <h4
      class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
    >
      Icons
    </h4>
    <div
      class="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4"
    >
      <!-- Divs are used just to display the examples. Use only the button. -->
      <div>
        <button
          class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          <span>Icon right</span>
          <svg
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            aria-hidden="true"
            viewBox="0 0 20 20"
          >
            <path
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <!-- Divs are used just to display the examples. Use only the button. -->
      <div>
        <button
          class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          <svg
            class="w-4 h-4 mr-2 -ml-1"
            fill="currentColor"
            aria-hidden="true"
            viewBox="0 0 20 20"
          >
            <path
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            />
          </svg>
          <span>Icon left</span>
        </button>
      </div>

      <!-- Divs are used just to display the examples. Use only the button. -->
      <div>
        <button
          class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          aria-label="Like"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <!-- Divs are used just to display the examples. Use only the button. -->
      <div>
        <button
          class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-full active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          aria-label="Edit"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../components/page/PageTitle'
import CTA from '../components/page/CTA'
// import axios from 'axios'
export default {
  components: {
    PageTitle,
    CTA
  },
  data () {
    return {
      hover: false
    }
  },

  metaInfo () {
    return { title: this.$t('buttons') }
  }
}
</script>
