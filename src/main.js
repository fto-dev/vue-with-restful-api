import Vue from 'vue';
import VueAxios from 'vue-cli-plugin-axios'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(VueAxios);

new Vue({
  render: h => h(App),
}).$mount('#app')
