import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import: Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

// import: Custom directives
import { preventImageActions } from './directives/preventImageActions';

// add: Font Awesome
library.add(faGithub)
library.add(faXTwitter)
library.add(faAngleUp)

// create: Vue app
const app = createApp(App)

app.use(router)
// register: Font Awesome
app.component('font-awesome-icon', FontAwesomeIcon)
// register: Custom directives
app.directive('prevent-image-actions', preventImageActions);

app.mount('#app')
