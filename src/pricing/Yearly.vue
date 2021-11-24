<template>
    <div v-for="(price, index) in pricing" :key="index" class="col-lg-6 mt-30">
        <div class="pricing-item mb-0">
            <div class="pricing-wrap">
                <div class="pricing-info">
                    <span class="price">{{price.value}}</span>
                    <span class="month">{{price.month}}</span>
                </div>
                <div class="title-with-desc">
                    <h2 class="pricing-title">{{price.title}}</h2>
                    <p class="pricing-desc">{{price.description}}</p>
                </div>
            </div>
            <div class="pricing-list-wrap">
                <ul class="pricing-list style-2">
                    <li v-for="(list, index) in price.lists" :key="index">
                        <router-link to="/contact"><i class="icofont-check-circled"></i>{{list.text}}</router-link>
                    </li>
                </ul>
                <div class="pricing-btn-wrap">
                    <router-link class="btn btn-custom-size btn-outline btn-lg" to="/contact">
                        Get Started
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
          value: '$80',
          month: '/year',
          title: 'Basic Plan',
          description: 'That necessitat ecommerce popularised the the release',
          lists: [
            {
              text: ' It has survived not only five centuries'
            },
            {
              text: ' Electronic typesetting, remaining'
            },
            {
              text: ' It has survived not only five centuries'
            },
            {
              text: ' Electronic typesetting, remaining'
            },
            {
              text: ' Popularised inner the 1960s the release'
            }
          ]
        },
        {
          value: '$98',
          month: '/year',
          title: 'Standard Plan',
          description: 'That necessitat ecommerce popularised the the release',
          lists: [
            {
              text: ' It has survived not only five centuries'
            },
            {
              text: ' Electronic typesetting, remaining'
            },
            {
              text: ' Popularised inner the 1960s the release'
            },
            {
              text: ' It has survived not only five centuries'
            },
            {
              text: ' Electronic typesetting, remaining'
            }
          ]
        }

      ]
    }
  }
}
</script>
