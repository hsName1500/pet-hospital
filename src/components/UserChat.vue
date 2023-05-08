<template>
  <div id="app">

  
  <!-- <el-row > -->

  <!-- <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple">

      <div class="chat-head">
      在线咨询
      </div>
      <div class="chat-main"></div>
      <div><input class="user-msg"
      id="usermsg" type="text">
      <button>发送</button>
      </div>

  </div></el-col>
</el-row> -->

    

    
  </div>
</template>

<script>
import io from "../node_modules/socket.io-client/dist/socket.io.js"


export default {
  name: 'App',
  data() {
    return {
      infoData: '123',
      socket: null
    }
  },
  methods: {
    send() {
      this.socket.emit('textmsg', this.infoData);
    }
  },
  mounted() {
    this.socket = io('http://localhost:3000/')
    this.socket.on('connect',function() {
      console.log('连接成功');
    })
  }
}
</script>

<style scoped>
  @import url('../assets/chat.css');

</style>
