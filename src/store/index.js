import { createStore } from 'vuex'
import authentication from './modules/Authentication'
import DashboardComponents from './modules/Dashboard-components'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
     auth: authentication,
     DashboardComponents: DashboardComponents,
  }
})
