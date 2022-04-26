<template>
  <div>
    <template v-for="(type,ind) in types">
      <notificationGroup :key="ind" :group="type.name">
        <div class="z-50 fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-center">
          <div class="max-w-sm w-full">
            <notification v-slot="{notifications}" class="block">
              <div
                v-for="notification in notifications"
                :key="notification.id"
                :class="type.border"
                class="mb-3 flex max-w-sm w-full mx-auto shadow-lg rounded-lg overflow-hidden border"
              >
                <div :class="type.bg" class="flex justify-center items-center w-20 text-white">
                  <svg
                    class="h-6 w-6" style="fill: currentColor"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      :d="type.icon"
                    />
                  </svg>
                </div>
                <div class="py-2 px-4 bg-white dark:bg-gray-700 w-full">
                  <div class="mx-3">
                    <span :class="type.text" class=" font-semibold">{{ notification.title }}</span>
                    <p class="text-gray-600 dark:text-gray-200 text-sm" v-html="notification.text" />
                  </div>
                </div>
              </div>
            </notification>
          </div>
        </div>
      </notificationGroup>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      types: [
        {
          name: 'success',
          bg: 'bg-green-700',
          text: 'text-green-700',
          border: 'border-green-700',
          icon: 'M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z'
        },
        {
          name: 'error',
          bg: 'bg-red-700',
          text: 'text-red-700',
          border: 'border-red-700',
          icon: 'M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z'
        }
      ]
    }
  }
}
</script>
