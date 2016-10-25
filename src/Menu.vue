<template>
    <div id="menu">
        <div v-for="l in list"><i class="icon" v-bind:class="l"></i></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: ['HOME', 'LIST','USER']
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
    position: fixed;
    bottom: 0;
    display: flex;
    line-height: 40px;
}

#menu div {
    flex: 1 1 auto;
    text-align: center;
}
#menu .icon{
    display: inline-block;
    width: 36px;
    height: 36px;
    background: url("/icon/home.png") no-repeat center;
    background-size: 100%;
    vertical-align: middle;
}
#menu .LIST{
    background-image: url("/icon/list.png");
}
#menu .USER{
    background-image: url("/icon/user.png");
}
</style>
