import Vue from 'vue'
import theme from './theme'
import global from './global'
import acl from './acl'

Vue.mixin(global)
Vue.mixin(acl)
Vue.mixin(theme)
