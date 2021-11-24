<template>
    <!-- Begin Partner Area -->
    <div class="partner-area with-background">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-area section-style-2">
                        <h2 class="section-title playfair-font">Trusted Partner’s</h2>
                        <!-- Partner Arrows -->
                        <div class="partner-arrow-wrap">
                            <!-- Swiper Navigation Start -->
                            <div class="partner-button-prev swipper-arrow">
                                <i class="icofont-double-left"></i>
                            </div>
                            <div class="partner-button-next swipper-arrow">
                                <i class="icofont-double-right"></i>
                            </div>
                            <!-- Swiper Navigation End -->
                        </div>
                    </div>
                    <div class="partner-slider">

                        <swiper class="partner-slider"
                            :breakpoints="swiperOptions.breakpoints"
                            :slides-per-view="3"
                            :spaceBetween="60"
                            :loop="true"
                            :navigation="swiperOptions.navigation"
                            @swiper="onSwiper"
                        >
                            <swiper-slide class="partner-item" v-for="(partner, index) in partners" :key="index">
                                <span class="partner-img">
                                    <img :src="`${partner.partnerImage}`" :alt="partner.alt">
                                </span>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Partner Area End Here -->
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
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 60
          }
        },
        navigation: {
          nextEl: '.partner-area .partner-button-next',
          prevEl: '.partner-area .partner-button-prev'
        }
      },

      partners: [
        {
          partnerImage: 'images/partner/1-1-220x40.png',
          alt: 'Partner'
        },
        {
          partnerImage: 'images/partner/1-2-220x40.png',
          alt: 'Partner'
        },
        {
          partnerImage: 'images/partner/1-3-220x40.png',
          alt: 'Partner'
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
