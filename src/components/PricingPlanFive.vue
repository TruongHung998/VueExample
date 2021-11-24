<template>
    <!-- Begin Pricing Area -->
    <div class="pricing-area pricing-style-5">
        <div class="container">
            <div class="section-area">
                <h2 class="section-title">Price & Planning</h2>
                <p class="section-desc">That necessitates a robust ecommerce platform that optimizes your store & products</p>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="pricing-tab">
                        <ul class="pricing-tab-nav">
                            <li class="nav-item">
                                <a href="#/" class="tab-btn" @click="showWhich = 'MonthlyFour'" :class="{active:showWhich == 'MonthlyFour'}">Monthly</a>
                            </li>
                            <li class="nav-item">
                                <a href="#/" class="tab-btn" @click="showWhich = 'YearlyFour'" :class="{active:showWhich == 'YearlyFour'}">Yearly</a>
                            </li>
                        </ul>
                    </div>
                    <div class="pricing-tab-content">
                        <div class="pricing-item-wrap row">
                            <component :is="showWhich"></component>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Pricing Area End Here -->
</template>
<script>
import MonthlyFour from '@/pricing/MonthlyFour.vue'
import YearlyFour from '@/pricing/YearlyFour.vue'

export default {
  components: {
    MonthlyFour,
    YearlyFour
  },
  data () {
    return {
      showWhich: 'YearlyFour'
    }
  }
}
</script>
