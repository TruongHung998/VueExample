<template>
    <div class="wrapper">

        <router-view></router-view>

        <!-- HeaderNav section -->
        <HeaderNav></HeaderNav>

        <!-- HeroSection section -->
        <HeroSection></HeroSection>

        <!-- FeatureSection section -->
        <FeatureSection></FeatureSection>

        <!-- PartnerSection section -->
        <PartnerSection></PartnerSection>

        <!-- BannerSection section -->
        <BannerSection></BannerSection>

        <!-- VideoBanner section -->
        <VideoBanner></VideoBanner>

        <!-- PricingPlan section -->
        <PricingPlan></PricingPlan>

        <!-- Testimonial section -->
        <Testimonial></Testimonial>

        <!-- Banner section -->
        <BannerTwo></BannerTwo>

        <!-- Footer section -->
        <FooterSection></FooterSection>

    </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeatureSection from '@/components/FeatureSection.vue'
import PartnerSection from '@/components/PartnerSection.vue'
import BannerSection from '@/components/BannerSection.vue'
import VideoBanner from '@/components/VideoBanner.vue'
import PricingPlan from '@/components/PricingPlan.vue'
import Testimonial from '@/components/Testimonial.vue'
import BannerTwo from '@/components/BannerTwo.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  components: {
    HeaderNav,
    HeroSection,
    FeatureSection,
    PartnerSection,
    BannerSection,
    VideoBanner,
    PricingPlan,
    Testimonial,
    BannerTwo,
    FooterSection
  }
}
</script>
