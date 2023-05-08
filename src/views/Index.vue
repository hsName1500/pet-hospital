<template>
  <div class="box">
    <!-- 轮播图 -->
    <div class="lbt">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide-1">
          <div class="txt">
            <p>用心去关爱您的宝贝</p>
            <p>让我们的陪伴守护你和它的陪伴</p>
            <p>了解更多</p>
          </div>
          <img src="../assets/img/lbt001.jpg" alt="" />
        </swiper-slide>
        <swiper-slide class="slide-2">
          <div class="txt">
            <p>就爱你"挑三拣四"的傲娇</p>
            <p>精品鲜肉制成,再挑食也能满足</p>
            <p>了解更多</p>
          </div>
          <img src="../assets/img/01.png" alt=""
        /></swiper-slide>
        <swiper-slide class="slide-3">
          <div class="txt">
            <p>猫猫狗狗,一起Go!Go!</p>
            <p>让宠物变得更加充满活力</p>
            <p>了解更多</p>
          </div>
          <img src="../assets/img/lbt003.png" alt=""
        /></swiper-slide>
        <swiper-slide class="slide-4">
          <div class="txt">
            <p>我们彼此都需要守护</p>
            <p>你和它的陪伴,是好的秘密</p>
            <p>了解更多</p>
          </div>
          <img src="../assets/img/03.png" alt=""
        /></swiper-slide>
        <div
          class="swiper-pagination swiper-pagination-white"
          slot="pagination"
        ></div>
        <!-- <div
          class="swiper-button-prev swiper-button-white"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next swiper-button-white"
          slot="button-next"
        ></div> -->
      </swiper>
    </div>
    <!-- 第一层 -->
    <div class="floor floorone">
      <div class="floor-top">
        <div class="itembox" :class="{ boxUpTo10: true, boxUp: testShow }">
          <div class="item">
            <img src="../assets/img/1534488547989.png" alt="" />
            <h5><a href="">LoveAround™</a></h5>
            <p>萌宠@冻干生骨肉</p>
            <p>鸡肉口味&nbsp;全期猫粮</p>
            <p>人类食用级标准</p>
          </div>
          <div class="item">
            <img src="../assets/img/1534488579986.png" alt="" />
            <h5><a href="">LoveAround™</a></h5>
            <p>萌宠@冻干生骨肉</p>
            <p>鸡肉口味&nbsp;全期猫粮</p>
            <p>人类食用级标准</p>
          </div>
          <div class="item">
            <img src="../assets/img/1534488608520.png" alt="" />
            <h5><a href="">LoveAround™</a></h5>
            <p>萌宠@冻干生骨肉</p>
            <p>鸡肉口味&nbsp;全期猫粮</p>
            <p>人类食用级标准</p>
          </div>
          <div class="item">
            <img src="../assets/img/1534488631357.png" alt="" />
            <h5><a href="">LoveAround™</a></h5>
            <p>萌宠@冻干生骨肉</p>
            <p>鸡肉口味&nbsp;全期猫粮</p>
            <p>人类食用级标准</p>
          </div>
        </div>
      </div>
      <div class="floor-bot">
        <div class="point" :class="{ boxUp2To10: true, boxUp2: testShow2 }">
          <div>用心呵护,更多陪伴</div>
          <p>我们以踏实的匠心,关注宠物生活点滴,用品质宠食善待爱宠之人</p>
          <p>只为让爱宠与你有更多欢乐陪伴</p>
        </div>
      </div>
    </div>
    <!-- 第二层 -->
    <div class="floor floortwo">
      <div class="floor-top">
        <div class="er-top">
          <div>
            <img src="../assets/img/09.png" alt="" />
            <p>满足体格</p>
          </div>
          <div>
            <img src="../assets/img/10.png" alt="" />
            <p>专业治疗</p>
          </div>
          <div>
            <img src="../assets/img/11.png" alt="" />
            <p>高效方案</p>
          </div>
          <div>
            <img src="../assets/img/12.png" alt="" />
            <p>活力四射</p>
          </div>
          <div>
            <img src="../assets/img/13.png" alt="" />
            <p>健美体型</p>
          </div>
          <div>
            <img src="../assets/img/14.png" alt="" />
            <p>靓丽毛发</p>
          </div>
        </div>
      </div>
      <div class="floor-bot">
        <div class="point" :class="{ boxUp2To10: true, boxUp2: testShow3 }">
          <div>还原天性，一口就妙不可言</div>
          <p>猫和狮虎同属猫科动物，是食肉动物</p>
          <p>狗遗传了狼的基因，更偏好吃肉</p>
          <p>我们为猫犬提供更多肉类蛋白，满足他们的饮食需求，还原强健的天性</p>
        </div>
      </div>
    </div>
    <!-- 第三层 -->
    <div class="floor floorthree">
      <div class="floor-top">
        <div class="san-top">
          <div>加拿大专业宠物方案,更显专业营养</div>
          <span></span>
          <p>
            来自加拿大的Serge
            Boutet作为世界级宠物专家,服务过普瑞纳、希尔斯等宠物公司,
          </p>
          <p>以31年宠物治疗经验,为猫犬提供全面均衡的宠物方案。</p>
          <div class="icon-line">
            <img src="../assets/img/icon-line.png" alt="" />
          </div>
          <div class="icon">
            <div class="icon-child">
              <div>
                <span>31</span>
                <span>年</span>
              </div>
              <!-- <img src="../assets/img/i-line.png" alt="" /> -->
              <p>科研工作</p>
            </div>
            <div class="icon-child">
              <div>
                <span>28</span>
                <span>年</span>
              </div>
              <!-- <img src="../assets/img/i-line.png" alt="" /> -->
              <p>临床研究</p>
            </div>
            <div class="icon-child">
              <div>
                <span>16</span>
                <span>年</span>
              </div>
              <!-- <img src="../assets/img/i-line.png" alt="" /> -->
              <p>专业治疗</p>            
            </div>
          </div>
        </div>
      </div>
      <div class="floor-bot three-bot">
        <div class="point" :class="{ boxUp2To10: true, boxUp2: testShow4 }">
          <div>可靠品质，让爱宠和你放心</div>
          <p>所有产品投保1000万产品责任险</p>
          <p>超过50项中科院化学研究所检测</p>
          <p>符合AAFCO规定要求</p>
          <p>原材料经农业安全检测</p>
          <img src="../assets/img/16.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";

