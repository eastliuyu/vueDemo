<template>
    <div id="login" transition="ani" class="page">
        <form class="" action="http://localhost:3000/public/api/login" method="post">
            <h2>用户登录</h2>
            <div class="mui-textfield mui-textfield--float-label">
                <input type="text" name="name" required="">
                <label>请输入用户名</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">
                <input type="password" name="password" required="">
                <label>请输密码</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">
                <button type="submit" class="mui-btn mui-btn--primary mui-btn--raised">登录</button>
                <a v-link="{path:'register'}">
                    <button type="button" class="mui-btn mui-btn--primary mui-btn--raised">注册</button>
                </a>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
            return {

            }
        },
        components: {}
}
</script>
<style lang="less">
#login {
    width: 100%;
    height: 100%;
    h2 {
        margin-top: 100px;
        text-align: center;
    }
    form {
        width: 75%;
        margin: 50px auto 0;
    }
}
</style>
