<template>
    <table class="table table-striped table-hover table-bordered">
        <thead>
            <tr>
                <!-- |为管道标识符，也就是数据先通过capitalize过滤或者处理后，再交给col.name呈现 -->
                <th v-for="col in columns" class="text-center">{{col.name|capitalize}}</th>
                <th class="text-center">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="p in dataList|filterBy searchKey" class="text-center">
                <td>{{p.name}}</td>
                <td>{{p.age}}</td>
                <td>{{p.sex}}</td>
                <td>
                    <button class="btn btn-success" v-on:click="delete">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-primary" v-on:click="openNewItemDialog('create new item')">Create</button>
    <dialog :title="title" :mode="mode" :fields="columns" :item="item" :create-itme="createItem"></dialog>
</template>
<script>
import dialog from './dialog.vue'
export default {
    data() {
            return {
                mode: 0,
                item: {},
                title: 'create'
            }
        },
        methods: {
            delete: function(index) {
                this.dataList.splice(index, 1);
            },
            openNewItemDialog: function(title) {
                this.title = title;
                this.mode = 1;
                this.item = {};
                this.$broadcast('showDialog', true);
            },
            createItem: function() {
                this.dataList.push(this.item);
                //向子组件广播事件
                this.$broadcast('showDialog', false);
                this.item = {};
            }
        },
        props: {
            dataList: '',
            columns: '',
            searchKey: ''
        },
        components: {
            dialog
        }
}
</script>
