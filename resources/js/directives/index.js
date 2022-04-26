import Vue from 'vue'
import clickOutside from './clickOutside'
import debounce from './debounce'
// import can from './can'

Vue.directive('click-outside', clickOutside)
Vue.directive('debounce', debounce)
// Vue.directive('can', can)
