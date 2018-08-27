<template>
  <footer class="ui-bottom bottom-fixed">
    <!-- <nuxt-link  class="ui-bottom-item ui-bottom-item-on" to="/">
      <span class="ui-bottom-icon ui-bottom-icon-shouye"></span>
        <p class="ui-bottom-tabbar">首页</p>
    </nuxt-link>
    
    <nuxt-link class="ui-bottom-item ui-bottom-item-on" to="/bid/investlist">
      <span class="ui-bottom-icon ui-bottom-icon-invest"></span>
        <p class="ui-bottom-tabbar">项目</p>
    </nuxt-link>
  
    <nuxt-link class="ui-bottom-item" to="/find">
      <span class="ui-bottom-icon ui-bottom-icon-find"></span>
        <p class="ui-bottom-tabbar">发现</p>
    </nuxt-link>
    <nuxt-link class="ui-bottom-item" to="/personal">
      <span class="ui-bottom-icon ui-bottom-icon-my"></span>
        <p class="ui-bottom-tabbar">我的</p>
    </nuxt-link> -->
    <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        router class="ui-bottom-item">
        <el-menu-item index="/">
        <span class="ui-bottom-icon ui-bottom-icon-shouye"></span>
        <p class="ui-bottom-tabbar">首页</p>
        </el-menu-item>
        <el-menu-item index="/bid/investlist">
        <span class="ui-bottom-icon ui-bottom-icon-invest"></span>
        <p class="ui-bottom-tabbar">项目</p>
        </el-menu-item>
        <el-menu-item index="/find">
        <span class="ui-bottom-icon ui-bottom-icon-find"></span>
        <p class="ui-bottom-tabbar">发现</p>
        </el-menu-item>
        <el-menu-item index="/personal">
        <span class="ui-bottom-icon ui-bottom-icon-my"></span>
        <p class="ui-bottom-tabbar">我的</p>
        </el-menu-item>
      </el-menu>
    </el-header>
  </el-container>
    </footer>
</template>
<script>
export default {
  data(){
    return {
      select:'',
      activeIndex: '/'
    }
  },
  created () {
    this.activeIndex = this.$route.path
  },
   methods: {
    toSelect (){
      if($this.router.path==='/'){
        return select="ui-bottom-item-on"
      }
    }
  }
}
</script>



