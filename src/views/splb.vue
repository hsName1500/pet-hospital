<template>
  <div>

      <video src="/1.mp4"
        style="width:100%"
        autoplay
        loop
      ></video>
    <div class="all-all">
    <div class="aa" v-if="getData" >

      <div class="aa-1" v-for="x in getData" :key="x.item_id">
        <img :src='`http://127.0.0.1:4021/img/${x.item_image}`' alt="">
        <!-- 2 -->
        <div class="m-goods-common-box">
          <p class="pro-info">{{x.item_name}}</p>
          <p class="pro-desc">专业宠爱 细心呵护哦 欢迎体验  ...</p>
        <!-- 3 -->
        <div class="pro-price">
          <span class="pro-unit">¥</span>
          <span class="m-num">{{x.item_price}}</span>
          <span class="pro-flag">起</span>
        </div>
        </div>
      </div> 
      
      
      
      
      <!-- 客服咨询 -->
      <div class="consult" v-if="chatstate">
        <span class="closebtn"
        @click="close"
        >关闭</span>
        <chat-req />
      </div>
      <!-- 按钮 -->
      <div class="consult-1"
      @click="chatchange"
      >
        <img src="https://www.musicheng.com/content.news/kbm/images/common/pingjia.png" alt="">
      </div>
    </div>
    </div>

    </div>
</template>

<script>
import ChatReq from '@/components/ChatReq.vue';
//引入css样式
import '../assets/qjys.css'
  export default {
  components: { ChatReq },
    mounted () {
      this.loadData('http://127.0.0.1:4021/v1/pro/showpro',(res)=>{
        this.getData=res.data.msg
        // console.log(this.getData)
      });
    },
    methods: {
      chatchange() {
        this.chatstate=true
      },
      close(){
        this.chatstate=false
      },
      loadData(url,callback){
// *****************************************************
      let urlcheck=url.indexOf('~')
      let urlcheck1=url.split('~')
    if(urlcheck==-1){
      this.axios.get(url).then(res=>{
        let data = res
        callback(data)
      })
    }else{
      let params = urlcheck1.pop()
      let url1 = urlcheck1.pop()
      this.axios.post(url1,params).then(res=>{
        let data = res
        callback(data) 
      })
    }
//******************************************************* 
  }
    },
    data() {
      return {
        chatstate: false,
        getData:null,
      }
    },
  }
</script>

<style scoped src="../assets/splb.css">

</style>