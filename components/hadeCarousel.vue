<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="container">
    <div class="swiper-container">
    <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
  </div>
  </div>
  
  
</template>

<script>
  export default {
    data () {
      return {
        banners: [
          'https://fxb.tianfn.net:4443/img/2018/9/10/backgound/4b5d345fee3d4b70a20f734d6f939881.jpg',
          'https://fxb.tianfn.net:4443/img/2018/9/10/backgound/4b5d345fee3d4b70a20f734d6f939881.jpg',
          'https://fxb.tianfn.net:4443/img/2018/9/10/backgound/4b5d345fee3d4b70a20f734d6f939881.jpg'
         
        ],
        swiperOption: {
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
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
  }
</script>


<style lang="scss" scoped>
  .container {padding: 0;width: 100%;}
  // .my-swiper {
  //   .swiper-slide {
      
  //     text-align: center;
  //     font-size: 38px;
  //     font-weight: 700;
  //     background-color: #eee;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //   }
  //   .swiper-container {
  //     width: 100%;
  //     height: 100%;
  //   }
  //   .swiper-pagination {
  //     > .swiper-pagination-bullet {
  //       background-color: red;
  //     }
  //   }
  // }
  .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
</style>
