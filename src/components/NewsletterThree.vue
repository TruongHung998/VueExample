<template>
    <!-- Begin Newsletter Area -->
    <div class="newsletter-area style-3">
        <div class="container">
            <div class="newsletter-bg" data-bg-image="" :style="{backgroundImage: `url(${ mainBg })`}">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="newsletter-item">
                            <div class="inner-item">
                                <h2 class="newsletter-title">{{title}}</h2>
                                <p class="newsletter-desc">{{description}}</p>
                                <form class="newsletter-form" id="mc-form" action="#">
                                    <input class="input-field" id="mc-email" type="email" autocomplete="off" name="Enter Your Email" value="Enter Your Email" onblur="if(this.value==''){this.value='Enter Your Email'}" onfocus="if(this.value=='Enter Your Email'){this.value=''}">
                                    <div class="btn-wrap">
                                        <button class="btn btn-custom-size extbot-primary-4 blackcurrant-hover" id="mc-submit">
                                            Subscribe
                                            <i class="icofont-double-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Newsletter Area End Here -->
</template>

<script>
export default {
  data () {
    return {
      mainBg: 'images/newsletter/bg/3-1-1173x373.png',
      title: 'Join with us.',
      description: 'That necessitates robust ecommerce products'
    }
  }
}
</script>
