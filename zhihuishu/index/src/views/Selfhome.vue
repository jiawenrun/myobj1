<template>
  <div class="student" ref="student">
    <div class="s_top">
      <div class="on">
        <div class="stext">
          <!-- v-for="(el,index) in this.stextData" :key="index" -->
          <p class="stext-one">{{this.stextData[0].message}}</p>
          <p class="stext-two">{{this.stextData[0].author}}</p>
        </div>
        <img
          class="imgLogo"
          src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201906/2be4c805db0b4d0e9e9e603d6b04ccfb.png"
          alt
          srcset
        />
        <img
          class="onlineS"
          src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201906/29544d0106b5493bbbe823a3a7654ac4.png"
          alt
        />
        <div class="oDate">
          <div class="datein">
            <span class="onlinDate">{{moth.getMonth()+1}}/{{moth.getDate()}}</span>
            <span class="onlinDate2">
              DAILY
              <span class="iner">Z.H.S</span>
              SIGNATURE
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="stop_on"></div>
    <div class="cmid">
      <div class="comfirm">
        <div class="aConfirm">
          <div class="acInner">
            <img
              src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201905/798eaeffd158469dbb641d6cbfe6df85.png"
              alt
            />
            <div class="identity">身份认证后才可以选择学分课哦</div>
            <div class="conBtn">立即认证</div>
          </div>
          <div class="share">
            <div class="shareCourse">
              <div class="s-item s-checked">共享课</div>
              <div class="s-item s-left">翻转课</div>
            </div>
            <span class="s-title">共享课</span>
            <div class="share-detail">
              <span class="s-title">共享课</span>
              <span class="finished running" ref="shareRun">进行中</span>
              <span class="finished" ref="shareRun2">已完成</span>
              <span class="choose" @click="xuanke">
                <i>+</i>选课
              </span>
            </div>
            <div class="show-course">
              <div v-if="bookship">
                <div v-for="(e,ind) in bookship" :key="ind" class="bookship">
                  <div class="e-name"  @click="enter(e)">{{e.name}}</div>
                  <div class="e-school"  @click="enter(e)">{{e.school}}</div>
                  <div @click="quxiao(e)" class="quxiao">取消选定</div>
                </div>
              </div>
              <div v-else>
                <img src="../assets/icon-no-course.png" alt />
                <span class="shc-text" ref="textwarn">您当前暂无进行中的共享课~</span>
              </div>
            </div>
            <div class="share-detail">
              <span class="s-title">翻转课</span>

              <span class="choose turn-course">
                <i>+</i>加入课程
              </span>
            </div>
            <div class="show-course">
              <img src="../assets/icon-no-course.png" alt />
              <span class="shc-text">您当前暂无翻转课~</span>
            </div>
            <!-- <el-tabs type="border-card" class="el-tabs">
              <el-tab-pane label="进行中">
                <div class="show-course">
                  <img src="../assets/icon-no-course.png" alt />
                  <span class="shc-text" ref="textwarn">您当前暂无进行中的共享课~</span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="已完成">
                <div class="show-course">
                  <img src="../assets/icon-no-course.png" alt />
                  <span class="shc-text" ref="textwarn">您当前暂无已完成的共享课~</span>
                </div>
              </el-tab-pane>
            </el-tabs>-->
          </div>
        </div>
      </div>
      <div class="set">
        <div class="set-dialog" ref="setdialog"></div>
        <div class="s-user">
          <div class="s-user-top my-name">
            <div>
              <img v-bind:src="self.head" alt class="s-userlogo" />
            </div>
            <div>
              <span class="s-username">{{self.name}}</span>
            </div>
            <div class="set-set">
              <img src="../assets/setting.png" alt srcset class="s-seting" @click="showSet" />
              <!-- <ul class="set-set1">
                <li @click="toself">账号设置</li>
                <li @click="tuichu">安全退出</li>
              </ul>-->
            </div>
          </div>
          <div class="s-user-top">
            <div class="studay">
              <span class="stu-one">4</span>
              <span class="stu-two">连续学习/天</span>
            </div>
            <div class="studay">
              <span class="stu-one">0</span>
              <span class="stu-two">我的课程/门</span>
            </div>
          </div>
        </div>
        <div class="set-img">
          <div class="si-text">
            <span class="si-left">群文件管理</span>
            <span class="si-right">进入&nbsp;></span>
          </div>
          <p>教学资料，实时分享</p>
        </div>
        <div class="s-notice">
          <div class="sn-text">学习通知</div>
          <div class="sn-content">
            <div class="sn-content-detail">
              <i></i>
              <p class="sn-time">2019.09.12</p>
              <p class="sn-time1" @click="dialogVisible = true">【证书】关于证书相关进度的说明（9月20日更新）</p>
              <p class="sn-time2">【证书】关于证书相关进度的说明（9月20日更新）</p>
            </div>
            <div class="sn-content-detail">
              <i></i>
              <p class="sn-time">2019.09.05</p>
              <p class="sn-time1">【小贴士】如何获得习惯分和互动分 —— APP端</p>
              <p class="sn-time2">各位同学大家好，针对【问答】中大家一直在问的“如何获得习惯分及互动分”这样的问题，</p>
            </div>
            <div class="sn-content-detail">
              <i></i>
              <p class="sn-time">2019.09.05</p>
              <p class="sn-time1">【小贴士】如何获得习惯分和互动分 —— PC端</p>
              <p class="sn-time2">各位同学大家好，针对【问答】中大家一直在问的“如何获得习惯分及互动分”这样的问题，</p>
            </div>
            <span class="check-all">查看全部&nbsp;></span>
          </div>
          <div class="sn-bottom">
            <div class="sn-answer">
              <p class="sn-o">问答互动</p>
              <span class="sn-t">每一个问题都值得对待</span>
            </div>
            <div class="sn-action">
              <div class="sna-text">还没有人和你互动过主动去和别人互动吧~</div>
              <span class="check-all check-all-two">查看全部&nbsp;></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="55%"
      class="mydialog"
      :before-close="handleClose"
    >
      <span></span>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      moth: "",
      self: {},
      stextData: [
        {
          message: "毛主席说：好好学习，天天向上",
          author: ""
        },
        {
          message: "只要心还在跳，就要努力学习。 ",
          author: "—— 张海迪"
        },
        {
          message: "不学习，可是会变胖的哦～ ",
          author: ""
        },
        {
          message: " 不学习，你不会饥渴难耐吗？ ",
          author: ""
        },
        {
          message: " 你可能已经忘记了我，可我一直在等你",
          author: ""
        },
        {
          message: " 听说长得好看的都在学习",
          author: ""
        }
      ],
      dialogVisible: false,
      i: "",
      j: "",
      detailnav: [],
      deyaildata: [],
      bookship: []
    };
  },
  methods: {
    enter(e){
      console.log(e)
      this.$router.push({ path: "/curriculum?cid=" + e.cid });
    },
    quxiao(e) {
      console.log(e.cid);
      this.axios
        .get("/cless/deCid", {
          params: {
            cid: e.cid
          }
        })
        .then(response => {
          location.reload();
          // this.bookship.push(response.data[0]);
          // console.log(this.bookship);
          // console.log(1)
          // this.self = response.data[0];
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    xuanke: function() {
      this.$router.push({ path: "/Xuanke" });
    },
    changeText: function() {
      for (this.i = 0; this.i < 1; this.i++) {
        this.j = Math.floor(Math.random() * this.stextData.length);
        this.stextData[this.i] = this.stextData[this.j];
      }
    },
    toself: function() {
      this.$router.push({ path: "/Self" });
    },
    tuichu: function() {
      // this.$router.push({ path: "/Self" });
      this.$router.push({ path: "/" });
      this.axios
        .post("/user/logout", {
          tel: this.usertel
        })
        .then(response => {})
        .catch(function(error) {
          console.log(error);
        });
      location.reload();
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    showSet: function() {
      this.$router.push({ path: "/Self" });
    }
  },
  created: function() {
    //   console.log(date.getMonth()+1)
    // var data=new Date()
    this.moth = new Date();
    this.axios
      .get("/user/getsession")
      .then(response => {
        this.usertel = response.data.tel;
        this.axios
          .get("/user/getUserNew1", {
            params: {
              tel: this.usertel
            }
          })
          .then(response => {
            // console.log(response.data);
            this.self = response.data[0];

            this.axios
              .get("/cless/getCid", {
                params: {
                  uid: this.self.uid
                  // cid: s.cid
                }
              })
              .then(response => {
                console.log(response.data);
                // bookship;
                // this.self = response.data[0];
                for (let i = 0; i < response.data.length; i++) {
                  // console.log(response.data[i].cid);
                  this.axios
                    .get("/curri/getcurri", {
                      params: {
                        cid: response.data[i].cid
                      }
                    })
                    .then(response => {
                      this.bookship.push(response.data[0]);
                      console.log(this.bookship);
                      // this.self = response.data[0];
                    })
                    .catch(function(error) {
                      console.log(error);
                    });
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(error);
      });
    // console.log(this.self.uid)

    // if (this.self.tel) {
    // } else {
    //   this.$router.push({ path: "/" });
    // }
  }
};
</script>
<style >
.e-school{
  width: 150px;
  text-align: left;
  cursor: pointer;
}
.e-name{
  width: 200px;
  text-align: left;
  cursor: pointer;
}
.quxiao {
  cursor: pointer;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  background-color: #f4f4f4;
  padding: 2px 5px;
}
.quxiao:hover{
  background-color: #3d84ff;
}
.bookship {
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  color: #2a2a2a;
  font-size: 14px;
  margin: 5px 40px;
}
.set-set {
  position: relative;
}
.set-set:hover .set-set1 {
  display: block;
}
.set-set1 {
  position: absolute;
  width: 100px;
  left: -60px;
  text-align: center;
  background-color: #fff;
  /* height: 50px; */
  border: 1px solid #f5f5f5;
  /* height: 40px; */
  line-height: 40px;
  font-size: 14px;
  color: #2a2a2a;
  letter-spacing: 0;
  display: none;
  /* padding: 0 40px; */
}
.set-set1 li:hover {
  /* height: 20px; */
  background-color: #f6f6f6;
  cursor: pointer;
}
.my-name {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.choose {
  float: right;
  width: 60px;
  height: 28px;
  margin-top: 15px;
  margin-right: 35px;
  background: #3d84ff;
  border-radius: 14px;
  color: #fff;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  position: relative;
  display: block;
  opacity: 0.8;
}
.choose i {
  display: inline-block;
  margin-right: 6px;
  font-weight: 600;
}
.choose:hover {
  background: #3073e7;
}
.finished {
  display: inline-block;
  font-size: 14px;
  width: 64px;
  line-height: 28px;
  text-align: center;
  color: #777;
  height: 28px;
  margin-left: 15px;
}
.running {
  display: inline-block;
  text-align: center;
  width: 64px;
  line-height: 28px;
  font-size: 14px;
  height: 28px;
  border: 1px solid #ededed;
  border-radius: 14px;
  color: #2a2a2a;
}
.s-item {
  width: 80px;
  height: 60px;
  text-align: center;
  display: inline-block;
  line-height: 60px;
  font-size: 15px;
  color: #777;
}
.s-checked {
  font-size: 20px;
  color: #2a2a2a;
  font-weight: 600;
  margin-left: 40px;
}
.s-left {
  margin-left: 10px;
}
.shareCourse {
  width: 833px;
  height: 61px;
  border-bottom: 2px solid #f2f2f2;
}
.share {
  width: 833px;
  height: 513px;
  background-color: #fff;
  margin-top: 14px;
}
.conBtn {
  cursor: pointer;
  float: left;
  background: #fff;
  border-radius: 14px;
  font-size: 12px;
  color: #10c656;
  letter-spacing: 0.15px;
  width: 82px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  margin-top: -37px;
  margin-left: 287px;
}
.identity {
  float: left;
  width: 269px;
  height: 50px;
  line-height: 56px;
  color: #fff;
  font-size: 17px;
  text-align: center;
  margin-top: 31px;
}
.acInner img {
  float: left;
  width: 85px;
  height: 72px;
  margin-top: 22px;
  margin-left: 196px;
}
.acInner {
  width: 833px;
  height: 117px;
  line-height: 100px;
}
.aConfirm {
  width: 833px;
  height: 117px;
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201905/9eae96f775ec46829395cc325ab3786d.jpg");
  background-size: 100% 100%;
}
.cmid {
  width: 1158px;
  height: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 15;
}
.student {
  width: 100%;
  height: 1200px;
  position: relative;
  background-color: #f2f2f2;
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201906/bffc561ad23e4c5b9629be57b89e0252.jpg");
  background-repeat: no-repeat;
}
.set {
  width: 310px;
  height: 1000px;
  background-color: #f2f2f2;
  float: right;
  border-radius: 3px;
  position: relative;
}
.comfirm {
  width: 833px;
  height: 646px;
  background-color: #f2f2f2;
  float: left;
}
.stext {
  color: #fff;
  width: 800px;
  font-size: 15px;
  position: absolute;
  text-align: right;
  z-index: 15;
  margin-top: 69px;
  margin-left: 235px;
}
.iner {
  background-color: #fff;
  color: rgb(148, 153, 179);
}
.onlinDate2 {
  display: inline-block;
  width: 85px;
  height: 40px;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  line-height: 24px;
}
.stop_on {
  width: 100%;
  height: 240px;
  background-color: rgba(42, 78, 117, 0.5);
  position: absolute;
  top: 0;
  left: 0;
}

.onlinDate {
  display: inline-block;
  width: 85px;
  height: 40px;
  font-size: 28px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}
.datein {
  text-align: center;
  width: 90px;
  height: 90px;
  position: absolute;
  bottom: 3px;
  border: 2px solid rgb(209, 205, 205);
  right: 3px;
}
.oDate {
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 40px;
  border: 3px solid #fff;
  right: 0;
}
.onlineS {
  width: 100px;
  height: 40px;
  position: absolute;
  bottom: 13px;
  left: 0;
}
.imgLogo {
  width: 77px;
  height: 20px;
  position: absolute;
  top: 5px;
  left: 0;
}

.on {
  width: 1158px;
  height: 180px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}
.s-title {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  width: 109px;
  font-size: 16px;
  color: #5c5b5b;
  margin-left: 37px;
  margin-top: 10px;
}
.share-detail {
  width: 100%;
  height: 60px;
  margin: 0 auto;
}
.show-course {
  width: 100%;
  height: 164px;
  text-align: center;
}
.show-course img {
  margin-bottom: 17px;
}
.shc-text {
  display: block;
  font-size: 14px;
  color: #777;
  height: 24px;
  line-height: 24px;
  width: 194px;
  margin: 0 auto;
}
.turn-course {
  width: 79px;
  height: 30px;
}
.s-user {
  width: 100%;
  height: 197px;
  background-color: #fff;
}
.set-img {
  width: 100%;
  height: 100px;
  margin-top: 13px;
  background-image: url("../assets/icon-file-bg.png");
  background-size: 100% 100%;
  transition: all 0.5s;
}
.set-img:hover {
  cursor: pointer;
  transform: scale(1.05);
}
.s-notice {
  width: 100%;
  height: 463px;
  margin-top: 13px;
  background-color: #fff;
}
.sn-text {
  width: 100%;
  height: 74px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.sn-content {
  width: 80%;
  height: 356px;
  margin: 0 auto;
}
.sn-content-detail {
  width: 100%;
  height: 105px;
  position: relative;
  letter-spacing: 1px;
  margin-bottom: 10px;
  border-bottom: 1px solid #f2f2f2;
}
.sn-bottom {
  width: 100%;
  height: 201px;
  background-color: #fff;
  margin-top: 26px;
}
.sn-answer {
  width: 100%;
  height: 70px;
  padding-top: 10px;
  font-size: 14px;
  border-bottom: 1px solid #f2f2f2;
}
.sn-action {
  width: 100%;
  height: 135px;
}
.s-user-top {
  width: 90%;
  height: 50%;
  margin: 0 auto;
}
.s-user-top .s-userlogo {
  width: 70px;
  float: left;
  height: 70px;
  border-radius: 50%;
  margin-top: 14px;
  margin-left: 6px;
}
.s-username {
  display: inline-block;
  width: 159px;
  height: 20px;
  margin-top: 24px;
  margin-left: 10px;
}
.s-seting {
  margin-top: 14px;
  margin-left: 10px;
  cursor: pointer;
}
.studay {
  width: 50%;
  float: left;
  height: 100%;
  box-sizing: border-box;
  font-size: 16px;
  color: #777;
}
.studay span {
  display: block;
}
.stu-one {
  margin-left: 18px;
  margin-top: 25px;
  /* font-size: 22px; */
  color: #000;
  font-weight: 600;
}
.stu-two {
  margin-left: 18px;
  margin-top: 10px;
  font-size: 14px;
}
.si-text {
  width: 300px;
  height: 45px;
  line-height: 45px;
  margin: 0 auto;
}
.si-text span {
  display: inline-block;
  color: #fff;
}
.si-left {
  font-size: 20px;
  margin-top: 10px;
  margin-left: 20px;
}
.si-right {
  font-size: 14px;
  float: right;
  margin-top: 10px;
  margin-right: 20px;
}
.set-img p {
  font-size: 13px;
  color: #dfebff;
  margin-left: 24px;
  margin-top: 10px;
  letter-spacing: 1px;
  line-height: 18px;
}
.sn-text {
  line-height: 75px;
  font-size: 20px;
  color: #2a2a2a;
  padding-left: 20px;
  font-weight: 600;
  box-sizing: border-box;
}
.sn-content-detail p {
  width: 241px;
  float: right;
}
.sn-time {
  height: 25px;
  line-height: 25px;
}
.sn-time1 {
  margin-top: 10px;
  height: 24px;
  line-height: 24px;
  font-size: 15px;
  color: #2a2a23;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.sn-time1:hover {
  color: #3073e7;
}
.sn-time2 {
  height: 36px;
  font-size: 12px;
  color: #777;
  line-height: 21px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;
  letter-spacing: 1px;
}
.sn-content-detail::before {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #3d84ff;
  position: absolute;
  top: 5px;
  left: -19px;
}
.sn-content-detail i {
  display: block;
  width: 3px;
  height: 94px;
  background-color: #ededed;
  position: absolute;
  top: 18px;
  left: -15px;
}
.check-all {
  color: #777;
}
.check-all:hover {
  color: #3073e7;
}

.sn-o {
  font-size: 18px;
  color: #2a2a2a;
  font-weight: 700;
  margin-top: 5px;
  margin-left: 29px;
}
.sn-t {
  display: inline-block;
  color: #3d84ff;
  font-size: 13px;
  margin-top: 11px;
  margin-left: 29px;
  letter-spacing: 1px;
}
.sna-text {
  width: 159px;
  height: 50px;
  font-size: 15px;
  color: #777;
  margin-top: 25px;
  margin-left: 65px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 16px;
}
.check-all-two {
  margin-left: 29px;
}
.stext-two {
  margin-top: 10px;
}
.set-dialog {
  display: none;
  width: 114px;
  height: 154px;
  position: absolute;
  top: 49px;
  left: 178px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 33, 79, 0.11);
}
.el-tabs {
  background-color: #ccc;
}
</style>