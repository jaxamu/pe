import { loginApi, logoutApi, getUserInfoApi } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import RouteView from '@/layouts/RouteView'
import Login from '@/pages/login'
import MainView from '@/layouts/MainView'
import Dashboard from '@/pages/dashboard'
import statistics from '@/pages/statistics'
import datashow from '@/pages/dataShow'
import usercenter from '@/pages/usercenter'
import {
  setStore,
  getStore
} from '@/utils/util/store'
const state = {
  token: getToken(),
  Jmodal: false,
  name: '',
  avatar: '',
  userinfo:null,
  modalIndex:null,
  menu:
  getStore({
    name: 'menu'
  }) || 
  [],
  routeMenu:
  getStore({
    name: 'routeMenu'
  }) || 
  [],
  auths: []
}

const getters = {
  Jmodal:state=>state.Jmodal,
  modalIndex:state=>state.modalIndex,
  menu:state=>state.menu,
  userinfo:state=>state.userinfo
}

const mutations = {
  SET_MENU: (state, menu) => {
    state.menu = menu;
    
    if(menu.length>1){
      setStore({
        name: 'menu',
        content: state.menu,
        type: 'session'
      })
    }else{
      setStore({
        name: 'routeMenu',
        content: state.menu,
        type: 'session'
      })
    }
  },
  SET_Jmodal: (state, parma) => {
    state.Jmodal = parma
  },
  SET_modalIndex: (state, parma) => {
    state.modalIndex = parma
  },
  SET_userinfo: (state, parma) => {
    state.userinfo = parma
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_AUTHS: (state, auths) => {
    state.auths = auths
  }
}

const actions = {
  // 获取系统菜单
  GetMenu({
    commit
  }) {
    return new Promise(resolve => {
      // GetMenu().then((res) => {
        // const data = 
        // [
        //   {
        //     path: '/',
        //     name: 'MainView1',
        //     component: 'pages/dataShow/index',
        //     redirect: '/datashow',
        //     children: [
        //       {
        //         path: '/dashboard2',
        //         name: 'dashboard2',
        //         component: 'pages/dashboard/index',
        //         meta: { title: '报表管理', icon: 'ios-speedometer-outline', auths: ['super_admin', 'admin'] }
        //       },

        //       {
        //         path: '/ListPage',
        //         name: 'ListPage',
        //         component: 'pages/dataShow/index',
        //         meta: { title: '列表页', icon: 'md-grid' },
        //         children: [
        //           {
        //             path: '/QueryList',
        //             name: 'QueryList',
        //             component: 'pages/list-page/query-list/index',
        //             meta: { title: '查询表格1', icon: 'md-list' }
        //           },
        //           {
        //             path: '/StandardList',
        //             name: 'StandardList',
        //             component:'pages/list-page/standard-list/index',
        //             meta: { title: '标准列表5', icon: 'md-podium' }
        //           },
        //         ]
        //       }
        //     ]
        //   }
        // ]

        const data = [
          {
            path: '/',
            name: 'MainView',
            component: 'layouts/MainView',
            redirect: '/datashow',
            meta: { title: '首页', icon: 'ios-speedometer-outline', auths: ['super_admin', 'admin'] },
            children: [
              {
                path: 'datashow',
                name: 'datashow',
                component: 'pages/dataShow/index',
                meta: { title: '数据总揽', icon: 'ios-speedometer-outline', auths: ['super_admin', 'admin'] }
              },
              {
                path: 'UserPage',
                name: 'UserPage',
                component: 'pages/usercenter/index',
                meta: { title: '基本信息', icon: 'md-person' },
              },
              {
                path: 'statistics',
                name: 'statistics',
                component: 'pages/statistics/index',
                meta: { title: '数据统计', icon: 'logo-buffer', auths: ['super_admin', 'admin'] }
              },
              {
                path: 'Dashboard1',
                name: 'Dashboard1',
                component: 'pages/dashboard/index',
                meta: { title: '推广管理', icon: 'ios-speedometer-outline', auths: ['super_admin', 'admin'] }
              },
              
              


              {
                path: '/dashboard2',
                name: 'dashboard2',
                component: 'pages/dashboard/index',
                meta: { title: '报表管理', icon: 'ios-speedometer-outline', auths: ['super_admin', 'admin'] }
              },

              {
                path: '/ListPage',
                name: 'ListPage',
                component: 'layouts/RouteView',
                meta: { title: '列表页', icon: 'md-grid' },
                children: [
                  {
                    path: '/QueryList',
                    name: 'QueryList',
                    component: 'pages/list-page/query-list/index',
                    meta: { title: '查询表格1', icon: 'md-list' }
                  },
                  {
                    path: '/StandardList',
                    name: 'StandardList',
                    component:'pages/list-page/standard-list/index',
                    meta: { title: '标准列表5', icon: 'md-podium' }
                  },
                ]
              }
              
            ]
          }
        ]
        
        // const data = res.data
      //   data.forEach(ele => {
      //     ele.children.forEach(child => {
      //       if(child.children && child.children.length>0){
      //         child.children.forEach(child1 => {
      //            if (!validatenull(child.component)) child1.path = `${child.path}/${child1.path}`
      //         });
      //       }else{
      //         if (!validatenull(child.component)) child.path = `${ele.path}/${child.path}`
      //       }
      //     });
      //   });
        commit('SET_MENU', data,1)
        resolve(data)
      // })
    })
  },
  login: async ({ commit }, { username, password }) => {
    try {
      let response = await loginApi(username, password)
      let { data } = response
      if (!data) return false
      let { token } = data
      setToken(token)
      commit('SET_TOKEN', token)
      return token
    } catch (err) {
      console.log(err) // eslint-disable-line
      return err
    }
  },

  getUserInfo: async ({ commit, state }) => {
    try {
      let token = state.token
      let response = await getUserInfoApi(token)
      let { data } = response
      if (!data) return false
      let { auths, name, avatar } = data
      commit('SET_AUTHS', auths)
      commit('SET_NAME', name)
      commit('SET_AVATAR', avatar)
      return data
    } catch (err) {
      console.log(err) // eslint-disable-line
      return err
    }
  },

  logOut: async ({ commit, state }) => {
    try {
      let token = state.token
      let response = await logoutApi(token)
      let { success } = response
      if (!success) return false
      commit('SET_TOKEN', '')
      commit('SET_AUTHS', [])
      removeToken()
      return true
    } catch (err) {
      console.log(err) // eslint-disable-line
      return err
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
