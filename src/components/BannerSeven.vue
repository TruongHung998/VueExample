<template>
    <!-- Begin Banner Area -->
    <div class="banner-area banner-style-8" data-bg-image="" :style="{backgroundImage: `url(${ videoBannerBg })`}">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 align-self-center">
                    <div class="banner-item">
                        <div class="banner-content common-style">
                            <span class="banner-category">Easy Collection System</span>
                            <h2 class="banner-title">Minimal and awesome app. user interface.</h2>
                            <p class="banner-desc">That necessitates a robust ecommerce platform that optimizes your store & products</p>
                            <div class="banner-btn-wrap">
                                <router-link to="/contact" class="btn btn-custom-size blackberry-color extbot-primary-hover-4">Download Now</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Banner Area End Here -->
</template>

<script>
export default {
  data () {
    return {
      videoBannerBg: 'images/banner/8-1-1920x638.png'
    }
  }
}
</script>
