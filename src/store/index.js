import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginname:'',//保存当前登录用户
    login:true,
    loginuid:'',
    loginphone:'',
  },
  getters: {
  },
  mutations: {
    // 用户声明方法修改state
    updateUserInfo(state,payload){
      // state.loginname=payload.uname
      // state.loginphone=payload.phone
      state.loginuid=window.sessionStorage.getItem('userid')
      state.loginname=window.sessionStorage.getItem('username')
      state.loginphone=window.sessionStorage.getItem('userphone')
      if(state.loginname!=null){
        // console.log(state.loginname)
         state.login=false
      } 
    },
    quitUserInfo(state,payload){
      // state.loginname=payload
      // state.loginphone=payload
      window.sessionStorage.removeItem('userid')
      window.sessionStorage.removeItem('username')
      window.sessionStorage.removeItem('userphone')
      state.loginuid=window.sessionStorage.getItem('userid')
      state.loginname=window.sessionStorage.getItem('username')
      state.loginphone=window.sessionStorage.getItem('userphone')
      state.login=true 
    }, 
  },
  actions: {
  },
  modules: {
  },
})
