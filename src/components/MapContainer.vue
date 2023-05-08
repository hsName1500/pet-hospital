<template>
    <div>
      <div
    id="container"
    style="width: 570px; height: 575px;"
  >
  </div>
    </div>

</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  props:['p'],
  data() {
    return {
      map: null,
      data:null,
    };
  },
  watch:{
    p(to){
      // console.log(to);
      let a = to.split(',')[0]
      let b = to.split(',')[1]
      this.initMap(a,b)
    }
  },
  mounted() {
    this.initMap(114.057939,22.543527);

    // this.axios.get('http://127.0.0.1:4021/v1/hos/local').then(res=>{
    //     console.log(res);
    //     this.data = res.data
    // })
  },
  methods: {
    initMap(x,y) {
      AMapLoader.load({
        key: "7bfbe3ab215345f405c23b5eed760ca8", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Marker'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 17, //初始化地图级别
            center: [x, y], //初始化地图中心点位置
          });
          var marker = new AMap.Marker({
            position: new AMap.LngLat(x,y), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: "萌宠医院",
          });

          // 将创建的点标记添加到已有的地图实例：
          this.map.add(marker);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#container {
  width: 400px;
  height: 400px;
  border-radius: 10px;
}
</style>
