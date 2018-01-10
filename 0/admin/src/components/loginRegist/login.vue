<template>
  <div>
    <div class="box_main">
      <div class="fade">
        <ul class="lb">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <span class="le"></span>
        <span class="ri"></span>
        <ol class="dot">
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
      <div class="login" v-show="bool">
        <div class="main">
          <p>登陆</p>
          <input type="text" v-model="userName" @click="abool=false" placeholder="username" class="user"/>
          <input type="password" v-model="password" @click="abool=false" placeholder="password" class="pwd"/>
          <h4 v-show="abool">请输入正确的账号或密码!</h4>
          <button id="lgBtn" @click="loginFun()">Login</button>
          <button @click="bool?bool=false:bool=true">register</button>
        </div>
      </div>
      <div class="login" v-show="!bool" >
        <div class="main main2">
          <p>注册</p>
          <input type="text" v-model="zuserName" placeholder="username" id="zuser"/>
          <input type="password" v-model="zpassword" placeholder="password" id="zpwd"/>
          <input type="email" v-model="email" placeholder="@email.com" id="zemail"/>
          <div class="xingbie">
            <div></div>
            <div><input type="radio" value="1" v-model="sex" id="nan" /><label for="nan">男</label></div>
            <div><input type="radio" value="0" v-model="sex" id="nv"  /><label for="nv">女</label></div>
            <div></div>
          </div>
          
          <button id="register" @click="register()" v-show="zbool">register</button>
          <button v-show="!zbool" @click="bool=true,zbool=true,zuserName='',zpassword='',email='',userName='',password=''" >注册成功！返回登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from '../../assets/bootstrap/js/jquery-1.11.3'
export default {
    data (){
        return {
            testvalue: '',
            userName:'',
            password:'',
            email:'',
            bool:true,
            sex:'1',
            abool:false,
            zuserName:'',
            zpassword:'',
            zbool:true,
        }
    },
    methods:{
      loginFun:function(){
        axios.post('/api/login/loginH',{
                      user:this.userName,
                      pass:this.password
                    }).then((res) => {
                        if(res.data=="登录失败"){
                          this.abool=true
                        }else if(res.data=="登录成功"){
                          this.$router.push({path:'/index'})
                        }
                    }).catch(function(err){
                        console.log(err)
                    })
      },
      register:function(){
        axios.post('/api/login/register',{
                      user:this.zuserName,
                      pass:this.zpassword,
                      email:this.email,
                      sex:this.sex
                    }).then((res) => {
                        console.log(res)
                        zuser.style.color="";
                        zemail.style.color="";
                        if(res.data=="该用户名已存在"){
                          zuser.style.color="red"
                        }else if(res.data=="该邮箱已被占用"){
                          zemail.style.color="red"
                        }else if(res.data=="注册成功"){
                          this.zbool=false
                        }
          }).catch(function(err){
            console.log(err)
        })
      }
    },
    mounted:function () {

        var fade = document.querySelector('.fade'),
        lb = fade.querySelector('.lb'),
        li = lb.querySelectorAll('li'),
        le = fade.querySelector('.le'),
        ri = fade.querySelector('.ri'),
        dot = fade.querySelector('.dot'),
        dotLi = dot.querySelectorAll('li'),
        imgNum = 0,
        fadeOutTimer, fadeInTimer, autoPlayTimer,
        flag = true,
        dotNum = 0;

        ri.onclick = function () {
        if (flag) {
            flag = false;
            var oldLi = li[imgNum];
            if (imgNum >= li.length - 1) {
            imgNum = 0;
            }
            var newLi = li[imgNum + 1];
            var o1 = parseFloat(getComputedStyle(oldLi).opacity),
            o2 = parseFloat(getComputedStyle(newLi).opacity);
            if (o1 >= 0) {
            fadeOut(oldLi);
            } else {
            fadeIn(oldLi);
            }
            if (o2 <= 0) {
            fadeIn(newLi);
            } else {
            fadeOut(newLi);
            }
            noBg();
            if (dotNum >= dotLi.length - 1) {
            dotNum = -1;
            }
            dotLi[dotNum + 1].style.backgroundColor = '#3cf';
            dotNum++;
            imgNum++;
        }
        };
        le.onclick = function () {
        if (flag) {
            flag = false;
            var oldLi = li[imgNum];
            if (imgNum <= 0) {
            imgNum = li.length - 1;
            }
            var newLi = li[imgNum - 1];
            var o1 = parseFloat(getComputedStyle(oldLi).opacity),
            o2 = parseFloat(getComputedStyle(newLi).opacity);
            if (o1 >= 0) {
            fadeOut(oldLi);
            } else {
            fadeIn(oldLi);
            }
            if (o2 <= 0) {
            fadeIn(newLi);
            } else {
            fadeOut(newLi);
            }
            noBg();
            if (dotNum <= 0) {
            dotNum = dotLi.length
            }
            dotLi[dotNum - 1].style.backgroundColor = '#3cf';
            dotNum--;
            imgNum--;
        }
        };
        autoPlay();
        function autoPlay() {
        autoPlayTimer = setInterval(
            function () {
            ri.onclick()
            }, 3600);
        }
        function fadeOut(element) {
        fadeOutTimer = setInterval(
            function () {
            var op = getComputedStyle(element).opacity;
            if (op <= 0) {
                clearInterval(fadeOutTimer);
                flag = true;
                return;
            }
            element.style.opacity = op - 0.1;
            }, 100
        )
        }

        function fadeIn(element) {
        fadeInTimer = setInterval(
            function () {
            var op = parseFloat(getComputedStyle(element).opacity);
            if (op >= 1) {
                clearInterval(fadeInTimer);
                flag = true;
                return;
            }
            element.style.opacity = op + 0.1;
            }, 70
        )
        }

        function noBg() {
        for (var i = 0; i <= dotLi.length - 1; i++) {
            dotLi[i].style.backgroundColor = '#fff';
        }
        }

        for (var i = 0; i < dotLi.length; i++) {
        dotLi[i].index = i;
        dotLi[i].onclick = function () {
            if (flag) {
            flag = false;
            if (dotNum == 0) {
                li[li.length - 1].style.opacity = 0;
            }
            noBg();
            this.style.backgroundColor = '#3cf';
            fadeOut(li[dotNum]);
            fadeIn(li[this.index]);
            dotNum = this.index;
            imgNum = this.index;
            }
        };
        flag = true;
        }
    }
  }

