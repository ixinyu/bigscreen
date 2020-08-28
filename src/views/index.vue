<template>
  <div>
    <div class="top flex between">
      <div class="lf">
        <div class="flex mt20">
          <div class="flex a-center w180">
            <img class="icon_people" src="@/assets/genchuren.png" alt="">
            <span>出人数∶1000人</span>
          </div>
          <div class="flex a-center w180">
            <img class="icon_shidu" src="@/assets/shidu.png" alt="">
            <span>湿度∶66%RH</span>
          </div>
          <div class="flex a-center w180">
            <img class="icon_py" src="@/assets/yiwei.png" alt="">
            <span>异味∶0.01</span>
          </div>
        </div>
        <div class="flex mt10">
          <div class="flex a-center w180">
            <img class="icon_people" src="@/assets/genjinren.png" alt="">
            <span>进人数∶634人</span>
          </div>
          <div class="flex a-center w180">
            <img class="icon_wendu" src="@/assets/wendu.png" alt="">
            <span>温度∶23℃</span>
          </div>
          <div class="flex a-center w180">
            <img class="icon_py" src="@/assets/pm.png" alt="">
            <span>PM2.5∶10</span>
          </div>
        </div>
      </div>
      <div class="flex rig mt20">
        <div class="flex column a-center mr35">
          <img class="icon" src="@/assets/tianqi.png" alt="">
          <div class="fs14 cf mt10">多云23℃</div>
        </div>
        <div class="flex column fs14 cf">
          <div>相对风速∶北风1级</div>
          <div class="mt5">相对温度∶66%</div>
          <div class="mt5">空气质量∶22 优</div>
        </div>
      </div>
    </div>
    <div class="bigcenter flex mt25">
      <div>
        <div class="flex">
          <div>
            <div class="tit cf fs14">设备管理</div>
            <div class="big_shebei flex column around">
              <div class="flex a-center between cf">
                <span class="fs12">烟感传感器</span>
                <div class="flex a-center">
                  <i></i>
                  <span class="fs12">正常</span>
                </div>
              </div>
              <div class="flex a-center between cf">
                <span class="fs12">水压监测</span>
                <div class="flex a-center">
                  <i class="bgred"></i>
                  <span class="fs12">正常</span>
                </div>
              </div>
              <div class="flex a-center between cf">
                <span class="fs12">视频监控</span>
                <div class="flex a-center">
                  <i class="bgred"></i>
                  <span class="fs12">正常</span>
                </div>
              </div>
              <div class="flex a-center between cf">
                <span class="fs12">电子围栏</span>
                <div class="flex a-center">
                  <i class="bgred"></i>
                  <span class="fs12">正常</span>
                </div>
              </div>
              <div class="flex a-center between cf">
                <span class="fs12">门禁管理</span>
                <div class="flex a-center">
                  <i class="bgred"></i>
                  <span class="fs12">正常</span>
                </div>
              </div>
              <div class="flex a-center between cf">
                <span class="fs12">梯控管理</span>
                <div class="flex a-center">
                  <i class="bgred"></i>
                  <span class="fs12">正常</span>
                </div>
              </div>
            </div>
          </div>
          <div class="ml5">
            <div class="tit cf fs14">出入口通行记录</div>
            <div class="bs_inwrap flex a-center j-center">
              <div class="bs_in flex column around aiStart fs12">
                <div>姓名：<span>王可</span></div>
                <div>地点：<span>南门</span></div>
                <div>时间：<span>2019/04/02</span></div>
                <div>属性：<span>住户</span></div>
                <div>状态：<span>正常</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt30">
          <div class="tit cf fs14 mb15">房间数量</div>
          <div class="bs_lf flex between">
            <div class="cf flex bs_inner">
              <img class="icon_lb" src="../assets/room.png" alt="">
              <div class="ml20 flex column around">
                <div class="fs16">房间数量</div>
                <div class="fs14"><span class="fs22 roomNum">10</span>间</div>
                <div class="fs12">社区当前房间数量</div>
              </div>
            </div>
            <div id="room" style="width:55%;height:100%"></div>
          </div>
        </div>
        <div class="mt30">
          <div class="tit cf fs14 mb15">业主数量</div>
          <div class="bs_lf flex between">
            <div class="cf flex bs_inner">
              <img class="icon_lb" src="../assets/people.png" alt="">
              <div class="ml20 flex column around">
                <div class="fs16">业主数量</div>
                <div class="fs14"><span class="fs22 roomNum">5</span>人</div>
                <div class="fs12">当前入住业主数量</div>
              </div>
            </div>
            <div id="people" style="width:55%;height:100%"></div>
          </div>
        </div>
        <div class="mt30">
          <div class="tit cf fs14 mb15">车辆统计</div>
          <div class="bs_lf flex between">
            <div class="cf flex">
              <img class="icon_lb" src="../assets/car.png" alt="">
              <div class="ml20 flex column around">
                <div class="fs16">车辆数量</div>
                <div class="fs14"><span class="fs22 roomNum">8</span>辆</div>
                <div class="fs12">已登记车辆总数量</div>
              </div>
            </div>
            <div class="cf flex">
              <img class="icon_lb" src="../assets/pcar.png" alt="">
              <div class="ml20 flex column around">
                <div class="fs16">车位数量</div>
                <div class="fs14"><span class="fs22 roomNum">5</span>辆</div>
                <div class="fs12">已登记车位总数量</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg_cen">
        <div class="bj_k">
          <img class="xiaoqu" src="../assets/xiaoqu.png" alt="">
          <div class="bg_wrap flex">
            <img ref="start" class="bao_jing" src="../assets/baojing.png" alt="">
            <div ref="end" class="bj_model flex column between cf fs16 ml100">
              <div>楼栋：<span>10栋</span></div>
              <div>单元：<span>4单元</span></div>
              <div>楼层：<span>1503</span></div>
              <div>原因：<span>下水管爆裂</span></div>
              <div>时间：<span> 2019-04-02</span></div>
            </div>
          </div>
        </div>
        <div class="flex sxjWrap between mt30">
          <!-- <div v-for="(item,i) in sxjList" :key="i">
            <video :id="'myPlayer'+parseInt(i+1)" class="sxj" autoplay controls playsInline webkit-playsinline>
              <source :src="item" type="" />
            </video>
          </div> -->
          <div id="myPlayer1" class="sxj"></div>
          <div id="myPlayer2" class="sxj"></div>
        </div>
      </div>
      <div class="bg_rig">
        <div class="tit cf fs14 mb10">停车管理</div>
        <div class="bg_rig_content flex column between">
          <div id="pCar" style="width:100%;height:23%"></div>
          <div id="carWei" style="width:100%;height:28%"></div>
          <div id="reciveMoney" style="width:100%;height:35%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EZUIKit from 'ezuikit-js'
