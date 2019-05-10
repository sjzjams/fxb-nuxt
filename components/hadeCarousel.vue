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
          'https://www.creditvane.com/img/2019/4/28/backgound/3b192d634a8044148ce35f7010ab0c92.jpg',
          'https://www.creditvane.com/img/2019/4/28/backgound/3b192d634a8044148ce35f7010ab0c92.jpg',
          'https://www.creditvane.com/img/2019/4/28/backgound/3b192d634a8044148ce35f7010ab0c92.jpg'
         
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
              //console.log('onSlideChangeEnd', this);
            },
            tap() {
              //console.log('onTap', this);
            }
          }
        }
        
      }
    },
  }
</script>


<style lang="scss" scoped>

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
