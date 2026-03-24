import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 🔥 IMPORTANTE: inicializa Firebase antes de tudo
import './services/firebase'

createApp(App)
  .use(router)
  .mount('#app')