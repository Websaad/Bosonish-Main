import Vue from 'vue'
import Child from './app/Child.vue'
import HasError from './form/HasError'

// Components that are registered globaly.
[
  Child,
  HasError
].forEach(Component => {
  Vue.component(Component.name, Component)
})
