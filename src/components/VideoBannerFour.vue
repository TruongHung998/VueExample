<template>
    <!-- Begin Banner Area -->
    <div class="banner-area banner-style-9">
        <div class="container banner-container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="banner-img" data-bg-image="" :style="{backgroundImage: `url(${ introBg })`}">
                        <lightgallery
                            :settings="{
                                speed: 500,
                                plugins: plugins,
                                controls: false
                            }"
                            class="popup-btn"
                        >
                            <div
                                class="popup-vimeo wave-btn style-2"
                                data-src="https://player.vimeo.com/video/172601404?autoplay=1"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <div class="icon">
                                    <i class="icofont-play"></i>
                                </div>
                            </div>

                        </lightgallery>
                    </div>
                </div>
                <div class="col-lg-6 align-self-center">
                    <div class="banner-content common-style">
                        <span class="banner-category">Quick Setup System</span>
                        <h2 class="banner-title">Never miss our intro for easy setup.</h2>
                        <p class="banner-desc">That necessitates a robust ecommerce platform that optimizes your store & products</p>
                        <div class="banner-btn-wrap">
                            <router-link to="/contact" class="btn btn-custom-size blackberry-color extbot-primary-hover-4">Download Now</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Banner Area End Here -->
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
      introBg: 'images/banner/9-1-673x673.png'
    }
  }
}
</script>
<style lang="css">
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');
.popup-vimeo {
  cursor: pointer;
}
</style>
