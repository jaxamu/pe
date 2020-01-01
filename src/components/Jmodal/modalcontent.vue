<template>

  <div class=" modalcontent clearfix  " @click.stop   >
    <div  class='completeinformation'  v-if="modalIndex==0"   >
      <div class='title'>
        <div class='zuo left'>
          <div>
            <Icon class="icon" type="ios-checkmark" />
          </div>
          <span>完善资料</span>
        </div>
        <span class="sjx"></span>
        <span class="sjx sxia"></span>
        <div class='you'>x</div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>用户名 ：<span>{{userinfo.name}}</span></p>
        </div>
        <div>
          <p>邀请码 ：<span>{{userinfo.code}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>真实姓名 ：<span>{{userinfo.realName}}</span></p>
        </div>
        <div>
          <p>手机号 ：<span>{{userinfo.phone}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>代理级别 ：<span>{{userinfo.lavel}}</span></p>
        </div>
        <div>
          <p>上级代理 ：<span>{{userinfo.lavel}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>QQ号码 ：<span>{{userinfo.phone}}</span></p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>微信号码 ：<span>{{userinfo.phone}}</span></p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>备注 ：<span>{{userinfo.realName}}</span></p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
      <div class='bottom'> 立即提交 </div>
    </div>
<!-- 修改密码 -->
    <div class='changePassword' v-if="modalIndex==1"  >
      <div class='title'>
        <div class='zuo left'>
          <div>
            <Icon class="icon" type="ios-checkmark" />
          </div>
          <span>修改密码</span>
        </div>
        <span class="sjx"></span>
        <span class="sjx sxia"></span>
        <div class='you'>x</div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>手机号码 ：<span>{{userinfo.phone}}</span></p>
        </div>
        <div>
          <div class='yanzma backhuang'>获取验证码</div>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>验证码 ：<span><Input v-model="userinfo.value" placeholder="请输入验证码" style="width: 278px" /></span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
         <div>
          <p>新密码 ：<span><Input v-model="userinfo.value" placeholder="请输入验证码" style="width: 278px" /></span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>确认密码 ：<span><Input v-model="userinfo.value" placeholder="请输入验证码" style="width: 278px" /></span></p>
        </div>
      </div>
      <div class='bottom'> 立即提交 </div>
    </div>

    <div class='completeinformation' v-if="modalIndex==2"  >
      <div class='title'>
        <div class='zuo left'>
          <div>
            <Icon class="icon" type="ios-checkmark" />
          </div>
          <span>完善资料</span>
        </div>
        <span class="sjx"></span>
        <span class="sjx sxia"></span>
        <div class='you'>x</div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>用户名 ：<span>{{userinfo.name}}</span></p>
        </div>
        <div>
          <p>邀请码 ：<span>{{userinfo.code}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>真实姓名 ：<span>{{userinfo.realName}}</span></p>
        </div>
        <div>
          <p>手机号 ：<span>{{userinfo.phone}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>代理级别 ：<span>{{userinfo.lavel}}</span></p>
        </div>
        <div>
          <p>上级代理 ：<span>{{userinfo.lavel}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>QQ号码 ：<span>{{userinfo.phone}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>微信号码 ：<span>{{userinfo.phone}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>备注 ：<span>{{userinfo.realName}}</span></p>
        </div>
      </div>
      <div class='bottom'> 立即提交 </div>
    </div>

    <div class='completeinformation' v-if="modalIndex==3"  >
      <div class='title'>
        <div class='zuo left'>
          <div>
            <Icon class="icon" type="ios-checkmark" />
          </div>
          <span>申请提款</span>
        </div>
        <span class="sjx"></span>
        <span class="sjx sxia"></span>
        <div class='you'>x</div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>用户名 ：<span>{{userinfo.name}}</span></p>
        </div>
        <div>
          <p>邀请码 ：<span>{{userinfo.code}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>真实姓名 ：<span>{{userinfo.realName}}</span></p>
        </div>
        <div>
          <p>手机号 ：<span>{{userinfo.phone}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>代理级别 ：<span>{{userinfo.lavel}}</span></p>
        </div>
        <div>
          <p>上级代理 ：<span>{{userinfo.lavel}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>QQ号码 ：<span>{{userinfo.phone}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>微信号码 ：<span>{{userinfo.phone}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>备注 ：<span>{{userinfo.realName}}</span></p>
        </div>
      </div>
      <div class='bottom'> 立即提交 </div>
    </div>
    <div class='completeinformation' v-if="modalIndex==4"  >
      <div class='title'>
        <div class='zuo left'>
          <div>
            <Icon class="icon" type="ios-checkmark" />
          </div>
          <span>完善资料</span>
        </div>
        <span class="sjx"></span>
        <span class="sjx sxia"></span>
        <div class='you'>x</div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>用户名 ：<span>{{userinfo.name}}</span></p>
        </div>
        <div>
          <p>邀请码 ：<span>{{userinfo.code}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>真实姓名 ：<span>{{userinfo.realName}}</span></p>
        </div>
        <div>
          <p>手机号 ：<span>{{userinfo.phone}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>代理级别 ：<span>{{userinfo.lavel}}</span></p>
        </div>
        <div>
          <p>上级代理 ：<span>{{userinfo.lavel}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>QQ号码 ：<span>{{userinfo.phone}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>微信号码 ：<span>{{userinfo.phone}}</span></p>
        </div>
      </div>
      <div class='contentitem zyjuz'>
        <div>
          <p>备注 ：<span>{{userinfo.realName}}</span></p>
        </div>
      </div>
      <div class='bottom'> 立即提交 </div>
    </div>

  </div>

</template>

<script>
import mixin from '@/components/mixins'
export default {
  name: 'modalcontent',
  components: {},

  filters: {},

  props: {},

  data() {
    return {
    }
  },
  mixins: [mixin],
  computed: {
  },

  watch: {},

  created() {


  },

  mounted() {

  },

  updated() { },

  activated() { },

  deactivated() { },

  destroyed() { },

  methods: {

  },

}
</script>

<style lang="less" scoped>
.modalcontent {
  width: 465px;
  font-size: 12px;
  height: 415px;
  border-radius: 6px;
  background: #fff;
  // margin: auto;
  .title {
    width: 100%;
    height: 45px;
    line-height: 45px;
    margin-bottom: 12px;
    .zuo {
      height: 100%;
      border-radius: 6px 1px 2px 0;
      background: linear-gradient(0deg, #45379a, #6859ce, #7a6aef);
      color: #fff;
      width: 125px;

      div {
        padding-left: 20px;
        width: 43px;
        height: 100%;
        float: left;
      }
      .icon {
        font-size: 20px;
      }
      span {
        font-size: 13px;
        display: inline-block;
        float: left;
      }
    }
    .you {
          position: relative;
    right: 12px;
    font-size: 23px;
    font-weight: bold;
    top: -2px;
    cursor: pointer;
      text-align: right;
    }
  }
  .contentitem {
    width: 100%;
    color: #828282;
    div {
      height: 40px;
      line-height: 40px;
      p {
        span {
          color: #5f4cc2;
        }
      }
    }
  }
  .changePassword{
    .contentitem {
      width: 100%;
      color: #828282;
      div {
        height: 55px;
        line-height: 55px;
        p {
          span {
            color: #5f4cc2;
          }
        }
      }
      .yanzma{
        width: 130px;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        text-align: center;
        color: #fff;
        border-radius: 5px;
      }
    }
  }
  .bottom {
    background: linear-gradient(0deg, #45379a, #6859ce, #7a6aef);
    margin: 0 auto;
    border-radius: 20px;
    font-size: 20px;
    text-align: center;
    color: #fff;
    margin-top: 60px;
    width: 185px;
    height: 43px;
    line-height: 43px;
    cursor: pointer;
  }
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
  right: 22px;
  border-top:22px solid #fff;
  border-left:22px solid transparent;
}
.sxia{
  top: 23px;
  left: -44px;
  border-top:none;
  border-left:none;
  border-bottom:22px solid #fff;
  border-left:22px solid transparent;

}

</style>
