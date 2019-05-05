<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="#/" class="router-link-active">首页</a> &gt;
        <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <div class="left-220" style="margin: 0px;">
            <div class="banner-nav">
              <ul>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>手机数码</span>
                    <p>
                      <span>手机通讯&nbsp;</span>
                      <span>摄影摄像&nbsp;</span>
                      <span>存储设备&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">手机数码</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">手机通讯</a>
                        <a href="/goods/43.html">摄影摄像</a>
                        <a href="/goods/43.html">存储设备</a>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--幻灯片-->
          <div class="left-705">
            <div class="banner-img">
              <div id="focus-box" class="focus-box">
                <ul class="slides">
                  <el-carousel height="341px">
                    <el-carousel-item v-for="item in sliderlist" :key="item.id">
                      <img :src="item.img_url" alt class="img-slider">
                    </el-carousel-item>
                  </el-carousel>
                  <a href="/goods.html">
                    <img
                      style="width: 100%;height:100%;"
                      src="http://39.108.135.214:8899/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg"
                      draggable="false"
                    >
                  </a>
                </ul>
                <ol class="flex-control-nav flex-control-paging">
                  <li>
                    <a class>1</a>
                  </li>
                  <li>
                    <a class="flex-active">2</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <!--/幻灯片-->
          <div class="left-220">
            <ul class="side-img-list">
              <li v-for="(item, index) in toplist" :key="index">
                <div class="img-box">
                  <label>{{index+1}}</label>
                  <img :src="item.img_url">
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html">{{item.title}}</a>
                  <span>{{item.add_time | formatTime}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="section">
      <div class="main-tit">
        <h2>手机数码</h2>
        <p>
          <a href="/goods/43.html">手机通讯</a>
          <a href="/goods/43.html">摄影摄像</a>
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li>
              <a href="#/site/goodsinfo/87" class>
                <div class="img-box">
                  <img
                    src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200046589514.jpg"
                  >
                </div>
                <div class="info">
                  <h3>华为（HUAWEI）荣耀6Plus 16G双4G版</h3>
                  <p class="price">
                    <b>2195</b>元
                  </p>
                  <p>
                    <strong>库存 60</strong>
                    <span>
                      市场价：
                      <s>2499</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#/site/goodsinfo/88" class>
                <div class="img-box">
                  <img
                    src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200059017695.jpg"
                  >
                </div>
                <div class="info">
                  <h3>苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）</h3>
                  <p class="price">
                    <b>5780</b>元
                  </p>
                  <p>
                    <strong>库存 198</strong>
                    <span>
                      市场价：
                      <s>6388</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#/site/goodsinfo/89" class>
                <div class="img-box">
                  <img
                    src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200119256512.jpg"
                  >
                </div>
                <div class="info">
                  <h3>小米（Mi）小米Note 16G双网通版</h3>
                  <p class="price">
                    <b>2299</b>元
                  </p>
                  <p>
                    <strong>库存 59</strong>
                    <span>
                      市场价：
                      <s>2699</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#/site/goodsinfo/90" class>
                <div class="img-box">
                  <img
                    src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200154277661.jpg"
                  >
                </div>
                <div class="info">
                  <h3>佳能（Canon） EOS 700D 单反套机</h3>
                  <p class="price">
                    <b>4799</b>元
                  </p>
                  <p>
                    <strong>库存 100</strong>
                    <span>
                      市场价：
                      <s>5099</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#/site/goodsinfo/91" class>
                <div class="img-box">
                  <img
                    src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200214471783.jpg"
                  >
                </div>
                <div class="info">
                  <h3>尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）</h3>
                  <p class="price">
                    <b>3180</b>元
                  </p>
                  <p>
                    <strong>库存 10</strong>
                    <span>
                      市场价：
                      <s>3150</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>-->
    <!-- 底部数据 -->
    <div class="section" v-for="(item, index) in sectionList" :key="index">
      <div class="main-tit">
        <h2>>{{item.catetitle}}</h2>
        <p>
          <a
            v-for="(it, i) in item.level2catelist"
            :key="i"
            href="/goods/43.html"
          >{{it.subcatetitle}}</a>

          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li v-for="(it, i) in item.datas" :key="i">
              <!-- <a href="#/site/goodsinfo/92" class> -->
              <router-link :to="'/detail/'+it.artID">
                <div class="img-box">
                  <img :src="it.img_url">
                </div>
                <div class="info">
                  <h3>{{it.artTitle}}</h3>
                  <p class="price">
                    <b>{{it.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{it.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{it.market_price}}</s>
                    </span>
                  </p>
                </div>
              <!-- </a> -->
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="main-tit">
        <h2>影音娱乐</h2>
        <p>
          <a href="/goods/43.html">平板电视</a>
          <a href="/goods/43.html">音响DVD</a>
          <a href="/goods/43.html">影音配件</a>
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li>
              <a href="#/site/goodsinfo/97" class>
                <div class="img-box">
                  <img
                    src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200258403759.jpg"
                  >
                </div>
                <div class="info">
                  <h3>三星（SAMSUNG）UA40HU5920JXXZ 40英寸4K超高清</h3>
                  <p class="price">
                    <b>3299</b>元
                  </p>
                  <p>
                    <strong>库存 100</strong>
                    <span>
                      市场价：
                      <s>3599</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#/site/goodsinfo/98" class>
                <div class="img-box">
                  <img
                    src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200314272543.jpg"
                  >
                </div>
                <div class="info">
                  <h3>奔腾（BNTN） 380功放+纽约至尊 套装家庭影院</h3>
                  <p class="price">
                    <b>4880</b>元
                  </p>
                  <p>
                    <strong>库存 10</strong>
                    <span>
                      市场价：
                      <s>5880</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#/site/goodsinfo/99" class>
                <div class="img-box">
                  <img
                    src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200318534459.jpg"
                  >
                </div>
                <div class="info">
                  <h3>飞利浦（PHILIPS）DVP3690 全高清DVD影碟机播放器</h3>
                  <p class="price">
                    <b>399</b>元
                  </p>
                  <p>
                    <strong>库存 100</strong>
                    <span>
                      市场价：
                      <s>499</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#/site/goodsinfo/100" class>
                <div class="img-box">
                  <img src="http://39.108.135.214:8899/imgs/FTuX2MTGiwOZjK-rjeZi4tls.jpg">
                </div>
                <div class="info">
                  <h3>飞利浦（PHILIPS）55PUF6092/T3 55英寸</h3>
                  <p class="price">
                    <b>2999</b>元
                  </p>
                  <p>
                    <strong>库存 49</strong>
                    <span>
                      市场价：
                      <s>2999</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#/site/goodsinfo/101" class>
                <div class="img-box">
                  <img
                    src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200333240710.jpg"
                  >
                </div>
                <div class="info">
                  <h3>Shinco/新科 S2300 无线麦克风 无线手持话筒 双手麦 KTV 舞台</h3>
                  <p class="price">
                    <b>199</b>元
                  </p>
                  <p>
                    <strong>库存 20</strong>
                    <span>
                      市场价：
                      <s>269</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="main-tit">
        <h2>服装类</h2>
        <p>
          <a href="/goods/43.html">男装</a>
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li>
              <a href="#/site/goodsinfo/102" class>
                <div class="img-box">
                  <img src="http://39.108.135.214:8899/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg">
                </div>
                <div class="info">
                  <h3>Hazzys哈吉斯2017新款男士长袖衬衫纯棉修身英伦衬衫显瘦商务衬衣</h3>
                  <p class="price">
                    <b>800</b>元
                  </p>
                  <p>
                    <strong>库存 200</strong>
                    <span>
                      市场价：
                      <s>1000</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#/site/goodsinfo/103" class>
                <div class="img-box">
                  <img src="http://39.108.135.214:8899/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg">
                </div>
                <div class="info">
                  <h3>骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫衣</h3>
                  <p class="price">
                    <b>198</b>元
                  </p>
                  <p>
                    <strong>库存 100</strong>
                    <span>
                      市场价：
                      <s>297</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      catelist: [],
      sliderlist: [],
      toplist: [],
      // 底部区域数据
      sectionList: []
    };
  },
  created() {
    this.$axios
      .get("/site/goods/gettopdata/goods")
      .then(res => {
        // console.log(res);
        this.catelist = res.data.message.catelist;
        this.sliderlist = res.data.message.sliderlist;
        this.toplist = res.data.message.toplist;
      });
    // 底部数据
    this.$axios
      .get("/site/goods/getgoodsgroup")
      .then(res => {
        console.log(res);
        this.sectionList = res.data.message;
      });
  },
  filters: {
    formatTime(value) {
      return value.split("T")[0];
    }
  }
};
</script>

<style>
.img-slider {
  width: 100%;
  height: 100%;
}
</style>
