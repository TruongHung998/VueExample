<template>

    <!-- Begin Banner Area -->
    <div class="banner-area banner-common banner-style-2">
        <div class="container banner-container">
            <div class="row">
                <div class="col-lg-6">

                    <div class="banner-img">
                        <img class="primary-img" src="images/banner/2-1-384x779.png" alt="Banner">
                        <div class="banner-inner-img">
                            <img src="images/banner/2-2-218x360.png" alt="Inner Image">
                            <lightgallery
                                :settings="{
                                    speed: 500,
                                    plugins: plugins,
                                    controls: false
                                }"
                                class="popup-btn"
                            >

                                    <div
                                        class="popup-vimeo wave-btn gallery-item"
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

                </div>
                <div class="col-lg-6 align-self-center">
                    <div class="banner-content">
                        <span class="banner-category">Modern And Unique Design</span>
                        <h2 class="banner-title playfair-font">Clean and Unique Design With Powerful User Experience.</h2>
                        <p class="banner-desc">That necessitates a robust ecommerce platform optimizes your store & products</p>
                        <div class="banner-btn-wrap">
                            <h3 class="title">Download and install from here:</h3>
                            <router-link to="/contact">
                                <img src="images/button/1-1-210x70.png" alt="Button">
                            </router-link>
                            <router-link to="/contact">
                                <img src="images/button/1-2-210x70.png" alt="Button">
                            </router-link>
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
  data: () => ({
    plugins: [lgZoom, lgVideo]
  })
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