<template>
    <!-- Begin Newsletter Area -->
    <div :class="newslatterFour">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="newsletter-item" data-bg-image="" :style="{backgroundImage: `url(${ mainBg })`}">
                        <div class="inner-item">
                            <h2 class="newsletter-title">{{title}}</h2>
                            <p class="newsletter-desc">{{description}}</p>
                            <form class="newsletter-form" id="mc-form" action="#">
                                <input class="input-field" id="mc-email" type="email" autocomplete="off" name="Enter Your Email" value="Enter Your Email" onblur="if(this.value==''){this.value='Enter Your Email'}" onfocus="if(this.value=='Enter Your Email'){this.value=''}">
                                <div class="btn-wrap">
                                    <button class="btn btn-custom-size blue-color blackcurrant-hover" id="mc-submit">
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
    <!-- Newsletter Area End Here -->
</template>

<script>
export default {
  props: ['newslatterFour'],
  data () {
    return {
      mainBg: '/images/newsletter/bg/4-1-1173x373.png',
      title: 'Join with us.',
      description: 'That necessitates robuste and ecommerce products'
    }
  }
}
</script>
