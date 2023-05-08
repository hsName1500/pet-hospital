<template>
  <div v-if="data">
    <el-descriptions title="订单信息:" v-for="x in data.data" :key="x.doc_id">
      <!-- <el-descriptions-item label="用户名">kooriookami</el-descriptions-item> -->
      <el-descriptions-item label="宠物名称">{{x.p_name}}</el-descriptions-item>
      <!-- <el-descriptions-item label="宠物种类">狗狗</el-descriptions-item> -->
      <el-descriptions-item label="订单名称">{{x.order_name}}</el-descriptions-item>
      <el-descriptions-item label="花费金额">{{x.case_spends?x.case_spends:'xxx'}}元</el-descriptions-item>
      <el-descriptions-item label="负责医师">{{x.doc_name}}</el-descriptions-item>
      <el-descriptions-item label="订单时间">{{x.order_time}}</el-descriptions-item>
      <el-descriptions-item label="订单状态">{{x.order_status ? (x.order_status == 1 ? '已完成':'已过期') : '已预约'}}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null, 
      phone: window.sessionStorage.getItem('userphone'),
      uid: window.sessionStorage.getItem('userid'),
    };
  },
  methods: {
    getData() {
      // console.log(this.phone)
      let url = `http://127.0.0.1:4021/v1/pet/list?phone=${this.phone}`;
      this.axios.get(url).then((res) => {
        // console.log(res);
        this.data = res.data;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss">
* {
  user-select: none;
}
.el-descriptions__title{
  font-size: 25px;
  font-weight: 900;
}
.el-descriptions__body{
   background-image: linear-gradient(to right, #F7F0E5,#F6D0CB);
  color: #6E7071;
  font-size: 15px;
  margin-bottom: 30px;
}
</style>