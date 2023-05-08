<template>
  <div class="index-login">
    <vue-particles
      class="login-background"
      color="#b4b7aa"
      :particleOpacity="0.7"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="4"
      linesColor="#b4b7aa"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>

    <div class="container" style="margin: -35% auto 0">
      <!-- from表单 -->
      <div class="from-box" ref="frombox">
        <!-- 注册 -->
        <div class="register-box hidden" ref="registerbox">
          <h1>注册萌宠</h1>
          <input
            type="text"
            placeholder="手机号"
            @blur="onUser1"
            v-model="userphone1"
          />
          <div v-if="userphone_show1" class="reg">{{ userphone_reg1 }}</div>
          <input
            type="password"
            placeholder="密码"
            v-model="password1"
            @blur="onPwd1"
          />
          <div v-if="userpwd_show1" class="pwd">{{ userpawd_reg1 }}</div>

          <input
            type="password"
            placeholder="确认密码"
            v-model="password2"
            @blur="onPwd2"
          />
          <div v-if="userpwd_show2" class="pwd">{{ userpawd_reg2 }}</div>
          <button @click="checkForm1">注册</button>
        </div>

        <!-- 登录 -->
        <div class="login-box" ref="loginbox">
          <h1>登录萌宠</h1>
          <input
            v-model="userphone"
            type="text"
            placeholder="手机号"
            @blur="onUser"
          />
          <div v-if="userphone_show" class="reg">{{ userphone_reg }}</div>
          <input
            v-model="password"
            @blur="onPwd"
            type="password"
            placeholder="密码"
          />
          <div>
            <div  style="display: flex;justify-content: center;align-items: center;">
              <input class="yzm"  placeholder="验证码"  v-model="captcha" @blur="oncaptcha" >
              <!-- <div v-if="userpwd_show" class="pwd">{{ userpawd_reg }}</div> -->
              <div class="get-code" @click="refreshCode()">
                <s-identify :identifyCode="identifyCode"></s-identify>
              </div>
            </div>
            <div v-if="usecaptcha" class="reg">{{usecaptcha_reg}}</div>
          </div>
          <button @click="checkForm()">登录</button>
        </div>
      </div>
      <!-- 注册页面背景图片 -->
      <div class="con-box left">
        <h2>欢迎来到<span>萌宠之家</span></h2>
        <p>快来看看你的专属<span>宠物</span>吧</p>
        <img src="../assets/1.png" alt="" />
        <p>已有账号</p>
        <button id="login" ref="login" @click="login1()">去登录</button>
      </div>
      <!-- 登录页面背景图片 -->
      <div class="con-box right">
        <h2>欢迎来到<span>萌宠之家</span></h2>
        <p>萌宠之选,爱宠之源,您的<span>宠物</span>之家</p>
        <img src="../assets/2.png" alt="" />
        <p>没有账号?</p>
        <button id="register" ref="register" @click="register1()">
          去注册
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SIdentify from "@/components/sIdentify.vue";
export default {
  components: { SIdentify },
  data() {
    return {
      identifyCode: "",
      identifyCodes: "0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ", //随便打的

      usecaptcha:false,
      userphone_show: false,
      userpwd_show: false,
      usecaptcha_reg:"",
      userphone_reg: "",
      userpawd_reg: "",
      userphone_show1: false,
      userpwd_show1: false,
      userpwd_show2: false,
      userphone_reg1: "",
      userpawd_reg1: "",
      userpawd_reg2: "",
      //验证码
      captcha:'',
      //登录表单
      userphone: "",
      password: "",
      uPattern: /^[1][3,4,5,7,8,9][0-9]{9}$/,
      upassword: /^(?=.{5})/,
      //注册表单
      // 密码
      userphone1: "",
      password1: "",
      uPattern1: /^[1][3,4,5,7,8,9][0-9]{9}$/,
      upassword1: /^(?=.{5})/,
      // 确认密码
      password2: "",
      
    };
  },
  mounted () {
    this.refreshCode();
  },
  methods: {
    refreshCode() {
      //
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    randomNum(min, max) {
      max = max + 1;
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 随机生成验证码字符串
    makeCode(data, len) {
      for (let i = 0; i < len; i++) {
        this.identifyCode += data[this.randomNum(0, data.length - 1)];
        
      }
    },

    loadData(url, callback) {
      // 加载等待动画插入位置
      // **************

      // *****************************************************
      let urlcheck = url.indexOf("~");
      let urlcheck1 = url.split("~");
      if (urlcheck == -1) {
        this.axios.get(url).then((res) => {
          let data = res;
          callback(data);
        });
      } else {
        let params = urlcheck1.pop();
        let url1 = urlcheck1.pop();
        this.axios.post(url1, params).then((res) => {
          let data = res;
          callback(data);
        });
      }
      //*******************************************************
    },
    //去注册
    register1() {
      console.log("$refs:", this.$refs.register);
      this.$refs.frombox.style.transform = "translateX(80%)";
      this.$refs.loginbox.classList.add("hidden");
      this.$refs.registerbox.classList.remove("hidden");
    },
    //去登录
    login1() {
      console.log("$refs:", this.$refs.register);
      this.$refs.frombox.style.transform = "translateX(0%)";
      this.$refs.loginbox.classList.remove("hidden");
      this.$refs.registerbox.classList.add("hidden");
    },

    //*****登录表单验证********
    //验证手机号框
    onUser() {
      // console.log(this.userphone)
      //输出 true
      //console.log(uPattern.test("iFat3"));
      if (!this.uPattern.test(this.userphone)) {
        this.userphone_show = true;
        this.userphone_reg = "请输入正确手机号";
        return false;
      } else {
        this.userphone_show = false;
        this.userphone_reg = "";
        return true;
      }
    },

    //验证密码框
    onPwd() {
       console.log(this.upassword.test(this.password))
      if (!this.upassword.test(this.password)) {
        this.userpwd_show = true;
        this.userpawd_reg = "密码长度必须大于5位";
        return false;
      } else {
        this.userpwd_show = false;
        this.userpawd_reg = "";
        return true;
      }
    },

    //验证码判断
    oncaptcha (){
      console.log('999999',this.captcha);
      console.log('77777',this.identifyCode);
      console.log(this.captcha!==this.identifyCode)
      if(this.captcha.toLowerCase()!==this.identifyCode.toLowerCase()){
        console.log(100)
        this.usecaptcha=true;
        this.usecaptcha_reg="请输入正确验证码";
        return false;
      } else{
        console.log(99877)
        this.usecaptcha=false;
        this.usecaptcha_reg="";
        return true;
      }
    },
    //登录按钮
    checkForm() {
      // 整个表单验证
      // 如果都验证通过，输出：  验证通过，执行登录
      // console.log(33333);
      if (this.onUser() && this.onPwd() && this.oncaptcha()) {
        this.loadData(
          `/user/login~phone=${this.userphone}&upwd=${this.password}`,
          (res) => {
            // console.log(res)
            if (res.data.code == 200) {
              // console.log(res.data.result[0].uid)
              window.sessionStorage.setItem("userid", res.data.result[0].uid);
              window.sessionStorage.setItem(
                "username",
                res.data.result[0].uname
              );
              window.sessionStorage.setItem(
                "userphone",
                res.data.result[0].phone
              );
              this.$store.commit("updateUserInfo", res.data.result[0]);
              // console.log(this.$store.state.loginname)
              // alert("登录成功");
              this.$message({
                showClose: true,
                message: "登录成功",
                type: "success",
                duration: 1500,
              });
              this.$router.push("/");
            } else {
              // alert("登录失败");
              this.$message({
                showClose: true,
                message: "登录失败,手机或密码错误",
                type: "error",
                duration: 1500,
              });
            }
          }
        );
      }
    },
    // ********注册表单验证********
    //验证手机号框
    onUser1() {
      // console.log(this.userphone)
      //输出 true
      //console.log(uPattern.test("iFat3"));
      // console.log(88888888);
      if (!this.uPattern1.test(this.userphone1)) {
        this.userphone_show1 = true;
        this.userphone_reg1 = "请输入正确手机号";
        return false;
      } else {
        this.userphone_show1 = false;
        this.userphone_reg1 = "";
        return true;
      }
    },
    //验证密码框
    onPwd1() {
      // console.log(this.password)
      if (!this.upassword1.test(this.password1)) {
        this.userpwd_show1 = true;
        this.userpawd_reg1 = "密码长度必须大于5位";
        return false;
      } else {
        this.userpwd_show1 = false;
        this.userpawd_reg1 = "";
        return true;
      }
    },
    //验证确认密码框
    onPwd2() {
      // console.log(666666);
      if (this.password1 != this.password2) {
        // console.log(555555);
        this.userpwd_show2 = true;
        this.userpawd_reg2 = "确认密码不一致";
        return false;
      } else {
        this.userpwd_show2 = false;
        this.userpawd_reg2 = "";
        return true;
      }
    },

    //注册按钮
    checkForm1() {
      // 整个表单验证
      // 如果都验证通过，输出：  验证通过，执行登录
      // console.log(33333);
      if (this.onUser1() && this.onPwd1()) {
        this.loadData(
          `/user/register~phone=${this.userphone1}&upwd=${this.password1}`,
          (res) => {
            // console.log(res);
            if (res.data.code == "401") {
              this.$message({
                showClose: true,
                message: "用户已存在，注册失败",
                type: "error",
                duration: 1500,
              });
            } else {
              this.$message({
                showClose: true,
                message: "恭喜你,注册成功",
                type: "success",
                duration: 1500,
              });
            }
          }
        );
      }
    },
  },
};
</script>

<style scoped src="../assets/logreg.css">

</style>