<template>
    <!-- Begin Hero Area -->
    <div class="hero-area hero-bg hero-style-3 overflow-hidden" data-bg-image="" :style="{backgroundImage: `url(${ bgImage })`}">
        <div class="container hero-container">
            <div class="hero-item">
                <div class="hero-content white-text">
                    <h1 class="title">Easily manage indoor & outdoor plants.</h1>
                    <p class="desc">That necessitates a robust ecommerce platform that popularised with the release store.</p>
                    <div class="btn-wrap">
                        <router-link class="btn btn-custom-size btn-lg blackcurrant-color extbot-primary-hover" to="/contact">Start Free Trial</router-link>
                        <router-link class="extbot-link" to="/contact">See more info <i class="icofont-long-arrow-right"></i></router-link>
                    </div>
                </div>
                <div class="hero-img">
                    <div class="single-img">
                        <img src="images/hero/inner-img/3-1-425x915.png" alt="Hero Image">
                    </div>
                    <div class="single-img">
                        <img src="images/hero/inner-img/3-2-425x915.png" alt="Hero Image">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Hero Area End Here -->
</template>
<script>
export default {
  data () {
    return {
      bgImage: 'images/hero/bg/3-1-1920x980.png'
    }
  }
}
</script>
