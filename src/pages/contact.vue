<template>
    <div class="wrapper">

      <router-view></router-view>

        <!-- HeaderNavSix section -->
        <HeaderNavSix></HeaderNavSix>

        <div class="main-content">

            <!-- Breadcrumb section -->
            <Breadcrumb breadcrumbTitle="Contact Us" breadcrumbName="Contact Us"></Breadcrumb>

            <!-- Google Maps -->
            <GoogleMaps></GoogleMaps>

            <!-- ContactSection section -->
            <ContactSection></ContactSection>

        </div>

        <!-- Section -->
        <NewsletterFour newslatterFour="newsletter-area style-4 newsletter-space-y-axis"></NewsletterFour>

        <!-- Footer section -->
        <FooterSectionFive class="space-top-140"></FooterSectionFive>

    </div>
</template>

<script>
import HeaderNavSix from '@/components/HeaderNavSix.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import GoogleMaps from '@/components/GoogleMaps.vue'
import ContactSection from '@/components/ContactSection.vue'
import NewsletterFour from '@/components/NewsletterFour.vue'
import FaqSectionTwo from '@/components/FaqSectionTwo.vue'
import FooterSectionFive from '@/components/FooterSectionFive.vue'

export default {
  components: {
    HeaderNavSix,
    Breadcrumb,
    GoogleMaps,
    ContactSection,
    NewsletterFour,
    FaqSectionTwo,
    FooterSectionFive
  }
}
</script>