<template>
<div id="menu">
    <a v-for="l in list" v-link="{ path: l}">
        <div><i class="icon" v-bind:class="l"></i></div>
    </a>
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
    height: 40px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    position: absolute;
    bottom: 0;
    display: flex;
    line-height: 40px;
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
