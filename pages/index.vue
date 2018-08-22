<template>
  <section class="container">
    <div class="list-panel index-panel swiper-container">
      <div id="new-player">
        <a>
          <div class="new-player"></div>{{ title }}
        </a>
      </div>
      <div class="swiper-wrapper">
        <div class="list-panel-box row mt10 bg-white swiper-slide">
          <a rel="external">
            <div class="list-title">新手专享:{{ info.bidName }}</div>
            <div class="infro-box time-box tc">
              <div class="color333 f12"><span class="f20">{{ info.investPeriod}}</span>个月</div><label class="color999 f12">锁定期</label></div>
            <div class="infro-box money-box tc">
              <div class="color333 f12"><span class="f20">500</span>元 </div><label class="color999 f12">最低出借金额</label></div>
            <div class="index-progress"><canvas width="124" height="124" class="canvas" id="financial"></canvas>
              <div class="index-pro-yuqi"><span><i style="font-size: 1.5rem;">{{info.incomeRate}}+<i style="font-size: 1.5rem;">{{info.plateRate}}</i></i><i>% </i></span>
                <div class="color999 f12">往期回报率</div>
              </div>
              <div class="index-progress-num newStyle">19%</div>
            </div>
          </a>
          <div class="index-chujie">仅首次出借，单笔最高限额{{newStand.newStandardInvestAmt}}元</div><a class="ui-btn index-btn" rel="external">立即出借</a></div>
      </div>
      <div align="center" style="font-size:12px;color:#929292;margin-top:0.5rem;"><span style="border-bottom: 1px solid #d7d7d7;width: 3rem;display: inline-block;vertical-align: middle;margin-right: 0.6rem;"></span>市场有风险，选择需谨慎
      <span style="border-bottom: 1px solid #d7d7d7;width: 3rem;display: inline-block;vertical-align: middle;margin-left: 0.6rem;"></span></div>
      <div class="arrow-turn arrow-period dis-none"></div>
      <div class="arrow-turn arrow-next dis-none"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "峰向标"
    };
  },
  async asyncData({ app }) {
    const { data } = await app.$axios.post(
      "/phone/index?limit=8&requestSource=android&version=v2&versionCode=50000"
    );
    console.log(data);
    return {
      info: data.financial.financial,
      newStand: data.financial
    };
  }
};
</script>

<style scoped>
.title {
  margin: 50px 0;
}
</style>
