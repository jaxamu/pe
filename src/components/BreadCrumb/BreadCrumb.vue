<template>
  <div class="bread-crumb">
    <i-breadcrumb :style="{ fontSize: `${fontSize}px` }" separator="" >
      <i-breadcrumb-item class="breadcrumbitem" :class="current==index?'current':'notcurrent'"
        v-for="(item, index) in breadCrumbList" 
        :key="index"
        :to=" item.path"
      >
        <div class="xx" @click="close(index)">
            x
        </div>
        <div class="tiao">
            -
        </div>
        <i-icon class="icon" v-if="showIcon" :type="item.icon || ''" />
        {{ item.name }}
      </i-breadcrumb-item>
    </i-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    currentHitem:{
      type: String,
      default: '首页'
    },
    breadCrumbList: {
      type: Array,
      default: () => []
    },
    fontSize: {
      type: Number,
      default: 14
    },
    showIcon: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return {
      current:1
    }
  },
  watch:{
    currentHitem:{
      handler(v){
        this.breadCrumbList.forEach((element,i) => {
          if(element.path.replace(/\//,'')==v.replace(/\//,'')){
            this.current=i;
          }
        });
      },
      immediate:true
    }
  },
  mounted(){
    // console.log(this.breadCrumbList);
    // console.log($);
  },
  methods:{
    topaths(e){
      console.log(e)
      this.$router.push(e)
    },
    close(i){
      this.breadCrumbList.splice(i,1)
    }
  }
}
</script>

<style lang="less">
.bread-crumb {
  margin-bottom:0 !important;
  height: 65px;
  display: inline-block;
  vertical-align: top;
  flex:1;
  overflow-y: hidden;
    overflow-x: hidden;
    // overflow-x: scroll;
  .icon {
    margin-right: 4px;
  }
.ivu-breadcrumb{
  width: max-content;
}
.breadcrumbitem{
  cursor: pointer;
  position: relative;
  .xx{
    color: #fff;
    position: absolute;
    right:5px;
    top: 0px;
  }
  .xx:hover{
    cursor:	pointer;
    color: #000;
    }
  .tiao{
    color: #fff;
    position: absolute;
    right: 50%;
    bottom: 0;
  }
  color: #a393ca;
    display: block;
    a{
      position: relative;
    top: 12px;
    left: 0;
      padding: 13px 20px;
    }
    .ivu-breadcrumb-item-separator{
      margin: 0 !important;
    }
    margin-left: 10px;
    float: left;
    margin-top: 17px;
    background: linear-gradient(0deg, #45379A , #6859ce, #7a6aef );
    line-height: 18px;
    height: 47px;
    border-radius: 5px 5px 0 0;
}
.breadcrumbitem:hover{
 color: #7a6aef;
}
.ivu-breadcrumb a:hover{color: #7a6aef !important;}

.ivu-breadcrumb a{
   color: #a393ca !important;
}
.ivu-breadcrumb > span:last-child{
  color: #fff !important;
}
.ivu-breadcrumb > span.current a{
  color: #fff !important;
}
.ivu-breadcrumb > span.notcurrent a{
  color: #a393ca !important;
}
.ivu-breadcrumb > span:last-child:hover{
  cursor:	pointer;
  color: #7a6aef !important;
  }


}
.bread-crumb::-webkit-scrollbar {
        height: 7px;     
    }
.bread-crumb::-webkit-scrollbar-thumb {
    border-radius: 20px;
     -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(86,33,201,.5);
    }
.bread-crumb::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 20px;
    background: #EDEDED;
}
</style>
