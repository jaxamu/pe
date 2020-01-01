<template>
  <div class='usercenter clearfix'>
    <i-card shadow>
      <h3>用户中心</h3>
    </i-card>
    <div class='userinfo clearfix zyjuz'>
      <div class='awatar'>
        <img src="/img/awatar.png" alt="">
        <p>用户名: <span>{{ userinfo.name  }}</span></p>
        <p>级别: <span>{{userinfo.lavel  }}</span></p>
        <p>邀请码: <span>{{ userinfo.code }}</span></p>
      </div>
      <div class='info'>
        <p class="money">账户总余额: ￥<span class="zhanghu"> {{money.yue}}</span> <i>|</i> 提现余额: ￥<span class="tixian"> {{money.yue}}</span> <i>|</i> 冻结余额: ￥<span class="dongjie"> {{money.yue}}</span> <span class="tip">i</span></p>
        <p class="logged"> 已登陆次数：<span class="chi"> {{money.yue}}次</span> 上次登录IP： <span class="ip"> {{money.ip}}</span> 本次登录IP： <span class="cruuip"> {{money.cruuip}}</span> </p>
        <div class='brokerage clearfix'>
           <div>佣金比例:</div> 
          <div class='bitem backfen'>红包{{money.yue}}%</div>
          <div class='bitem'>红包{{money.yue}}%</div>
          <div class='bitem backhuang'>红包{{money.yue}}%</div>
          <div class='bitem backlu'>红包{{money.yue}}%</div>
          <div class='bitem backlan'>红包{{money.yue}}%</div>
          <div class='bitem'>红包{{money.yue}}%</div>
        </div> 
        <div class="SEO">推广网址： <span>www.baidu.com</span> </div>
        <div class='seos'>绑定域名: <span v-for="(item ,i) in money.sit"  :key="i" class="sit"> {{item}}</span> </div>
      </div>
    </div>
    <div class='setinfo clearfix'>
      <div class='setitem' v-for="( item,i ) in setinfo" :key="i" :class="i==0?'backfen':i==2||i==5?'backhuang':i==3?'backlu':i==1?'backlan':''">
        <div class='itemimg'><Icon class="icon" type="ios-checkmark" />   </div>
        <div class='you'>
          <p>{{item[0]}}</p>
          <div class='bottom' @click="openmodal(i)">{{item[1]}}</div>
        </div>
      </div>
    </div>

    

  </div>
</template>

<script>
import mixin from '@/components/mixins'
import UserPane from './UserPane'

export default {
  name: 'UserCenter',
  mixins:[mixin],
  components: { UserPane },
  filters: {},

  props: {},

  data() {
    return {
      money: {
        ip:'www.baidu.com',
        cruuip:'www.baidu.com',
        yue: 55,
        sit: ["www.baidu.com", "www.baidu.com"]
      },
      setinfo: [['完善信息','查看资料'], ['修改密码','忘记密码'], ["绑定银行卡",'未绑定'], ['申请提款','立即提交'], ['绑定域名','添加域名']]

    }
  },

  computed: {

  },

  watch: {},

  created() {
    var userinfo={
        name: 'admin',
        realName: '看看看',
        phone: '13566999666',
        lavel: '总代',
        code: 8888
      }
    this.$store.commit('SET_userinfo',userinfo);
    },
  mounted() { 
  },

  updated() { },

  activated() { },

  deactivated() { },

  destroyed() { },

  methods: {
  }
}
</script>

<style lang="less" scope="">
.usercenter {
  .userinfo {
    margin-top: 10*1.3px;
    margin-bottom: 20*1.3px;
    .awatar {float: left;margin-right: 30*1.3px;
      color: #fff;
      padding-top: 32*1.3px;
      width: 202*1.3px;
      height: 241*1.3px;
      background: url('/img/awatarbg.png') no-repeat ;    background-size: cover;
      img {
        margin: 0 auto;
        display: block;
        margin-bottom: 5*1.3px;
      }
      p{
        line-height: 25*1.3px;font-size: 12*1.3px;text-align: center;
      }
    }
    .info {
      float: left;flex:1;
      font-size: 14*1.3px;
      color: #656565;
      margin-top: 20*1.3px;
      p{
        height: 45*1.3px;
        line-height: 40*1.3px;overflow: hidden;
      }
      .money {
        .zhanghu {color: #a83169;        }
        i{width: 30*1.3px;text-align: center;display: inline-block;}
        .tixian {color: #d5ad3e;        }
        .dongjie {color: #5f4cc2;        }
        .tip {  margin-left: 13*1.3px; padding: 0 6*1.3px;border-radius: 50%;color: #fff;
          background: #ec2373;}
      }
      .logged {
        span{margin-right: 25*1.3px;}
        .chi {color: #a83169;        }
        .ip {    color: #5f4cc2;     }
        .cruuip {  color: #a83169;      }
      }
      .brokerage {
        width: 100%;
        // height: 45*1.3px;
        line-height: 45*1.3px;
        text-align: left;
        div{float: left;}
        .bitem {height: 33*1.3px;line-height: 33*1.3px;font-size: 18px; width: 80*1.3px;margin-left: 10*1.3px;border-radius: 5*1.3px;margin-top: 5*1.3px;
          background: linear-gradient(0deg, #45379a, #6859ce, #7a6aef);
          color: #fff;text-align: center;
        }
      }
      .SEO {
         width: 100%;
        height: 45*1.3px;line-height: 45*1.3px;
        span {color: #5f4cc2;         }
      }
      .seos {
        .sit {color: #a83169;  margin-right: 25*1.3px;       }
      }
    }
  }
  .setinfo {color: #fff;
    .setitem {width: 190*1.3px;height: 100*1.3px;border-radius: 5*1.3px;margin-bottom: 20*1.3px;
      background:  linear-gradient(0deg, #45379a, #6859ce, #7a6aef);float: left;margin-right:20*1.3px ;
      .itemimg {width: 60*1.3px;height: 60*1.3px;background:#fff;border-radius: 50%;margin: 20*1.3px 5*1.3px 0 20*1.3px;float: left;
      .icon{
        &::before{
          color: #ccc; font-size: 60*1.3px;
        }
      }
      }
      .you {text-align: center;width: 102*1.3px;
        p {margin: 23*1.3px 0 8*1.3px; font-size: 12*1.3px;       }
        .bottom { cursor: pointer; width: 85*1.3px;height: 28*1.3px;background:#fff;margin: 0 auto;border-radius:15*1.3px;color: #000;line-height: 28*1.3px;font-size: 12*1.3px;
        }
      }
    }
  }
}
.vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>
