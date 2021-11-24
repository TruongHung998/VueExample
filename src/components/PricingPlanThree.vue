<template>
    <!-- Begin Pricing Area -->
    <div class="pricing-area pricing-style-3">
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
                                <a href="#/" class="tab-btn" @click="showWhich = 'MonthlyTwo'" :class="{active:showWhich == 'MonthlyTwo'}">Monthly</a>
                            </li>
                            <li class="nav-item">
                                <a href="#/" class="tab-btn" @click="showWhich = 'YearlyTwo'" :class="{active:showWhich == 'YearlyTwo'}">Yearly</a>
                            </li>
                        </ul>
                    </div>
                    <div class="pricing-tab-content">
                        <div class="pricing-item-wrap row mt-n30">
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
import MonthlyTwo from '@/pricing/MonthlyTwo.vue'
import YearlyTwo from '@/pricing/YearlyTwo.vue'

export default {
  components: {
    MonthlyTwo,
    YearlyTwo
  },
  data () {
    return {
      showWhich: 'YearlyTwo'
    }
  }
}
</script>
