<template>
<div id="wrapper">
    <router-view>
    </router-view>
    <menu></menu>
</div>
</template>

<script>
import Menu from './Menu.vue'
export default {
    components: {
        Menu
    }
}
</script>

<style>
</style>
