<template>
    <div id="register" class="page" transition="ani">
        <div class="content">
            <h2>账号注册</h2>
            <form role="form" action="http://localhost:3000/public/api/register" method="post">
                <div class="mui-textfield mui-textfield--float-label">
                    <input class="form-control" type="text" name="name" value="" required="">
                    <label>请输入用户名</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input class="form-control" type="password" name="password" value="" required="">
                    <label>请输入密码</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input class="form-control" type="password" name="password-repeat" value="" required="">
                    <label>请确认密码</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input class="form-control" type="email" name="email" value="">
                    <label>请输入邮箱地址</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <button type="submit" class="mui-btn mui-btn--primary mui-btn--raised">注册</button>
                    <a v-link="{path:'login'}">
                        <button type="button" class="mui-btn mui-btn--primary mui-btn--raised">登录</button>
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {

            }
        },
        route: {
            activate: function(transition) {
                console.log('hook-example activated!')
                transition.next()
            },
            deactivate: function(transition) {
                console.log('hook-example deactivated!')
                transition.next()
            }
        }
}
</script>
<style lang="less">
#register {
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
