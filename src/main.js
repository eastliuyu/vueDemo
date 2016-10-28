import Vue from 'vue'
import App from './App.vue'
import Main from './main.vue'
import Login from './Login.vue'
import VueResource from 'vue-resource'
import Register from './register.vue'
import VueRouter from 'vue-router'
Vue.use(VueResource);
Vue.use(VueRouter);
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
let router = new VueRouter();
router.map({
    '/login': {
        component: Login
    },
    '/register': {
        component: Register
    },
    '/list': {
        component: App
    }
});

// new Vue({
//     el: '#main',
//     components: {
//         App,
//         Menu,
//         Login,
//         Register
//     }
// })
router.redirect({
    '*': '/login'
})
router.start(Main, '#main');