import LeaderLine from 'leader-line-vue'
export default {
  data() {
    return {
      sxjList: []
    }
  },
  mounted() {
    const roomCharts = this.$echarts.init(document.getElementById('room'))
    const peopleCharts = this.$echarts.init(document.getElementById('people'))
    this.initLineCharts(roomCharts, 'category', '#ADFAFF')
    this.initLineCharts(peopleCharts, 'category', '#4C63F2')

    const pCarCharts = this.$echarts.init(document.getElementById('pCar'))
    this.initZhuCharts(pCarCharts)

    const carWeiCharts = this.$echarts.init(document.getElementById('carWei'))
    this.initBingCharts(carWeiCharts)

    const reciveMoneyCharts = this.$echarts.init(document.getElementById('reciveMoney'))
    this.initLineMoreCharts(reciveMoneyCharts, 'category')
   
    this.initVideo()
    LeaderLine.setLine(this.$refs.start, this.$refs.end, { 
      color: '#ADFAFF', 
      dash: { animation: true }
    })
  },
  methods: {
    initVideo() {
      var _this = this
      this.$http({
        url: '/api_screen',
        method: 'get'
      }).then((res) => {
        _this.sxjList = res.data.data.look_url
        const accessToken = res.data.data.accessToken
        _this.sxjList.forEach((item, index) => {
          var idx = `myPlayer${index + 1}`
          // console.log(idx)
          new EZUIKit.EZUIKitPlayer({
            id: idx, // 视频容器ID
            accessToken: accessToken,
            url: item
          })
        })
      })
    },
    initLineCharts(initDom, type, color) {
      initDom.setOption({
        grid: {
          x: 20,
          y: 20,
          x2: 20,
          y2: 20,
          borderWidth: 2
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: type,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#ADFAFF'
            }
          },
          data: ['8.25', '8.26', '8.27', '8.28', '8.29', '8.30', '8.31']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#ADFAFF'
            }
          }
        },
        series: [{
          data: [10, 40, 20, 40, 30, 40, 50],
          type: 'line',
          smooth: true,
          itemStyle: {
            color: color
          },
          areaStyle: {
            color: color
          }
        }]
      })
    },
    initLineMoreCharts(initDom, type) {
      initDom.setOption({
        grid: {
          x: 50,
          y: 80,
          x2: 30,
          y2: 20,
          borderWidth: 2
        },
        title: {
          text: '停车收费管理',
          textStyle: { //设置主标题风格
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['出去量', '进入量', '原有车辆', '现有车辆'],
          top: '10%',
          textStyle: { //图例文字的样式
            color: '#fff',
            fontSize: 16
          }
        },
        xAxis: {
          type: type,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#ADFAFF'
            }
          },
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] 
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#ADFAFF'
            }
          }
        },
        series: [
          {
            name: '出去量',
            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#32B8E9'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '进入量',
            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#00D69C'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '原有车辆',
            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#FFB400'
            },
            data: [150, 232, 201, 154, 190, 310, 410]
          },
          {
            name: '现有车辆',
            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#FF4874'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      })
    },
    initZhuCharts(initDom) {
      initDom.setOption({
        grid: {
          left: '1%',
          right: '12%',
          bottom: '1%',
          containLabel: true
        },
        title: {
          text: '停车收费分析',
          textStyle: { //设置主标题风格
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['临时停车', '正常停车'],
          textStyle: { //图例文字的样式
            color: '#fff',
            fontSize: 14
          }
        },
        xAxis: {
          type: 'value',
          show: false,
          axisLine: {
            lineStyle: {
              color: '#ADFAFF'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: ['数量', '时长', '费用'],
          axisLine: {
            show: false,
            lineStyle: {
              color: '#ADFAFF'
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [{
          name: '临时停车',
          type: 'bar',
          data: [400, 100, 200],
          itemStyle: {
            color: '#F63D3D'
          },
          label: {
            show: true,
            position: 'right'
          },
          areaStyle: {
            color: '#F63D3D'
          }
        },
        {
          name: '正常停车',
          type: 'bar',
          data: [800, 1000, 1200],
          itemStyle: {
            color: '#00D69C'
          },
          label: {
            show: true,
            position: 'right'
          },
          areaStyle: {
            color: '#00D69C'
          }
        }]
      })
    },
    initBingCharts(initDom) {
      initDom.setOption({
        title: {
          text: '剩余车位分析',
          textStyle: { //设置主标题风格
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          data: ['地上', '负一', '负二', '剩余车位'],
          orient: 'vertical',
          right: 10,
          top: '50',
          textStyle: { //图例文字的样式
            color: '#fff',
            fontSize: 16
          }
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          data: [
            { value: 335, name: '地上', itemStyle: { color: '#46F0EA' }},
            { value: 310, name: '负一', itemStyle: { color: '#DF24EB' }},
            { value: 234, name: '负二', itemStyle: { color: '#FF4874' }},
            { value: 135, name: '剩余车位', itemStyle: { color: '#4C64F2' }}
          ] 
        }]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.top{
  width: 100vw;
  height: 128px;
  padding:0 30px;
  box-sizing: border-box;
  background: url('../assets/biaoti.png') no-repeat center;
  background-size: 100vw 128px;
  .lf{
    width: 35%;
    .w180{
      width: 180px;
    }
    span{
      font-size: 14px;
      color: #fff;
      margin-left: 20px;
    }
  }
  .icon_people{
    width: 20px;
    height: 24px;
  }
  .icon_wendu{
    width: 24px;
    height: 24px;
  }
  .icon_shidu{
    width: 21px;
    height: 23px;
  }
  .icon_py{
    width: 28px;
    height: 23px;
  }
}
 @keyframes scaleDraw {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
    0%{
        transform: scale(1);  /*开始为原始大小*/
    }
    25%{
        transform: scale(1.5); /*放大1.1倍*/
    }
    50%{
        transform: scale(1.2);
    }
    75%{
        transform: scale(1.5);
    }
}
.bigcenter{
  padding: 0 30px;
  width: 100%;
  box-sizing: border-box;
  .roomNum{
    color: #45F0EA;
    margin-right: 8px;
  }
  .tit{
    width: 168px;
    height: 20px;
    background: url('../assets/title.png') no-repeat;
    text-indent: 25px;
  }
  .big_shebei{
    width: 254px;
    height: 181px;
    background: url('../assets/zbg.png') no-repeat center;
    background-size: 100% 100%;
    padding: 15px 30px;
    box-sizing: border-box;
    i{
      width: 13px;
      height: 8px;
      background: red;
      border-radius:2px;
      margin-right: 10px;
    }
    .bgred{
      background: #F63D3D;
    }
    .bggreen{
      background: #45F0EA;
    }
  }
  .bs_inwrap{
    width: 260px;
    height: 182px;
    background: url('../assets/zbg.png') no-repeat center;
    background-size: 100% 100%;
    .bs_in{
      width: 230px;
      height: 150px;
      padding: 20px 30px;
      box-sizing: border-box;
      background: url('../assets/churubg.png') no-repeat center;
      background-size: 100% 100%;
      color: #fff;
      span{
        color: #ADFAFF;
      }
    }
  }
  .icon_lb{
    width: 35px;
    height: 35px;
  }
  .bs_lf{
    width: 512px;
    height: 150px;
    background: url('../assets/cbg.png') no-repeat;
    background-size: 100% 100%;
    padding: 20px 30px;
    box-sizing: border-box;
    .bs_inner{
      height: 100%;
    }
  }
  .bg_cen{
    margin: 25px 30px 0;
    .bj_k{
      position: relative;
      width: 728px;
      height: 433px;
      .bg_wrap{
        .bao_jing{
          position: absolute;
          left: 20%;
          top:50%;
          width: 50px;
          height: 50px;
          animation: scaleDraw 3s ease-in-out infinite;
        }
        .bj_model{
          position: absolute;
          left: 20%;
          top:50%;
          margin-top: -128px;
          width: 230px;
          height: 136px;
          padding:10px 25px;
          box-sizing: border-box;
          border-radius: 8px;
          border: 1px solid #ADFAFF;
          background: rgba($color: #191F4F, $alpha: 0.8);
        }
      }
    }
    .xiaoqu{
      width: 728px;
      height: 433px;
      border: 1px solid #ADFAFF;
      border-radius:4px;
      
    }
    .sxjWrap{
      width: 728px;
      height: 350px;
      .sxj{
        width: 350px;
        height: 350px;
        border: 1px solid #ADFAFF;
        border-radius:4px;
      }
    }

  }
  .bg_rig{
    margin-top: -10px;
    .bg_rig_content{
      padding: 20px;
      box-sizing: border-box;
      width: 516px;
      height: 816px;
      background: url('../assets/rbg.png') no-repeat center;
      background-size: 100% 100%;
    }
  }
}
</style>
