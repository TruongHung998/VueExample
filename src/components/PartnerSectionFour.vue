<template>
    <!-- Begin Partner Area -->
    <div class="partner-area partner-style-5" :class="styleClass">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <swiper class="partner-slider-4"
                        :breakpoints="swiperOptions.breakpoints"
                        :slides-per-view="4"
                        :spaceBetween="40"
                        :loop="true"
                        @swiper="onSwiper"
                    >
                        <swiper-slide class="partner-item" v-for="(partner, index) in partners" :key="index">
                            <span class="partner-img">
                                <img class="primary-img" :src="`${partner.partnerImage}`" :alt="partner.alt">
                                <img class="secondary-img" :src="`${partner.partnerImageTwo}`" :alt="partner.altTwo">
                            </span>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
    <!-- Partner Area End Here -->
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
export default {
  props: ['styleClass', 'swiperStyleClass'],
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
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 60
          }
        }
      },

      partners: [
        {
          partnerImage: 'images/partner/5-1-1-220x40.png',
          alt: 'Partner',
          partnerImageTwo: 'images/partner/5-1-2-220x40.png',
          altTwo: 'Partner'
        },
        {
          partnerImage: 'images/partner/5-2-1-220x40.png',
          alt: 'Partner',
          partnerImageTwo: 'images/partner/5-2-2-220x40.png',
          altTwo: 'Partner'
        },
        {
          partnerImage: 'images/partner/5-3-1-231x49.png',
          alt: 'Partner',
          partnerImageTwo: 'images/partner/5-3-2-231x49.png',
          altTwo: 'Partner'
        },
        {
          partnerImage: 'images/partner/5-4-1-225x52.png',
          alt: 'Partner',
          partnerImageTwo: 'images/partner/5-4-2-225x52.png',
          altTwo: 'Partner'
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

<style lang="scss">
.partner-style-5 {
    .partner-img{
        cursor: pointer;
    }
}
</style>
