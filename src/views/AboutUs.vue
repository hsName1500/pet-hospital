<template>
  <div>
  <div class="container">
    <!-- 背景图开始 -->
    <div class="bg" id="promo-list">
      <div class="bg-img"></div>
      <div class="text">
        <div class="text-top">关于我们</div>
        <div class="text-buttom">
          “用心呵护，更多陪伴” 
          <br />
          是Love Around的诉求和使命。
        </div>
      </div>
    </div>
    <!-- 背景图结束 -->
    <!-- 主体一 寓意 开始 -->
    <div class="main-1">
      <div class="yuyi" :class="{testenter: testShow }">
        <div class="yuyi-1" >Love Around寓意</div>
        <div class="hengxian">
          <span></span>
        </div>
        <div class="yuyi-2">
          <div class="yuyi-2-text">
            <span>“人与宠物相互依偎陪伴”。</span>
            <span>宠物的陪伴让我们的生活更美好。</span>
            <span>我们希望做出品质宠食，尊重爱宠之人，用心呵护宠物，</span>
            <span>让宠物和宠物主一起享受更多欢乐陪伴。 </span>
          </div>
        </div>
        <div class="yuyi-3">
          <div class="yuyi-3-tu1" :class="{testenter2: testShow2 }">
            <img src="../assets/img/25.png" alt="" />
          </div>
          <div class="yuyi-3-tu2" :class="{testenter2: testShow2 }">
            <img src="../assets/img/quan.png" alt="" />
          </div>
          <div class="yuyi-3-tu3" :class="{testenter2: testShow2 }">
            <img src="../assets/img/26.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 主体一 寓意 结束 -->
    <!-- 主体二 食品 开始 -->
    <div class="main-2" :class="{testenter3: testShow3 }">
      <div class="food">
        <div class="food-1">用婴儿奶粉的标准定义宠物食品</div>
        <div class="hengxian">
          <span></span>
        </div>
        <div class="food-2">
          <div class="food-2-text">
            <span
              >LoveAround以踏实而又创新的匠心，异想天开地将宠物食品类比“婴儿奶粉”，</span
            >
            <span>用“好原料+好配方+好工艺”打造符合天性的宠物食品。</span>
          </div>
        </div>
        <div class="food-3">
          <div class="food-3-tu1">
            <img src="../assets/img/28.png" alt="" />
            <span>好原料</span>
          </div>
          <div class="food-3-tu2">
            <img src="../assets/img/29.png" alt="" />
            <span>好配方</span>
          </div>
          <div class="food-3-tu3">
            <img src="../assets/img/30.png" alt="" />
            <span>好工艺</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体二 食品 结束 -->
    <!-- 主体三 团队 开始 -->
    <el-row :gutter="10">
  <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="zzz"><div class="grid-content bg-purple">
    <div class="main-3" :class="{testenter4: testShow4 }">
      <div class="tuandui">
        <div class="tuandui-1">团队介绍</div>
        <div class="hengxian">
          <span></span>
        </div>
        <div class="tuandui-2">
          <div class="tuandui-2-text">
            <span
              >萌宠医院成立于有“猫岛”之称的鹭岛厦门，舒适的小资氛围，让我们用富有情怀的“匠心”去打磨更优质可</span
            >
            <span>靠的宠物服务。</span>
          </div>
        </div>
      </div>
      <div class="tuandui-3" :class="{testenter5: testShow5 }">
        <div class="tuandui-3-main">
          <div class="tuandui-3-main-hengfu">
            <div class="tuandui-3-one">
              <div class="tuandui-3-one-box" @mouseover="fn(1)">
                <span>1</span>
                <div
                  class="tuandui-3-one-box-hover"
                  :class="{ active: state == 1 }"
                >
                  <img src="../assets/img/quan.png" alt="" />
                </div>
              </div>
            </div>
            <div class="tuandui-3-two">
              <div class="tuandui-3-two-box" @mouseover="fn(2)">
                <span>2</span>
                <div
                  class="tuandui-3-two-box-hover"
                  :class="{ active: state == 2 }"
                >
                  <img src="../assets/img/quan.png" alt="" />
                </div>
              </div>
            </div>
            <div class="tuandui-3-three">
              <div class="tuandui-3-three-box" @mouseover="fn(3)">
                <span>3</span>
                <div
                  class="tuandui-3-three-box-hover"
                  :class="{ active: state == 3 }"
                >
                  <img src="../assets/img/quan.png" alt="" />
                </div>
              </div>
            </div>
            <div class="tuandui-3-four">
              <div class="tuandui-3-four-box" @mouseover="fn(4)">
                <span>4</span>
                <div
                  class="tuandui-3-four-box-hover"
                  :class="{ active: state == 4 }"
                >
                  <img src="../assets/img/quan.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </el-col>
    </el-row>
    <!-- 主体三 团队 结束 -->
    <!-- 主体四 品质 开始 -->
    <div class="main-4">
      <div class="quality"></div>
      <div class="quality-text" :class="{testenter6: testShow6 }">
        <div class="quality-text1">贴切关心好服务</div>
        <div class="quality-text2">
          萌宠医院联手LOVEAROUND,选用人类食品加工厂进行生产制作，制造方通过ISO22000系统认证。
          <br />
          产品全部通过中国科学院化学研究所分析测试中心超过50项的营养指标严格测试，所有指标符合AAFCO规定。
          <br />
          与富邦保险集团达成战略合作，为产品投保1000万元人民币的产品责任险，解决爱宠之人的后顾之忧。
        </div>
        <div class="quality-text3">
          <img src="../assets/img/16.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 主体四 品质 结束 -->
    <!-- 主体五 签名 开始 -->
    <div class="main-5">
      <div class="signature" :class="{testenter7: testShow7 }">
        <div class="signature1">
          <span>他们说</span>
          <span>你不能改变世界</span>
          <span>但是你却能改变我们的生活</span>
        </div>
      </div>
    </div>
    <!-- 主体五 签名 结束 -->
    <!-- 主体六 图片 开始 -->
    <div class="main-6">
      <div class="main-6-img"></div>
    </div>
    <!-- 主体六 图片 结束 -->
  </div>
  </div>
</template>

<script>
import "../assets/CSS/quanju.css";
export default {
  data() {
    return {
      testShow: false,
      testShow2: false,
      testShow3: false,
      testShow4: false,
      testShow5: false,
      testShow6: false,
      testShow7: false,
      state: 1,
    };
  },
    mounted() {
    window.addEventListener("scroll", this.windowScroll);
  },
  methods: {
    fn(n) {
      this.state = n;
    },
    windowScroll() {
      // 滚动条距离页面顶部的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop);
      if (scrollTop >= 200) {
        this.testShow = true;
      }
      if (scrollTop >= 520) {
        this.testShow2 = true;
      }
      if (scrollTop >= 1034) {
        this.testShow3 = true;
      }
      if (scrollTop >= 1610) {
        this.testShow4 = true;
      }
      if (scrollTop >= 1900) {
        this.testShow5 = true;
      }
      if (scrollTop >= 2252) {
        this.testShow6 = true;
      }
      if (scrollTop >= 2770) {
        this.testShow7 = true;
      }


  },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.windowScroll);
  },
}
</script>

<style sopced>
    @import url('../assets/CSS/jianjie.css');
</style>