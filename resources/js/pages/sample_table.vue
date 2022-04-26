<template>
  <div class="container px-6 mx-auto grid py-8 text-gray-600">
    <div class="flex justify-between">
      <PageTitle title="Manage Cruds ✨" />
      <div>
        <t-button variant="primary" class="flex justify-between">
          <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
          </svg>
          <span class="px-4">Add Item</span>
        </t-button>
      </div>
    </div>
    <div class="overflow-x-auto bg-white dark:bg-gray-800 dark:border-gray-600 shadow-lg rounded-sm border border-gray-200">
      <header class="px-5 py-4">
        <h2 class="font-semibold text-gray-800 dark:text-gray-200">
          All Cruds <span class="text-gray-400 font-medium">248</span>
        </h2>
      </header>
      <TheTable :headers="headers" :data="data" no-local-sort>
        <template #[`client.status`]="{ item }">
          <media-card :label="item.name" :desc="item.status" :image-path="item.imagePath" />
        </template>

        <template slot="th_selectable">
          <t-checkbox />
        </template>

        <template slot="selectable">
          <t-checkbox />
        </template>

        <template slot="actions">
          <AppDropdown>
            <AppDropdownContent>
              <AppDropdownItem :to="{ name:'settings.roles' }">
                Action 1
              </AppDropdownItem>
              <AppDropdownItem :to="{ name:'settings.permissions' }">
                Action 2
              </AppDropdownItem>
              <AppDropdownItem :to="{ name:'settings.roles' }">
                Action 3
              </AppDropdownItem>
            </AppDropdownContent>
          </AppDropdown>
        </template>

        <template slot="status">
          <Badge label="Active" color="blue" />
        </template>
      </TheTable>
    </div>
    <div class="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav class="mb-4 sm:mb-0 sm:order-1" role="navigation" aria-label="Navigation">
        <ul class="flex justify-center">
          <li class="ml-3 first:ml-0">
            <t-button variant="default">
              &lt;- Previous
            </t-button>
          </li>
          <li class="ml-3 first:ml-0">
            <t-button variant="default">
              Next -&gt;
            </t-button>
          </li>
        </ul>
      </nav>
      <div class="text-sm text-gray-500 text-center sm:text-left">
        Showing <span class="font-medium text-gray-600">1</span> to <span class="font-medium text-gray-600">10</span> of <span class="font-medium text-gray-600">467</span> results
      </div>
    </div>

    <!-- Second Pagination -->
    <Pagination />
  </div>
</template>
<script>
import PageTitle from '~/components/page/PageTitle'
import TheTable from '~/components/tables/TheTable'
import MediaCard from '~/components/cards/MediaCard'
// import Badge from '~/components/Badge'
import AppDropdown from '~/components/tables/dropdown/AppDropdown.vue'
import AppDropdownContent from '~/components/tables/dropdown/AppDropdownContent.vue'
import AppDropdownItem from '~/components/tables/dropdown/AppDropdownItem.vue'
import Pagination from '~/components/pagination/Pagination.vue'

export default {
  components: {
    PageTitle,
    TheTable,
    MediaCard,
    // Badge,
    AppDropdown,
    AppDropdownContent,
    AppDropdownItem,
    Pagination
  },
  data () {
    return {
      sortBy: 'name',
      sortDesc: true,
      headers: [
        { key: 'selectable', label: '', sortable: false, extraClasses: 'w-1' },
        { key: 'client.status', label: 'Client', sortable: true },
        { key: 'amount', label: 'Amount', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
        { key: 'date', label: 'Date', sortable: true },
        { key: 'actions', label: 'Actions', sortable: false, extraClasses: 'text-center' }
      ],
      data: [
        {
          client: {
            name: 'usman',
            status: 'employed',
            imagePath:
              'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          },
          amount: '$ 863.45',
          date: '8/12/2020',
          status: 'Approved'
        },
        {
          client: {
            name: 'usman',
            status: 'employed',
            imagePath:
              'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          },
          amount: '$ 863.45',
          date: '8/12/2020',
          status: 'Approved'
        },
        {
          client: {
            name: 'usman',
            status: 'employed',
            imagePath:
              'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          },
          amount: '$ 863.45',
          date: '8/12/2020',
          status: 'Approved'
        },
        {
          client: {
            name: 'usman',
            status: 'employed',
            imagePath:
              'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          },
          amount: '$ 863.45',
          date: '8/12/2020',
          status: 'Approved'
        },
        {
          client: {
            name: 'usman',
            status: 'employed',
            imagePath:
              'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          },
          amount: '$ 863.45',
          date: '8/12/2020',
          status: 'Approved'
        },
        {
          client: {
            name: 'usman',
            status: 'employed',
            imagePath:
              'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          },
          amount: '$ 863.45',
          date: '8/12/2020',
          status: 'Approved'
        },
        {
          client: {
            name: 'usman',
            status: 'employed',
            imagePath:
              'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          },
          amount: '$ 863.45',
          date: '8/12/2020',
          status: 'Approved'
        },
        {
          client: {
            name: 'sami',
            status: 'designer',
            imagePath:
              'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          },
          amount: '$ 860.45',
          status: 'disable',
          date: '8/10/2020'
        }
      ]
    }
  }
}
</script>
