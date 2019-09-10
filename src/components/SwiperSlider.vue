<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide bg-cover">
        <img
          src="./img/0UV4eUX5XQwZCMWIybFtC7uR1ioGXlkNDLG-gQyxvoE.jpg"
          alt
          class="bg-cover item-img"
        />
      </div>
      <div class="swiper-slide bg-cover">
        <img src="./img/NieR-Automata-1024x576.jpg" alt class="bg-cover item-img" />
      </div>
      <div class="swiper-slide bg-cover">
        <img src="./img/7d92c44c72f0baad25f9fc0d8240248d.jpg" alt class="bg-cover item-img" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>
<script>
import Swiper from "Swiper";

export default {
  name: "Slider",
  data() {
    return {
      swiperOption: {
        //swiper3
      }
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: ".swiper-pagination",
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      // 如果需要滚动条
      scrollbar: ".swiper-scrollbar",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: {
        delay: 5000
      }
    });
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  margin: 0;
  padding: 0;
}

.swiper-wrapper {
  height: 400px;
}

.swiper-slide img {
  max-width: 100%;
}

.swiper-slide {
  text-align: center;
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

@media(max-width:576px){
  .swiper-wrapper {
  height: 200px;
}
}
</style>