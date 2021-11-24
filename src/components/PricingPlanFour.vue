<template>
    <!-- Begin Pricing Area -->
    <div class="pricing-area pricing-style-4">
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
                                <a href="#/" class="tab-btn" @click="showWhich = 'MonthlyThree'" :class="{active:showWhich == 'MonthlyThree'}">Monthly</a>
                            </li>
                            <li class="nav-item">
                                <a href="#/" class="tab-btn" @click="showWhich = 'YearlyThree'" :class="{active:showWhich == 'YearlyThree'}">Yearly</a>
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
import MonthlyThree from '@/pricing/MonthlyThree.vue'
import YearlyThree from '@/pricing/YearlyThree.vue'

export default {
  components: {
    MonthlyThree,
    YearlyThree
  },
  data () {
    return {
      showWhich: 'YearlyThree'
    }
  }
}
</script>
