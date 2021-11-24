<template>
    <!-- Begin Footer Area -->
    <footer class="footer-style-5">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="footer-item">
                            <div class="footer-list contact-list">
                                <h2 class="title">Contact Us</h2>
                                <ul>
                                    <li>
                                        <i class="icofont-ui-call"></i>
                                        <a href="tel://818-992-6306">(818) 992-6306</a>
                                    </li>
                                    <li>
                                        <i class="icofont-envelope-open"></i>
                                        <a href="mailto://info@example.com">info@example.com</a>
                                    </li>
                                    <li>
                                        <i class="icofont-google-map"></i>
                                        <span> 22024 Velicata St <br> California(CA), 91364</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="footer-item-wrap row">
                            <div class="col-lg-3 col-sm-6">
                                <div class="footer-item footer-ps-xl-30">
                                    <div class="footer-list">
                                        <h2 class="title">Company</h2>
                                        <ul>
                                            <li><router-link to="/faq">FAQ</router-link></li>
                                            <li><router-link to="/contact">Contact Us</router-link></li>
                                            <li><router-link to="/contact">Term & Condition</router-link></li>
                                            <li><router-link to="/contact">Privacy & Policy</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
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
                            <div class="col-lg-3 col-sm-6">
                                <div class="footer-item footer-ps-xl-30 mb-sm-0">
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
                            <div class="col-lg-3 col-sm-6">
                                <div class="footer-item mb-0">
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
        <div class="footer-upper-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer-upper-bottom-item">
                            <router-link to="/" class="footer-logo"><img src="/images/logo/4-2.png" alt="Logo"></router-link>
                            <back-to-top class="position-static" bottom="50px" right="50px">
                                <button class="footer-scroll-top bg-transparent border-0">
                                    <i class="icofont-arrow-up"></i>
                                </button>
                            </back-to-top>
                            <div class="footer-social-link">
                                <ul>
                                    <li v-for="(social, index) in socials" :key="index">
                                        <a :href="social.link"><i v-bind:class="social.iconName"></i></a>
                                    </li>
                                </ul>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer Area End Here -->
</template>

<script>
export default {
  data () {
    return {
      footerBg: 'images/footers/bg/4-1-1920x803.png',
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
