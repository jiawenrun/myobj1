import 'element-ui/lib/theme-chalk/index.css';
import './registerServiceWorker'
import ElementUI from 'element-ui';
import ContactUs from '@/components/ContactUs.vue';
import LoginTop from '@/components/LoginTop.vue';
import Ucomfirm from '@/components/Ucomfirm.vue';
import Tophead from '@/components/Tophead.vue'
import Botnav from '@/components/Botnav.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'



Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.axios=axios
axios.defaults.baseURL = 'http://localhost:81';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


Vue.component('logintop', LoginTop);
Vue.component('Tophead',Tophead)
Vue.component('contact', ContactUs);
Vue.component('Botnav',Botnav)
Vue.component('ucomfirm',Ucomfirm)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
