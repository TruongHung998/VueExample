<template>
    <div class="wrapper">

      <router-view></router-view>

        <!-- HeaderNavSix section -->
        <HeaderNavSix></HeaderNavSix>

        <div class="main-content">

            <!-- Breadcrumb section -->
            <Breadcrumb breadcrumbTitle="FAQ Page" breadcrumbName="FAQ"></Breadcrumb>

        </div>

        <!-- FaqSectionTwo section -->
        <FaqSectionTwo></FaqSectionTwo>

        <!-- Section -->
        <NewsletterFour newslatterFour="newsletter-area style-4 newsletter-space-y-axis newsletter-space-top-n140"></NewsletterFour>

        <!-- Footer section -->
        <FooterSectionFive class="space-top-140"></FooterSectionFive>

    </div>
</template>

<script>
import HeaderNavSix from '@/components/HeaderNavSix.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import NewsletterFour from '@/components/NewsletterFour.vue'
import FaqSectionTwo from '@/components/FaqSectionTwo.vue'
import FooterSectionFive from '@/components/FooterSectionFive.vue'

export default {
  components: {
    HeaderNavSix,
    Breadcrumb,
    NewsletterFour,
    FaqSectionTwo,
    FooterSectionFive
  }
}
</script>
