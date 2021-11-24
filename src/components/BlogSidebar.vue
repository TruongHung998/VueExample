<template>
    <div class="sidebar-area sidebar-style-1">
        <div class="sidebar-item">
            <h2 class="sidebar-title">Search Here</h2>
            <div class="sidebar-searchbox">
                <form class="sidebar-searchbox">
                    <input class="input-field" type="text" placeholder="Search here">
                    <button class="sidebar-searchbox-btn">
                        <span class="search-icon-wrap"></span>
                    </button>
                </form>
            </div>
        </div>
        <div class="sidebar-item sidebar-post">
            <h2 class="sidebar-title">Archive Post</h2>
            <div class="post-list-slider mt-n30">
                <div v-for="(bloggrid, index) in blogs.blogs.slice(0, 5)" :key="index" class="post-list-item mt-30">
                    <router-link :to="`/blog-detail/${bloggrid.id}`" class="post-list-img">
                        <img :src="`${bloggrid.blogImage}`" :alt="bloggrid.alt">
                    </router-link>
                    <div class="post-list-content">
                        <h2 class="title">
                            <router-link :to="`/blog-detail/${bloggrid.id}`">
                                {{bloggrid.title}}
                            </router-link>
                        </h2>
                        <ul class="meta">
                            <li>
                                <span class="date"><i class="icofont-ui-calendar"></i>{{bloggrid.date}}</span>
                                <span class="time">{{bloggrid.time}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-item sidebar-social">
            <h2 class="sidebar-title">Follow Us</h2>
            <ul class="social-list">
                <li v-for="(social, index) in socials" :key="index">
                    <a class="social-icon" :href="social.href">
                        <i :class="social.iconClass"></i>
                        {{social.name}}
                    </a>
                    <span class="social-activity">{{social.activity}}</span>
                </li>
            </ul>
        </div>
        <div class="sidebar-banner">
            <div class="sidebar-img">
                <img src="images/sidebar/banner/1-1-300x500.png" alt="Banner">
                <div class="inner-content">
                    <h2 class="title">
                        <span>Contact for</span>
                        <router-link to="/contact">Advertisment</router-link>
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import blogs from '../data/blog.json'
export default {
  data () {
    return {
      blogs,
      socials: [
        {
          href: 'https://www.facebook.com',
          name: 'Facebook',
          iconClass: 'icofont-facebook',
          activity: '7,649+'
        },
        {
          href: 'https://www.twitter.com',
          name: 'Twitter',
          iconClass: 'icofont-twitter',
          activity: 'Follow'
        },
        {
          href: 'https://www.instagram.com',
          name: 'Instagram',
          iconClass: 'icofont-instagram',
          activity: '8,968+'
        },
        {
          href: 'https://www.youtube.com',
          name: 'YouTube',
          iconClass: 'icofont-youtube',
          activity: '5,679k+'
        }
      ]
    }
  }
}
</script>
