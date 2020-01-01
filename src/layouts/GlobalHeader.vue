<template>
  <div class="global-header">
    <div class="breadWrap">
      <div class="iconwrap">
        <svg-icon icon-class="menu-fold" :class-name="rotateIcon" @click.native="toggleCollapse" />
      </div>

      <breadCrumb class="bread" :bread-crumb-list="breadCrumbList" :currentHitem="currentHitem.path" />
    </div>
    <div class="custom-content-con">
      <header-user />
      <fullscreen v-model="isFullscreen" />
    </div>
  </div>
</template>

<script>
import routes from '@/router/routes'
import BreadCrumb from '@/components/BreadCrumb'
import HeaderUser from './HeaderUser'
import Fullscreen from '@/components/Fullscreen'

export default {
  name: 'GlobalHeader',

  components: {
    BreadCrumb,
    HeaderUser,
    Fullscreen
  },

  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      breadCrumbList: [],
      isFullscreen: false,
      currentHitem: ''
    }
  },

  computed: {
    rotateIcon() {
      return this.isCollapsed ? 'menu-icon rotate-icon' : 'menu-icon'
    },
    getCrumbList() {
      return 5
    }
  },

  watch: {
    $route: {
      handler: 'watchRoute',
      immediate: true
    },
    getCrumbList() {

    }
  },

  created() { },

  mounted() {
    setTimeout(() => {
      // console.log(
      //   routes,
      //   'ppppppppp',
      //   this.$router.options.routes
      // );
    }, 100);

  },

  methods: {
    watchRoute(newRoute, o) {
      this.breadCrumbList=[];
      this.$store.commit('SET_Jmodal', false);
      // const {
      //   name,
      // } = newRoute
      // console.log(newRoute)
      var provates = [
        {
          icon: "ios-speedometer-outline",
          name: "数据总揽",
          path: "/datashow",
          router: {
            name: "datashow"
          }
        },
        {
          icon: "logo-buffer",
          name: "数据统计",
          path: "/statistics",
          router: {
            name: "statistics"
          }
        },
      ];
      this.breadCrumbList=provates;
      this.currentHitem = this.$utils.getBreadCrumbList(newRoute.matched).pop();
      // console.log(this.currentHitem)
      var notSome=!provates.some(item=> item.path===this.currentHitem.path);
      if (!!!o) {  //如果是第一次 如果没有和预设的相关 把预设的标签先放进去 
        if(notSome)this.breadCrumbList = provates.concat(this.$utils.getBreadCrumbList(newRoute.matched).pop())
      } else {  //  判断当前是否有子路由 没有的  如果没有和预设的相关 把预设的标签先放进去 
      // console.log('判断当前是否有子路由 没有的  如果没有和预设的相关 把预设的标签先放进去 ')
        // routes[1].children.forEach(item => {
        this.$router.options.routes[0].children.forEach(item => {
          if (!!!item.children|| !!!item.children.length) {
            if (item.meta.title === this.currentHitem.name) {
              if (!this.breadCrumbList.some(item1 => item1.path.replace(/\//,'') === item.path))
                this.breadCrumbList = provates.concat(this.$utils.getBreadCrumbList([item]))
            }
          } else {// 如果有子路由 要把子路由加进去
            item.children.forEach(element => {
              if (element.meta.title === this.currentHitem.name) {
                if (!this.breadCrumbList.some(item1 => item1.path.replace(/\//,'') === element.path)) {
                  this.breadCrumbList = provates.concat(this.$utils.getBreadCrumbList([item], 1).concat(this.$utils.getBreadCrumbList(item.children)))
                }

              }
            });
          }


        })

        // if(!this.breadCrumbList.some(item=> item.path===this.currentHitem.path))
        // this.breadCrumbList.push(this.currentHitem);
      }
    },
    toggleCollapse() {
      this.$emit('toggleCollapse')
    }
  }
}
</script>

<style lang="less">
.breadWrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex: 1;
  float: left;
  width: 50%;
  .iconwrap {
    float: left;
    margin-left: -20px;
    padding-left: 20px;
    background: #3f3480;
    width: 60px;
    color: #fff;
    height: 62px;
  }
}
.global-header {
  color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  .menu-icon {
    transition: all 0.3s;
    margin-right: 30px;
    cursor: pointer;
    font-size: 20px;

    &:hover {
      color: #1890ff;
    }
  }

  .rotate-icon {
    transform: rotate(-180deg);
  }

  .custom-content-con {
    float: right;
    height: 100%;
    line-height: 64px;

    & > * {
      float: right;
      margin-right: 20px;
    }
  }
}
</style>
