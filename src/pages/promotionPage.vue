<template>
  <div class="wrapper">
    <router-view></router-view>
    <!-- Main Header Area End Here -->
    <MainHeader></MainHeader>
    <!-- Main Body Area End Here -->
    <promotion-screen></promotion-screen>
    <!-- Main Footer Area End Here -->
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from '@/components/headers/mainHeader'
import MainFooter from '@/components/footers/mainFooter'
import PromotionScreen from "@/screen/promotionScreen";

export default {
  components: {
    PromotionScreen,
    MainHeader,
    MainFooter
  }
}
</script>
