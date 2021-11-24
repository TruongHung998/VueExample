<template>
    <div class="breadcrumb-area breadcrumb-height" data-bg-image="" :style="{backgroundImage: `url(${ introBg })`}">
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-lg-12">
                    <div class="breadcrumb-item">
                        <h1 class="breadcrumb-title">{{breadcrumbTitle}}</h1>
                        <ul class="breadcrumb-list">
                            <li>
                                <router-link to="/">Home</router-link>
                            </li>
                            <li>
                                <span>{{breadcrumbName}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['breadcrumbName', 'breadcrumbTitle'],
  data () {
    return {
      introBg: '/images/breadcrumb/bg/1-1920x450.png'
    }
  }
}
</script>
