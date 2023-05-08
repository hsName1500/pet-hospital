<template>
  <div class="box">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><img src="../assets/img/hos1.jpeg" alt="" /></swiper-slide>
      <swiper-slide><img src="../assets/img/hos2.jpeg" alt="" /></swiper-slide>
      <swiper-slide><img src="../assets/img/hos3.jpeg" alt="" /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="map">
      <div class="map-left">
        <span class="pre-title">填写信息预约</span>
        <div>
          <div v-if="data">
            <span class="item-pre">选择医院:</span>
            <select v-model="region" style="width: 65%">
              <option v-for="x in data.data" :key="x.did" :value="x.d_local">
                {{ x.d_name }}
              </option>
            </select>
          </div>

          <div v-if="product">
            <span class="item-pre">选择服务:</span>
            <select v-model="item" style="width: 65%">
              <option v-for="x in product" :key="x.id" :value="x.item_name">
                {{ x.item_name }}
                {{x.item_price}}元
              </option>
            </select>
          </div>


          <div>
            <span class="item-pre">选择时间:</span>
            <el-date-picker
              :picker-options="pickerOptions"
              v-model="time"
              type="datetime"
              class="datetime"
              placeholder="选择时间"
            >
            </el-date-picker>
          </div>
          <div>
            <span class="item-pre">用户名:</span>
            <input type="text" placeholder="请输入用户名" 
            @focus="getname"
            v-model="name" />
          </div>
          <div>
            <span class="item-pre">手机号:</span>
            <input type="text" placeholder="请输入手机号" 
            @focus="getphone"
            v-model="phone" />
          </div>
          <button @click="sendPost" v-if="this.status == 0">立即预约</button>

          <div class="congra" v-if="this.status == 1">恭喜您!预约成功</div>
        </div>
      </div>
      <div class="map-right">
        <MapContainer :p="this.region" />
      </div>
    </div>
    <div class="onefloor">
      <div>
        <p>萌宠医院</p>
        <p>欢迎来电---电话:400-2343-234</p>
      </div>
    </div>
    <div class="intros" v-if="data">
      <div class="intro" v-for="x in data.data" :key="x.did">
        <div>
          <img :src="`/${x.d_img}`" alt="" />
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ x.d_name }}</p>
        </div>
      </div>
    </div>
    <div class="img">
      <img src="../assets/img/bg.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import qs from "qs";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
import MapContainer from "@/components/MapContainer.vue";

export default {
  // name: "swiper-example-pagination",
  // title: "Pagination",
  components: {
    // Swiper,
    // SwiperSlide,
    MapContainer,
  },
  data() {
    return {
      pickerOptions:{
        disabledDate(time){
          return time.getTime()<Date.now() 
        }
      },
      product:null,
      item:null,
      price:null,
      name: null,
      region: null,
      time: null,
      phone: null,
      status: 0,
      data: null,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        loop: true,
      },
    };
  },
  mounted() {
    this.axios.get('/pro/show').then((res)=>{
      // console.log(res)
      this.product = res.data.msg
    })
    this.axios.get("/hos/local").then((res) => {
      // console.log(res);
      this.data = res.data;
    });
  },
  methods: {
    getname(){
      this.name=this.$store.state.loginname
    },
    getphone(){
      this.phone=this.$store.state.loginphone
    },
    sendPost() {
      // console.log("转换后的格式：", qs.stringify(userObj));
      if (this.name == null || this.phone == null || this.time == null) {
        return;
      }
      var s = this.time.toLocaleString();
      let priceS = ''
      this.axios.get(`/pro/show/${this.item}`).then((res=>{
        priceS = res.data.msg[0].item_price
        // console.log(priceS)
        let params = {
        order_uname: this.name,
        order_phone: this.phone,
        order_name: this.item,
        order_price:priceS,
        order_time: s,
      };
      // console.log(params)
      this.axios.post("/order/add", qs.stringify(params)).then((res) => {
          // console.log(res);
          this.status = 1;
          this.$message({
                showClose: true,
                message: "预约成功",
                type: "success",
                duration:1500,
              });
          this.name = null;
          this.phone = null;
          this.time = null;
        });
      } ))
      
      // qs.stringify(userObj);
      // console.log("转换后的格式：", qs.stringify(params));
      // this.axios
      //   .post("http://127.0.0.1:4021/v1/ord/add",`order_uname=${this.name}&order_phone=${this.phone}&order_time=${this.time}`)
      //   .then((res) => {
      //     console.log(res);
      //   });
      
    },
  },
};
</script>
<style src="../assets/CSS/hosintro.css"></style>
<style lang="scss"></style>
