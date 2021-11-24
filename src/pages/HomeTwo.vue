<template>
    <div class="wrapper">

        <router-view></router-view>

        <!-- HeaderNavTwo section -->
        <HeaderNavTwo></HeaderNavTwo>

        <!-- HeroSectionTwo section -->
        <HeroSectionTwo></HeroSectionTwo>

        <!-- PartnerSectionTwo section -->
        <PartnerSectionTwo></PartnerSectionTwo>

        <div class="main-content" data-bg-image="" :style="{backgroundImage: `url(${ mainBg })`}">

          <!-- VideoBannerTwo section -->
          <VideoBannerTwo></VideoBannerTwo>

          <!-- BannerThree section -->
          <BannerThree></BannerThree>

        </div>

        <div class="main-content">

          <!-- FeatureSectionTwo section -->
          <FeatureSectionTwo></FeatureSectionTwo>

          <!-- ScreenImage section -->
          <ScreenImage></ScreenImage>

        </div>

        <!-- BannerFour section -->
        <BannerFour></BannerFour>

        <!-- PricingPlanTwo section -->
        <PricingPlanTwo></PricingPlanTwo>

        <div class="main-content" data-bg-image="" :style="{backgroundImage: `url(${ mainBgTwo })`}">

          <!-- TestimonialTwo section -->
          <TestimonialTwo></TestimonialTwo>

          <!-- Newsletter Section -->
          <Newsletter></Newsletter>

        </div>

        <!-- Footer section -->
        <FooterSectionTwo></FooterSectionTwo>

    </div>
</template>

<script>
import HeaderNavTwo from '@/components/HeaderNavTwo.vue'
import HeroSectionTwo from '@/components/HeroSectionTwo.vue'
import PartnerSectionTwo from '@/components/PartnerSectionTwo.vue'
import VideoBannerTwo from '@/components/VideoBannerTwo.vue'
import BannerThree from '@/components/BannerThree.vue'
import FeatureSectionTwo from '@/components/FeatureSectionTwo.vue'
import ScreenImage from '@/components/ScreenImage.vue'
import BannerFour from '@/components/BannerFour.vue'
import PricingPlanTwo from '@/components/PricingPlanTwo.vue'
import TestimonialTwo from '@/components/TestimonialTwo.vue'
import Newsletter from '@/components/Newsletter.vue'
import FooterSectionTwo from '@/components/FooterSectionTwo.vue'

export default {
  components: {
    HeaderNavTwo,
    HeroSectionTwo,
    PartnerSectionTwo,
    VideoBannerTwo,
    BannerThree,
    FeatureSectionTwo,
    ScreenImage,
    BannerFour,
    PricingPlanTwo,
    TestimonialTwo,
    Newsletter,
    FooterSectionTwo
  },
  data () {
    return {
      mainBg: 'images/migrate/bg/1-1-1920x1757.png',
      mainBgTwo: 'images/migrate/bg/1-3-1920x1757.png'
    }
  }
}
</script>
