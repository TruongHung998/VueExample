<template>
    <div class="wrapper">

        <router-view></router-view>

        <!-- HeaderNavThree section -->
        <HeaderNavThree></HeaderNavThree>

        <!-- HeroSectionThree section -->
        <HeroSectionThree></HeroSectionThree>

        <!-- FeatureSectionThree section -->
        <FeatureSectionThree></FeatureSectionThree>

        <div class="main-content" data-bg-image="" :style="{backgroundImage: `url(${ videoBannerBg })`}">

          <!-- Begin Banner Area -->
          <div class="banner-area banner-style-6">
              <div class="container">
                  <div class="row">
                      <div class="banner-item">

                        <!-- VideoBannerThree section -->
                        <VideoBannerThree></VideoBannerThree>

                        <!-- BannerSix section -->
                        <BannerSix></BannerSix>

                      </div>
                  </div>
              </div>
          </div>
          <!-- Banner Area End Here -->

        </div>

        <!-- BannerFive section -->
        <BannerFive></BannerFive>

        <!-- PartnerSectionThree section -->
        <PartnerSectionThree styleClass="partner-style-3" swiperStyleClass="style-2"></PartnerSectionThree>

        <!-- TestimonialThree section -->
        <TestimonialThree></TestimonialThree>

        <!-- PricingPlanThree section -->
        <PricingPlanThree></PricingPlanThree>

        <!-- NewsletterTwo Section -->
        <NewsletterTwo></NewsletterTwo>

        <!-- Footer section -->
        <FooterSectionThree></FooterSectionThree>

    </div>
</template>

<script>
import HeaderNavThree from '@/components/HeaderNavThree.vue'
import HeroSectionThree from '@/components/HeroSectionThree.vue'
import PartnerSectionThree from '@/components/PartnerSectionThree.vue'
import VideoBannerThree from '@/components/VideoBannerThree.vue'
import FeatureSectionThree from '@/components/FeatureSectionThree.vue'
import BannerSix from '@/components/BannerSix.vue'
import BannerFive from '@/components/BannerFive.vue'
import PricingPlanThree from '@/components/PricingPlanThree.vue'
import TestimonialThree from '@/components/TestimonialThree.vue'
import NewsletterTwo from '@/components/NewsletterTwo.vue'
import FooterSectionThree from '@/components/FooterSectionThree.vue'

export default {
  components: {
    HeaderNavThree,
    HeroSectionThree,
    PartnerSectionThree,
    VideoBannerThree,
    FeatureSectionThree,
    BannerSix,
    BannerFive,
    PricingPlanThree,
    TestimonialThree,
    NewsletterTwo,
    FooterSectionThree
  },
  data () {
    return {
      videoBannerBg: 'images/migrate/bg/1-4-1920x1408.png'
    }
  }
}
</script>
