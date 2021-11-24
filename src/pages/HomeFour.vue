<template>
    <div class="wrapper">

      <router-view></router-view>

      <!-- HeaderNavFour section -->
      <HeaderNavFour></HeaderNavFour>

      <!-- HeroSectionFour section -->
      <HeroSectionFour></HeroSectionFour>

      <!-- PartnerSectionThree section -->
      <PartnerSectionThree styleClass="partner-style-4" swiperStyleClass="style-3"></PartnerSectionThree>

      <!-- FeatureSectionFour section -->
      <FeatureSectionFour></FeatureSectionFour>

      <!-- TrialOne section -->
      <TrialOne></TrialOne>

      <!-- BannerSeven section -->
      <BannerSeven></BannerSeven>

      <!-- VideoBannerFour section -->
      <VideoBannerFour></VideoBannerFour>

      <!-- FaqSection section -->
      <FaqSection></FaqSection>

      <!-- TestimonialFour section -->
      <TestimonialFour></TestimonialFour>

      <!-- PricingPlanFour section -->
      <PricingPlanFour></PricingPlanFour>

      <!-- NewsletterThree Section -->
      <NewsletterThree></NewsletterThree>

      <!-- Footer section -->
      <FooterSectionFour></FooterSectionFour>

    </div>
</template>

<script>
import HeaderNavFour from '@/components/HeaderNavFour.vue'
import HeroSectionFour from '@/components/HeroSectionFour.vue'
import PartnerSectionThree from '@/components/PartnerSectionThree.vue'
import FeatureSectionFour from '@/components/FeatureSectionFour.vue'
import TrialOne from '@/components/TrialOne.vue'
import BannerSeven from '@/components/BannerSeven.vue'
import VideoBannerFour from '@/components/VideoBannerFour.vue'
import FaqSection from '@/components/FaqSection.vue'
import PricingPlanFour from '@/components/PricingPlanFour.vue'
import TestimonialFour from '@/components/TestimonialFour.vue'
import NewsletterThree from '@/components/NewsletterThree.vue'
import FooterSectionFour from '@/components/FooterSectionFour.vue'

export default {
  components: {
    HeaderNavFour,
    HeroSectionFour,
    PartnerSectionThree,
    FeatureSectionFour,
    TrialOne,
    BannerSeven,
    VideoBannerFour,
    FaqSection,
    PricingPlanFour,
    TestimonialFour,
    NewsletterThree,
    FooterSectionFour
  }
}
</script>
