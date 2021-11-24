<template>
    <div class="wrapper">

      <router-view></router-view>

      <!-- HeaderNavFive section -->
      <HeaderNavFive></HeaderNavFive>

      <!-- HeroSectionFive section -->
      <HeroSectionFive></HeroSectionFive>

      <!-- BannerEight section -->
      <BannerEight></BannerEight>

      <!-- FeatureSectionFive section -->
      <FeatureSectionFive></FeatureSectionFive>

      <!-- TrialTwo section -->
      <TrialTwo></TrialTwo>

      <!-- BannerNine section -->
      <BannerNine></BannerNine>

      <!-- PartnerSectionFour section -->
      <PartnerSectionFour></PartnerSectionFour>

      <!-- PricingPlanFive section -->
      <PricingPlanFive></PricingPlanFive>

      <!-- TestimonialFive section -->
      <TestimonialFive></TestimonialFive>

      <!-- Section -->
      <NewsletterFour newslatterFour="newsletter-area style-4 newsletter-space-top-n140"></NewsletterFour>

      <!-- FaqSectionTwo section -->
      <FaqSectionTwo></FaqSectionTwo>

      <!-- Footer section -->
      <FooterSectionFive></FooterSectionFive>

    </div>
</template>

<script>
import HeaderNavFive from '@/components/HeaderNavFive.vue'
import HeroSectionFive from '@/components/HeroSectionFive.vue'
import BannerEight from '@/components/BannerEight.vue'
import FeatureSectionFive from '@/components/FeatureSectionFive.vue'
import TrialTwo from '@/components/TrialTwo.vue'
import BannerNine from '@/components/BannerNine.vue'
import PartnerSectionFour from '@/components/PartnerSectionFour.vue'
import PricingPlanFive from '@/components/PricingPlanFive.vue'
import TestimonialFive from '@/components/TestimonialFive.vue'
import NewsletterFour from '@/components/NewsletterFour.vue'
import FaqSectionTwo from '@/components/FaqSectionTwo.vue'
import FooterSectionFive from '@/components/FooterSectionFive.vue'

export default {
  components: {
    HeaderNavFive,
    HeroSectionFive,
    BannerEight,
    FeatureSectionFive,
    TrialTwo,
    BannerNine,
    PartnerSectionFour,
    PricingPlanFive,
    TestimonialFive,
    NewsletterFour,
    FaqSectionTwo,
    FooterSectionFive
  }
}
</script>
