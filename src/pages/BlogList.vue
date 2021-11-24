<template>
    <div class="wrapper">

        <router-view></router-view>

        <!-- HeaderNavSix section -->
        <HeaderNavSix></HeaderNavSix>

        <div class="main-content">

            <!-- Breadcrumb section -->
            <Breadcrumb breadcrumbTitle="Blog Page" breadcrumbName="Blog List"></Breadcrumb>

            <div class="blog-area blog-listview blog-style-1">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8">

                            <!-- BlogListSection section -->
                            <BlogListSection></BlogListSection>

                        </div>

                        <div class="col-lg-4">

                            <!-- BlogSidebar section -->
                            <BlogSidebar></BlogSidebar>

                        </div>

                        <div class="col-12">
                            <div class="pagination-area">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true"><i class="icofont-long-arrow-right"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
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
import HeaderNavSix from '@/components/HeaderNavSix.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import BlogListSection from '@/components/BlogListSection.vue'
import BlogSidebar from '@/components/BlogSidebar.vue'
import NewsletterFour from '@/components/NewsletterFour.vue'
import FooterSectionFive from '@/components/FooterSectionFive.vue'
export default {
  components: {
    HeaderNavSix,
    Breadcrumb,
    BlogListSection,
    BlogSidebar,
    NewsletterFour,
    FooterSectionFive
  }
}
</script>
