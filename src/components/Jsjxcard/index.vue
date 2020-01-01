<template>
    <div class="xzuo">
      <span class="wrap ">
        <span class="icon">
            <slot name="icon"> <Icon type="md-analytics" /> </slot> 
        </span>
        <span class="content"> <slot name="content">  </slot>  </span>
        <span class="width">
        </span>
        </span>
        <span class="sjx"></span><span class="sjx sxia"></span>
    </div>
</template>
<style lang="less" scoped>
.xzuo{
width: 100%;
          float: left;}
.wrap {
  float: left;
  background: linear-gradient(0deg, #45379a, #6859ce, #7a6aef);
  height: 43 * 1.2px;
  padding: 13 * 1.2px 0 13 * 1.2px 20 * 1.2px;
  border-radius: 5 * 1.2px 2 * 1.2px 2 * 1.2px 0;
  font-size: 15 * 1.2px;
  .icon {
    font-size: 20 * 1.2px;
    display: inline-block;
    margin-top: -10 * 1.2px;
    color: #fff;
  }
  .content {
    font-size: 12 * 1.2px;vertical-align:top;
    color: #fff;
    padding: 0 5 * 1.2px;
  }
}
.width{
    display: inline-block;
    width: 25px;
}
.sjx {
  float: left;
  display: block;
  width: 0;
  height: 0;
  // border: 22px solid transparent;
  // border-left-color: #5446b1;
  position: relative;
  top: 0;
  right: 25px;
  border-top: 25px solid #fff;
  border-left: 25px solid transparent;
}
.sxia {
  top: 26px;
  left: -51px;
  border-top: none;
  border-left: none;
  border-bottom: 26px solid #fff;
  border-left: 26px solid transparent;
}
</style>