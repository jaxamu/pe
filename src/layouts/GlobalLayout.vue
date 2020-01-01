<template>
  <i-layout class="global-layout">
    <i-sider collapsible class="global-layout__sider" hide-trigger :width="256" :collapsed-width="64" v-model="isCollapsed">
      <side-menu theme="dark" :accordion="true" :active-name="$route.name" :collapsed="isCollapsed" @on-select="turnToPage" :menu-list="menu">
        <div class="logo">
          <router-link to="/">
            <img class="logo__img" src="./../assets/images/logo.png" />
            <h1 v-show="!isCollapsed" class="logo__title">{{ shortSiteName }}</h1>
          </router-link>
        </div>
      </side-menu>
    </i-sider>
    <i-layout :class="[
        'global-layout__containers',
        this.isCollapsed ? 'global-layout__containers--expand-width' : ''
      ]">
      <i-header :class="[
          'global-layout__header',
          this.isCollapsed ? 'global-layout__header--expand-width' : ''
        ]">
        <global-header :is-collapsed="isCollapsed" @toggleCollapse="toggleCollapse" />
      </i-header>

      <i-content class="global-layout__content">
        <slot></slot>
        <transition name="ani_shade">
          <Jmodal v-show="Jmodal"></Jmodal>
        </transition>
      </i-content>

      <i-footer class="global-layout__footer">
        <transition name="ani_shade">
          <div class='Jmodal' v-if="Jmodal" @click="hidemodal"> </div>
        </transition>
        <global-footer />
      </i-footer>
    </i-layout>
  </i-layout>
</template>

<script>
import { shortSiteName } from '@/config'
import SideMenu from '@/components/SideMenu'
import Jmodal from '@/components/Jmodal'
import GlobalHeader from './GlobalHeader'
import GlobalFooter from './GlobalFooter'
import mixin from '@/components/mixins'
import { validatenull } from "@/utils/util/validate";
import { initMenu } from "@/utils/util/util.js";
import { mapGetters } from "vuex";
export default {
  name: 'GlobalLayout',
  mixins: [mixin],
  components: {
    SideMenu,
    Jmodal,
    GlobalHeader,
    GlobalFooter
  },

  filters: {},

  props: {},

  data() {
    return {
      // menu:[],
      isCollapsed: false,
      shortSiteName: shortSiteName
    }
  },

  computed: {...mapGetters(["menu"]) },

  watch: {},

  created() {
    // this.native()
    this.init()
  },

  mounted() { },

  updated() { },

  activated() { },

  deactivated() { },

  destroyed() { },

  methods: {
    native(){
      let list = this.$router.options.routes.find(item => item.path === '/').children;
      this.menu = this.$utils.getMenuList(list)
    },
    async init(){
      try{//设置侧边菜单
        var data=await this.$store.dispatch("GetMenu");
        this.$store.commit('SET_MENU',this.$utils.getMenuList(data[0].children))
        // console.log(data)
        // console.log(this.menu)
        // if (validatenull(this.menu)) {
          // console.log('获取')
        // }
          initMenu(this.$router, data,this);//初始路由
      }catch(e){
        console.log(e)
        let list = this.$router.options.routes.find(item => item.path === '/').children;
        this.menu = this.$utils.getMenuList(list)
      }
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed
    },

    turnToPage(routeName) {
      let isLink = routeName.indexOf('isTurnByHref_') !== -1
      if (isLink) {
        window.open(routeName.split('_')[1])
        return
      }
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style lang="less" >
.global-layout__content{
  // margin: 95px 24px 0px !important;
}
.global-layout__footer {
  position: relative;
  .Jmodal {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.795);
  }
}
.global-layout {
position: relative;
  .logo {
    background: linear-gradient(0deg, #433693, #5e4fcc);
  }
  &__sider {
    &.ivu-layout-sider {
      position: fixed;
      min-height: 100vh;
      box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
      z-index: 9;
      .logo__title {
        color: #fff;
      }
    }

    .logo {
      height: 64px;
      line-height: 64px;
      text-align: center;

      &__title {
        padding-left: 20px;
        box-sizing: border-box;
        font-size: 19px;
        font-weight: 600;
        display: inline-block;
        height: 32px;
        line-height: 32px;
        vertical-align: middle;
        text-transform: uppercase;
        color: #1890ff;
      }

      &__img {
        height: 34px;
        vertical-align: middle;
      }
    }
  }

  &__containers {
    min-height: 100vh;
    padding-left: 256px;

    &--expand-width {
      padding-left: 64px;
    }
  }

  &__header {
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100% - 256px);
    z-index: 1024;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    transition: width 0.2s ease-in-out;

    &--expand-width {
      width: calc(100% - 64px);
    }
  }

  &__content {
    margin: 88px 24px 0px;
  }

  &__footer {
    text-align: center;
  }
}
</style>
