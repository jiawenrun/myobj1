    
<template>
  <div class="big">
    <Tophead class="topp"></Tophead>

    <div class="footone">
      <div class="onef">
        <div class="a">
          <div class="a1">
            <img
              src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/83ac94ef32014b2ba63daa859a1734fc.png"
            />
          </div>
          <div class="a2">
            <h2>知道APP</h2>
            <h6>只为遇见更好的你</h6>
          </div>
        </div>
        <div class="b">
          <a href>
            <div class="b1">
              <span @mouseover="mouseOver" @mouseleave="mouseLeave">我是学生</span>
              <div class="box triangle" :style="active" style="display:none">
                <!-- 伪类做三角 -->
                <img
                  src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/91e8d48b51944d5d839b444b89754b7c.png"
                />
              </div>
            </div>
          </a>
          <a href>
            <div class="b2">
              <span @mouseover="mouseOver1" @mouseleave="mouseLeave1">我是老师</span>
              <div class="box triangle" :style="active1" style="display: none">
                <!-- 伪类做三角 -->
                <img
                  src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/a5e3412e90ef4924b83b4439dff0b8f6.png"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
      <img
        class="tuone"
        src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/2a7459d2ce9a4857b45b26883880a3b9.png"
      />
      <img
        class="tutwo"
        src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/e9f95952bcd648c18442ccc27bc3d21c.png"
      />
    </div>

    <!-- 还没写 -->
    <div class="footwo">
      <h2 class="fooh">用手机随时学习</h2>
      <div class="botto" id="App">
        <div class="son" v-for="(item,index) in Apploads" :key="index">
          <div class="son1">
            <img :src="item.picture" />
          </div>
          <div class="son2">
            <h2>{{item.title}}</h2>
          </div>
          <div class="son3">
            <span>{{item.explainone}}</span>
          </div>
          <div class="son4">
            <span>{{item.explaintwo}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="foothree">
      <div class="thwof">
        <h2 class="uses">用手机上一堂课</h2>
        <ul>
          <li>
            <img
              src="https://image.zhihuishu.com/zhs/able-commons/demo/201908/0d6fba3ad691440f9e4c6b4aed2f6f6e.png"
            />
            <h2>课前</h2>
            <span>/高效预习</span>
          </li>
          <li>
            <img
              src="https://image.zhihuishu.com/zhs/able-commons/demo/201908/0d6fba3ad691440f9e4c6b4aed2f6f6e.png"
            />
            <h2>课前</h2>
            <span>/高效预习</span>
          </li>
          <li>
            <img
              src="https://image.zhihuishu.com/zhs/able-commons/demo/201908/0d6fba3ad691440f9e4c6b4aed2f6f6e.png"
            />
            <h2>课前</h2>
            <span>/高效预习</span>
          </li>
        </ul>
      </div>
      <img
        class="thwor"
        src="https://image.zhihuishu.com/zhs/able-commons/demo/201908/1d1a2dba1f8c4dcd8503b802927dd141.png"
      />
    </div>

    <div class="foofour">
      <img
        class="four"
        src="https://image.zhihuishu.com/zhs/ablecommons/demo/201909/880734694dba4ec9913be88fc18dba61.png"
      />
      <div class="fourworld">
        <h2>如何用知道进行学习</h2>
        <span>智慧树不断探索更好、更有效的学习方式</span>
        <span>帮助你随时随地轻松完成在线修读、作业 、考试</span>
        <div class="lookvideo" @click="dialogTableVisible = true">
          观看视频
          <!-- <div class="fl4-wapper"></div> -->
        </div>
        <el-dialog :visible.sync="dialogTableVisible"  :show-close="false" :modal="false" :close-on-click-modal="true" :close-on-press-escape="true" style="background-color: rgba(0, 0, 0, 0.4);">
            <video
            src="https://video.zhihuishu.com/zhs/ablecommons/demo/201909/d1e9068090824c85a2d33372bde0fb0c.mp4"
            controls="controls"
            autoplay="autoplay"
            width="100%"
            height="100%"
            loop="loop"
            v-if="dialogTableVisible"
          ></video>
        </el-dialog>
      </div>
    </div>

    <div class="foofive">
      <h3>下载智慧树移动端产品</h3>
      <ul>
        <li>
          <img
            src="https://image.zhihuishu.com/zhs/able-commons/demo/201908/0d623e167b914abe9e8c3774fbaa1672.png"
          />
          <h2>我是学生</h2>
          <span class="zhidao">
            知道下载
            <div class="zhidaoimg">
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/206c5d30659643e6b1b79b33949f6cbc.png"
                alt
              />
            </div>
          </span>
        </li>
        <li>
          <img
            src="https://image.zhihuishu.com/zhs/able-commons/demo/201908/0f1a933a652d4a7e9211a85b8c2fc3c6.png"
          />
          <h2>我是老师</h2>
          <span class="zhidao">
            知道-教师版下载
            <div class="zhidaoimg">
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/206c5d30659643e6b1b79b33949f6cbc.png"
                alt
              />
            </div>
          </span>
        </li>
        <li>
          <img
            src="https://image.zhihuishu.com/zhs/able-commons/demo/201908/b42a5b77fcd94befa97d080364207572.png"
          />
          <h2>我是学校管理者</h2>
          <span class="zhidao">
            树下APP下载
            <div class="zhidaoimg">
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/206c5d30659643e6b1b79b33949f6cbc.png"
                alt
              />
            </div>
          </span>
        </li>
      </ul>
    </div>
    <Botnav></Botnav>
  </div>
</template>





<script>
export default {
  data() {
    return {
      active: "",
      active1: "",
      Apploads: [],
       dialogTableVisible: false,
    };
  },
  created() {
    this.axios
      .get("/getAppload/getApploaddd")
      .then(response => {
        this.Apploads = response.data;
        // console.log(111, response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    // 移入
    mouseOver() {
      this.active = "display: block";
    },
    mouseLeave() {
      this.active = "";
    },
    mouseOver1() {
      this.active1 = "display: block";
    },
    // 移出
    mouseLeave1() {
      this.active1 = "";
    },
    
       
    
  }
};
</script>





<style>

.topp {
  z-index: 10;
  
}
.footone {
  margin-top: 80px;
  width: 100%;
  height: 700px;

  /*   background-color: aqua; */
  position: relative;
}
.onef {
  width: 387px;
  height: 268px;
  /*  background-color: rgb(52, 58, 58); */
  position: absolute;
  left: 150px;
  top: 190px;
}
.onef .a {
  width: 387px;
  height: 120px;
  /*  background-color: rgb(14, 163, 163); */
  display: flex;
  justify-content: space-between;
}
.onef .a .a1 {
  width: 130px;
  height: 120px;
  /*    background-color: rgb(163, 14, 151); */
}
.onef .a .a1 > img {
  width: 100%;
  height: 100%;
}
.onef .a .a2 {
  width: 250px;
  height: 120px;
  /*    background-color: rgb(202, 65, 2); */
}
.onef .a .a2 > h2 {
  font-size: 56px;
  color: #2a2a2a;
  margin-top: 5px;
}
.onef .a .a2 > h6 {
  font-size: 28px;
  color: rgb(73, 72, 72);
  margin-top: -8px;
}
.onef .b {
  width: 387px;
  height: 148px;
  /* background-color: rgb(221, 205, 153); */
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.onef .b .b1 {
  width: 165px;
  height: 48px;
  background-color: rgb(19, 202, 202);
  border-radius: 25px;
  position: relative;
}
.onef .b1 .box {
  width: 120px;
  height: 120px;
  padding: 37px;
  position: absolute;
  left: -15px;
  top: 56px;
  background-color: rgb(245, 245, 245);
  border-radius: 12px;
  margin-top: 5px;
}
/*  .onef .b1>a .box:hover{
      display: block;
    } */

.onef .b2 .box {
  width: 120px;
  height: 120px;
  padding: 37px;
  position: absolute;
  left: 193px;
  top: 226px;
  background-color: rgb(245, 245, 245);
  border-radius: 12px;
  margin-top: 5px;
}
/* 伪类三角 */
.onef .b1 .triangle:before {
  content: "";
  position: absolute;
  top: -10px;
  left: 47%;
  border-bottom: 10px solid rgb(245, 245, 245);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.onef .b2 .triangle:before {
  content: "";
  position: absolute;
  top: -10px;
  left: 47%;
  border-bottom: 10px solid rgb(245, 245, 245);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.onef .b1 .box > img {
  margin-left: -15px;
  margin-top: -15px;
}
.onef .b .b1 > span {
  display: inline-block;
  text-align: center;
  line-height: 48px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  margin-left: 42px;
}
.onef .b .b2 {
  width: 165px;
  height: 48px;
  background-color: #475eec;
  border-radius: 25px;
}
.onef .b .b2 > span {
  display: inline-block;
  text-align: center;
  line-height: 48px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  margin-left: 42px;
}

.tuone {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 615px;
  height: 700px;
  z-index: 1;
}
.tutwo {
  width: 100%;
  height: 70px;

  position: absolute;
  right: 0;
  bottom: 0;
  /*     height: auto; */
  display: block;
}

.footwo {
  width: 100%;
  height: 768px;
  background-image: url("https://image.zhihuishu.com/zhs/able-commons/demo/201908/10ec3f76cb7e4718910e5cc032e33727.png");
}
.footwo .fooh {
  font-size: 48px;
  color: #2a2a2a;
  letter-spacing: 0.59px;
  text-align: right;
  line-height: 40px;
  text-align: right;
  padding-top: 180px;
  padding-right: 180px;
}
.footwo .botto {
  width: 100%;
  height: 300px;
  margin-top: 100px;
  /*  background-color: #3D84FF; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footwo .botto .son {
  width: 250px;
  height: 271px;
  /*  background-color: rgb(153, 22, 125); */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.footwo .son .son1 {
  width: 140px;
  height: 140px;
  /*   background-color: rgb(209, 168, 33); */
}
.footwo .son .son2 > h2 {
  font-size: 32px;
  color: #2a2a2a;
  letter-spacing: 0.4px;
  text-align: center;
  line-height: 40px;
  margin-bottom: 11px;
}
.footwo .son .son2 {
  width: 100%;
  height: 40px;
  /*   background-color: rgb(95, 33, 209); */
}
.footwo .son .son3 {
  width: 100%;
  height: 25px;
  /*   background-color: rgb(209, 33, 115); */
}

.footwo .son .son3 > span {
  font-size: 20px;
  color: #2a2a2a;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 25px;
  display: block;
}
.footwo .son .son4 {
  width: 100%;
  height: 25px;
  /*   background-color: rgb(245, 19, 19); */
}

.footwo .son .son4 > span {
  font-size: 20px;
  color: #2a2a2a;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 25px;
  display: block;
}

.foothree {
  position: relative;
  width: 100%;
  height: 768px;
  background-image: url("https://image.zhihuishu.com/zhs/able-commons/demo/201908/e2238b73323447ddbcd0d29e7f8091ca.png");
}
.thwof {
  width: 411px;
  height: 607px;
  position: absolute;
  left: 130px;
  top: 5px;
  /*   background-color: blue; */
}
.thwof .uses {
  font-size: 48px;
  color: #ffffff;
  letter-spacing: 0.59px;
  line-height: 40px;
  margin: 140px 0 116px;
  width: 411px;
}
.thwof ul > li {
  margin-bottom: 10px;
  list-style: none;
}
.thwof ul > li > img {
  position: absolute;
  width: 38px;
  height: 36px;
}
.thwof ul > li > h2 {
  margin-left: 35px;
  font-size: 36px;
  color: #ffffff;
  letter-spacing: 0.45px;
  line-height: 40px;
  padding-left: 16px;
  padding-right: 5px;
  display: inline-block;
  vertical-align: bottom;
}
.thwof ul > li > span {
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0.25px;
  line-height: 40px;
  position: relative;
  top: 8px;
}
.foothree .thwor {
  position: absolute;
  right: 200px;
  bottom: 0;
}

.foofour {
  width: 100%;
  height: 768px;
  background-color: #f3f3f6;
  position: relative;
}
.four {
  position: absolute;
  left: 170px;
}
.fourworld {
  width: 450px;
  height: 380px;
  /*   background-color: red; */
  position: absolute;
  right: 160px;
}
.fourworld > h2 {
  font-size: 48px;
  color: #2a2a2a;
  letter-spacing: 0.67px;
  text-align: right;
  line-height: 30px;
  margin-bottom: 18px;
  margin-top: 252px;
}
.fourworld > span {
  font-size: 20px;
  color: #2a2a2a;
  letter-spacing: 0.25px;
  text-align: right;
  line-height: 30px;
  display: block;
}
.fourworld .lookvideo {
  background: #3d84ff;
  border-radius: 24px;
  width: 126px;
  height: 48px;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.2px;
  line-height: 48px;
  margin-top: 76px;
  padding-left: 34px;
  cursor: pointer;
  position: absolute;
  right: 0;
}
.fourworld .fl4-wapper {
  background-image: url("");
}

.foofive {
  width: 100%;
  height: 768px;
  /*   background-color: rgb(238, 81, 173); */
}
.foofive > h3 {
  font-size: 48px;
  color: #2a2a2a;
  letter-spacing: 0.59px;
  text-align: center;
  line-height: 40px;
  padding-top: 101px;
  text-align: center;
  margin-bottom: 116px;
}
.foofive > ul > li {
  display: inline-block;
  margin: 0 100px;
  width: 220px;
  height: 319px;
  /*   background-color: firebrick; */
}
.foofive ul > li > img {
  width: 220px;
  height: 220px;
  margin-bottom: 28px;
}
.foofive ul > li > h2 {
  font-size: 28px;
  color: #2a2a2a;
  letter-spacing: 0.3px;
  text-align: center;
  line-height: 28px;
}
.foofive ul > li > .zhidao {
  font-size: 24px;
  /*     color: #3D84FF; */
  letter-spacing: 0.22px;
  text-align: center;
  line-height: 24px;
  display: block;
  margin-top: 15px;
  cursor: pointer;
  position: relative;
}
.zhidaoimg {
  display: none;

  background: none;
  padding: 0px;
  position: absolute;
  left: -25px;
  top: -301px;
  padding-top: 29px;
}
</style>