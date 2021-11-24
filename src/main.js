import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import BackToTop from 'vue-backtotop'
import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import '../src/assets/css/icofont.min.css'
import '../src/assets/css/gordita-font.css'
import '../src/assets/scss/style.scss'

createApp(App).use(router).use(BackToTop).mount('#app')
