<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
        <img :src="banner" height="300" width="100%">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        banners: [
          'https://s3-img.meituan.net/v1/mss_3d027b52ec5a4d589e68050845611e68/ff/n0/0g/83/bp_6494.jpg',
          'https://s3-img.meituan.net/v1/mss_3d027b52ec5a4d589e68050845611e68/ff/n0/0g/83/bp_6494.jpg',
          'https://s3-img.meituan.net/v1/mss_3d027b52ec5a4d589e68050845611e68/ff/n0/0g/83/bp_6494.jpg'
        ],
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        }
      }
    },
    // mounted() {
    //   console.log('app init', this)
    //   setTimeout(() => {
    //     this.banners.push('')
    //     console.log('banners update')
    //   }, 3000)
    //   console.log(
    //     'This is current swiper instance object', this.mySwiper, 
    //     'I will slideTo banners 3')
    //    this.mySwiper.slideTo(3)
    // }
  }
</script>


<style lang="scss" scoped>
  .my-swiper {
    height: 300px;
    width: 100%;

    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-pagination {

      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
</style>
