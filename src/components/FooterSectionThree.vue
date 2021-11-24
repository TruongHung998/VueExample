<template>
    <!-- Begin Footer Area -->
    <footer class="footer-style-3" data-bg-image="" :style="{backgroundImage: `url(${ footerBg })`}">
        <div class="footer-inner-img">
            <img src="images/footer/inner-bg/3-1.png" alt="Inner Image">
        </div>
        <div class="footer-upper-top">
            <router-link to="/" class="footer-logo">
                <img src="images/logo/3-3.png" alt="Logo">
            </router-link>
        </div>
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="footer-item">
                            <div class="footer-list">
                                <h2 class="title">About Us</h2>
                                <p class="footer-desc">That necessitat ecommerce platform that optimi your store prob popularised the the release</p>
                            </div>
                            <div class="footer-social-link">
                                <ul>
                                    <li v-for="(social, index) in socials" :key="index">
                                        <a :href="social.link"><i v-bind:class="social.iconName"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="footer-item-wrap row">
                            <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="footer-item footer-ps-xl-30">
                                    <div class="footer-list">
                                        <h2 class="title">Company</h2>
                                        <ul>
                                            <li><router-link to="/faq">FAQ</router-link></li>
                                            <li><router-link to="/contact">Contact Us</router-link></li>
                                            <li><router-link to="/contact">Term & Condition</router-link></li>
                                            <li><router-link to="/contact.html">Privacy & Policy</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="footer-item footer-ps-xl-30">
                                    <div class="footer-list">
                                        <h2 class="title">Resources</h2>
                                        <ul>
                                            <li><router-link to="/contact">Affiliate</router-link></li>
                                            <li><router-link to="/blog">Blog</router-link></li>
                                            <li><router-link to="/contact">Help & Support</router-link></li>
                                            <li><router-link to="/contact">Careers</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="footer-item footer-ps-xl-30">
                                    <div class="footer-list">
                                        <h2 class="title">Legal</h2>
                                        <ul>
                                            <li><router-link to="/contact">Affiliate</router-link></li>
                                            <li><router-link to="/blog">Blog</router-link></li>
                                            <li><router-link to="/contact">Help & Support</router-link></li>
                                            <li><router-link to="/contact">Careers</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="footer-item">
                                    <div class="footer-list">
                                        <h2 class="title">Products</h2>
                                        <ul>
                                            <li><router-link to="/contact">Start A Trial</router-link></li>
                                            <li><router-link to="/contact">How It works</router-link></li>
                                            <li><router-link to="/contact">App. Features</router-link></li>
                                            <li><router-link to="/contact">Pricing Plan</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="footer-bottom-item">
                            <div class="footer-copyright white-text">
                                <span>© 2021 Extbot Made with <i class="icofont-heart"></i> by
                                    <a href="https://themeforest.net/user/codecarnival" rel="noopener" target="_blank">CodeCarnival</a>
                                </span>
                            </div>
                            <div class="btn-group">
                                <router-link to="/contact">
                                    <img src="images/button/6-1-179x62.png" alt="Button">
                                </router-link>
                                <router-link to="/contact">
                                    <img src="images/button/6-2-176x59.png" alt="Button">
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer Area End Here -->

    <!-- Begin Scroll To Top -->
    <back-to-top bottom="50px" right="50px">
        <button type="button" class="footer-scroll-top scroll-to-top style-3 show border-0">
            <i class="icofont-arrow-up"></i>
        </button>
    </back-to-top>
    <!-- Scroll To Top End Here -->
</template>

<script>
export default {
  data () {
    return {
      footerBg: 'images/footers/bg/3-1-1920x801.png',
      socials: [
        {
          link: 'https://www.facebook.com',
          iconName: 'icofont-facebook'
        },
        {
          link: 'https://www.skype.com',
          iconName: 'icofont-skype'
        },
        {
          link: 'https://www.twitter.com',
          iconName: 'icofont-twitter'
        }
      ]
    }
  }
}
</script>
