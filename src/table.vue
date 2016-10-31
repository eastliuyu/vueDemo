<template>
    <table class="mui-table mui-table--bordered" transition="ani">
        <thead>
            <tr>
                <!-- |为管道标识符，也就是数据先通过capitalize过滤或者处理后，再交给col.name呈现 -->
                <th v-for="col in columns" class="text-center">{{col.name|capitalize}}</th>
                <th class="text-center">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(index,p) in dataList|filterBy searchKey" class="text-center">
                <td v-for="col in columns">
                    <span v-if="col.isKey">
                        <a href="javascript:void(0)" v-on:click="openEditItemDialog(p[col.name])">{{p[col.name]}}</a>
                    </span>
                    <span v-else>{{p[col.name]}}</span>
                </td>
                <td>
                    <button class="mui-btn mui-btn--small mui-btn--primary mui-btn--raised" v-on:click="deleteEmp(index)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="mui-btn mui-btn--small mui-btn--primary mui-btn--raised" v-on:click="openNewItemDialog('create new item')">Create</button>
    <dialog :title="title" :mode="mode" :fields="columns" :item="item" v-on:create-item="createItem" v-on:update-item="updateItem">
    </dialog>
    <loading :show="loadingShow" :text="callBackMag"></loading>
    <toast :show.sync="msgShow">{{msg}}</toast>
</template>
<script>
import dialog from './dialog.vue'
import Loading from 'vux/src/components/loading/index.vue'
import Toast from 'vux/src/components/toast/index.vue'
import Vue from 'vue'
export default {
    data() {
            return {
                mode: 0, //模式
                item: {}, //数据对象
                keyColumn: '', //主键
                title: 'create', //标题
                dataList: {}, //数据库列表
                loadingShow: true, //信息加载提示框
                msgShow: false,
                msg: '处理成功',
                locah: 'http://localhost:3000'
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
            Vue.http.interceptors.push(function(request, next) {
                this.loadingShow = true;
                next(function(response) {
                    // ...
                    // 请求发送后的处理逻辑
                    // ...
                    // 根据请求的状态，response参数会返回给successCallback或errorCallback
                    this.loadingShow = false;
                    this.msgShow = true;
                    return response
                })
            })
        },
        methods: {
            getEmp: function() {
                //因为作用域的原因这里要保存this对象
                var self = this;
                this.$http.jsonp(this.locah + '/public/api/getemployee').then((res) => {
                    self.dataList = res.body;
                    this.loadingShow = false;
                }, (err) => {
                    alert(err);
                });
            },
            //删除对象
            deleteEmp: function(index) {
                var x = this.dataList.splice(index, 1);
                this.$http.jsonp(this.locah + '/public/api/delete', {
                    params: {
                        name: x[0].name
                    }
                }).then((res) => {}, () => {
                    alert('删除失败');
                });
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
                    this.$http.jsonp(this.locah + '/public/api/create', {
                        params: this.item
                    }).then((res) => {}, (res) => {
                        alert('添加失败');
                    });
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
                var newitem = {
                    name: this.item.name,
                    age: this.item.age,
                    sex: this.item.sex
                }
                this.$http.jsonp(this.locah + '/public/api/update', {
                    params: newitem
                }).then((res) => {}, (res) => {
                    alert('修改失败');
                });
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
            dialog,
            Loading,
            Toast
        }
}
</script>
<style type="text/css">
button.create-btn {
    margin-bottom: 40px;
}

@import '~vux/dist/vux.css';
</style>
