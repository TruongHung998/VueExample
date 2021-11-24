<template>
    <!-- Begin Feature Area -->
    <div id="feature" class="feature-area with-background feature-style-1">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-area">
                        <h2 class="section-title playfair-font">App. Features</h2>
                        <p class="section-desc"> That necessitates a robust ecommerce platform that optimizes your store & products </p>
                    </div>
                    <swiper class="feature-slider"
                        :breakpoints="swiperOptions.breakpoints"
                        :slides-per-view="3"
                        :spaceBetween="30"
                        :loop="true"
                        :effect='fade'
                        :pagination="swiperOptions.pagination"
                        @swiper="onSwiper"
                    >

                        <swiper-slide  v-for="(slider, sliders) in sliders" :key="sliders" class="feature-item">

                            <div class="feature-icon">
                                <img :src="`${slider.imgSrc}`" :alt="slider.alt">
                            </div>
                            <div class="feature-content">
                                <h3 class="title playfair-font">{{ slider.slidersubTitle }}</h3>
                                <p class="desc" v-html="slider.sliderDesc"></p>
                            </div>

                        </swiper-slide>

                    </swiper>

                    <!-- Add Pagination -->
                    <div class="swiper-pagination feature-pagination"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- Features Area End Here -->
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination } from 'swiper'
SwiperCore.use([Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide
  },

  data () {
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }
      },
      sliders: [
        {
          imgSrc: 'images/feature/icon/1-1-110x110.png',
          alt: 'Feature Icon',
          slidersubTitle: 'Best Performance',
          sliderDesc: 'That necessitate ecommerce platform that optimi your store prob popularised the the release'
        },
        {
          imgSrc: 'images/feature/icon/1-2-110x110.png',
          alt: 'Feature Icon',
          slidersubTitle: 'Easy Setting',
          sliderDesc: 'That necessitate ecommerce platform that optimi your store prob popularised the the release'
        },
        {
          imgSrc: 'images/feature/icon/1-3-110x110.png',
          alt: 'Feature Icon',
          slidersubTitle: 'Free Update',
          sliderDesc: 'That necessitate ecommerce platform that optimi your store prob popularised the the release'
        }
      ]
    }
  },

  methods: {
    onSwiper (swiper) {
      this.swiper = swiper
    }
  }

}

</script>
