<template>
    <!-- Begin Testimonial Area -->
    <div id="testimonial" class="testimonial-area with-background">
        <div class="container">
            <div class="section-area section-style-2">
                <h2 class="section-title testimonial-title playfair-font">Our Happy User</h2>
                <!-- Testimonial Arrows -->
                <div class="testimonial-arrow-wrap">
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
                                <div class="testimonial-content">
                                    <div class="testimonial-review">
                                        <div class="quote">
                                            <img :src="`${partner.partnerImage}`" :alt="partner.alt">
                                        </div>
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
                                    <p class="testimonial-comment"><span class="quote">“</span>{{partner.text}}<span class="quote">”</span></p>
                                    <div class="testimonial-user-info">
                                        <div class="user-img">
                                            <img :src="`${partner.userImage}`" :alt="partner.altUser">
                                        </div>
                                        <div class="user-content">
                                            <h2 class="user-title playfair-font">{{partner.userName}}</h2>
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
          partnerImage: 'images/testimonial/quote/1-1-110x110.png',
          alt: 'Quote',
          text: 'That necessitat ecommerce platform that optimi your store prob popularised the release was popularised in the 1960s with the release traset sheets containing and more recently with desktop publishing software like aldus page maker including version',
          userImage: 'images/testimonial/user/1-1-72x72.png',
          altUser: 'User Image',
          userName: 'Nancy Thompson',
          userTitle: 'User Interface Designer'
        },
        {
          partnerImage: 'images/testimonial/quote/1-2-110x110.png',
          alt: 'Quote',
          text: 'That necessitat ecommerce platform that optimi your store prob popularised the release was popularised in the 1960s with the release traset sheets containing and more recently with desktop publishing software like aldus page maker including version',
          userImage: 'images/testimonial/user/1-2-72x72.png',
          altUser: 'User Image',
          userName: 'Noah Westen',
          userTitle: 'Web Developer'
        },
        {
          partnerImage: 'images/testimonial/quote/1-3-110x110.png',
          alt: 'Quote',
          text: 'That necessitat ecommerce platform that optimi your store prob popularised the release was popularised in the 1960s with the release traset sheets containing and more recently with desktop publishing software like aldus page maker including version',
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
