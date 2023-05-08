<template>
  <div>
    <div class="main">
      <div class="top-header">修改密码</div>
      <el-form
        :disabled="succ"
        :label-position="labelPosition"
        label-width="80px"
        :model="form"
      >
        <el-form-item label="请输入旧密码:">
          <el-input type="password" prop="pass" v-model="form.pass"></el-input>
        </el-form-item>
        <el-form-item label="请输入新密码:">
          <el-input type="password" prop="newpass" v-model="form.newpass"></el-input>
        </el-form-item>
        <el-form-item label="请确认新密码:">
          <el-input type="password" prop="checknewpass" v-model="form.checknewpass"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button type="danger" @click="setbtn">修改密码</el-button>
        <el-button type="primary" :disabled="succ" @click="setpass"
          >确定修改</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: window.sessionStorage.getItem('userphone'),
      uid: window.sessionStorage.getItem('userid'),
      succ: true,
      labelPosition: "right",
      form: {
        pass: "",
        newpass: "",
        checknewpass: "",
      },
    };
  },
  methods: {
    setpass(){
      if(this.form.newpass!=this.form.checknewpass){
          this.$message({
          message: '新密码不一致',
          type: 'error'
        });
        this.form.newpass=''
        this.form.checknewpass=''
          return
      }else{
        let url = 'http://127.0.0.1:4021/v1/pet/userpsd'
        let params = `uid=${this.uid}&upwd=${this.form.pass}&nupwd=${this.form.newpass}`
        this.axios.post(url,params).then((res)=>{
          // console.log(res.data.code)
          if(res.data.code==200){
            this.$message({
          message: '修改成功',
          type: 'success'
        });
        this.succ=true
          }else{
            this.$message({
          message: '原密码错误，修改失败',
          type: 'error'
        });
        this.form.pass=''
          }
          
        })
      }
    },
    setbtn() {
      this.succ = false;
    },
  },
};
</script>

<style lang="scss">
.el-form {
  width: 600px;
  margin: 0 auto;
  margin-top: 30px;
}
.el-form-item__label{
  width: 120px !important;
}
.el-form-item__content{
  float: left !important;
  margin-left: 0 !important;
}
.top-header {
  font-size: 30px;
}
.el-input {
  width: 400px;
  display: block;
}
.btn {
  width: 550px;
  margin: 0 auto;
  margin-top: 30px;
}
</style>

