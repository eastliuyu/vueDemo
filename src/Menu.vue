<template>
    <div id="menu">
        <div v-for="l in list">{{l}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: ['HOME', 'LIST']
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
}

#menu div {
    flex: 1 1 auto;
    text-align: center;
}
</style>
