import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import StarRating from 'vue-star-rating'

const app = createApp(App)
app.component('star-rating', StarRating);
app.use(router)
app.mount('#app')
