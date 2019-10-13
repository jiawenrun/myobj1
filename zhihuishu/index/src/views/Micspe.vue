<template>
  <div>
    <Tophead class="toubu"></Tophead>

    <div class="bannerhhh"  @click="dialogTableVisible = true">
      <!-- 视频 -->
    </div>
     <el-dialog :visible.sync="dialogTableVisible"  :show-close="false" :modal="false" :close-on-click-modal="true" :close-on-press-escape="true" style="background-color: rgba(0, 0, 0, 0.4);">
            <video
            src="//video.zhihuishu.com/zhs/ablecommons/demo/201903/4332c7470c4644918f4a799b9e3c9f64_512.mp4"
            controls="controls"
            autoplay="autoplay"
            width="100%"
            height="100%"
            loop="loop"
            v-if="dialogTableVisible"
          ></video>
        </el-dialog>
    <!-- 组件 -->
    <!-- <Mynav class="guding tguding" > -->
    <div v-bind:class="{'zhao-shi-xueyuan':isxueyuan}" ref="xueyuan">
      <div class="nav">
      <div class="left">
        <ul class="menu">
          <li class="item c1" href="#">招生简章</li>
          <li class="item c2" href="#">实习机会</li>
          <li class="item c3" href="#">学院概况</li>
        </ul>
      </div>
      <div class="right">
        <p>
          招生咨询
          <span>15221524679</span>
        </p>

        <a  @click="tobaoming">立刻报名</a>
      </div>
    </div>
    </div>
    
    <!-- </Mynav> -->

    <!-- 组件 -->
    <div class="con">
      <div class="blcok1">
        <img
          src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/275bbbc4bfc54abcb5dccd4964400324.png"
        />
      </div>

      <div class="blcok2">
        <img
          src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/310bceb4239c490c8a6a9c5ba71d5028.png"
        />
      </div>
      <div class="blcok3" id="App">
        <!-- -->
        <div
          class="blc"
          v-for="(item,index) in Curriculum"
          :key="index"
          @mouseover="mouseOver(index)"
          @mouseleave="mouseLeave(index)"
          :class="{activee:old==index}"
        >
          <!--  -->
          <div class="blc1">
            <h3>{{item.lesson}}</h3>
          </div>
          <!-- -->
          <div class="blc2">
            <img :src="item.bookpicture" />
          </div>
          <!-- -->
          <div class="blc3 same" id="first">{{item.titile}}</div>
          <!--  -->
          <div class="blc4 same">{{item.explainone}}</div>
          <!--  -->
          <div class="blc5 same">{{item.explaintwo}}</div>
          <!--  -->
          <div class="blc6 same">{{item.explainthree}}</div>
          <!--  -->
        </div>
      </div>

      <div class="center1"></div>

      <div class="center2" id="App">
        <div class="showVideo2" v-for="(item,index) in Meetingclass" :key="index">
          <div class="sone">
            <h3>{{item.cdate}}</h3>
          </div>
          <div class="stwo">
            <h4>{{item.title}}</h4>
          </div>
          <div class="sthree">
            <p>{{item.introductiono}}</p>
            <p>{{item.introduction}}</p>
          </div>
          <div class="sfour">
            <img :src="item.videos" />
          </div>
        </div>
      </div>

      <div class="center3" id="App">
        <h2>学习策划团队</h2>
        <div class="team" id="App">
          <div
            class="cente"
            v-for="(item,index) in Learnteam"
            :key="index"
            @mouseover="mouseOver1(index)"
            @mouseleave="mouseLeave1(index)"
            :class="{act:action==index}"
          >
            <div class="cen1">
              <img :src="item.pictrue" />
            </div>
            <div class="cen2">
              <h4>{{item.name}}</h4>
            </div>
            <div class="cen3">
              <span>{{item.positionone}}</span>
            </div>
            <div class="cen3">
              <span>{{item.positiontwo}}</span>
            </div>
            <div class="cen3">
              <span>{{item.positionthree}}</span>
            </div>
            <div class="cen4">
              <span>{{item.speak}}</span>
            </div>
            <div class="cen4">
              <span>{{item.tittle}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="blcok4">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/097bcaabe6ed4c4a8e47ab6999cc6016.jpg"
      />
    </div>

    <div class="blcok5">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/31684ed45b5b424abeffd70c4cb6644a.png"
      />
    </div>

    <div class="blcok6">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/a0b5861733e44309badca92e76a9623b.png"
      />
    </div>

    <div class="blcok7">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/77d84a825e30494382ce0cc3d93258bb.png"
      />
    </div>
    <div class="blcok8">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/b20ef15d03984b1bb5de6565147a8d86.png"
      />
    </div>
    <div class="blcok9">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/39b871e63e7b4bd19bd73b22bf0841e0.png"
      />
    </div>
    <div class="blcok10">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/3e34dafacf134234820afe9e75df9ac7.png"
      />
    </div>
    <div class="blcok11">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/f5c794d2efc1487f98039cc9b634286d.png"
      />
    </div>
    <div class="blcok12">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/69886de3cb354c99b0a416bf1d270fc6.png"
      />
    </div>
    <div class="blcok13">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/eac4fd0073304703b8441d99f1503a9e.png"
      />
    </div>
    <div class="blcok14">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/ed40a4eb786441b2bfdea8b86793510a.png"
      />
    </div>
    <div class="blcok15">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/7c20b758c53d4e6abd6bb4b6079f4c91.png"
      />
    </div>
    <div class="blcok16">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/ef7ffcab7717497380b9c68af3361d7d.png"
      />
    </div>

    <div class="blcok17">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/404cf8c47ba04644865d705d33e28a86.png"
      />
    </div>
    <div class="blcok18">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/0024cde4b00b481a9e90b4b26ff93f7a.png"
      />
    </div>
    <div class="blcok19">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/90d9c858cf3d4e51ab377b0d6d2987f6.png"
      />
    </div>
    <div class="blcok20">
      <img
        src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/00e473b7f1a5401dbef73d1bc821192a.png"
      />
    </div>
    <div class="blcok21">
      <img
        src="https://image.zhihuishu.com/zhs/ablecommons/demo/201905/f0fa4da3c2db44448c97ab8ce8aae93f.jpg"
      />
    </div>
    <div style="height:70px"></div>
    <Botnav></Botnav>
  </div>
</template>

<script>
// window.onscroll = function() {
//   // console.log(pageYOffset)
//   if(pageYOffset>300){
//     this.isxueyuan=true
//   }
// };
export default {
  name: "Micspe",
  data() {
    return {
      Learnteam: [],
      Curriculum: [],
      Meetingclass: [],
      old: -1,
      action: -1,
      isxueyuan:false,
       dialogTableVisible: false
    };
  },
  created() {
    this.Mic();
  },

  methods: {
    tobaoming:function(){
      this.$router.push({path:"/baoming"})
    },
    gjzz:function(){

    },
    Mic: function() {
      this.axios
        .get("/getLearn/getLearnnn")
        .then(response => {
          this.Learnteam = response.data;
          // console.log(111,response);
        })
        .catch(function(error) {
          console.log(error);
        });

      this.axios
        .get("/getCul/getCulll")
        .then(response => {
          this.Curriculum = response.data;
          // console.log(333,response);
        })
        .catch(function(error) {
          console.log(error);
        });

      this.axios
        .get("/getMeeting/getMeetinggg")
        .then(response => {
          this.Meetingclass = response.data;
          // console.log(111,response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    // 移入
    mouseOver(index) {
      this.old = index;
    },
    mouseLeave() {
      this.old = -1;
    },

    mouseOver1(index) {
      this.action = index;
    },
    mouseLeave1() {
      this.action = -1;
    }
  },
  components: {
    // HelloWorld
  },
  mounted(){
   
    window.onscroll=()=>{
      // console.log(pageYOffset)
       if(pageYOffset>650){
       this.isxueyuan=true
    }else{
      this.isxueyuan=false
    }
      // console.log(pageYOffset)
      // if(pageYOffset>100){
      //   this.isxueyuan=true
      //   console.log(1)
      // }
    }
    // this.$nextTick(function() {
    //   // 监听当前组件的滚动事件
    //   this.box = this.$refs.xueyuan;
    //   this.box.addEventListener('scroll', ()=> {
    //     console.log(this.$refs.xueyuan.scrollTop)
    //     // if(this.$refs.xueyuan.scrollTop > 0) {   //显示下拉loading，展示更多数据
    //     //   this.handleScroll();
    //     // }
    //   },false)
    // });
  }
};
</script>



<style scoped>
.zhao-shi-xueyuan{
  width: 100%;
  position:fixed;
  top: 0;
  z-index: 1000;
}
.blcok21 > img {
  width: 100%;
  height: 100%;
}
.blcok21 {
  width: 80%;
  height: 343px;
  margin: 0 auto;
}
.blcok20 > img {
  width: 100%;
  height: 100%;
}
.blcok20 {
  width: 80%;
  height: 310px;
  margin: 0 auto;
}
.blcok19 > img {
  width: 100%;
  height: 100%;
}
.blcok19 {
  width: 80%;
  height: 200px;
  margin: 0 auto;
}
.blcok18 > img {
  width: 100%;
  height: 100%;
}
.blcok18 {
  width: 80%;
  height: 312px;
  margin: 0 auto;
}
.blcok17 > img {
  width: 100%;
  height: 100%;
}
.blcok17 {
  width: 80%;
  height: 240px;
  margin: 0 auto;
}
.blcok16 > img {
  width: 100%;
  height: 100%;
}
.blcok16 {
  width: 80%;
  height: 320px;
  margin: 0 auto;
}
.blcok15 > img {
  width: 100%;
  height: 100%;
}
.blcok15 {
  width: 80%;
  height: 256px;
  margin: 0 auto;
}
.blcok14 > img {
  width: 100%;
  height: 100%;
}
.blcok14 {
  width: 80%;
  height: 540px;
  margin: 0 auto;
}
.blcok13 > img {
  width: 100%;
  height: 100%;
}
.blcok13 {
  width: 80%;
  height: 262px;
  margin: 0 auto;
}
.blcok12 > img {
  width: 100%;
  height: 100%;
}
.blcok12 {
  width: 80%;
  height: 400px;
  margin: 0 auto;
}
.blcok11 > img {
  width: 100%;
  height: 100%;
}
.blcok11 {
  width: 80%;
  height: 200px;
  margin: 0 auto;
}
.blcok10 > img {
  width: 100%;
  height: 100%;
}
.blcok10 {
  width: 80%;
  height: 353px;
  margin: 0 auto;
}
.blcok9 > img {
  width: 100%;
  height: 100%;
}
.blcok9 {
  width: 80%;
  height: 280px;
  margin: 0 auto;
}
.blcok8 > img {
  width: 100%;
  height: 100%;
}
.blcok8 {
  width: 80%;
  height: 200px;
  margin: 0 auto;
}
.blcok7 > img {
  width: 100%;
  height: 100%;
}
.blcok7 {
  width: 80%;
  height: 282px;
  margin: 0 auto;
}
.blcok6 > img {
  width: 100%;
  height: 100%;
}
.blcok6 {
  width: 80%;
  height: 160px;
  margin: 0 auto;
}
.blcok5 > img {
  width: 100%;
  height: 100%;
}
.blcok5 {
  width: 80%;
  height: 590px;
  margin: 0 auto;
}
.blcok4 > img {
  width: 100%;
  height: 100%;
}
.blcok4 {
  width: 80%;
  height: 420px;
  margin: 0 auto;
}

.center3 .cen4 {
  width: 260px;
  height: 22px;
}
.center3 .cen4 {
  width: 260px;
  height: 22px;
  text-align: center;
}
.center3 .cente .cen4 > span {
  font-size: 14px;
  color: #9b9b9b;
  text-align: center;
  line-height: 22px;
}
.center3 .cente div > span {
  font-size: 14px;
  color: #9b9b9b;
  text-align: center;
  line-height: 22px;
}
.center3 .cente .cen3 {
  text-align: center;
  width: 260px;
  height: 22px;
}
.center3 .cente .cen2 > h4 {
  font-size: 18px;
  color: #212121;
  text-align: center;
  line-height: 36px;
}
.center3 .cente .cen2 {
  width: 260px;
  height: 36px;
}
.center3 .cente .cen1 > img {
  width: 120px;
  height: 120px;
  margin-left: 70px;
}
.center3 .cente .cen1 {
  width: 260px;
  height: 120px;
}
/* .center3 .team{

} */
.center3 .team {
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.center3 > h2 {
  font-size: 30px;
  color: #212121;
  text-align: center;
  padding-top: 70px;
}
.center3 {
  margin-top: 10px;
  width: 100%;
  height: 520px;
}

.center2 .showVideo2 .sfour > img {
  width: 100%;
  height: 100%;
}
.center2 .showVideo2 .sfour {
  width: 340px;
  height: 160px;
}
.center2 .showVideo2 .sthree > p {
  font-size: 14px;
  color: #9b9b9b;
  padding-left: 16px;
}
.center2 .showVideo2 .sthree {
  width: 340px;
  height: 52px;
}
.center2 .showVideo2 .stwo > h4 {
  font-size: 24px;
  color: #dddddd;
  padding: 0 0px 15px 15px;
}
.center2 .showVideo2 .stwo {
  width: 340px;
  height: 31px;
}
.center2 .showVideo2 .sone > h3 {
  font-size: 36px;
  color: #9b9b9b;
  padding: 24px 15px;
  line-height: 48px;
}
.center2 .showVideo2 .sone {
  width: 340px;
  height: 96px;
}
.center2 .showVideo2 {
  width: 340px;
  height: 360px;
  background-color: rgb(52, 52, 53);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}

.center3 .act {
  position: relative;
  bottom: 10px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
}

.center2 .showVideo2:nth-child(2) {
  align-self: center;
}
.center2 {
  width: 100%;
  height: 510px;
  /*   background-color: rgb(224, 182, 66); */
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/766f1b083ec74e16b8bc3d8e901283f5.jpg");
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
.center1 {
  width: 80%;
  margin: 0 auto;
  height: 570px;

  background-position: center;
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/eb768ad62c5046cc9837de7465c36f58.jpg");
}

.blc .same {
  font-size: 12px;
  color: #9b9b9b;
}
.blcok3 .blc .blc6 {
  width: 210px;
  height: 34px;
}
.blcok3 .blc .blc5 {
  width: 210px;
  height: 34px;
}
.blcok3 .blc .blc4 {
  width: 210px;
  height: 42px;
}

.blcok3 .blc .blc3 {
  width: 70px;
  height: 16px;
}
.blcok3 .blc .blc2 > img {
  width: 210px;
  height: 140px;
}
.blcok3 .blc .blc2 {
  width: 210px;
  height: 140px;
}

.blcok3 .blc .blc1 > h3 {
  font-size: 18px;
  color: #ddd;
  margin-bottom: 15px;
  text-align: center;
}
.blcok3 .blc .blc1 {
  width: 210px;
  height: 20px;
  text-align: center;
}
.blcok3 .blc {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 230px;
  height: 342px;
  background-color: #212121;
}
.blcok3 {
  width: 100%;
  height: 372px;
  margin-bottom: -80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.blcok3 > img {
  width: 100%;
  height: 388px;
  z-index: 1000;
}

.blcok3 .activee {
  position: relative;
  bottom: 10px;
}

.blcok3 {
  display: flex;
  align-items: flex-end;
  width: 80%;
  height: 550px;
  margin-left: 135px;
  margin-top: -100px;
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201903/5342b068ba6f48b6a98f06251e2230ab.png");
  background-repeat: no-repeat;
}

.blcok2 > img {
  width: 1000px;
  height: 332px;
  margin-left: 175px;
}

.blcok2 {
  width: 100%;
  height: 332px;
  z-index: 100;
}
.blcok1 > img {
  width: 100%;
  height: 100%;
}
.blcok1 {
  width: 80%;
  height: 579px;
  margin: 0 auto;
}
.con {
  width: 100%;
  /* height: 2000px;  */
  margin-top: -50px;
  background: #f5f5f5;
}
/* .tguding .c3{
  width:50px;
  height: 50px;
  background-color: rgb(238, 56, 162);
}
.tguding .c2{
  width:50px;
  height: 50px;
  background-color: rgb(253, 117, 38);
}
.tguding .c1{
  width:50px;
  height: 50px;
  background-color: chartreuse;
  position: absolute;
  left: 200px;
  top:100px;
}
 */

/* 组件化 */
.right > a {
  float: left;
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  margin-top: 26px;
  border: none;
  width: 160px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background: #d0021b;
}
.right > p > span {
  float: right;
  font-size: 16px;
  font-weight: bold;
  color: #212121;
}
.right > p {
  font-size: 14px;
  color: #7c7c7c;
  float: left;
  margin: 25px 30px 0 0;
  width: 110px;
  line-height: 25px;
  text-align: right;
}
.right {
  width: 300px;
  height: 100px;
  /* background: rgb(144, 233, 92); */
}

.left > ul > li {
  font-size: 20px;
  cursor: pointer;
  color: #212121;
  font-weight: bold;
  float: left;
  margin: 0 35px;
  position: relative;
}
.left > ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  width: 450px;
  height: 100px;
  /* background: rgb(233, 92, 191); */
}

.nav {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  width: 100%;

  /*   width: 1074px; */
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 100px;
  background: white;

  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  top: 0px;
  z-index: 1000;
}

.tguding {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  width: 100%;
}
.guding {
  z-index: 1000;
}
.bannerhhh {
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/7c6e6331b94044bdbc5d2537b478f01e.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 540px;
}
.toubu {
  position: relative;
}
* {
  list-style: none;
}
</style>

