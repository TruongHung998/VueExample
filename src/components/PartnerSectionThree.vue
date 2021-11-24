<template>
    <!-- Begin Partner Area -->
    <div class="partner-area" :class="styleClass">
        <div class="container partner-container">
            <div class="row">
                <div class="col-12">
                    <div class="section-area">
                        <h2 class="section-title">Our Trusted Partner’s</h2>
                        <p class="section-desc">Necessitates a robust ecommerce platform</p>
                    </div>
                    <swiper class="partner-slider-3"
                        :breakpoints="swiperOptions.breakpoints"
                        :slides-per-view="3"
                        :spaceBetween="60"
                        :loop="true"
                        :pagination="swiperOptions.pagination"
                        @swiper="onSwiper"
                    >
                        <swiper-slide class="partner-item" v-for="(partner, index) in partners" :key="index">
                            <span class="partner-img">
                                <img :src="`${partner.partnerImage}`" :alt="partner.alt">
                            </span>
                        </swiper-slide>
                    </swiper>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination partner-pagination" :class="swiperStyleClass"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- Partner Area End Here -->
</template>

<script>
import SwiperCore, { Pagination } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
SwiperCore.use([Pagination])

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
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
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

<style lang="scss">
.style-3 {
    .swiper-pagination-bullet{
        margin: 0 4px;
    }
}
</style>
