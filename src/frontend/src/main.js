import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

createApp().directive('mdl', {
    beforeMount(el) {
        window.componentHandler.upgradeElement(el);
    }
})