export default {
  // name: "swiper-example-fade-effect",
  // title: "Fade effect",
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  data() {
    return {
      onscroll: "",
      testShow: false,
      testShow2: false,
      testShow3: false,
      testShow4: false,
      swiperOption: {
        effect: "fade",
        loop: true,
        autoplay: {
          // 利用对象做详细配置
          // 滚动间隔时长
          delay: 4000,
          // 用户操作后是否禁用自动滚动: 假, 代表不禁用
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", this.windowScroll);
  },
  watch: {
    onscroll(to) {
      // console.log(to);
      if (to == 681) {
        this.testShow = true;
      }
    },
  },
  methods: {
    windowScroll() {
      // 滚动条距离页面顶部的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.onscroll = scrollTop;
      // console.log(scrollTop, this.onscroll, this.testShow);
      if (scrollTop >= 377) {
        this.testShow = true;
      }
      if (scrollTop >= 870) {
        this.testShow2 = true;
      }
      if (scrollTop >= 1760) {
        this.testShow3 = true;
      }
      if (scrollTop >= 2700) {
        this.testShow4 = true;
      }
    },
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.windowScroll);
  },
};
</script>

<style src="../assets/CSS/index.css"></style>
<style lang="scss" scoped>
.swiper-slide-active > img {
  animation: lbtdh 4s 1 linear !important;
}
.swiper-slide-active > .txt {
  animation: txtdh 4s;
  animation-timing-function: linear;
}
@keyframes lbtdh {
  0% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes txtdh {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
