<template>
  <!-- Begin Main Header Area -->
  <header class="header">
    <div class="header-area header-position-absolute header-sticky header-style-1 main-header">
      <div class="container header-container">
        <div class="row align-items-center row-search">
          <div class="col-2 align-items-center justify-content-center">
            <router-link class="header-logo" to="/homePage">
              <img src="images/logo/ecoGreenLogo.png" alt="Header Logo">
            </router-link>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-10">
                <div class="home-page-searchbox">
                  <button class="home-page-searchbox-btn">
                    <i class="icofont-search" style="font-size: 20px"></i>
                  </button>
                  <input class="input-field" type="text" placeholder="Tìm kiếm">
                </div>
              </div>
              <div class="col-2">
                <button class="home-page-listbutton" v-on:click="isHidden = !isHidden">
                  <i class="icofont-navigation-menu"
                     style="margin-right: 0.5vw;font-size: 12px"/>
                  <span style="font-size: 12px">Danh mục</span>
                </button>
              </div>
            </div>
            <button class="header-top-search" v-for="i, j in topSearch">
              <span style="font-size: 10px">{{ i.name }}</span>
            </button>
          </div>
          <div class="col-4 h-100">
            <div class="d-flex w-100 h-75 justify-content-around align-items-center">
              <button class="header-left-text">
                <i class="icofont-ui-chat"/>
                <span>Giúp đỡ</span>
              </button>
              <button class="header-left-text">
                <i class="icofont-pencil-alt-2"/>
                <span>Đăng ký</span>
              </button>
              <button class="header-left-text">
                <i class="icofont-user"/>
                <span>Đăng nhập</span>
              </button>
              <div>
                <i class="icofont-cart-alt" style="font-size: 30px;color: #7382C1"/>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex align-self-center sub-header align-items-center justify-content-center">
          <router-link v-for="i, j in navigationList" class="header-logo" :to="i.slug">
            <button class="sub-header-button"
                    :class="{'is-Active': j === navigationIndex}" v-on:click="navigationIndex=j">
              <span>{{ i.name }}</span>
              <div class="line-navigation" v-if="j === navigationIndex"/>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Header Area End Here -->
</template>
<script>
export default {

  data() {
    return {
      isSticky: false,
      isHidden: false,
      navigationIndex: 0,
      topSearch: [{name: 'Ưu đãi đang chạy'}, {name: 'JEX'}, {name: 'Alipas'}, {name: 'Hewel'}],
      navigationList: [
        {
          name: "Trang chủ",
          slug: '/'
        },
        {
          name: "Sản phẩm",
          slug: '/product'
        },
        {
          name: "Khuyến mãi",
          slug: '/promotion'
        },
        {
          name: "Chuyên gia tư vấn",
          slug: '/consultants'
        },
        {
          name: "Sống khoẻ",
          slug: '/healthy'
        },
        {
          name: "Nhà thuốc",
          slug: '/pharmacy'
        },
        {
          name: "Tải App",
          slug: '/download-app'
        }
      ]
    }
  },

  mounted() {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY
      if (scrollPos >= 200) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    })
  }
}

</script>

<style lang="scss">
.header {
  &.fixed-top {
    z-index: 99;
  }
}
</style>

<style lang="scss" scoped>
@import "header";
</style>
