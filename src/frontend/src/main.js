import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router).mount('#app')

app.directive('mdl', {
    beforeMount(el) {
        window.componentHandler.upgradeElement(el);
    }
});

app.directive('focus', {
    // When the bound element is mounted into the DOM...
    mounted(el) {
        // Focus the element
        el.focus()
    }
})
