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
                <td v-for="col in columns">
                    <span v-if="col.isKey">
                        <a href="javascript:void(0)" v-on:click="openEditItemDialog(p[col.name])">{{p[col.name]}}</a>
                    </span>
                    <span v-else>{{p[col.name]}}</span>
                </td>
                <td>
                    <button class="btn btn-success" v-on:click="delete">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-primary" v-on:click="openNewItemDialog('create new item')">Create</button>
    <dialog :title="title" :mode="mode" :fields="columns" :item="item" v-on:create-item="createItem" v-on:update-item="updateItem">
    </dialog>
</template>
<script>
import dialog from './dialog.vue'
export default {
    data() {
            return {
                mode: 0, //模式
                item: {}, //数据对象
                keyColumn: '', //主键
                title: 'create', //标题
                dataList: {}
            }
        },
        //ready()函数会在编译结束和 $el 第一次插入文档之后调用，
        //你可以将其理解为jQuery中的document.ready()。
        ready: function() {
            for (var i = 0; i < this.columns.length; i++) {
                if (this.columns[i].isKey) {
                    this.keyColumn = this.columns[i]['name']
                    break;
                }
            }
            this.getEmp();
        },
        methods: {
            getEmp: function() {
                var self = this;//因为作用域的原因这里要保存this对象
                $.ajax({
                    url: 'http://localhost:3000/public/api/getemployee',
                    dataType: 'jsonp',
                    success: function(data) {
                        self.dataList = data;
                    },
                    error: function(err) {
                        alert(err);
                    }
                });
            },
            //删除对象
            delete: function(index) {
                this.dataList.splice(index, 1);
            },
            openNewItemDialog: function(title) {
                this.title = title;
                this.mode = 1;
                this.item = {};
                this.$broadcast('showDialog', true);
            },
            openEditItemDialog: function(key) {
                var currentItem = this.findItemByKey(key);
                this.title = 'Edit Item - ' + key;
                this.mode = 2;
                this.item = this.initItemForUpdate(currentItem);
                this.$broadcast('showDialog', true);
            },
            initItemForUpdate(p, c) {
                c = c || {};
                for (var i in p) {
                    // 属性i是否为p对象的自有属性
                    if (p.hasOwnProperty(i)) {
                        // 属性i是否为复杂类型
                        if (typeof p[i] === 'object') {
                            // 如果p[i]是数组，则创建一个新数组
                            // 如果p[i]是普通对象，则创建一个新对象
                            c[i] = Array.isArray(p[i]) ? [] : {};
                            // 递归拷贝复杂类型的属性
                            this.initItemForUpdate(p[i], c[i]);
                        } else {
                            // 属性是基础类型时，直接拷贝
                            c[i] = p[i];
                        }
                    }
                }
                return c;
            },
            //查找主键
            findItemByKey: function(key) {
                var keyColumn = this.keyColumn;
                for (var i = 0; i < this.dataList.length; i++) {
                    if (this.dataList[i][keyColumn] === key) {
                        return this.dataList[i]
                    }
                }
            },
            //检查主键是否存在
            itemExists: function() {
                var keyColumn = this.keyColumn;
                for (var i = 0; i < this.dataList.length; i++) {
                    if (this.item[keyColumn] === this.dataList[i][keyColumn]) {
                        return true;
                    }
                    return false;
                }
            },
            //添加数据
            createItem: function() {
                var keyColumn = this.keyColumn;
                if (!this.itemExists()) {
                    this.dataList.push(this.item);
                    //向子组件广播事件
                    this.$broadcast('showDialog', false);
                    this.item = {};
                } else {
                    alert(keyColumn + ' "' + this.item[keyColumn] + '" is already exists');
                }
            },
            //更新数据
            updateItem: function() {
                // 获取主键列
                var keyColumn = this.keyColumn

                for (var i = 0; i < this.dataList.length; i++) {
                    // 根据主键查找要修改的数据，然后将this.item数据更新到this.dataList[i]
                    if (this.dataList[i][keyColumn] === this.item[keyColumn]) {
                        for (var j in this.item) {
                            this.dataList[i][j] = this.item[j]
                        }
                        break;
                    }
                }
                // 广播事件，传入参数false表示隐藏对话框
                this.$broadcast('showDialog', false)
                    // 修改完数据后，重置item对象
                this.item = {}
            },
        },
        props: {
            // dataList: '',
            columns: '',
            searchKey: ''
        },
        components: {
            dialog
        }
}
</script>
<style type="text/css">
    button.btn-primary{
        margin-bottom: 40px;
    }
</style>
