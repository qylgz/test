import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
