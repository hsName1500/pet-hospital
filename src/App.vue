<template>
  <div>
    <div class="header">
    <my-header
    v-if="!$route.meta.UserLogin"
    />
    </div>
    <router-view/>
    <my-footer
    v-if="!$route.meta.UserLogin && !$route.meta.User"
    />
  </div>
</template>
<script>
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
  export default {
  components: { MyHeader, MyFooter },
    
    // 使用 watch 监听$router的变化,
  watch: {
    '$route': function(to, from) {
     document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }

  }
</script>

<style lang="scss" scoped>
    .header {
      position: sticky;
      z-index: 3;
      top:5px;
    }
</style>