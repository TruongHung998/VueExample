<template>
    <!-- Begin Testimonial Area -->
    <div id="testimonial" class="testimonial-area testimonial-style-2">
        <div class="container testimonial-space-n120">
            <div class="section-area">
                <h2 class="section-title testimonial-title">Client’s Testimonial</h2>
                <p class="section-desc">That necessitates a robust ecommerce platform that optimizes your store & products</p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <swiper class="swiper-container testimonial-slider-2"
                        :breakpoints="swiperOptions.breakpoints"
                        :loop="false"
                        :navigation=false
                        @swiper="onSwiper"
                    >
                        <swiper-slide class="testimonial-item" v-for="(item, index) in items" :key="index">
                            <div class="testimonial-content">
                                <p class="testimonial-comment">{{item.comment}}</p>
                                <div class="testimonial-user-info">
                                    <div class="user-img">
                                        <img :src="`${item.clientImage}`" :alt="item.alt">
                                    </div>
                                    <div class="user-content">
                                        <h2 class="user-title">{{item.title}}</h2>
                                        <p class="user-occupation">{{item.designation}}</p>
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
import { Swiper, SwiperSlide } from 'swiper/vue'

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
            slidesPerColumn: 2,
            slidesPerGroup: 1,
            slidesPerColumnFill: 'row',
            spaceBetween: 30
          },
          992: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 1,
            slidesPerColumnFill: 'row',
            spaceBetween: 50
          }
        }
      },

      items: [
        {
          comment: 'That necessitat ecommerce platform that optimi store prob popularised there’s release was popularised containing maker including version.',
          clientImage: 'images/testimonial/user/2-1-80x80.png',
          alt: 'Testimonial Client',
          title: 'Marion Oliver',
          designation: 'Digital Marketer'
        },
        {
          comment: 'That necessitat ecommerce platform that optimi store prob popularised there’s release was popularised containing maker including version.',
          clientImage: 'images/testimonial/user/2-2-80x80.png',
          alt: 'Testimonial Client',
          title: 'Eliza Blakely',
          designation: 'Web Developer'
        },
        {
          comment: 'That necessitat ecommerce platform that optimi store prob popularised there’s release was popularised containing maker including version.',
          clientImage: 'images/testimonial/user/2-3-80x80.png',
          alt: 'Testimonial Client',
          title: 'Yesenia Overton',
          designation: 'UI/UX Designer'
        },
        {
          comment: 'That necessitat ecommerce platform that optimi store prob popularised there’s release was popularised containing maker including version.',
          clientImage: 'images/testimonial/user/2-4-80x80.png',
          alt: 'Testimonial Client',
          title: 'Regena Pringle',
          designation: 'Video Editor'
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
