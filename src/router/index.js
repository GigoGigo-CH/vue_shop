import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

  const routes = [
  
]

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/Login' },
    {path: '/login',component: Login },
    {path: '/home',component: Home }
  ]
})

//挂在路由导航守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从何跳转而来
  //next 是一个函数，表示放行
  //next() 放行 next('/derect') 强制跳转至derect

  if(to.path === '/login') return next()
  //若为带权限页，获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()

})


export default router
