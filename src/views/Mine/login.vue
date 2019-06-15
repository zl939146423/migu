<template>
    <div class="login" style="padding-top:50px;">
        
           <router-link to="/mine"><i class="fa fa-arrow-left"></i></router-link> 
        <div class="logo">
            <img src="http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/aboutTicket/img/logo.png" alt="">
        </div>
        <article>
            <section>
                <div class="phone" id="phone">
                    <p>
                        <b>手机号</b>
                    </p>
                    <input type="text" placeholder="请输入手机号" value="" id="mobile">
                    <span><img src="img/wrong.png" style="" alt=""><input type="text" id="obtainCode" value="获取验证码"></span>
                </div>
                <div class="phone" id="code">
                    <p>
                        <b>验证码</b>
                    </p>
                    <input type="text" placeholder="请输入验证码" value="">
                    <span><img src="img/wrong.png" style="display:none;" alt=""><span style="width:auto;" id="errorCode"></span></span>
                </div>
            </section>
        </article>
        <footer id="login">
            <span>登录</span><img style="display:none;" src="img/right.png" alt="">
        </footer>
        <div class="account" id="Jump">账号密码登录</div>
        <div style="font-size:13px;color:#ccc;width:100%;text-align:center;display:block;margin-top:40px;">来注册的手机号登陆时将自动注册，且代表您已同意用户协议</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    body{
        background:#fff;
    }
    .header{
        width: 100%;
        height:50px;
        background: pink;
        display: flex;
        align-items: center;
        p{
            margin:0 auto ;
        }
        .fa-arrow-left{
            padding-left: 10px;
        }
    }
    .logo{
        width: 40%;
        margin: 60px auto;
        img{
            width:100%;
        }
    }
    section {
        width: 85%;
        margin: 0 auto;
        line-height: 30px;
        .phone {
            border-bottom: 1px solid #B8B8B8;
            margin-bottom: 10px;
        }
        .phone p {
            font-size: 15px;
            color: #4C4948;
            display: inline-block;
            width: 20%;
            text-align: left;
        }
        .phone input {
            width: 50%;
            border: none;
            font-size: 14px;
            outline: none;
            color: #4C4948;
            line-height: 42px;
        }
        .phone input#obtainCode {
            width: 80%;
            display: inline-block;
            text-align: right;
            font-size: 12px;
            color: #F74444;
        }
        .phone span {
            display: inline-block;
            width: 30%;
            text-align: right;
            font-size: 14px;
            color: #F74444;
        }
    }
    footer {
        width: 85%;
        margin: 50px auto 0 auto;
        line-height: 40px;
        font-size: 16px;
        color: #fff;
        text-align: center;
        background-color: #F74444;
        border-radius: 5px;
        footer span {
        vertical-align: middle;
    }
    }
    .account {
        font-size: 14px;
        color: #F74444;
        text-align: center;
        line-height: 40px;
    }
</style>

