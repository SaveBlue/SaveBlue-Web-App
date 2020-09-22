import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

const app = createApp(App);

app.use(router,store).mount('#app')

/*app.directive('mdl', {
    updated() {
        window.componentHandler.upgradeDom();
    }
});*/

app.directive('focus', {
    // When the bound element is mounted into the DOM...
    mounted(el) {
        // Focus the element
        el.focus()
    }
})
