<template>
  <section class="container">
    <div class="list-panel">
      <div v-for="item in newList" :key="item.id" class="list-panel-box row mt10 bg-white">
        <a href="">
          <div class="col-12">
            <div class="list-title">
              <span class="f14 title-color zt-icon">{{item.financial.bidName}}</span>
              <span class="f14 title-color"></span>
              <span class="listRedContainer"><i class="red-packet">红包</i><i class="red-packet">加息</i></span>
            </div>
            <ul class="ui-meta-info col-8">
              <li class="tl">
                <b class="orange-color f28">
                     <b class="orange-color f28">{{item.financial.incomeRate}}<span class="f12">%</span></b></b> <span class="title-color-0 f14 dis-block">往期回报率</span>
              </li>
              <li class="tc">
                <b class="f18 title-color" style="margin-bottom: 6px;display: inline-block;">{{item.financial.investPeriod}}<span class="">月</span></b>
                <span class="title-color-0 f14 dis-block">锁定期</span>
              </li>
            </ul>
          </div>
        </a>
      </div>
    </div>
    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
  </section>
</template>
<script>
export default {
  asyncData({ req }) {
    return {
      name: req ? "server" : "client"
    };
  },

  async asyncData({ app }) {
    const { data } = await app.$axios.post("/wisdomProduct/phone/findWisdomList?userId=226079");
    console.log(data);
    return {
      newList: data.page
    };
  },

  head() {
    return {
      title: `投资页面 Page (${this.name}-side)`
    };
  }
};
</script>

<style scoped>
.title {
  margin-top: 50px;
}

.info {
  font-weight: 300;

  color: #9aabb1;

  margin: 0;

  margin-top: 10px;
}

.button {
  margin-top: 5px;
}
</style>
