import Vue from 'vue'
import App from './App.vue'
Vue.transition('bounce', {
    type: 'animation',
    enterClass: 'bounceInDown',
    leaveClass: 'bounceOutUp'
});
Vue.transition('fade', {
    type: 'animation',
    enterClass: 'fadeIn',
    leaveClass: 'fadeOut'
});
new Vue({
    el: 'body',
    components: { App }
})
