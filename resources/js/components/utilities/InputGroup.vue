<template>
  <!-- Input Group -->
  <fieldset class="w-full mb-2">
    <label class="block text-sm font-medium mb-1 dark:text-gray-200" :for="uuid">{{ label }}</label>
    <component :is="tag"
               :id="uuid"
               v-model="model"
               :type="type"
               :name="field"
               :options="options"
               :variant="{'danger': errors.has(field)}"
               :autocomplete="autocomplete"
               :maxlength="maxlength"
               :minlength="minlength"
               :multiple="multiple"
               :pattern="pattern"
               :placeholder="placeholder"
               :disabled="disabled"
               :readonly="readonly"
               :autofocus="autofocus"
               :required="required"
    />
    <has-error :errors="errors" :field="field" />
  </fieldset>
</template>

<script>
export default {
  name: 'InputGroup',
  props: {
    value: {
      type: [String, Array, Object, Boolean, Number],
      required: true
    },
    options: {
      type: [Array, Object],
      default: () => {
        return []
      }
    },
    label: {
      type: String,
      default: 'Label'
    },
    tag: {
      type: String,
      default: 't-input'
    },
    type: {
      type: String,
      default: 'text'
    },
    errors: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    maxlength: {
      type: Number,
      default: null
    },
    minlength: {
      type: Number,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    pattern: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      uuid: this.$uuid.v1()
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  mounted () {
    console.log(this.value)
  },
  methods: {

  }

}
</script>

<style scoped>

</style>
