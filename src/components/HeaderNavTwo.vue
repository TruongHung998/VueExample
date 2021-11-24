<template>
    <!-- Begin Main Header Area -->
    <header class="header">
        <div class="header-area header-position-absolute header-sticky header-style-2" :class="{'is-active': isSticky}">
            <div class="container header-container">
                <div class="row align-items-center">
                    <div class="col-xl-3 col-lg-2 col-6">
                        <router-link class="header-logo" to="/home-2">
                            <img class="primary-img" src="images/logo/2-1.png" alt="Header Logo">
                            <img class="sticky-img" src="images/logo/2-2.png" alt="Header Logo">
                        </router-link>
                    </div>
                    <div class="col-xl-9 col-lg-10 col-6">
                        <div class="header-with-btn">
                            <div class="header-menu d-none d-lg-block">
                                <nav class="header-menu-nav onepage-nav">
                                    <ul>
                                        <li class="header-drop-holder">
                                            <router-link to="/">Home</router-link>
                                            <ul class="header-drop-menu">
                                                <li>
                                                    <router-link to="/">Home 01</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-2">Home 02</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-3">Home 03</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-4">Home 04</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/home-5">Home 05</router-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="active">
                                            <a href="#feature">Features</a>
                                        </li>
                                        <li>
                                            <a href="#testimonial">Testimonial</a>
                                        </li>
                                        <li class="header-drop-holder">
                                            <router-link to="/blog">Blog</router-link>
                                            <ul class="header-drop-menu">
                                                <li>
                                                    <router-link to="/blog">Blog Grid View</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/blog-list">Blog List View</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/blog-detail/1">Blog Detail</router-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <router-link to="/contact">Contact</router-link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <ul class="header-right">
                                <li class="d-none d-md-block">
                                    <router-link class="btn btn-custom-size btn-md paua-color blackcurrant-hover" to="/contact">Sign In <i class="icofont-double-right"></i></router-link>
                                </li>
                                <li class="d-flex d-lg-none">
                                    <button class="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                        <i class="icofont-navigation-menu"></i>
                                    </button>
                                </li>
                                <li class="setting-btn-wrap d-block d-md-none">
                                    <button class="setting-btn bg-transparent" v-on:click="isHidden = !isHidden">
                                        <i class="icofont-ui-settings"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="setting-body" v-if="isHidden">
                            <ul class="header-right setting-item">
                                <li>
                                    <router-link class="btn btn-custom-size btn-md paua-color blackcurrant-hover" to="/contact">Sign In
                                        <i class="icofont-double-right"></i>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions">
            <div class="offcanvas-header">
                <router-link to="/home-2" class="header-logo">
                    <img src="images/logo/1-1.png" alt="Header Logo">
                </router-link>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="header-offcanvas-menu">
                    <nav class="header-offcanvas-nav onepage-offcanvas-nav">
                        <ul>
                            <li>
                                <div class="dropdown d-grid">
                                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Home
                                        <i class="icofont-rounded-down"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <router-link class="dropdown-item" to="/">Home 01</router-link>
                                        </li>
                                        <li>
                                            <router-link class="dropdown-item" to="/home-2">Home 02</router-link>
                                        </li>
                                        <li>
                                            <router-link class="dropdown-item" to="/home-3">Home 03</router-link>
                                        </li>
                                        <li>
                                            <router-link class="dropdown-item" to="/home-4">Home 04</router-link>
                                        </li>
                                        <li>
                                            <router-link class="dropdown-item" to="/home-5">Home 05</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="active">
                                <a href="#feature">Features</a>
                            </li>
                            <li>
                                <a href="#testimonial">Testimonial</a>
                            </li>
                            <li>
                                <div class="dropdown d-grid">
                                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Blog
                                        <i class="icofont-rounded-down"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/blog">Blog Grid View</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-list">Blog List View</router-link>
                                            </li>
                                        <li>
                                            <router-link class="dropdown-item" to="/blog-detail/1">Blog Detail</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <router-link to="/contact">Contact</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Header Area End Here -->
</template>
<script>
export default {
  data () {
    return {
      isSticky: false,
      isHidden: false
    }
  },
  mounted () {
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
.header{
    &.fixed-top {
        z-index: 99;
    }
}
.header-toggler {
    background: transparent;
    border: 0px;
    color: #fff;
    font-size: 26px;
    &:hover {
        color: #6e5a49;
    }
}
</style>
