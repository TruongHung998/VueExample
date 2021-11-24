<template>
    <!-- Begin Hero Area -->
    <div class="hero-area hero-bg hero-style-4" data-bg-image="" :style="{backgroundImage: `url(${ bgImage })`}">
        <div class="container">
            <div class="hero-item">
                <div class="hero-content">
                    <h1 class="title">Online & digital <br><span>banking</span> mobile app.</h1>
                    <p class="desc">That necessitates a robust ecommerce platform popular</p>
                    <div class="hero-btn-wrap">
                        <router-link to="/contact">
                            <img src="images/button/7-1-213x73.png" alt="Button">
                        </router-link>
                        <router-link to="/contact">
                            <img src="images/button/7-2-213x73.png" alt="Button">
                        </router-link>
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
      bgImage: 'images/hero/bg/4-1920x1055.png'
    }
  }
}
</script>
