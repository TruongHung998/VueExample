<template>
    <!-- Begin Hero Area -->
    <div class="hero-area hero-bg hero-style-5" data-bg-image="" :style="{backgroundImage: `url(${ bgImage })`}">
        <div class="container hero-container">
            <div class="hero-item">
                <div class="hero-content white-text">
                    <h1 class="title">Beautiful web app. for online & digital banking.</h1>
                    <p class="desc">That necessitates robust ecommerce platform that optimizes popularised with the release your store.</p>
                    <div class="btn-wrap">
                        <router-link class="btn btn-custom-size btn-lg extbot-primary-5 blackcurrant-hover" to="/">Start Free Trial</router-link>
                    </div>
                </div>
                <div class="hero-img">
                    <div class="single-img">
                        <img src="images/hero/inner-img/5-1-754x545.png" alt="Hero Image">
                    </div>
                    <div class="hero-sticker-wrap">
                        <div class="scene fill">
                            <div class="expand-width" data-depth="0.2">
                                <div class="hero-sticker"></div>
                            </div>
                        </div>
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
      bgImage: 'images/hero/bg/5-1-1920x1027.png'
    }
  }
}
</script>
