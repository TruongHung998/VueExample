<template>
    <div v-for="(price, index) in pricing" :key="index" class="col-lg-4 col-md-6 mt-30">
        <div class="pricing-item mb-0">
            <div class="pricing-wrap">
                <div class="title-with-desc">
                    <h2 class="pricing-title">{{price.title}}</h2>
                </div>
                <div class="pricing-info">
                    <span class="price">{{price.value}}</span>
                    <span class="month">{{price.month}}</span>
                </div>
            </div>
            <div class="pricing-list-wrap">
                <ul class="pricing-list style-2">
                    <li v-for="(list, index) in price.lists" :key="index">
                        <router-link to="/contact">{{list.text}}</router-link>
                    </li>
                </ul>
                <div class="pricing-btn-wrap">
                    <router-link class="btn btn-custom-size btn-outline btn-lg" to="/contact"> Get Started
                        <i class="icofont-double-right"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      pricing: [
        {
          value: '$68',
          month: '/year',
          title: 'Basic Plan',
          lists: [
            {
              text: ' Mobile-Optimized'
            },
            {
              text: ' Free Custom Domain'
            },
            {
              text: ' Best Hosting'
            }
          ]
        },
        {
          value: '$70',
          month: '/year',
          title: 'Advance Plan',
          lists: [
            {
              text: ' Mobile-Optimized'
            },
            {
              text: ' Free Custom Domain'
            },
            {
              text: ' Best Hosting'
            }
          ]
        },
        {
          value: '$72',
          month: '/year',
          title: 'Premium Plan',
          lists: [
            {
              text: ' Mobile-Optimized'
            },
            {
              text: ' Free Custom Domain'
            },
            {
              text: ' Best Hosting'
            }
          ]
        }

      ]
    }
  }
}
</script>
