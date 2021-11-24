<template>

    <!-- Intro Area Start -->
    <div class="intro-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-area">
                        <h2 class="section-title">Check intro video</h2>
                        <p class="section-desc">That necessitates a robust ecommerce platform that</p>
                    </div>
                    <div class="intro-item intro-bg" data-bg-image="" :style="{backgroundImage: `url(${ introBg })`}">
                        <lightgallery
                            :settings="{
                                speed: 500,
                                plugins: plugins,
                                controls: false
                            }"
                            class="popup-btn"
                        >

                            <div
                                class="popup-vimeo wave-btn style-2 gallery-item"
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
        </div>
    </div>
    <!-- Intro Area End -->

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
      introBg: 'images/intro/1-1-1170x600.png'
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
