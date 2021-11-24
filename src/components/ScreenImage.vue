<template>
    <!-- Begin Screen Area -->
    <div class="screen-area screen-bg" data-bg-image="" :style="{backgroundImage: `url(${ bannerBg })`}">
        <div class="container screen-container">
            <div class="row">
                <div class="col-12">
                    <div class="section-area">
                        <h2 class="section-title">Awesome Screen’s</h2>
                        <p class="section-desc">That necessitates a robust ecommerce platform that optimizes your store & products</p>
                    </div>
                    <swiper class="swiper-container screen-slider"
                        :breakpoints="swiperOptions.breakpoints"
                        :loop="true"
                        :navigation="swiperOptions.navigation"
                        @swiper="onSwiper"
                    >
                        <swiper-slide  v-for="(slider, sliders) in sliders" :key="sliders" class="screen-item">
                            <router-link class="screen-img" to="/contact">
                                <img :src="`${slider.imgSrc}`" :alt="slider.alt">
                            </router-link>
                        </swiper-slide>

                    </swiper>
                    <!-- Screen Arrows -->
                    <div class="screen-arrow-wrap">
                        <div class="screen-button-prev swipper-arrow">
                            <i class="icofont-double-left"></i>
                        </div>
                        <div class="screen-button-next swipper-arrow">
                            <i class="icofont-double-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="container">
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
                </div>
            </div>
        </div> -->
    </div>
    <!-- Screen Area End Here -->
</template>

<script>
import SwiperCore, { Navigation } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
SwiperCore.use([Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide
  },

  data () {
    return {
      bannerBg: 'images/migrate/bg/1-2-1920x1757.png',
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        },
        navigation: {
          nextEl: '.screen-area .screen-button-next',
          prevEl: '.screen-area .screen-button-prev'
        }
      },
      sliders: [
        {
          imgSrc: 'images/screen/1-1-314x682.png',
          alt: 'Feature Icon'
        },
        {
          imgSrc: 'images/screen/1-2-314x682.png',
          alt: 'Feature Icon'
        },
        {
          imgSrc: 'images/screen/1-3-314x682.png',
          alt: 'Feature Icon'
        },
        {
          imgSrc: 'images/screen/1-4-314x682.png',
          alt: 'Feature Icon'
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
