import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog' // error log
import * as filters from './filters' // global filters
import './mock' // simulation data
// font-awesome
import 'font-awesome/css/font-awesome.css'
import Dialog from '@/components/Dialog/index.vue'
/*
 * 注册 - 业务模块
 */
import dashboard from '@/module-dashboard/' // 面板
import base from '@/module-manage/' // 用户管理
import hmmm from '@/module-hmmm/' // 黑马面面

import VueQuillEditor from 'vue-quill-editor'// 调用编辑器
// 样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import uploadImg from '@/components/uploadImg'

Vue.use(dashboard, store)
Vue.use(base, store)
// Vue.use(list, store)
// Vue.use(form, store)
// Vue.use(details, store)
Vue.use(hmmm, store)
Vue.use(VueQuillEditor) // 富文本
/*
 * 注册 - 组件
 */

Vue.component('Dialog', Dialog)
Vue.component('uploadImg', uploadImg)

// 饿了么
Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
// 过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
