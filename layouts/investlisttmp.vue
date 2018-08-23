<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        router>
        <el-menu-item index="/bid/investlist">优选智投</el-menu-item>
        <el-menu-item index="/bid/productlist">精选散标</el-menu-item>
        <el-menu-item index="/bid/transfer">转让</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <nuxt keep-alive />
    </el-main>
    <my-footer/>
  </el-container>
</template>

<script>
import MyFooter from '../components/Footer.vue'
export default {
  data () {
    return {
      activeIndex: '/'
      }
  },
  created () {
    this.activeIndex = this.$route.path
  },
  components: {
    MyFooter
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  min-width: 960px;
}

.el-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #f7fbfd;
  line-height: 60px;
}

.github {
  height: 36px;
  font-size: 36px;
  color: #c8d6e8;

  line-height: 36px;

  &:hover {
    transform: scale(1.2);
    color: #8d99ab;
  }
}
</style>
