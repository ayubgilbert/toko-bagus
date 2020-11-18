
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Dashboard.vue') },
      { path: '/Favorite', component: () => import('pages/Favorite.vue') },
      { path: '/Laporan', component: () => import('pages/Laporan.vue') },
      { path: '/Inventory', component: () => import('pages/Inventory.vue') },
      { path: '/Bantuan', component: () => import('pages/Bantuan.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
