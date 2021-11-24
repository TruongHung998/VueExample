<template>
    <!-- Begin Feature Area -->
    <div id="feature" class="feature-area feature-style-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-area">
                        <h2 class="section-title">Advance Features</h2>
                        <p class="section-desc">That necessitates a robust ecommerce platform that optimizes your store & products</p>
                    </div>
                    <swiper class="swiper-container feature-slider"
                        :breakpoints="swiperOptions.breakpoints"
                        :slides-per-view="3"
                        :spaceBetween="30"
                        :loop="true"
                        :pagination="swiperOptions.pagination"
                        @swiper="onSwiper"
                    >
                        <swiper-slide  v-for="(slider, sliders) in sliders" :key="sliders" class="feature-item">
                            <div class="feature-icon">
                                <img :src="`${slider.imgSrc}`" :alt="slider.alt">
                            </div>
                            <div class="feature-content">
                                <h3 class="title">{{ slider.slidersubTitle }}</h3>
                                <p class="desc">{{ slider.sliderDesc }}</p>
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
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3,
            centeredSlides: true
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
          imgSrc: 'images/feature/icon/5-2-47x47.png',
          alt: 'Feature Icon',
          slidersubTitle: 'Easy Setting',
          sliderDesc: 'That necessitat ecommerce platform optimi your store problem.'
        },
        {
          imgSrc: 'images/feature/icon/5-3-46x51.png',
          alt: 'Free Update',
          slidersubTitle: 'Easy Setting',
          sliderDesc: 'That necessitat ecommerce platform optimi your store problem.'
        },
        {
          imgSrc: 'images/feature/icon/5-1-47x47.png',
          alt: 'Feature Icon',
          slidersubTitle: 'Free Update',
          sliderDesc: 'That necessitat ecommerce platform optimi your store problem.'
        },
        {
          imgSrc: 'images/feature/icon/5-3-46x51.png',
          alt: 'Feature Icon',
          slidersubTitle: 'User Friendly',
          sliderDesc: 'That necessitat ecommerce platform optimi your store problem.'
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
