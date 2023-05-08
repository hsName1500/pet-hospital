<template>
  <div class="stars" v-if="data">
    <div class="container">
      <p>最热萌宠</p>
      <div class="container-1">
        <div class="left">
          <!-- 上面 -->
          <div class="left1">
            <swiper ref="swiper" :options="swiperOption">
              <swiper-slide>
                <img src="/imgs_lyb/88_2.png" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="/imgs_lyb/88_1.png" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="/imgs_lyb/lyb-004.jpg" alt="" />
              </swiper-slide>
              

              <div class="swiper-pagination" slot="pagination"></div>
              <!-- <div class="swiper-button-prev" slot=button-prev></div>
          <div class="swiper-button-next" slot=button-next></div> -->
            </swiper>
          </div>
          <!-- 下面 -->
          <div class="left2">
            <p>大家都在聊...</p>
            <div id="container111">
              <div class="row" v-for="(item, i) in data" :key="i">
               <div class="row-1">
                <img src="../assets/lyb-001.webp" alt="">
                <span>{{item.uname}}</span>
                <span>{{item.forum_phone}}</span>
               </div>
               <div class="row-2">
                <div class="row-text">{{item.forum_text}}</div>
                <div class="row-3">
                <button v-if="item.forum_phone==$store.state.loginphone?true:false" @click="del(item.forum_id)">点我删除评论</button>
                <span>{{item.forum_time}}</span>  
                </div>
              </div> 
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="right-1">
            <!-- 1 -->
            <div class="right-header">内容发布区</div>
            <div class="right-body">
              <textarea
                v-model="text"
                class="ab"
                placeholder="请输入内容"
              ></textarea>
              <div class="ab-1">
                <button @click="add()">发表</button>
              </div>
            </div>
            <!-- 2 -->
            <div class="right-body"></div>
            <!-- 3 -->
            <div class="right-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
 import qs from "qs";

export default {
  // name: "swiper-example-pagination-dynamic",
  // title: "Pagination / Dynamic bullets",
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  data() {
    return {
      swiperOption: {
        // effect:'fade',
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        loop: true,
        autoplay: {
          delay: 5000,
          // stopOnLastSlide: false,
          disableOnInteraction: false,
        },
      },
      data: null,
      text: null,
    }; 
  },
  methods: {
    add() {
       if(this.$store.state.loginname==null || this.$store.state.loginphone==null){
        this.$message({
                showClose: true,
                message: "请先登录",
                type: "error",
                duration:1500,
              });
        // this.$router.push('/login')
        return
      }
      if(this.text==null || this.text=="") return alert("请填写内容!!!")
      var json = {
        forum_text: this.text,
        forum_time: this.getCurrentTime(),
        forum_phone:this.$store.state.loginphone
      };
     
      this.axios
        .post("http://127.0.0.1:4021/v1/order/add2", qs.stringify(json))
        .then((res) => {
          // console.log(res);
          if(res.data.code==200){
            this.$message({
                showClose: true,
                message: "发表成功",
                type: "success",
                duration:1500,
              });
            this.text='',
            this.list();
          }else{
            alert(res.data.msg)
          }
        });
    },
    del(id){   
      console.log(9999999);
      var josn={
      forum_id:id
      }
      this.axios.post('http://127.0.0.1:4021/v1/order/del',qs.stringify(josn)).then((res)=>{
        console.log(778);
        this.data=res.data;
        this.list();
      })
    },
    list() {
      this.axios.get("http://127.0.0.1:4021/v1/order/all").then((res) => {
        // console.log(res);
        // this.data = res.data;
        // console.log(res.data);
        res.data.forEach(item => {
          var s =	new Date(item.forum_time).toLocaleString();
          item.forum_time=s.replace(/\//g,"-")
        });
        //1.转换时间
        //2.替换/换成-
        // for(var i=0;i<res.data.length;i++){
        //   console.log(res.data[i].forum_time)

        // }
        this.data=res.data;
        // console.log(res.data);
        
      });
    },
    //获取当前时间
    getCurrentTime() {
      var date = new Date(); //当前时间
      var year = date.getFullYear(); //年
      var month = this.repair(date.getMonth() + 1); //月
      var day = this.repair(date.getDate()); //日
      var hour = this.repair(date.getHours()); //时
      var minute = this.repair(date.getMinutes()); //分
      var second = this.repair(date.getSeconds()); //秒

      //当前时间
      var curTime =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;
      return curTime;
    },
    //若是小于10就加个0
    repair(i) {
      if (i >= 0 && i <= 9) {
        return "0" + i;
      } else {
        return i;
      }
    },
  },
  mounted() {
    this.list();
    //  console.log(this.$store.state.loginname,this.$store.state.loginphone)
  },
};
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;

  .swiper-pagination-bullet {
    background-color: white;
  }
}
</style>

<style scoped src="../assets/lyb.css"></style>
