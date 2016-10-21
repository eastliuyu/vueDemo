import Vue from 'vue'
import App from './App.vue'
Vue.transition('bounce', {
    type: 'animation',
    enterClass: 'bounceInDown',
    leaveClass: 'bounceOutUp'
});
Vue.transition('fade', {
    type: 'animation',
    enterClass: 'fadeInDown',
    leaveClass: 'fadeOutUp'
});
new Vue({
    el: 'body',
    components: { App }
})
