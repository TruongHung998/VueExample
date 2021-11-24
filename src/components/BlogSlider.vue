<template>
    <div class="blog-slider-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-area section-style-2">
                        <h2 class="section-title">You may also like</h2>
                        <!-- Blog Arrows -->
                        <div class="blog-arrow-wrap style-4">
                            <div class="blog-button-prev swipper-arrow">
                                <i class="icofont-long-arrow-left"></i>
                            </div>
                            <div class="blog-button-next swipper-arrow">
                                <i class="icofont-long-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-container blog-slider">
                        <swiper
                          :breakpoints="swiperOptions.breakpoints"
                          :slides-per-view="3"
                          :spaceBetween="30"
                          :loop="true"
                          :navigation="swiperOptions.navigation"
                          @swiper="onSwiper"
                        >
                            <swiper-slide class="blog-item" v-for="(blog, index) in blogs.blogs" :key="index">
                              <router-link :to="`/blog-detail/${blog.id}`" class="blog-img">
                                  <img :src="`${blog.blogImage}`" :alt="blog.alt">
                              </router-link>
                              <div class="blog-content">
                                  <span class="blog-category"><span>{{blog.by}}</span> {{blog.catname}}</span>
                                  <h2 class="blog-title">
                                    <router-link :to="`/blog-detail/${blog.id}`">{{blog.title}}</router-link>
                                  </h2>
                                  <p class="blog-desc">{{blog.desc}}</p>
                                  <ul class="blog-meta">
                                      <li>
                                          <span class="date">{{blog.date}}</span>
                                          <span class="time">{{blog.time}}</span>
                                      </li>
                                  </ul>
                              </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import blogs from '../data/blog.json'
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
      blogs,
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
            spaceBetween: 30
          }
        },
        navigation: {
          nextEl: '.blog-slider-area .blog-button-next',
          prevEl: '.blog-slider-area .blog-button-prev'
        }
      }
    }
  },

  methods: {
    onSwiper (swiper) {
      this.swiper = swiper
    }
  }
}
</script>



