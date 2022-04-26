import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/App'

import Notifications from 'vt-notifications'

import '~/plugins'
import '~/components'
import '~/directives'
import '~/mixins'

import IconBase from '~/components/IconBase'

import SearchBox from '~/components/tables/SearchBox'

import InputGroup from '~/components/utilities/InputGroup'
Vue.component('IconBase', IconBase)
Vue.component('SearchBox', SearchBox)
Vue.component('InputGroup', InputGroup)

Vue.use(Notifications)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
