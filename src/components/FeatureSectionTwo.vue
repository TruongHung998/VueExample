<template>
    <!-- Begin Feature Area -->
    <div id="feature" class="feature-area feature-style-2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-area section-style-3">
                        <div class="section-wrap">
                            <h2 class="section-title">Advance Features</h2>
                            <p class="section-desc">That necessitates a robust ecommerce platform that
                                optimizes your store & products
                            </p>
                        </div>
                        <div class="btn-wrap">
                            <router-link class="btn btn-custom-size paua-color blackcurrant-hover" to="/contact">Other Features</router-link>
                        </div>
                    </div>
                    <swiper class="swiper-container feature-slider-2"
                        :breakpoints="swiperOptions.breakpoints"
                        :slides-per-view="2"
                        :spaceBetween="30"
                        :loop="false"
                        :effect='fade'
                        :pagination="swiperOptions.pagination"
                        @swiper="onSwiper"
                    >
                        <swiper-slide  v-for="(slider, sliders) in sliders" :key="sliders" class="feature-item">
                            <div class="feature-icon">
                                <img :src="`${slider.imgSrc}`" :alt="slider.alt">
                            </div>
                            <div class="feature-content">
                                <h3 class="title">{{ slider.slidersubTitle }}</h3>
                                <p class="desc" v-html="slider.sliderDesc"></p>
                            </div>
                        </swiper-slide>
                    </swiper>
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
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            slidesPerColumnFill: 'row'
          },
          576: {
            slidesPerView: 1,
            slidesPerColumn: 2,
            slidesPerGroup: 1,
            slidesPerColumnFill: 'row'
          },
          992: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 1,
            slidesPerColumnFill: 'row'
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
        },
        {
          imgSrc: 'images/feature/icon/1-4-110x110.png',
          alt: 'Feature Icon',
          slidersubTitle: 'User Friendly',
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
