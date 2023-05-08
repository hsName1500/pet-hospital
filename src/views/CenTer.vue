<template>
  <div>
    <div class="main">
      <div class="top-header">个人信息</div>
    <el-form
      :disabled="succ"
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
    >
      <el-form-item label="姓名:">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="手机:">
        <el-input v-model="formLabelAlign.phone"></el-input>
      </el-form-item>
      <el-form-item label="地址:">
        <el-input v-model="formLabelAlign.add"></el-input>
      </el-form-item>
    </el-form>
    <div class="btn">
      <el-button type="danger" @click="setbtn">修改信息</el-button>
      <el-button type="primary" :disabled="succ" @click="updata"
        >确定修改</el-button
      >
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  mounted() {
    this.getdata();
  },
  data() {
    return {
      phone: window.sessionStorage.getItem('userphone'),
      uid: window.sessionStorage.getItem('userid'),
      succ: true,
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        phone: "",
        add: "",
      },
    };
  },
  methods: {
    getdata() {
      let url = `http://127.0.0.1:4021/v1/pet/user?phone=${this.phone}`;
      this.axios.get(url).then((res) => {
        // console.log(res)
        this.formLabelAlign.name = res.data.data[0].uname;
        this.formLabelAlign.phone = res.data.data[0].phone;
        this.formLabelAlign.add = res.data.data[0].address;
      });
    },
    setbtn() {
      this.succ = false;
    },
    updata() {
      let url = "http://127.0.0.1:4021/v1/pet/usermsg";
      let parmas = `uid=${this.uid}&uname=${this.formLabelAlign.name}&phone=${this.formLabelAlign.phone}&address=${this.formLabelAlign.add}`;
      this.axios.post(url, parmas).then((res) => {
        // console.log(res)
        this.getdata();
        this.succ = true;
        this.$message({
                showClose: true,
                message: "修改成功",
                type: "success",
                duration:1500,
              });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-form{
  width: 550px;
  margin: 0 auto;
  margin-top: 30px;
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

