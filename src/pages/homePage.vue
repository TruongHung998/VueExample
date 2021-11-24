<template>
  <div class="wrapper">
    <router-view></router-view>
    <!-- Main Header Area End Here -->
    <MainHeader></MainHeader>
    <!-- Main Body Area End Here -->
    <HomePageScreen></HomePageScreen>
    <!-- Main Footer Area End Here -->
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from '@/components/headers/mainHeader'
import MainFooter from '@/components/footers/mainFooter'
import HomePageScreen from "@/screen/homePageScreen";

export default {
  components: {
    HomePageScreen,
    MainHeader,
    MainFooter
  }
}
</script>
