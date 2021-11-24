<template>
  <div class="wrapper">
    <router-view></router-view>
    <!-- Main Header Area End Here -->
    <MainHeader></MainHeader>
    <!-- Main Body Area End Here -->
    <consultants-screen></consultants-screen>
    <!-- Main Footer Area End Here -->
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from '@/components/headers/mainHeader'
import MainFooter from '@/components/footers/mainFooter'
import ConsultantsScreen from "@/screen/consultantsScreen";

export default {
  components: {
    ConsultantsScreen,
    MainHeader,
    MainFooter
  }
}
</script>
