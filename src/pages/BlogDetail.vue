<template>
    <div class="wrapper">

        <router-view></router-view>

        <!-- HeaderNavSix section -->
        <HeaderNavSix></HeaderNavSix>

        <div class="main-content">

            <!-- Breadcrumb section -->
            <Breadcrumb breadcrumbTitle="Blog Detail" breadcrumbName="Blog Detail"></Breadcrumb>

            <!-- SingleBlog section -->
            <SingleBlog></SingleBlog>
            
            <!-- BlogSlider section -->
            <!-- <BlogSlider></BlogSlider> -->

            <div class="form-area">
              <div class="container">
                  <div class="form-wrap">
                      <div class="row">
                          <div class="col-12">
                              <h2 class="form-title">Leave a comment</h2>

                              <Disqus shortname='Admin' />

                          </div>
                      </div>
                  </div>
              </div>
            </div>

        </div>

        <div class="newsletter-area style-4 newsletter-space-y-axis">
            <!-- NewsletterFour Section -->
            <NewsletterFour newslatterFour="newsletter-area style-4"></NewsletterFour>
        </div>

        <!-- Footer section -->
        <FooterSectionFive></FooterSectionFive>

    </div>
</template>

<script>

// import BlogSlider from '@/components/BlogSlider.vue'
import HeaderNavSix from '@/components/HeaderNavSix.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import SingleBlog from '@/components/SingleBlog.vue'
import NewsletterFour from '@/components/NewsletterFour.vue'
import FooterSectionFive from '@/components/FooterSectionFive.vue'
import { Disqus } from 'vue-disqus'
export default {
  components: {
    HeaderNavSix,
    Breadcrumb,
    SingleBlog,
    NewsletterFour,
    FooterSectionFive,
    Disqus
  },
  
}

</script>