</script>



<style>
  body, html, #app {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .box_main {
    width: 100%;
    height: 100%;
  }

  .fade {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    filter: blur(1.4px);
    opacity: 1;
  }

  .fade ul {
    width: 100%;
    height: 100%;
  }

  .fade ul li {
    height: 100%;
    width: 100vw;
    float: left;
    background: url("../../assets/images/banner1.jpg") no-repeat center;
    background-size: 100% 100%;
    opacity: 0;
    position: absolute;
  }

  .fade ul li:nth-child(1) {
    opacity: 1;
  }

  .fade ul li:nth-child(2) {
    background: url("../../assets/images/banner2.jpg") no-repeat center;
    background-size: 100% 100%;
  }

  .fade ul li:nth-child(3) {
    background: url("../../assets/images/banner3.jpg") no-repeat center;
    background-size: 100% 100%;
  }

  .fade ul li:nth-child(4) {
    background: url("../../assets/images/banner1.jpg") no-repeat center;
    background-size: 100% 100%;
  }

  .login {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6;
  }

  .main {
    width: 320px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -160px;
  }
  .main2{
    margin-top: -180px;
  }
  .main p {
    font-weight: bold;
    font-size: 25px;
    color: #fff;
    text-align: center;
  }
  .main h4{
    width:250px;
    margin: 10px auto;
    color:gold;
    text-align: center;
  }
  .main input {
    width:250px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 10px 15px;
    height: 42px;
    box_main-sizing: border-box_main;
    display: block;
    transition-duration: 0.25s;
    outline: none;
    margin: 10px auto;
    color: #fff;
    text-align: center;
    font-size: 18px;
  }

  .main input:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  .main input:focus{
    background-color: white;
    width: 280px;
    color: #53e3a6;
  }
  .main button {
    background-color: #f5f7f9;
    box_main-shadow: 0 15px 30px 0 rgba(255,255,255,.15) inset, 0 2px 7px 0 rgba(0,0,0,.2);
    outline: none;
    border: 0;
    padding: 10px 15px;
    color: #53e3a6;
    border-radius: 3px;
    width: 250px;
    cursor: pointer;
    font-size: 18px;
    transition-duration: 0.25s;
    height: 44px;
    display: block;
    margin: 25px auto;
    text-shadow: 0 1px 2px rgba(0,0,0,.1);
    box_main-sizing: border-box_main;
  }
  ::-webkit-input-placeholder{
    font-family: 'Source Sans Pro', sans-serif;
    color: white;
    font-weight: 300;
  }
  #nan{
    width: 16px;
    height: 16px;
    float: left;
    margin: 0;
    padding: 0;
  }
  #nv{
    display: block;
    width: 16px;
    height: 16px;
    float: left;
    margin: 0;
    padding: 0;
  }
  .xingbie{
    width: 100%;
    height: 40px;
  }
  .xingbie div{
    display: -webkit-flex;
    justify-content: center;
    float: left;
    width: 25%;
    height: 17px;
    padding: 11px 0px;
  }
  .xingbie div label{
    color: #FFFFFF;
    font-size: 15px;
    line-height: 16px;
    margin-left: 5px;
    display: block;
    float: left;
    width: 16px;
    height: 16px;
  }
</style>
