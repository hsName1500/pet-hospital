<template>
  <div id="app">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
        ><div class="grid-content bg-purple">
          <div class="chat-head">在线咨询</div>

          <div class="chat-main">   

          </div>

          <div class="user-bd">
            <input class="user-msg" id="usermsg" type="text" maxlength="19"
            v-model="infoData" />
          </div>

          <div class="send1">
            <el-button type="info" plain @click="send">点击发送</el-button>
          </div>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import io from "../../node_modules/socket.io-client/dist/socket.io.js";

// list.scrollTop = list.scrollHeight
export default {
  name: "App",
  data() {
    return { 
      infoData:'',
      backData:null,
      socket: null,
      avatar:"./assets/kf.png",
    };
  },
  methods: {
    // 发送信息出来
    send() {
      this.socket.emit("gkmsg", this.infoData);

      let list = document.querySelector('.chat-main')
      list.innerHTML += `
         <div class="gk-ms" id="gkms">
            <div class="zz tx">
              <span class="kf-img"><img src="/14.jpg" alt="" style="width:100%"></span>
            </div>
            <div class="zz wz">
            <span class="gk-msg" id="gkmsg">${this.infoData}</span>
            </div>
            </div>
      `
        this.infoData=''
      list.scrollTop = list.scrollHeight
      
    },
  },
  mounted() {
    this.socket = io("http://localhost:3000/");
    this.socket.on("connect", function () {
      // console.log("连接成功");
    });
    this.socket.on('textmsg2',function(data){
      this.backData=data
      let list = document.querySelector('.chat-main')
      list.innerHTML += `
        <div class="kf-ms">
              <span class="kf-img"><img src="/kf.png" alt="" style="width:100%"></span>
              <span class="kf-msg" id="kfmsg">${this.backData}</span>
            </div>
      `
      list.scrollTop = list.scrollHeight
    })
  },
};
</script>

<style scoped>
@import url("../assets/chat.css");
</style>
