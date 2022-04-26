<template>
  <t-dropdown v-if="Object.keys(locales).length > 1" text="Action" blureable>
    <div slot="trigger" slot-scope="{mousedownHandler,focusHandler,blurHandler,keydownHandler}">
      <t-button variant="icon" @mousedown="mousedownHandler" @focus="focusHandler" @blur="blurHandler" @keydown="keydownHandler">
        {{ locales[locale] }}
      <!-- <IconBase class="w-5 h-5" :paths="['M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z']" /> -->
      </t-button>
    </div>
    <div slot-scope="{ hide }" class="py-1 rounded-md shadow-xs">
      <t-button v-for="(value, key) in locales" :key="key" variant="dropdown" @click="hide();setLocale(key);">
        <span>{{ value }}</span>
      </t-button>
    </div>
  </t-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'
export default {
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales'
  }),
  methods: {
    setLocale (locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)
        this.$store.dispatch('lang/setLocale', { locale })
      }
    }
  }
}
</script>
