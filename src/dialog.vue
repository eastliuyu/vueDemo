<template>
<transition name="bounce">
    <div id="dialog1" class="mui-panel animated" v-show:="show">
        <div class="panel-heading">{{title}}</div>
        <div class="panel-body">
            <div class="mui-textfield" v-for="field in fields">
                <label>{{field.name}}</label>
                <select v-if="field.dataSource" class="form-control" v-model="item[field.name]" :disabled="mode === 2 &&field.isKey">
                    <option v-for="opt in field.dataSource">{{opt}}</option>
                </select>
                <input v-else type="text" name="" class="form-control" v-model="item[field.name]" :disabled="mode === 2&& field.isKey">
            </div>
        </div>
        <div class="panel-footer">
            <button class="mui-btn mui-btn--raised" v-on:click="save">save</button>
            <button class="mui-btn mui-btn--raised" v-on:click="close">close</button>
        </div>
    </div>
</transition>
</template>
<script>
export default {
    data() {
        return {
            show: false
        }
    },
    props: {
        mode: '',
        title: '',
        fields: '',
        item: ''
    },
    methods: {
        //判断模式，如果是1就是新建，如果是2就是更新
        save: function() {
            if (this.mode == 1) {
                this.$emit('create-item');
            } else if (this.mode == 2) {
                this.$emit('update-item');
            }

        },
        close: function() {
            this.show = false;
        }
    },
    //监听事件
    events: {
        'showDialog': function(show) {
            this.show = show;
        }
    }
}
</script>
<style type="text/css">
#dialog {
    width: 300px;
    position: fixed;
    top: 30%;
    margin-left: -150px;
    left: 50%;
}
</style>
