
const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
  }
/*
  ,
  {
    path: '/address',
    component: () => import('pages/adress.vue')
  },
  {
    path: '/phone',
    component: () => import('pages/phone.vue')
  }
  */
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
