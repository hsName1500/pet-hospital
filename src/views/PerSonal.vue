<template>
  <div>
    <div class="top">
      <div class="hengfu">
        <img src="../assets/img/hengfu2.png" alt="" />
      </div>
    </div>
    <el-container>
      <el-aside style="width: 200px; height: 500px;background-color: #F7F0E5 !important;">
        <el-menu
          router
          class="el-menu-vertical-demo"
          text-color="#5978A9"
          active-text-color="#DDA979"
          :default-active="$route.path"
        >
          <el-menu-item index="/personal/center">
            <i class="el-icon-s-home"></i>
            <span slot="title">个人中心</span>
          </el-menu-item>
          <el-menu-item index="/personal/order">
            <i class="el-icon-s-goods"></i>
            <span slot="title">订单查询</span>
          </el-menu-item>
          <el-menu-item index="/personal/contact">
            <i class="el-icon-s-custom"></i>
            <span slot="title">联系我们</span>
          </el-menu-item>
          <el-menu-item index="/personal/changepass">
            <i class="el-icon-edit"></i>
            <span slot="title">修改密码</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {},
};
</script>

<style  scoped src="../assets/CSS/personal.css">
</style>

<style scoped>

</style>