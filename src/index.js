// JS
import './js/'

// SCSS
import './assets/scss/main.scss'
import './pug/includes/modules/button/button.scss'
import './pug/includes/modules/footer/footer.scss'
import './pug/includes/modules/social/social.scss'
import './pug/includes/modules/logo/logo.scss'
import './pug/includes/modules/header/header.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})
