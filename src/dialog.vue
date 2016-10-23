<template>
    <div id="dialog" class="panel panel-primary animated" v-show:="show" transition="fade">
        <div class="panel-heading">{{title|capitalize}}</div>
        <div class="panel-body">
            <div class="form-group" v-for="field in fields">
                <label>{{field.name}}</label>
                <select v-if="field.dataSource" class="form-control" v-model="item[field.name]" :disabled="mode === 2 &&field.isKey">
                    <option v-for="opt in field.dataSource">{{opt}}</option>
                </select>
                <input v-else type="text" name="" class="form-control" v-model="item[field.name]" :disabled="mode === 2&& field.isKey">
            </div>
        </div>
        <div class="panel-footer">
            <button class="btn btn-primary" v-on:click="save">save</button>
            <button class="btn" v-on:click="close">close</button>
        </div>
    </div>
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
            save: function() {
                if (this.mode == 1) {
                    this.$dispatch('create-item');
                } else if (this.mode == 2) {
                    this.$dispatch('update-item');
                }

            },
            close: function() {
                this.show = false;
            }
        },
        events: {
            'showDialog': function(show) {
                this.show = show;
            }
        }
}
</script>
<style type="text/css">
#dialog {
    width: 50%;
}
</style>
