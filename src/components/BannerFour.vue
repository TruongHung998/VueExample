<template>
    <!-- Begin Banner Area -->
    <div class="banner-area banner-style-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="banner-item banner-bg" data-bg-image="" :style="{backgroundImage: `url(${ mainBg })`}">
                        <div class="banner-content">
                            <span class="banner-category">Trial Version Available</span>
                            <h2 class="banner-title">Start your 5-day’s free trial.</h2>
                            <p class="banner-desc">That necessitates robust ecommerce products</p>
                        </div>
                        <div class="banner-btn-wrap">
                            <router-link class="banner-btn" to="/contact">
                                <img src="images/button/3-1-210x70.png" alt="Button">
                            </router-link>
                            <router-link class="banner-btn" to="/contact">
                                <img src="images/button/3-2-210x70.png" alt="Button">
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
export default {
  data () {
    return {
      mainBg: 'images/banner/5-1-1170x420.png'
    }
  }
}
</script>
