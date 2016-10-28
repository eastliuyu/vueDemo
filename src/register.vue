<template>
<div id="register">
    <h2>账号注册</h2>
    <form class="form-horizontal" role="form" action="http://localhost:3000/public/api/register" method="post">
        <div class="form-group">
            <input class="form-control" type="text" name="name" value="" placeholder="请输入用户名" required="">
        </div>
        <div class="form-group">
            <input class="form-control" type="password" name="password" value="" placeholder="请输入密码" required="">
        </div>
        <div class="form-group">
            <input class="form-control" type="password" name="password-repeat" value="" placeholder="请确认密码" required="">
        </div>
        <div class="form-group">
            <input class="form-control" type="email" name="email" value="" placeholder="请输入邮箱地址">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-success">注册</button>
            <a v-link="{path:'login'}"><button type="button" class="btn btn-primary">登录</button></a>
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
