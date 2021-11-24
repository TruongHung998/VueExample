<template>
    <!-- Begin Hero Area -->
    <!-- data-bg-image="images/hero/bg/2-1-1920x950.jpg"  -->
    <div class="hero-area hero-bg hero-style-2" data-bg-image="" :style="{backgroundImage: `url(${ bgImage })`}">
        <div class="container hero-container">
            <div class="hero-item">
                <div class="hero-content white-text">
                    <h1 class="title">Lifestyle and fitness mobile app. landing page.</h1>
                    <p class="desc">That necessitates a robust ecommerce platform that optimizes popularised with the release your store. </p>
                    <div class="btn-wrap">
                        <router-link class="btn btn-custom-size btn-lg paua-color blackcurrant-hover" to="/contact">Start Free Trial</router-link>

                        <lightgallery
                            :settings="{
                                speed: 500,
                                plugins: plugins,
                                controls: false
                            }"
                            class="popup-btn"
                        >

                                <div
                                    class="popup-vimeo gallery-item"
                                    data-src="https://player.vimeo.com/video/172601404?autoplay=1"
                                >
                                    <div class="icon">
                                        <span></span>
                                    </div>
                                </div>

                        </lightgallery>
                    </div>
                </div>
                <div class="hero-img">
                    <img src="images/hero/inner-img/2-1-461x1001.png" alt="Hero Image">
                </div>
            </div>
        </div>
        <span class="hero-sticker"></span>
    </div>
    <!-- Hero Area End Here -->
</template>

<script>
import Lightgallery from 'lightgallery/vue'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'

export default {
  name: 'App',
  components: {
    Lightgallery
  },
  data () {
    return {
      plugins: [lgZoom, lgVideo],
      bgImage: 'images/hero/bg/2-1-1920x950.jpg'
    }
  }
}
</script>
<style lang="css">
    @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
    @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
    @import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');
    .gallery-item {
    cursor: pointer;
    }
</style>
