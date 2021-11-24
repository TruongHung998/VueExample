<template>
  <div class="wrapper">
    <router-view></router-view>
    <!-- Main Header Area End Here -->
    <MainHeader></MainHeader>
    <!-- Main Body Area End Here -->
    <DownloadAppPage></DownloadAppPage>
    <!-- Main Footer Area End Here -->
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from '@/components/headers/mainHeader'
import MainFooter from '@/components/footers/mainFooter'
import DownloadAppPage from '@/screen/downloadAppScreen'

export default {
  components: {
    MainHeader,
    MainFooter,
    DownloadAppPage
  }
}
</script>
