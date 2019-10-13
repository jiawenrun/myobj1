<template>
  <div class="userinfo" ref="userinfo">
    <div class="user-top">
      <router-link to="/">
        <img
          src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/e5c6cdb2d67a45b5be9233f65a8d14b5.png"
          alt
        />
      </router-link>
    </div>
    <div class="user-main">
      <div class="user-main-left">
        <ul class="userl-top">
          <li class="userl-top-one" ref="userl" @click="jbxx">
            <div v-bind:class="{'uto-choosed':ischoosed,'uto-nochoosed':isnochoosed,}">基本信息</div>
          </li>
          <li class="userl-top-one" ref="userl2" @click="zhgl">
            <div v-bind:class="{'uto-choosed':isnochoosed,'uto-nochoosed':ischoosed,}">账号管理</div>
          </li>
        </ul>
        <i v-bind:class="{'user-i1':isxiao1,'user-i2':isxiao2}"></i>
        <!-- 基本信息 -->
        <div v-bind:class="{'userl-content':thes,jbxxOn:ison,jbxxOff:isoff}">
          <p class="userl-content-title">基本信息</p>
          <div class="userl-c-info">
            <img v-bind:src="oldhead" alt />
            <div class="user-c-data">
              <span class="ucd-title">姓名</span>
              <input type="text" value class="ucd-title-val" ref="name" @input="myname" />
              <span class="ucd-title ucd-title2">性别</span>
              <div class="chooseG">
                <label>
                  <input type="radio" name="sex" value="1" @click="sex($event)" ref="sex1" />男
                </label>
                <label>
                  <input type="radio" name="sex" value="2" @click="sex($event)" ref="sex2" />女
                </label>
              </div>
            </div>
          </div>
          <div class="editimg">
            <img src alt />
            <!-- 换头 -->
            <el-button type="text" @click="dialogTableVisible = true" class="tttttttt">编辑头像</el-button>
            <el-dialog title="更换头像" :visible.sync="dialogTableVisible">
              <div class="changehead">
                <div class="changehead1">
                  <!-- <img  alt="" width="300px" height="300px" v-bind:src="newhead"> -->
                  <img v-bind:src="newhead" width="300px" height="300px" />
                </div>
                <div class="changehead2">
                  <div>
                    <el-upload
                      class="upload-demo"
                      ref="upload"
                      action="http://localhost:81/upl3/up"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :on-success="handleSuccess"
                      :file-list="fileList"
                      :auto-upload="true"
                    >
                      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    </el-upload>
                  </div>
                  <div>
                    <el-button class="baochun-chun" @click="baochun">保存</el-button>
                  </div>
                </div>
              </div>
            </el-dialog>
          </div>
          <div class="uml-bottom">
            <p class="uml-bo-contact">联系方式</p>
            <ul class="ubc-detail">
              <li>
                <span class="ubc-email">
                  <span class="ubc-email-title">Email</span>
                  <input
                    type="text"
                    placeholder="尚未绑定邮箱"
                    class="ubc-email-inp"
                    ref="email"
                    disabled
                  />
                </span>
                <!-- 邮箱 -->
                <span class="binde" @click="dialogFormVisible = true">绑定邮箱</span>
                <el-dialog title=" " :visible.sync="dialogFormVisible" width="500px">
                  <form class="login2" :mode="form" ref="form">
                    <logintop></logintop>
                    <div class="navgt">
                      <div class="inner">
                        <p class="na-in-title">绑定邮箱</p>
                        <p class="na-in-content">请输入你要绑定的邮箱地址</p>
                      </div>
                    </div>
                    <div class="tel" prop="email">
                      <div class="mgimg">
                        <i class="tel_i">
                          <img
                            src="https://image.zhihuishu.com/zhs/ablecommons/demo/201907/c61567392dac4b5281c8ba0ac13ffe3f.png"
                            alt
                          />
                        </i>
                      </div>
                      <input
                        type="text"
                        class="myinp"
                        placeholder="请输入邮箱地址"
                        v-model="form.email"
                        ref="email"
                      />
                    </div>

                    <div class="tel" prop="code">
                      <div class="mgimg">
                        <i class="tel_i">
                          <img
                            class="img6"
                            src="https://image.zhihuishu.com/zhs/ablecommons/demo/201907/c61567392dac4b5281c8ba0ac13ffe3f.png"
                            alt
                          />
                        </i>
                      </div>
                      <input type="text" class="myinp" placeholder="请输入验证码" v-model="form.code" />
                      <div class="code-img" @click="codechange" ref="code" title="看不清？换一张">
                        <del>{{form.str}}</del>
                      </div>
                    </div>
                    <div class="tel" prop="elcode">
                      <div class="mgimg">
                        <i class="tel_i">
                          <img
                            class="img2"
                            src="https://image.zhihuishu.com/zhs/ablecommons/demo/201907/c61567392dac4b5281c8ba0ac13ffe3f.png"
                            alt
                          />
                        </i>
                      </div>
                      <input type="text" class="myinp" placeholder="请输入邮箱验证码" v-model="form.elcode" />
                      <span class="myi-sendcode">发送验证码邮件</span>
                    </div>
                    <div class="login-btn" @click="postForm('form')">确&nbsp;&nbsp;定</div>
                  </form>
                </el-dialog>
              </li>
              <li>
                <span class="ubc-phone">
                  <span class="ubc-email-title">手机号</span>

                  <input
                    type="text"
                    class="ubc-phone-inp"
                    placeholder="尚未绑定手机"
                    ref="phone"
                    disabled
                  />
                </span>
                <!-- 手机 -->
                <span class="binde" @click="dialogFormVisible1 = true">更换手机</span>
                <el-dialog title=" " :visible.sync="dialogFormVisible1">
                  <form class="login2" :mode="form" ref="form">
                    <logintop></logintop>
                    <div class="navgt">
                      <div class="inner">
                        <p class="na-in-title">更换手机</p>
                        <p class="na-in-content">请输入你要绑定的手机号</p>
                      </div>
                    </div>
                    <div class="tel" prop="tel">
                      <div class="mgimg">
                        <i class="tel_i">
                          <img
                            src="https://image.zhihuishu.com/zhs/ablecommons/demo/201907/c61567392dac4b5281c8ba0ac13ffe3f.png"
                            alt
                          />
                        </i>
                      </div>
                      <input type="text" class="myinp" placeholder="请输入手机号" v-model="form.tel" />
                    </div>

                    <div class="tel" prop="code">
                      <div class="mgimg">
                        <i class="tel_i">
                          <img
                            class="img6"
                            src="https://image.zhihuishu.com/zhs/ablecommons/demo/201907/c61567392dac4b5281c8ba0ac13ffe3f.png"
                            alt
                          />
                        </i>
                      </div>
                      <input type="text" class="myinp" placeholder="请输入验证码" v-model="form.code" />
                      <div class="code-img" @click="codechange" ref="code" title="看不清？换一张">
                        <del>{{form.str}}</del>
                      </div>
                    </div>
                    <div class="tel" prop="elcode">
                      <div class="mgimg">
                        <i class="tel_i">
                          <img
                            class="img2"
                            src="https://image.zhihuishu.com/zhs/ablecommons/demo/201907/c61567392dac4b5281c8ba0ac13ffe3f.png"
                            alt
                          />
                        </i>
                      </div>
                      <input type="text" class="myinp" placeholder="请输入手机验证码" v-model="form.elcode" />
                      <span class="myi-sendcode">获取验证码</span>
                    </div>
                    <div class="login-btn" @click="postForm('form')">确&nbsp;&nbsp;定</div>
                  </form>
                </el-dialog>
              </li>
            </ul>
          </div>
        </div>
        <!-- 账号管理 -->
        <div v-bind:class="{'userl-content':thes,jbxxOn:isoff,jbxxOff:ison}">
          <div class="uml-bottom">
            <p class="userl-content-title">修改密码</p>
            <ul class="ubc-detail">
              <li>
                <span class="ubc-email">
                  <span class="ubc-email-title">密码</span>
                  <input type="text" placeholder="请输入现有密码" class="ubc-email-inp" ref="oldPasswd" />
                </span>
              </li>
              <li>
                <span class="ubc-email">
                  <span class="ubc-email-title">新密码</span>
                  <input type="text" placeholder="请输入新密码" class="ubc-email-inp" ref="newPasswd" />
                </span>
              </li>
              <li>
                <span class="ubc-email">
                  <span class="ubc-email-title">确认密码</span>
                  <input type="text" placeholder="请再次输入新密码" class="ubc-email-inp" ref="surePasswd" />
                </span>
              </li>
            </ul>
          </div>
          <div class="ubc-submit" @click="changePasswd">保存</div>
        </div>
      </div>
      <ucomfirm></ucomfirm>
    </div>
    <div class="userinfo-bottom">
      <div class="userinfo-bottom-main">
        <span>Copyright 2003-现在 Zhihuishu. All rights reserved.</span>
        <span class="uba-two">
          <i>
            <img src alt />
          </i> 沪公网备31010402003974号
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      isxiao1: true,
      isxiao2: false,
      usertel: "",
      self: {},
      ischoosed: true,
      isnochoosed: false,
      dialogTableVisible: false,
      oldhead: "",
      newhead: "",
      thes: true,
      ison: true,
      isoff: false,
      doUpload: "/api/up/file",
      pppss: {
        srid: ""
      },
      fileList: [],
      form: {
        tel: "",
        email: "",
        code: "",
        elcode: "",
        sCode: "",
        aCode: [],
        str: "",
        aLength: "",
        i: "",
        j: "",
        cname: ""
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible1: false,
      formLabelWidth: "120px"
      // action:"原始密码错误"
      // sex1:''
      // myname:'youke'
    };
  },
  methods: {
    baochun: function() {
      this.axios
        .post("/user/changeHead", {
          head: this.newhead,
          tel: this.usertel
        })
        .then(response => {
          this.oldhead = this.newhead;
          console.log(1);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    changePasswd: function() {
      console.log(this.self.passwd);
      console.log(this.$refs.oldPasswd.value, this.self.passwd);
      if (this.$refs.oldPasswd.value != this.self.passwd) {
        this.$message({
          type: "info",
          message: `原始密码错误`
        });
      } else if (this.$refs.newPasswd.value != this.$refs.surePasswd.value) {
        this.$message({
          type: "info",
          message: `密码不一致`
        });
      } else {
        this.axios
          .post("/user/changePasswd", {
            passwd: this.$refs.newPasswd.value,
            tel: this.usertel
          })
          .then(response => {
            //   console.log(1)
            this.$message({
              type: "success",
              message: `修改成功`
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    shangchuan: function() {
      // this.newhead=this.$refs.shangc.value
      console.log(this.$refs.shangc.value);
    },
    handleSuccess: function(response, file, fileList) {
      console.log(response, file, fileList);
      this.newhead = response.data.src;
    },
    jbxx: function() {
      this.ischoosed = true;
      this.isnochoosed = false;
      this.isxiao1 = true;
      this.isxiao2 = false;
      this.ison = true;
      this.isoff = false;
    },
    zhgl: function() {
      this.ischoosed = false;
      this.isnochoosed = true;
      this.isxiao1 = false;
      this.isxiao2 = true;
      this.ison = false;
      this.isoff = true;
    },
    myname: function() {
      console.log(this.$refs.name.value);
      this.axios
        .post("/user/changeName", {
          name: this.$refs.name.value,
          tel: this.usertel
        })
        .then(response => {
          //   console.log(1)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    sex(e) {
      console.log(e.toElement.defaultValue);
      this.axios
        .post("/user/changeSex", {
          sex: e.toElement.defaultValue,
          tel: this.usertel
        })
        .then(response => {
          //   console.log(response)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    huantou: function() {
      console.log(1);
    },
    postForm(form) {
      // console.log(this.$refs.name.value);
      this.cname = this.$refs.name.value;
      console.log(this.cname);

      console.log(this.form);

      if (this.form.code) {
        if (this.form.code != this.form.str) {
          this.$message("验证码错误");
        } else {
          if (this.form.email) {
            this.axios
              .post("/user/changeEmail", {
                email: this.form.email,
                tel: this.usertel
              })
              .then(response => {
                if (response.data.affectedRows) {
                  this.$message("修改成功");
                  location.reload();
                } else {
                  this.$message("修改失败");
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          } else {
            this.axios
              .post("/user/changeTel", {
                tel1: this.form.tel,
                tel: this.usertel
              })
              .then(response => {
                if (response.data.affectedRows) {
                  this.$message("修改成功");
                  this.$router.push({ path: "/" });
                  // location.reload();
                } else {
                  this.$message("修改失败");
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          }

          // this.form.head =
          //   "https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/3f7a3c52ca0f449aa1a4a0b29188fb2d.png";
          // this.axios
          //   .post("/user/changeEmail", this.form)
          //   .then(response => {
          //     if (response.data.affectedRows) {
          //       this.$message("修改成功");
          //     }else{
          //         this.$message("修改失败");
          //     }
          //   })
          //   .catch(function(error) {
          //     console.log(error);
          //   });
        }
      } else {
        this.$message("请输入验证码");
      }
    },
    codechange: function() {
      this.sCode =
        "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m";
      this.aCode = this.sCode.split(",");
      this.aLength = this.aCode.length;
      for (this.i = 0; this.i <= 3; this.i++) {
        this.j = Math.floor(Math.random() * this.aLength);
        this.aCode[this.i] = this.aCode[this.j];
      }
      this.form.str =
        this.aCode[0] + this.aCode[1] + this.aCode[2] + this.aCode[3];
      // console.log(this.form.str);
    }
    // sex(e){
    // }
  },
  watch: {
    // sex:function(a,b){
    //     console.log(a)
    // }
  },
  created() {
    this.axios
      .get("/user/getsession")
      .then(response => {
        this.usertel = response.data.tel;
        this.axios
          .post("/user/getUserNew", {
            tel: this.usertel
          })
          .then(response => {
            // console.log(response.data);
            this.self = response.data[0];
            this.oldhead = response.data[0].head;
            this.newhead = response.data[0].head;
            this.$refs.name.value = response.data[0].name;
            this.$refs.phone.value = response.data[0].tel;
            this.$refs.email.value = response.data[0].email;
            if (response.data[0].sex == 1) {
              this.$refs.sex1.checked = "checked";
            } else if (response.data[0].sex == 2) {
              this.$refs.sex2.checked = "checked";
            }
            //   a=response.data[0].name
            //   this.headsrc = response.data[0].head;
            //   this.b = false;
            //   this.a = true;
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  mounted() {
    //   this.newhead=this.self.head
  }
};
</script>
<style>
.na-in-title {
  cursor: pointer;
}
.baochun-chun {
  width: 85px;
  height: 35px;
  background-color: #409eff;
  color: white;
}
.baochun-chun:hover {
  background-color: #66b1ff;
  color: white;
}
.jbxxOff {
  display: none;
}
.jbxxOn {
  display: block;
}
.changehead2 {
  display: flex;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  text-align: center;
  justify-content: space-between;
}
.changehead {
  width: 300px;
  margin: 0 auto;
  text-align: center;
}
.tttttttt {
  font-size: 12px;
  color: #777777;
  line-height: -9px;
  margin-top: -12px;
}
.tttttttt:hover {
  color: #2a2a2a;
}
.userinfo {
  width: 100%;
  height: 940px;
  background-color: #f2f2f2;
  position: relative;
}
.user-top {
  width: 100%;
  height: 66px;
  min-width: 1246px;
  background: #fff;
  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  z-index: 19;
}
.user-top img {
  margin-left: 91px;
  margin-top: 19px;
}
.user-main {
  width: 1050px;
  height: 700px;
  background-color: #f2f2f2;
  margin: 34px auto;
}

.user-main-left {
  width: 765px;
  /* height: 603px; */
  float: left;
  position: relative;
  background-color: #fff;
}
.user-main-left::after {
  content: "";
  clear: both;
  display: block;
}
.user-main-right {
  width: 270px;
  height: 392px;
  float: right;
  background-color: #fff;
}
.user-main-right::after {
  content: "";
  clear: both;
  display: block;
}
.userl-top {
  width: 100%;
  height: 61px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.userl-top-one {
  display: inline-block;
  height: 61px;
  line-height: 61px;
  margin-left: 39px;
}
.uto-choosed {
  font-size: 20px;
  font-weight: 600;
}
.user-i2 {
  display: inline-block;
  position: absolute;
  width: 25px;
  height: 0;
  border: 1px solid #000;
  top: 59px;
  left: 166px;
}
.box {
  width: 100px;
  height: 300px;
  background-color: #fff;
}
.box-one {
  display: none;
  width: 100px;
  height: 300px;
}
.box-active {
  display: block;
}
.userl-content {
  width: 100%;
  height: 600px;
  background-color: #fff;
}
.userl-content-title {
  font-size: 18px;
  color: #000;
  font-weight: 600;
  margin-top: 36px;
  margin-left: 26px;
}
.userl-c-info {
  width: 93%;
  height: 200px;
  /* background-color: #ccc; */
  margin-top: 20px;
  margin-left: 26px;
  position: relative;
}
.userl-c-info img {
  width: 152px;
  height: 152px;
  display: inline-block;
  margin-top: 25px;
}
.user-c-data {
  display: inline-block;
  width: 530px;
  height: 200px;
  /* background-color: rgb(185, 7, 7); */
  float: right;
}
.ucd-title {
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  color: #2a2a2a;
  margin-top: 50px;
}
.ucd-title-val {
  display: inline-block;
  margin-left: 10px;
  font-size: 18px;
  border: none;
  outline: none;
}
.ucd-title2 {
  display: block;
}
.chooseG {
  position: absolute;
  top: 122px;
  left: 226px;
}
.chooseG label {
  margin-left: 18px;
}
.editimg {
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #777;
  font-size: 14px;
  border: 1px solid #bfbfbf;
  margin-left: 53px;
  box-shadow: inset 0 -1px 0 0 #ededed;
}
.uml-bottom {
  width: 100%;
  height: 300px;
  padding-top: 51px;
  box-sizing: border-box;
}
.uml-bo-contact {
  font-size: 18px;
  color: #000;
  font-weight: 600;
  margin-left: 24px;
}
.ubc-detail {
  width: 80%;
  height: 150px;
  margin-left: 24px;
}
.ubc-detail li {
  margin-top: 36px;
}

.ubc-email-title {
  display: inline-block;
  width: 100px;
  height: 20px;
  text-align: right;
  font-size: 18px;
  color: #2a2a2a;
  /* font-weight: 600; */
}
.ubc-email-inp {
  width: 200px;
  height: 35px;
  margin-left: 19px;
  margin-right: 20px;
  font-size: 18px;

  background: #f6f6f6;
  border: 1px solid #ededed;
}
.ubc-phone-inp {
  width: 200px;
  height: 35px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  background: #f6f6f6;
  border: 1px solid #ededed;
}
.ubc-email-inp::-webkit-input-placeholder {
  color: #cbcbcb;
  font-size: 14px;
  padding-left: 15px;
}

.gotoComf {
  width: 100px;
  background-color: #3d84ff;
  height: 33px;
  text-align: center;
  line-height: 33px;
  color: #fff;
  font-weight: 600;
  margin-top: 45px;
  margin-left: 80px;
  border-radius: 10px;
}
.gotoComf-text {
  margin-top: 45px;
  margin-left: 56px;
  color: #777;
  font-size: 16px;
}
.userinfo-bottom {
  width: 100%;
  height: 45px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #ededed;
}
.userinfo-bottom-main {
  width: 1050px;
  height: 45px;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 13px;
  padding-top: 15px;
}
.uba-two {
  display: inline-block;
  margin-left: 234px;
}
.ubc-submit {
  display: inline-block;
  background: #3d84ff;
  border-radius: 20px;
  font-size: 16px;
  color: #ffffff;
  width: 140px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-top: 114px;
  margin-left: 301px;
  cursor: pointer;
}
.ucd-title-val {
  width: 234px;
  height: 30px;
  line-height: 30px;
  padding: 4px 8px;
  background: #f6f6f6;
  border: 1px solid #ededed;
  font-size: 14px;
  color: #2a2a2a;
}
.ubc-phone-inp::-webkit-input-placeholder {
  color: #cbcbcb;
  font-size: 14px;
  padding-left: 15px;
}
.ubc-email-title {
  margin-right: 16px;
  text-align: right;
  line-height: 40px;
  font-size: 14px;
}
/* router-link{
  color: #000;
} */
.userinfo {
  width: 100%;
  height: 940px;
  background-color: #f2f2f2;
  position: relative;
}
.user-top {
  width: 100%;
  height: 66px;
  min-width: 1246px;
  background: #fff;
  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  z-index: 19;
}
.user-top img {
  margin-left: 91px;
  margin-top: 19px;
}
.user-main {
  width: 1050px;
  height: 700px;
  background-color: #f2f2f2;
  margin: 34px auto;
}

.user-main-left {
  width: 765px;
  /* height: 603px; */
  float: left;
  position: relative;
  background-color: #fff;
}
.user-main-left::after {
  content: "";
  clear: both;
  display: block;
}
.user-main-right {
  width: 270px;
  height: 392px;
  float: right;
  background-color: #fff;
}
.user-main-right::after {
  content: "";
  clear: both;
  display: block;
}
.userl-top {
  width: 100%;
  height: 61px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.userl-top-one {
  display: inline-block;
  height: 61px;
  line-height: 61px;
  margin-left: 39px;
}
.uto-choosed {
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}
.uto-nochoosed {
  font-size: 14px;
  color: #777777;
  cursor: pointer;
}
.user-i1 {
  display: inline-block;
  position: absolute;
  width: 25px;
  height: 0;
  border: 1px solid #000;
  top: 59px;
  left: 57px;
}
.user-i2 {
  display: inline-block;
  position: absolute;
  width: 25px;
  height: 0;
  border: 1px solid #000;
  top: 59px;
  left: 157px;
}
.box {
  width: 100px;
  height: 300px;
  background-color: #fff;
}
.box-one {
  display: none;
  width: 100px;
  height: 300px;
}
.box-active {
  display: block;
}
.userl-content {
  width: 100%;
  height: 600px;
  background-color: #fff;
}
.userl-content-title {
  font-size: 16px;
  color: #2a2a2a;
  font-weight: 600;
  margin-top: 36px;
  margin-left: 26px;
}
.userl-c-info {
  width: 93%;
  height: 200px;
  /* background-color: #ccc; */
  margin-top: 20px;
  margin-left: 26px;
  position: relative;
}
.userl-c-info img {
  width: 152px;
  height: 152px;
  display: inline-block;
  margin-top: 25px;
}
.user-c-data {
  display: inline-block;
  width: 530px;
  height: 200px;
  /* background-color: rgb(185, 7, 7); */
  float: right;
}
.ucd-title {
  display: inline-block;
  font-weight: 600;
  margin-top: 50px;
}
.ucd-title-val {
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  border: none;
  outline: none;
  color: #2a2a2a;
  height: 34px;
  /* padding-top: 4px; */
  /* outline: 1px solid #3d84ff; */
  box-sizing: border-box;
}
.ucd-title-val:focus {
  border: 1px solid #3d84ff;
}
.ucd-title2 {
  display: block;
}
.chooseG {
  position: absolute;
  top: 122px;
  left: 226px;
  margin-top: 6px;
}
.chooseG label {
  margin-left: 10px;
}
.editimg {
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #777;
  font-size: 14px;
  border: 1px solid #bfbfbf;
  margin-left: 53px;
  box-shadow: inset 0 -1px 0 0 #ededed;
}
.uml-bottom {
  width: 100%;
  height: 300px;
  padding-top: 51px;
  box-sizing: border-box;
}
.uml-bo-contact {
  font-size: 18px;
  color: #000;
  font-weight: 600;
  margin-left: 24px;
}
.ubc-detail {
  width: 80%;
  height: 150px;
  margin-left: 24px;
}
.ubc-detail li {
  margin-top: 36px;
}

.ubc-email-title {
  display: inline-block;
  width: 100px;
  height: 20px;
  text-align: right;
  font-size: 16px;
  color: #2a2a2a;
  /* font-weight: 600; */
}
.ubc-email-inp {
  width: 200px;
  height: 35px;
  margin-left: 19px;
  margin-right: 20px;
  font-size: 14px;
  color: #2a2a2a;
  padding-left: 15px;
  background: #f6f6f6;
  border: 1px solid #ededed;
}
.ubc-phone-inp {
  width: 200px;
  height: 35px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 14px;
  color: #2a2a2a;
  padding-left: 15px;
  background: #f6f6f6;
  border: 1px solid #ededed;
}
.ubc-email-inp::-webkit-input-placeholder {
  color: #cbcbcb;
  font-size: 14px;
}
.binde {
  font-size: 13px;
  color: #3d84ff;
  cursor: pointer;
}
.gotoComf {
  width: 100px;
  background-color: #3d84ff;
  height: 33px;
  text-align: center;
  line-height: 33px;
  color: #fff;
  font-weight: 600;
  margin-top: 45px;
  margin-left: 80px;
  border-radius: 10px;
}
.gotoComf-text {
  margin-top: 45px;
  margin-left: 56px;
  color: #777;
  font-size: 16px;
}
.userinfo-bottom {
  width: 100%;
  height: 45px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #ededed;
}
.userinfo-bottom-main {
  width: 1050px;
  height: 45px;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 13px;
  padding-top: 15px;
}
.uba-two {
  display: inline-block;
  margin-left: 234px;
}
</style>