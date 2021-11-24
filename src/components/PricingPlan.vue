<template>
    <!-- Begin Pricing Area -->
    <div class="pricing-area">
        <div class="container">

            <div class="section-area">
                <h2 class="section-title playfair-font">Choose Pricing</h2>
                <p class="section-desc">That necessitates a robust ecommerce platform that optimizes your store & products</p>
            </div>

            <div class="row mt-n30">
                <div v-for="(price, index) in pricing" :key="index" class="col-lg-4 col-md-6 mt-30">
                    <div :class="price.priceclass">
                        <div class="pricing-info">
                            <span class="price">{{price.value}}</span>
                            <span class="month">{{price.month}}</span>
                        </div>
                        <h2 class="pricing-title playfair-font">{{price.title}}</h2>
                        <p class="pricing-desc">{{price.description}}</p>
                        <ul class="pricing-list">
                            <li v-for="(pricelist, index) in price.priceoffer" :key="index">
                                <router-link to="/contact" :class="pricelist.class">
                                    {{pricelist.name}}
                                </router-link>
                            </li>
                        </ul>
                        <div class="pricing-btn-wrap">
                            <router-link class="btn btn-custom-size btn-outline" to="/contact">
                                {{price.button}}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- Pricing Area End Here -->
</template>

<script>
export default {
  data () {
    return {
      pricing: [
        {
          value: '$68',
          month: '/month',
          title: 'Basic Plan',
          description: 'That necessitat eEommerce platform popularised the the release',
          href: '/contact',
          button: 'Get Started',
          priceclass: 'pricing-item',
          priceoffer: [
            {
              name: 'Mobile-Optimized',
              href: '/contact'
            },
            {
              name: 'Free Custom Domain',
              href: '/contact'
            },
            {
              name: 'Best Hosting',
              href: '/contact'
            },
            {
              name: 'Outstanding Support',
              class: 'line-through',
              href: '/contact'
            },
            {
              name: 'Happy Customers',
              class: 'line-through',
              href: '/contact'
            }
          ]
        },
        {
          value: '$82',
          month: '/month',
          title: 'Standard Plan',
          description: 'That necessitat eEommerce platform popularised the the release',
          href: '/contact',
          button: 'Get Started',
          priceclass: 'pricing-item active',
          priceoffer: [
            {
              name: 'Mobile-Optimized',
              href: '/contact'
            },
            {
              name: 'Free Custom Domain',
              href: '/contact'
            },
            {
              name: 'Best Hosting',
              href: '/contact'
            },
            {
              name: 'Outstanding Support',
              href: '/contact'
            },
            {
              name: 'Happy Customers',
              class: 'line-through',
              href: '/contact'
            }
          ]
        },
        {
          value: '$92',
          month: '/month',
          title: 'Premium Plan',
          description: 'That necessitat eEommerce platform popularised the the release',
          href: '/contact',
          button: 'Get Started',
          priceclass: 'pricing-item',
          priceoffer: [
            {
              name: 'Mobile-Optimized',
              href: '/contact'
            },
            {
              name: 'Free Custom Domain',
              href: '/contact'
            },
            {
              name: 'Best Hosting',
              href: '/contact'
            },
            {
              name: 'Outstanding Support',
              href: '/contact'
            },
            {
              name: 'Happy Customers',
              href: '/contact'
            }
          ]
        }
      ]
    }
  }
}
</script>
