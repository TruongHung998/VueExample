<template>
    <!-- Begin Pricing Area -->
    <div class="pricing-area pricing-style-2">
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
                                <a href="#/" class="tab-btn" @click="showWhich = 'Monthly'" :class="{active:showWhich == 'Monthly'}">Monthly</a>
                            </li>
                            <li class="nav-item">
                                <a href="#/" class="tab-btn" @click="showWhich = 'Yearly'" :class="{active:showWhich == 'Yearly'}">Yearly</a>
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
import Monthly from '@/pricing/Monthly.vue'
import Yearly from '@/pricing/Yearly.vue'

export default {
  components: {
    Monthly,
    Yearly
  },
  data () {
    return {
      showWhich: 'Yearly'
    }
  }
}
</script>
