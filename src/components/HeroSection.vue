<template>
    <!-- Begin Hero Area -->
    <div class="hero-area hero-bg hero-style-1" data-bg-image="" :style="{backgroundImage: `url(${ heroBg })`}">
        <div class="hero-item">
            <div class="hero-img-wrap">
                <div class="hero-img with-sticker">
                    <div class="scene fill">
                        <div class="expand-width" data-depth="-0.2">
                            <div class="hero-sticker"></div>
                        </div>
                    </div>
                    <div class="single-img">
                        <img src="images/hero/inner-img/1-1-401x870.png" alt="Hero Image">
                    </div>
                </div>
                <div class="hero-img with-group">
                    <div class="single-img">
                        <img src="images/hero/inner-img/1-2-398x348.png" alt="Hero Image">
                    </div>
                    <div class="with-sticker mt-20">
                        <div class="scene fill">
                            <div class="expand-width" data-depth="0.2">
                                <div class="hero-sticker extbot-primary"></div>
                            </div>
                        </div>
                        <div class="single-img">
                            <img src="images/hero/inner-img/1-3-398x350.png" alt="Hero Image">
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-content">
                <span class="category">Anywhere // Anytime</span>
                <h1 class="title playfair-font">Your Dream Destination In Your Hand.</h1>
                <p class="desc">That necessitates a robust ecommerce platform that optimizes your store & products</p>
                <div class="btn-wrap">
                    <router-link class="btn btn-custom-size btn-lg sapphire-hover roboto-font" to="/contact">Start Free Trial</router-link>
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
      heroBg: 'images/hero/bg/1-1-1920x1070.jpg'
    }
  }
}
</script>
