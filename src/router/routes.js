import Login from '@/pages/login'
import MainView from '@/layouts/MainView'
import RouteView from '@/layouts/RouteView'
import Dashboard from '@/pages/dashboard'
import statistics from '@/pages/statistics'
import datashow from '@/pages/dataShow'
import usercenter from '@/pages/usercenter'

/**
 * configurable parameters under the routing '/'
 * hidden: true                        if `hidden:true` will not show in the sidebar, default is false
 * name:'router-name'                  must set and globally unique
 * meta : {
    auths: ['super_admin','admin']     set multiple roles, default is null
    title: 'title'                     the name show in submenu and breadcrumb, must set
    icon: 'icon-name'                  the icon show in the sidebar, must set
    href: 'url'                        redirect url
  }
**/

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: '登陆' }
  },
  {
    path: '/',
    name: 'MainView',
    component: MainView,
    redirect: '/datashow',
    children: [
      {
        path: 'datashow',
        name: 'datashow',
        component: datashow,
        meta: { title: '数据总揽', icon: 'ios-speedometer-outline', auths: ['super_admin', 'admin'] }
      },
      // {
      //   path: 'UserPage',
      //   name: 'UserPage',
      //   component: usercenter,
      //   meta: { title: '基本信息', icon: 'md-person' },
      // },
      // {
      //   path: 'statistics',
      //   name: 'statistics',
      //   component: statistics,
      //   meta: { title: '数据统计', icon: 'logo-buffer', auths: ['super_admin', 'admin'] }
      // },
      // {
      //   path: 'Dashboard1',
      //   name: 'Dashboard1',
      //   component: Dashboard,
      //   meta: { title: '推广管理', icon: 'ios-speedometer-outline', auths: ['super_admin', 'admin'] }
      // },
      


      // {
      //   path: '/dashboard2',
      //   name: 'dashboard2',
      //   component: Dashboard,
      //   meta: { title: '报表管理', icon: 'ios-speedometer-outline', auths: ['super_admin', 'admin'] }
      // },

      // {
      //   path: '/ListPage',
      //   name: 'ListPage',
      //   component:  RouteView,
      //   meta: { title: '列表页', icon: 'md-grid' },
      //   children: [
      //     {
      //       path: '/QueryList',
      //       name: 'QueryList',
      //       component: resolve => require([`@/pages/list-page/query-list/index.vue`], resolve),
      //       meta: { title: '查询表格1', icon: 'md-list' }
      //     },
      //     {
      //       path: '/StandardList',
      //       name: 'StandardList',
      //       component:resolve =>  require([`@/pages/list-page/standard-list/index.vue`], resolve),
      //       meta: { title: '标准列表5', icon: 'md-podium' }
      //     },
      //   ]
      // }


      
    ]
  }
]

export default routes
