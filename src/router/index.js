import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import HomePage from '../pages/homePage'
import DownloadAppPage from '../pages/downloadAppPage'
import Consultants from '../pages/consultantsPage'
import Healthy from '../pages/healthyPage'
import Pharmacy from '../pages/pharmacyPage'
import Product from '../pages/productPage'
import Promotion from '../pages/promotionPage'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/download-app',
        name: 'DownloadApp',
        component: DownloadAppPage
    },
    {
        path: '/consultants',
        name: 'consultants',
        component: Consultants
    },
    {
        path: '/healthy',
        name: 'healthy',
        component: Healthy
    },
    {
        path: '/pharmacy',
        name: 'pharmacy',
        component: Pharmacy
    },
    {
        path: '/product',
        name: 'product',
        component: Product
    },
    {
        path: '/promotion',
        name: 'promotion',
        component: Promotion
    },
    // Template example
    {
        path: '/home-2',
        name: 'home-2',
        component: () => import('../pages/HomeTwo.vue')
    },
    {
        path: '/home-3',
        name: 'home-3',
        component: () => import('../pages/HomeThree.vue')
    },
    {
        path: '/home-4',
        name: 'home-4',
        component: () => import('../pages/HomeFour.vue')
    },
    {
        path: '/home-5',
        name: 'home-5',
        component: () => import('../pages/HomeFive.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('../pages/BlogGrid.vue')
    },
    {
        path: '/blog-list',
        name: 'blog-list',
        component: () => import('../pages/BlogList.vue')
    },
    {
        path: '/blog-detail/:id',
        name: 'blog-detail',
        component: () => import('../pages/BlogDetail.vue')
    },
    {
        path: '/faq',
        name: 'faq',
        component: () => import('../pages/Faq.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../pages/404.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../pages/contact.vue')
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach(function (to, from, next) {
    console.log(to)
    if (!!to.hash === false) {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 100)
    }
    // window.location.reload()
    next()
})
// router.beforeEach(function (to, from, next) {
//   if (!!to.hash === false) {
//     var myVar;
//     myVar = setTimeout(function(){
//       window.location.reload()
//     }, 3000);
//     // clearTimeout(myVar);
//   }
//   // window.location.reload()
//   next()
// })
// router.beforeEach(function (to, from, next) {
//   // console.log(next)
//   const newLink = to.path;
//   console.log(newLink)
//   if (!!to.hash === newLink) {
//     setTimeout(() => {
//       window.location.reload()
//     }, 0)
//     // var rld = setTimeout(window.location.reload, 5000);
//     // clearTimeout(rld);
//   }
//   next()

// })

// router.beforeEach(function (to, from, next) {
//   var foo = false;
//     if (foo){
//         window.location.reload(true);
//     }
//   next()
// })
export default router
