<template>
  <div class="container px-6 mx-auto grid">
    <PageTitle title="Forms" />
    <CTA />
    <!-- General elements -->
    <h4
      class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
    >
      Elements
    </h4>
    <div
      class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <t-input-group
        label="Name"
      >
        <t-input
          placeholder="Joe Biden"
          type="text"
        />
      </t-input-group>
      <div class="mt-3">
        Account Type
        <t-radio-group name="example" :options="['Personal', 'Business']" />
      </div>
      <div class="mt-3">
        <t-select placeholder="Requested Limit" :options="['$1,000','$5,000']" />
      </div>
      <div class="mt-3">
        <span>Multiple</span>
        <t-select :options="['$1,000','$5,000']" :multiple="true" />
      </div>
      <div class="mt-3">
        <t-textarea name="my-textarea" placeholder="Enter some long form content." />
      </div>
      <div class="mt-3">
        <t-checkbox checked /> I agree to the
        <span class="underline">privacy policy</span>
      </div>
    </div>

    <!-- Validation inputs -->
    <h4
      class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
    >
      Validation
    </h4>
    <div
      class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <!-- Invalid input -->
      <label class="block text-sm">
        <span class="text-gray-700 dark:text-gray-400">
          Invalid input
        </span>
        <t-input placeholder="Jane Doe" variant="danger" />
        <span class="text-xs text-red-600 dark:text-red-400">
          Your password is too short.
        </span>
      </label>

      <!-- Valid input -->
      <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">
          Valid input
        </span>
        <t-input variant="success" />
        <span class="text-xs text-green-600 dark:text-green-400">
          Your password is strong.
        </span>
      </label>

      <!-- Helper text -->
      <t-input-group
        label=" Helper text"
        feedback=" Your password must be at least 6 characters long."
      >
        <t-input
          placeholder="Joe Biden"
          type="text"
        />
      </t-input-group>
    </div>

    <!-- Inputs with icons -->
    <h4
      class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
    >
      Icons
    </h4>
    <div
      class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <LeftIconInput label="Left Icon" />
      <RightIconInput label="Right Icon" />
    </div>
  </div>
</template>
<script>
import PageTitle from '../components/page/PageTitle'
import CTA from '../components/page/CTA'
import LeftIconInput from '../components/form/LeftIconInput'
import RightIconInput from '../components/form/RightIconInput'
export default {
  name: 'Forms',
  components: {
    PageTitle,
    CTA,
    LeftIconInput,
    RightIconInput
  },
  metaInfo () {
    return { title: this.$t('forms') }
  }
}
</script>
