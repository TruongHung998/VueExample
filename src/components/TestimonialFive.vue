<template>
    <!-- Begin Testimonial Area -->
    <div id="testimonial" class="testimonial-area testimonial-style-5" data-bg-image="" :style="{backgroundImage: `url(${ mainBg })`}">
        <div class="container">
            <div class="section-area section-style-3">
                <div class="section-wrap">
                    <h2 class="section-title testimonial-title">Extbot have <span>10,000+</span> user, what user say about us.</h2>
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
            <div class="row">
                <div class="col-12">
                    <swiper class="testimonial-slider-5"
                        :breakpoints="swiperOptions.breakpoints"
                        :slides-per-view="2"
                        :spaceBetween="30"
                        :loop="true"
                        :navigation="swiperOptions.navigation"
                        @swiper="onSwiper">
                        <swiper-slide v-for="(partner, index) in partners" :key="index">
                            <div class="testimonial-item">
                                <div class="testimonial-user-info">
                                    <div class="user-img">
                                        <img :src="`${partner.partnerImage}`" :alt="partner.alt">
                                    </div>

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
                                    <div class="user-content">
                                        <p class="user-comment">{{partner.text}}</p>
                                        <h2 class="user-title">{{partner.userName}}</h2>
                                        <p class="user-occupation">{{partner.userTitle}}</p>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
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
      mainBg: 'images/testimonial/bg/5-1-1920x1213.png',
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 50
          }
        },
        navigation: {
          nextEl: '.testimonial-style-5 .testimonial-button-next',
          prevEl: '.testimonial-style-5 .testimonial-button-prev'
        }
      },

      partners: [
        {
          partnerImage: 'images/testimonial/user/5-1-133x133.png',
          alt: 'User Image',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the printer took scrambled it to make a type specimen book.",
          userName: 'Stephine Rosenban',
          userTitle: 'Founder of Extbot'
        },
        {
          partnerImage: 'images/testimonial/user/5-2-133x133.png',
          alt: 'User Image',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the printer took scrambled it to make a type specimen book.",
          userName: 'Catherin Betty',
          userTitle: 'Web Developer'
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
