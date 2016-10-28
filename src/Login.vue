<template>
    <div id="login" transition="tr">
        <group class="wrap" title="用户登录">
            <xinput title="用户名" placeholder="请输入用户名" is-type="china-name"></xinput>
            <xinput title="密码" placeholder="请输入密码"></xinput>
            <xbutton text="登录" type="primary"></xbutton>
            <xbutton text="注册"></xbutton>
        </group>
    </div>
</template>
<script>
import Group from 'vux/src/components/group/index.vue'
import Xinput from 'vux/src/components/x-input/index.vue'
import Xbutton from 'vux/src/components/x-button/index.vue'
export default {
    data() {
            return {

            }
        },
        components: {
            Group,
            Xinput,
            Xbutton
        }
}
</script>
<style>
#login {
    width: 100%;
    height: 100%;
}

.wrap {
    width: 90%;
    margin: 0 auto;
    margin-top: 100px;
}

@import '~vux/dist/vux.css';
</style>
