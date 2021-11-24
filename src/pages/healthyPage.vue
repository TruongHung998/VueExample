<template>
  <div class="wrapper">
    <router-view></router-view>
    <!-- Main Header Area End Here -->
    <MainHeader></MainHeader>
    <!-- Main Body Area End Here -->
    <healthy-screen></healthy-screen>
    <!-- Main Footer Area End Here -->
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from '@/components/headers/mainHeader'
import MainFooter from '@/components/footers/mainFooter'
import HealthyScreen from "@/screen/healthyScreen";

export default {
  components: {
    HealthyScreen,
    MainHeader,
    MainFooter
  }
}
</script>
