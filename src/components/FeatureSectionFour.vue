<template>

    <!-- Begin Feature Area -->
    <div id="feature" class="feature-area feature-style-4">
        <div class="container feature-container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="feature-img">
                        <div class="single-img">
                            <img src="images/feature/image/1-1-647x892.png" alt="Feature Image">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="feature-list-content">
                        <h2 class="feature-title">Advance Features</h2>
                        <p class="feature-desc">That necessitates a robust ecommerce platform that optimizes your store & products</p>
                        <div class="feature-wrap">

                            <div  v-for="(item, index) in items" :key="index" class="feature-item">

                                <div class="feature-icon">
                                    <img :src="`${item.imgSrc}`" :alt="item.alt">
                                </div>
                                <div class="feature-content">
                                    <h3 class="title">{{ item.title }}</h3>
                                    <p class="desc">{{ item.description}}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Feature Area End -->

</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          imgSrc: 'images/feature/icon/3-1-47x47.png',
          alt: 'Feature Icon',
          title: 'Best Performance',
          description: 'That necessitat ecommerce platform optimi your store problem.'
        },
        {
          imgSrc: 'images/feature/icon/3-2-47x47.png',
          alt: 'Feature Icon',
          title: 'Easy Setting',
          description: 'That necessitat ecommerce platform optimi your store problem.'
        },
        {
          imgSrc: 'images/feature/icon/3-3-46x51.png',
          alt: 'Feature Icon',
          title: 'Free Update',
          description: 'That necessitat ecommerce platform optimi your store problem.'
        }
      ]
    }
  }

}

</script>
