<template>
  <section class="container">
      <hade-carousel></hade-carousel>
    <img src="../../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      This page is loaded from the {{ name }}
    </h1>
    <h2 class="info" v-if="name === 'client'">
      Please refresh the page
    </h2>
    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
  </section>
</template>
<script>
import hadeCarousel from '../../components/hadeCarousel.vue'
export default {
    components:{
        hadeCarousel
    },
  asyncData({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head() {
    return {
      title: `Find Page (${this.name}-side)`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
