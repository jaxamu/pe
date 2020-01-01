<template>
  <div class="datashow">
    <i-card class="standard-list" shadow>
      <h3>数据总揽</h3>
    </i-card>
    <div class="moneydata zyjuz">
      <div class='topitem ' :class="i==0?'backfen':i==2||i==5?'backhuang':i==3?'backlu':i==1?'backlan':''" v-for="( item,i ) in data1" :key="item.name">
        <h5 class="zyjuz">{{item.name}}</h5>
        <P class="zyjuz"> ￥{{item.money}}元 </P>
      </div>
    </div>

    <div class='botton zyjuz huan'>
      <div class='xiaitem' v-for="( item ,i) in data2" :key="item.name">
        <div class='title'>
          <div class="xzuo"><span class="wrap " :class="i==0?'backfen':i==2||i==5?'backhuang':i==3?'backlu':i==1?'backlan':''">
             <span class="icon"><Icon type="md-analytics" /></span> <span class="content">{{item.name}} </span></span><span class="sjx"></span><span class="sjx sxia"></span> </div>
          <div class='xyou'>￥{{item.pingjun}}人</div>
        </div>
        <P><span class="xname">有效投注</span> ￥{{item.touzhu}} </P>
        <P><span class="xname">中奖金额</span> ￥{{item.zhongj}} </P>
        <P><span class="xname">返水金额</span> ￥{{item.fanshui}} </P>
        <P><span class="xname">输赢金额</span> ￥{{item.shuy}} </P>
      </div>
    </div>

  </div>
</template>

<script >
export default {
  name: 'datashow',

  components: {},

  filters: {},

  props: {},

  data() {
    return {
      data1: [
        {
          name: '存款',
          money: 55555
        },
        {
          name: '提款',
          money: 55543255
        },
        {
          name: '开户注册',
          money: 63432
        },
        {
          name: '在线人数',
          money: 55543255
        },
        {
          name: '盈利总额',
          money: 54325555
        },
      ],
      data2: [
        {
          name: '红包数据1',
          pingjun: 4564,
          touzhu: 4564,
          zhongj: 4564,
          fanshui: 4564,
          shuy: 4564,
        },
        {
          name: '红包数据2',
          pingjun: 4564,
          touzhu: 4564,
          zhongj: 4564,
          fanshui: 4564,
          shuy: 4564,
        },
        {
          name: '红包数据3',
          pingjun: 4564,
          touzhu: 4564,
          zhongj: 4564,
          fanshui: 4564,
          shuy: 4564,
        },
        {
          name: '红包数据4',
          pingjun: 4564,
          touzhu: 4564,
          zhongj: 4564,
          fanshui: 4564,
          shuy: 4564,
        },
        {
          name: '红包数据5',
          pingjun: 4564,
          touzhu: 4564,
          zhongj: 4564,
          fanshui: 4564,
          shuy: 4564,
        },
        {
          name: '红包数据6',
          pingjun: 4564,
          touzhu: 4564,
          zhongj: 4564,
          fanshui: 4564,
          shuy: 4564,
        },
      ]

    }
  },

  computed: {},

  watch: {},

  created() { },

  mounted() {

    console.log('datashow');



  },

  updated() { },

  activated() { },

  deactivated() { },

  destroyed() { },

  methods: {}
}
</script>

<style lang="less" scope>
.datashow {
  .standard-list {
    margin-bottom: 20*1.2px;
  }
  .moneydata {
    margin-bottom: 35*1.2px;
    .topitem {
      padding-top: 10*1.2px;
      width: 185*1.2px;
      height: 100*1.2px;
      border-radius: 5*1.2px;
      background: linear-gradient(0deg, #45379a, #6859ce, #7a6aef);
      color: #fff;
      font-size: 12*1.2px;
      h5 {
        height: 45*1.2px;
        line-height: 45*1.2px;
      }
      p {
        font-size: 19*1.2px;
      }
    }
  }
  .botton {
    .xiaitem {
      margin-right: 23*1.2px;
		padding-right: 5*1.2px;
      width: 310*1.2px;
      height: 165*1.2px;
	  margin-bottom: 30*1.2px;
	  font-size: 12*1.2px;
      .title {
		  margin-bottom: 5*1.2px;
        width: 100%;
        height: 43*1.2px;
        .xzuo {
          width: 50%;
          float: left;
          .wrap {
            width: 120*1.2px;
			float: left;
            background: linear-gradient(0deg, #45379a, #6859ce, #7a6aef);
            height: 43*1.2px;
            padding: 13*1.2px 0 13*1.2px 20*1.2px;
            border-radius: 5*1.2px 2*1.2px 2*1.2px 0;
            font-size: 15*1.2px;
            .icon{
            	font-size: 20*1.2px;
				display: inline-block;
    			margin-top: -10*1.2px;
				color: #fff;}
            .content {
            	font-size: 12*1.2px;vertical-align: top;
              color: #fff;
              padding: 0 5*1.2px;
            }
          }
            // .sjx {
            //   float: left;
            //   display: block;width: 0;height: 0;
            //         background: linear-gradient(0deg, #45379a, #6859ce, #7a6aef);
            //         border: 21*1.2px solid transparent;
            //         border-left-color: #5446B1;
            // }
            
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
  border-top:25px solid #fff;
  border-left:25px solid transparent;
}
.sxia{
  top: 1px;
  left: -26px;
  border-top:none;
  border-left:none;
  border-bottom:26px solid #fff;
  border-left:26px solid transparent;

}

        }
        .xyou {
          width: 50%;
          float: right;
		  line-height: 43*1.2px;
		  text-align: right;
        }
      }
      p {
		  height: 25*1.2px;
		  line-height: 25*1.2px;
		  text-align: right;
        .xname {
			float: left;
			text-align: left ;
        }
      }
    }
  }
}
</style>
