<template>
    <!-- Begin Feature Area -->
    <div id="feature" class="feature-area feature-style-3">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-area">
                        <h2 class="section-title">Advance Features</h2>
                        <p class="section-desc">That necessitates a robust ecommerce platform that
                            optimizes your store & products
                        </p>
                    </div>
                    <!-- <div class="swiper-container feature-slider-2">
                        <div class="swiper-wrapper">
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="row feature-slider-2 mt-n30">
                <div v-for="(order, index) in paginatedOrders" :key="index" class="col-lg-6 mt-30">
                    <div class="feature-item">
                        <div class="feature-icon">
                            <img :src="order.featureImage" alt="Feature Icon">
                        </div>
                        <div class="feature-content">
                            <h3 class="title">{{order.title}}</h3>
                            <p class="desc">{{order.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="currentPage * maxPerPage < orders.length">
                <div class="col-12">
                    <div class="feature-btn-wrap">
                        <button class="btn btn-custom-size extbot-primary-3" @click="loadMore">Other Features</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Features Area End Here -->

</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          featureImage: 'images/feature/icon/2-1-47x47.png',
          title: 'Best Performance',
          description: 'That necessitat ecommerce platform optimi your store problem popularise the release roboust.'
        },
        {
          featureImage: 'images/feature/icon/2-2-47x47.png',
          title: 'Easy Setting',
          description: 'That necessitat ecommerce platform optimi your store problem popularise the release roboust.'
        },
        {
          featureImage: 'images/feature/icon/2-3-47x47.png',
          title: 'Free Update',
          description: 'That necessitat ecommerce platform optimi your store problem popularise the release roboust.'
        },
        {
          featureImage: 'images/feature/icon/2-1-47x47.png',
          title: 'User Friendly',
          description: 'That necessitat ecommerce platform optimi your store problem popularise the release roboust.'
        },
        {
          featureImage: 'images/feature/icon/2-3-47x47.png',
          title: 'Easy to Use',
          description: 'That necessitat ecommerce platform optimi your store problem popularise the release roboust.'
        },
        {
          featureImage: 'images/feature/icon/2-1-47x47.png',
          title: 'Free Update',
          description: 'That necessitat ecommerce platform optimi your store problem popularise the release roboust.'
        },
        {
          featureImage: 'images/feature/icon/2-1-47x47.png',
          title: 'User Friendly',
          description: 'That necessitat ecommerce platform optimi your store problem popularise the release roboust.'
        },
        {
          featureImage: 'images/feature/icon/2-3-47x47.png',
          title: 'Easy to Use',
          description: 'That necessitat ecommerce platform optimi your store problem popularise the release roboust.'
        }
      ],
      currentPage: 2,
      maxPerPage: 2,
      showReadMore: true
    }
  },
  computed: {
    totalResults () {
      return Object.keys(this.orders).length
    },
    pageCount () {
      return Math.ceil(this.totalResults / this.maxPerPage)
    },
    pageOffest () {
      return this.maxPerPage * this.currentPage
    },
    paginatedOrders () {
      return this.orders.slice(0, this.currentPage * this.maxPerPage)
    }
  },
  methods: {
    loadMore () {
      this.currentPage += 1
    }
  }
}
</script>
