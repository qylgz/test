import { createApp } from 'vue'
// import { Vue } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import axios from 'axios'
// import 'element-plus/lib/theme-chalk/index.css';

// 导入公共样式
import './assets/css/base.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入axios
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// const result = axios.create({
//   baseURL: 'http://127.0.0.1:8888/api/private/v1/',
//   timeout: 600
// })
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

const app = createApp(App)
app.config.globalProperties.$http = axios

installElementPlus(app)
app.use(store).use(router).mount('#app')
