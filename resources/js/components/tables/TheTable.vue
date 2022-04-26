<template>
  <div v-if="headers">
    <t-table
      :headers="headers"
      :data="tableData"
    >
      <template #thead="props">
        <thead :class="props.theadClass">
          <tr :class="props.trClass">
            <th v-if="hasSelectable" class="px-2 first:pl-5  w-1">
              <t-checkbox v-model="isAllSelected" />
            </th>
            <th
              v-for="(item, index) in props.data"
              :key="index"
              :class="props.thClass + ' ' + (item.extraClasses || '') + ' ' + ( item.thExtraClasses || '' )"
            >
              <slot :name="'th_' + item.key" />
              <span :class="{'flex justify-start items-center':item.sortable}">
                <span class="mr-2">
                  {{ item.label }}
                </span>
                <span v-if="item.sortable" class="flex flex-col">
                  <button @click="order(item.key)"> <stats-card-icon :height="3" :paths="iconPathUp" /></button>
                  <button @click="order(item.key)"><stats-card-icon :height="3" :paths="iconPathDown" /></button>
                </span>
              </span>
            </th>
          </tr>
        </thead>
      </template>
      <template #row="props">
        <tr :class="props.trClass">
          <td v-if="hasSelectable" class="px-2 first:pl-5 w-1">
            <t-checkbox v-model="selected" :value="!selectCompleteRow?props.row[selectionKey]:props.row" />
          </td>
          <td
            v-for="(item, index) in headers"
            :key="index"
            :class="props.tdClass + ' ' + (item.extraClasses || '') + ' ' + (item.tdExtraClasses || '')"
          >
            <slot :name="item.key" :row="props.row" :item="props.row[item.key.split('.')[0]]">
              {{ $getPropByString(props.row, item.key) }}
            </slot>
          </td>
        </tr>
      </template>
    </t-table>
  </div>
</template>
<script>
import StatsCardIcon from '../cards/StatsCardIcon'
export default {
  name: 'TheTable',
  components: {
    StatsCardIcon
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    noLocalSort: {
      type: Boolean,
      default: false
    },
    sortBy: {
      type: String,
      default: ''
    },
    sortDesc: {
      type: Boolean,
      default: true
    },
    hasSelectable: {
      type: Boolean,
      default: false
    },
    selectedRows: {
      type: Array,
      default: () => {
        return []
      }
    },
    selectionKey: {
      type: String,
      default: 'id'
    },
    selectCompleteRow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      iconPathDown: ['M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'],
      iconPathUp: ['M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z']
    }
  },
  computed: {
    isAllSelected: {
      get () {
        return this.selected.length === this.data.length
      },
      set (val) {
        if (val) {
          this.selected = !this.selectCompleteRow ? this.data.map(row => row.id) : this.data
        } else {
          this.selected = []
        }
      }
    },
    selected: {
      get () {
        return this.selectedRows
      },
      set (val) {
        this.$emit('update:selected-rows', val)
      }
    },
    tableData: {
      get () {
        return this.data
      },
      set (val) {
        this.$emit('update:data', val)
      }
    }
  },
  methods: {
    order (index) {
      const orderDesc = !this.sortDesc
      this.$emit('update:sort-desc', orderDesc)
      this.$emit('update:sort-by', index)
      this.$emit('sorting')
      this.noLocalSort && this.doLocalSort(index)
    },

    doLocalSort (index) {
      const orderDesc = !this.sortDesc
      this.tableData.sort((a, b) => {
        const fa = this.$getPropByString(a, index).toLowerCase()
        const fb = this.$getPropByString(b, index).toLowerCase()
        if (!orderDesc) {
          return (fa < fb) ? -1 : (fa > fb) ? 1 : 0
        }
        return (fa > fb) ? -1 : (fa < fb) ? 1 : 0
      })
    }

  }

}
</script>
