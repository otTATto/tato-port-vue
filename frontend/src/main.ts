import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub)
library.add(faXTwitter)
library.add(faAngleUp)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
