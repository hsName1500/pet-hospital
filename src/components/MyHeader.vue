<template>
  <div class="my-header">
    <div class="navbar">
      <el-row type="flex" justify="center">
        <el-col :xs="8" :sm="1" :md="1" :lg="1" :xl="1"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>

        <el-col :xs="13" :sm="5" :md="5" :lg="5" :xl="5"
          ><div class="grid-content bg-purple">
            <img
              class="logo"
              src="../assets/header/pic_001.png"
              style=""
              alt=""
            /></div
        ></el-col>

        <el-col :xs="3" :sm="0" :md="0" :lg="0" :xl="0"
          ><div class="grid-content bg-purple-light">
            <el-dropdown>
              <span class="el-dropdown-link">
                <span class="menu1">
                  <img src="../assets/header/menu1.png" alt="" class="login1" />
                  <img src="../assets/header/menu2.png" alt="" class="login2" />
                </span>
              </span>
              <el-dropdown-menu slot="dropdown" class="newDrop mini">
                <el-dropdown-item style="color: #adaeaf"
                  ><router-link to="/" style="margin-left: 44%">{{
                    title[0]
                  }}</router-link></el-dropdown-item
                >
                <el-dropdown-item style="color: #adaeaf"
                  ><router-link to="/product" style="margin-left: 41%">
                    {{ title[1] }}
                  </router-link></el-dropdown-item
                >
                <el-dropdown-item style="color: #adaeaf"
                  ><router-link to="/tips" style="margin-left: 40%">
                    {{ title[2] }}
                  </router-link></el-dropdown-item
                >
                <el-dropdown-item style="color: #adaeaf"
                  ><router-link to="/pre" style="margin-left: 41%">
                    {{ title[3] }}
                  </router-link></el-dropdown-item
                >
                <el-dropdown-item style="color: #adaeaf"
                  ><router-link to="/login" style="margin-left: 40%">
                    注册 | 登录
                  </router-link></el-dropdown-item
                >
                <el-dropdown-item style="color: #adaeaf"
                  ><router-link to="/aboutus" style="margin-left: 41%">
                    {{ title[4] }}
                  </router-link></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div></el-col
        >

        <el-col
          :xs="0"
          :sm="15"
          :md="15"
          :lg="15"
          :xl="15"
          class="hidden-xs-only"
          ><div class="grid-content bg-purple-light">
            <router-link to="/">{{ title[0] }}</router-link>

            <el-dropdown>
              <span class="el-dropdown-link">
                <router-link to="/product">
                  {{ title[1] }}
                </router-link>
              </span>
              <el-dropdown-menu slot="dropdown" class="newDrop">
                <el-dropdown-item style="color: #adaeaf"
                  >喵星球</el-dropdown-item
                >
                <el-dropdown-item style="color: #adaeaf"
                  >汪星球</el-dropdown-item
                >
                <el-dropdown-item style="color: #adaeaf"
                  >宠物圈</el-dropdown-item
                >
                <el-dropdown-item disabled style="color: gray"
                  >敬请期待</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>

            <router-link to="/tips">{{ title[2] }}</router-link>

            <el-dropdown>
              <span class="el-dropdown-link">
                <router-link to="/pre">
                  {{ title[3] }}
                </router-link>
              </span>
              <el-dropdown-menu slot="dropdown" class="newDrop">
                <el-dropdown-item style="color: #adaeaf"
                @click.native="toPer"
                  >个人中心</el-dropdown-item
                >
                <el-dropdown-item style="color: #adaeaf"
                @click.native="tolyb"
                  >留言板</el-dropdown-item
                >
                <el-dropdown-item disabled style="color: gray"
                  >敬请期待</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>

            <router-link to="/aboutus">{{ title[4] }}</router-link>
          </div></el-col
        >

        <el-col :xs="0" :sm="3" :md="3" :lg="3" :xl="3"
          ><div class="grid-content bg-purple-light">
            <span v-if="$store.state.login" class="login sp" @click="goRoute()">
              <img class="login1" src="../assets/header/login1.png" alt="" />
              <img class="login2" src="../assets/header/login2.png" alt="" />
            </span>
            <span v-else class="user-login">{{ $store.state.loginname }}</span>
            <span class="exit sp" @click="quituser">
              <img class="login1" src="../assets/header/Exit1.png" alt="退出" />
              <img class="login2" src="../assets/header/Exit2.png" alt="退出" />
            </span></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("updateUserInfo", "");
  },
  methods: {
    tolyb(){
      if (this.$route.path == "/messge") {
        return;
      }
      this.$router.push("/messge");
    },
    toPer(){
      if(this.$store.state.loginname==null || this.$store.state.loginphone==null){
        this.$message({
                showClose: true,
                message: "请先登录",
                type: "error",
                duration:1500,
              });
              return
              }
      this.$router.push("/personal");
    },
    goRoute() {
      if (this.$route.path == "/login") {
        return;
      }
      this.$router.push("/login");
    },
    quituser() {
      if (window.sessionStorage.getItem("username") == null) {
        return;
      }
      this.$store.commit("quitUserInfo", "");
       
      this.$router.push("/");
      // console.log(this.$store.state.loginname)
      // alert("已退出");
      this.$message({
          showClose: true,
          message: '退出登录成功',
          duration:1500,
        });
    },
  },
  data() {
    return {
      title: ["首页", "产品家族", "宠物研究所", "快速预约", "关于我们"],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/header.css";
</style>