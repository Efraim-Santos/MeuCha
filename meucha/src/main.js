import Vue from 'vue'
import App from './App'
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.css'

new Vue({
 el: '#app',
 vuetify,
 render: h => h(App)
}).$mount("#app")

Vue.use(vuetify)

export default new vuetify({
  icons: {
    iconfont: 'fa',
  },
})