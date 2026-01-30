import { createApp } from 'vue'
import App from './App.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import PersonalProfile from './components/PersonalProfile.vue'

const app = createApp(App)
app.component('personal-profile', PersonalProfile)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.mount('#app')