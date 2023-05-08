<template>
<div class="pets-tips">
  <!-- 顶部大图 -->
  
  <div class="aa"  >
    <div class="aa-1"></div>
    <div class="aa-1">
      <div class="aa-1-1">
      <span>宠物研究所</span>
      <span>Pet Center</span>
    </div>
    </div>
  </div>

  <!-- DOG -->
  <div style="width: 100%;">

  <div class="bb-1" v-if="this.$route.query.id>6">
    <div class="cm">
      <div class="bb-1-1">
        <img src="http://www.love-around.com/upfiles/pet/201704/1492159720701.png" alt="">
      </div>
      <!-- 2 -->
      
    </div>
  </div>
  <!-- CAT -->
  <div class="bb-1" v-else>
    <div class="cm">
      <div class="bb-1-1">
        <img src="http://www.love-around.com/upfiles/pet/201704/1492159759510.png" alt="">
      </div>
      <!-- 2 -->
    </div>
  </div>
<div v-if="data" class="main">
      <div class="details"  v-for="x in data.data" :key="x.id">
        <span class="title-t">{{x.title}}</span>
        <img :src="`/Tips/${x.img}`" alt="">
        <span class="text-t">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{x.text}}</span>
      </div>
      </div>
  </div>
  
  <el-row :gutter="10">
  <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple">
   <div @click="goTop" v-if="showToScroll" class="el-backtop">
    <svg t="1660123726395" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5358" width="32" height="32"><path d="M512 0a512 512 0 1 0 512 512A512.256 512.256 0 0 0 512 0z m0 981.333333a469.333333 469.333333 0 1 1 469.333333-469.333333 469.546667 469.546667 0 0 1-469.333333 469.333333z" p-id="5359" fill="#ffffff"></path><path d="M490.666667 306.005333L330.112 502.613333 298.666667 473.642667 512 213.333333l213.333333 260.778667-32.128 28.416L533.333333 306.090667V810.666667h-42.666666V306.005333z" p-id="5360" fill="#ffffff"></path></svg></div> 
  </div></el-col>
</el-row>



</div>
</template>

<script>
//引入css样式
import '../assets/qjys.css'
import {ref,onMounted,onUnmounted } from 'vue';

export default {
    mounted () {
        this.getData()
    },
    methods: {
     loadData(url,callback){
    // 加载等待动画插入位置
    // **************

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
  },
  /**************************************************/

  getData(){
    const id = this.$route.query.id
    var url = `/pet/query/${this.$route.query.id}`
    // console.log(url);
    this.axios.get(url).then(res=>{
      // console.log(res);
      this.data = res.data
    })
  }

  /**************************************************/
    },


  setup() {
    onMounted(()=>{
      //添加滚动事件
      window.addEventListener('scroll',handleScroll,false)
    })
    onUnmounted(()=>{
      //移除滚动事件
      window.removeEventListener('scroll',handleScroll)
    })
    //回到顶部的按钮是否显示
    const showToScroll = ref(false);
    //处理滚动，决定回到顶部的按钮是否显示出来
    let handleScroll = () => {
      if (document.documentElement.scrollTop > 120) {
        showToScroll.value = true;
      } else {
        showToScroll.value = false;
      }
    }
    //回到顶部
    const goTop = () => {
      document.querySelector(".aa").scrollIntoView({
        behavior: "smooth",  // 平滑过渡
        block:    "start"  // 
      });
    }
    return {
      showToScroll,
      goTop,
      data1: null,
      data2:null,
      data:null,
    }
  }
    
  }
</script>

<style scoped src="../assets/mcyy.css">

</style>