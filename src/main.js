import Vue from 'vue'
import App from './App.vue'
import Main from './main.vue'
import Login from './Login.vue'
import VueResource from 'vue-resource'
import Register from './register.vue'
import VueRouter from 'vue-router'
Vue.use(VueResource);
Vue.use(VueRouter);
const routes = [{
    path: '/login',
    component: Login
}, {
    path: '/register',
    component: Register
}, {
    path: '/app',
    component: App
}, {
    path: '*',
    redirect: 'login'
}];
const router = new VueRouter({
    base: __dirname,
    routes: routes
});

new Vue({
    router: router,
    render: h => h(Main)
}).$mount('#app');
