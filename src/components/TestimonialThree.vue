<template>
    <!-- Begin Testimonial Area -->
    <div id="testimonial" class="testimonial-area testimonial-style-3" data-bg-image="" :style="{backgroundImage: `url(${ mainBg })`}">
        <div class="container">
            <div class="section-area section-style-3">
                <div class="section-wrap">
                    <h2 class="section-title testimonial-title">Client’s Testimonial</h2>
                    <p class="section-desc">That necessitates a robust ecommerce platform that
                        optimizes your store & products
                    </p>
                </div>
                <!-- Partner Arrows -->
                <div class="testimonial-arrow-wrap style-2">
                    <div class="testimonial-button-prev swipper-arrow">
                        <i class="icofont-double-left"></i>
                    </div>
                    <div class="testimonial-button-next swipper-arrow">
                        <i class="icofont-double-right"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="container testimonial-container">
            <div class="row">
                <div class="col-12">
                    <div class="testimonial-slider">

                        <swiper class="partner-slider"
                            :breakpoints="swiperOptions.breakpoints"
                            :slides-per-view="3"
                            :spaceBetween="40"
                            :loop="true"
                            :navigation="swiperOptions.navigation"
                            @swiper="onSwiper">
                            <swiper-slide class="testimonial-item" v-for="(partner, index) in partners" :key="index">
                                <div class="testimonial-user-info">
                                    <div class="user-img">
                                        <img :src="`${partner.partnerImage}`" :alt="partner.alt">
                                    </div>
                                    <div class="user-content">
                                        <h2 class="user-title">{{partner.userName}}</h2>
                                        <p class="user-occupation">{{partner.userTitle}}</p>
                                    </div>
                                </div>
                                <div class="testimonial-content">
                                    <p class="testimonial-comment">{{partner.text}}</p>
                                    <div class="testimonial-review">
                                        <div class="rating-box">
                                            <ul>
                                                <li>
                                                    <i class="icofont-star"></i>
                                                </li>
                                                <li>
                                                    <i class="icofont-star"></i>
                                                </li>
                                                <li>
                                                    <i class="icofont-star"></i>
                                                </li>
                                                <li>
                                                    <i class="icofont-star"></i>
                                                </li>
                                                <li>
                                                    <i class="icofont-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Testimonial Area End Here -->
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
      mainBg: 'images/testimonial/bg/3-1-1920x913.png',
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 1
          },
          992: {
            slidesPerView: 2
          },
          1600: {
            slidesPerView: 3
          }
        },
        navigation: {
          nextEl: '.testimonial-area .testimonial-button-next',
          prevEl: '.testimonial-area .testimonial-button-prev'
        }
      },

      partners: [
        {
          partnerImage: 'images/testimonial/user/2-1-80x80.png',
          alt: 'Quote',
          text: 'That necessitat ecommerce platform that optimi store prob popularised there’s release was popularised containing maker including version.',
          userImage: 'images/testimonial/user/1-1-72x72.png',
          altUser: 'User Image',
          userName: 'Nancy Thompson',
          userTitle: 'User Interface Designer'
        },
        {
          partnerImage: 'images/testimonial/user/2-2-80x80.png',
          alt: 'Quote',
          text: 'That necessitat ecommerce platform that optimi store prob popularised there’s release was popularised containing maker including version.',
          userImage: 'images/testimonial/user/1-2-72x72.png',
          altUser: 'User Image',
          userName: 'Noah Westen',
          userTitle: 'Web Developer'
        },
        {
          partnerImage: 'images/testimonial/user/2-3-80x80.png',
          alt: 'Quote',
          text: 'That necessitat ecommerce platform that optimi store prob popularised there’s release was popularised containing maker including version.',
          userImage: 'images/testimonial/user/1-3-72x72.png',
          altUser: 'User Image',
          userName: 'Nichole Harris',
          userTitle: 'Founder of Extbot.'
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
