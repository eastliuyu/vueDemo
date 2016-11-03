<template>
<div id="wrapper">
    <router-view>
    </router-view>
    <me></me>
</div>
</template>

<script>
import Me from './Menu.vue'
export default {
    components: {
        Me
    }
}
</script>

<style>
</style>
