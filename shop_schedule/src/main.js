import Vue from 'vue'
import App from './App.vue'
import {router} from './router'

require('jsgrid');
require('bootstrap3');


new Vue({
  router,

  el: '#app',
  data:{
  },
  render: h => h(App)
});
