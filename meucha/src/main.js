import Vue from 'vue'
import App from './App'
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.css'
import firebaseVue from './firebase'

Vue.use(firebaseVue)
Vue.use(vuetify)

new Vue({
 el: '#app',
 vuetify,
 render: h => h(App)
}).$mount("#app")

// export default new vuetify({
//   icons: {
//     iconfont: 'fa',
//   },
// })

