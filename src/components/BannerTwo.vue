<template>
    <!-- Begin Banner Area -->
    <div class="banner-area banner-style-3">
        <div class="container banner-container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-item" data-bg-image="" :style="{backgroundImage: `url(${ bannerBg })`}">
                        <div class="banner-content">
                            <h2 class="banner-title playfair-font">We have 10,000+ active user, you can <span>join</span> with us.</h2>
                            <p class="banner-desc">That necessitates robust ecommerce platform optimizes</p>
                            <div class="btn-wrap">
                                <router-link class="btn btn-custom-size btn-lg sapphire-color" to="/contact">Get Started<i class="icofont-double-right"></i></router-link>
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
      bannerBg: 'images/banner/3-1-1470x495.png'
    }
  }
}
</script>
