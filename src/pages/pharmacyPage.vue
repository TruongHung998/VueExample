<template>
  <div class="wrapper">
    <router-view></router-view>
    <!-- Main Header Area End Here -->
    <MainHeader></MainHeader>
    <!-- Main Body Area End Here -->
    <pharmacy-screen></pharmacy-screen>
    <!-- Main Footer Area End Here -->
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from '@/components/headers/mainHeader'
import MainFooter from '@/components/footers/mainFooter'
import PharmacyScreen from "@/screen/pharmacyScreen";

export default {
  components: {
    PharmacyScreen,
    MainHeader,
    MainFooter
  }
}
</script>
