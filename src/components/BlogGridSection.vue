<template>
    <div class="blog-item-wrap row">
        <div class="col-md-6" v-for="(bloggrid, index) in blogs.blogs" :key="index">
            <div class="blog-item">
                <router-link :to="`/blog-detail/${bloggrid.id}`" class="blog-img">
                    <img :src="`${bloggrid.blogImage}`" :alt="bloggrid.alt">
                </router-link>
                <div class="blog-content">
                    <span class="blog-category"><span>{{bloggrid.by}}</span> {{bloggrid.catname}}</span>
                    <h2 class="blog-title">
                        <router-link :to="`/blog-detail/${bloggrid.id}`">{{bloggrid.title}}</router-link>
                    </h2>
                    <p class="blog-desc">{{bloggrid.desc}}</p>
                    <ul class="blog-meta">
                        <li>
                            <span class="date">{{bloggrid.date}}</span>
                            <span class="time">{{bloggrid.time}}</span>
                        </li>
                    </ul>
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
      blogs
    }
  }
}
</script>
