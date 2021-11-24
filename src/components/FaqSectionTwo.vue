<template>
    <!-- FAQ Area End Here -->
    <div class="faq-area faq-style-common faq-style-2">
        <div class="container">
            <div class="section-area">
                <h2 class="section-title">Question & Answer</h2>
                <p class="section-desc">That necessitates a robust ecommerce platform that optimizes your store & products</p>
            </div>

            <div class="row">
                <div v-for="(order, index) in paginatedOrders" :key="index" class="col-lg-6">
                    <div class="faq-item-wrap row">

                        <div v-for="(item, index) in order.items" :key="index" class="col-12">
                            <div class="faq-item">
                                <h3 class="faq-title">{{item.title}}</h3>
                                <p class="faq-desc">{{item.desc}}</p>
                                <p class="faq-desc">{{item.desc2}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="currentPage * maxPerPage < orders.length">
                <div class="col-12">
                    <div class="faq-btn-wrap">
                        <a class="btn btn-custom-size extbot-primary-5 blue-hover" @click="loadMore">Other’s Question</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          items: [
            {
              title: 'What is online banking?',
              desc: 'It is a long established fact that reader will be distracted by the readable content of a page when looking at it layout using normal distribution opposed.'
            }
          ]
        },
        {
          items: [
            {
              title: 'How can I instantly register?',
              desc: 'It is a long established fact that reader will be distracted by the readable content of a page when looking at it layout using normal distribution opposed.'
            }
          ]
        },
        {
          items: [
            {
              title: 'Why I choose online banking?',
              desc: 'It is a long established fact that reader will be distracted by the readable content of a page when looking at it layout using normal distribution opposed.'
            }
          ]
        },
        {
          items: [
            {
              title: 'Why I choose online banking?',
              desc: 'It is a long established fact that reader will be distracted by the readable content of a page when looking at it layout using normal distribution opposed.'
            }
          ]
        },
        {
          items: [
            {
              title: 'What if require further assistance?',
              desc: 'It the readable content of a page when looking at it layout using normal distribution opposed.'
            }
          ]
        },
        {
          items: [
            {
              title: 'Can I track my daily tasks?',
              desc: 'It the readable content of a page when looking at it layout using normal distribution opposed.'
            }
          ]
        },
        {
          items: [
            {
              title: 'What if require further assistance?',
              desc: 'It the readable content of a page when looking at it layout using normal distribution opposed.'
            }
          ]
        },
        {
          items: [
            {
              title: 'What if require further assistance?',
              desc: 'It the readable content of a page when looking at it layout using normal distribution opposed.'
            }
          ]
        },
        {
          items: [
            {
              title: 'Can I track my daily tasks?',
              desc: 'It the readable content of a page when looking at it layout using normal distribution opposed.'
            }
          ]
        },
        {
          items: [
            {
              title: 'Can I track my daily tasks?',
              desc: 'It the readable content of a page when looking at it layout using normal distribution opposed.'
            }
          ]
        }
      ],
      currentPage: 3,
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

<style>
</style>
