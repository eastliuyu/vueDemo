import Vue from 'vue'
import App from './App.vue'
import Menu from './Menu.vue'
import Login from './Login.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.transition('bounce', {
    type: 'animation',
    enterClass: 'bounceInRight',
    leaveClass: 'bounceOutRight'
});
Vue.transition('fade', {
    type: 'animation',
    enterClass: 'fadeIn',
    leaveClass: 'fadeOut'
});
new Vue({
    el: 'body',
    components: { App, Menu, Login }
})
