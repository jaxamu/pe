import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
import iView from 'view-design'
import $ from 'jquery'
import SvgIcon from '@/components/SvgIcon'
if (process.env.NODE_ENV !== 'production') require('@/mock')
import request from './utils/request'

/* Import styles */

import '@/themes/common.less'
import '@/themes/my-theme.less'
import '@/assets/icons'

/* Register component */

Vue.use(iView)
Vue.component('svg-icon', SvgIcon)
/* Use plugins */

Vue.prototype.$utils = utils
Vue.prototype.$http = request
// Vue.prototype.$post = post;
// Vue.prototype.$put = put;
// Vue.prototype.$get = get;

/* Config */

Vue.config.productionTip = false

/* Initial */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
