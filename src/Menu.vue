<template>
<div id="menu" class="mui-panel">
    <router-link v-for="l in list" to="l">
        <div><i class="icon" v-bind:class="l"></i></div>
    </router-link>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: ['login', 'register', 'list']
        }
    }
}
</script>
<style type="text/css">
#menu {
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    display: flex;
    z-index: 9999;
}

#menu a {
    flex: 1 1 auto;
    text-align: center;
}

#menu .icon {
    display: inline-block;
    width: 36px;
    height: 36px;
    background: url("/icon/home.png") no-repeat center;
    background-size: 100%;
    vertical-align: middle;
}

#menu .list {
    background-image: url("/icon/list.png");
}

#menu .register {
    background-image: url("/icon/user.png");
}
</style>
