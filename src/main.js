import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// console.log('selam');

// var requestOptions={
//     methos:'GET',
//     redirect:'follow'
// };


// fetch("https://api.covid19api.com/dayone/country/south-africa/status/confirmed",requestOptions)
// .then(response=>response.text())
// .then(result=>console.log(result))
// .catch(error=>console.log('error',error));