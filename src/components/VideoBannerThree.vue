<template>
    <div class="banner-img banner-bg" data-bg-image="" :style="{backgroundImage: `url(${ introBg })`}">
        <lightgallery
            :settings="{
                speed: 500,
                plugins: plugins,
                controls: false
            }"
            class="popup-btn"
        >
            <div
                class="popup-vimeo wave-btn style-3"
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
      introBg: 'images/banner/6-1-1172x603.png'
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
