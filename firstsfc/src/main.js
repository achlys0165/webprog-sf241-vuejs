import { createApp } from 'vue'
import App from './App.vue'

// Vite will now find these in your firstsfc/node_modules
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import PersonalProfile from './components/PersonalProfile.vue'

const app = createApp(App)
app.component('personal-profile', PersonalProfile)
app.mount('#app')