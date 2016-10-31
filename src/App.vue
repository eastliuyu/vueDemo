<template>
    <div id="app" class="container page">
        <div class="mui-container">
            <h1>{{ msg }}</h1>
            <div class="form-group">
                <div class="search mui-textfield">
                    <label>Search</label>
                    <input type="text" name="" v-model="searchQuery">
                    <grid v-bind:columns="columns" v-bind:search-key="searchQuery"></grid>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import grid from './table.vue'
export default {
    data() {
            return {
                msg: 'VUE DEMO',
                searchQuery: '',
                columns: [{
                    name: 'name',
                    isKey: true
                }, {
                    name: 'age'
                }, {
                    name: 'sex',
                    dataSource: ['Male', 'Female']
                }],
                people: [{
                    name: 'Jack',
                    age: 30,
                    sex: 'Male'
                }, {
                    name: 'Bill',
                    age: 26,
                    sex: 'Male'
                }, {
                    name: 'Tracy',
                    age: 22,
                    sex: 'Female'
                }, {
                    name: 'Chris',
                    age: 36,
                    sex: 'Male'
                }]
            }
        },
        components: {
            grid
        },
        methods: {

        }
}
</script>
<style lang="less">
body {
    font-family: Helvetica, sans-serif;
}
#app{
    h1{
        padding-top: 20px;
    }
}
</style>
