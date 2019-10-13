<template>
  <form class="login" :mode="form" ref="form">
    <logintop></logintop>
    <div class="navgt">
      <div class="inner">
        <router-link to="/Login" class="reg">手机号</router-link>
        <router-link to="/Sno" class="reg">学号</router-link>
        <router-link to="/Reg" class="reg reg2 phone">注册</router-link>
        <span class="line3"></span>
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
    <div class="tel" prop="passwd">
      <div class="mgimg">
        <i class="tel_i">
          <img
            class="img2"
            src="https://image.zhihuishu.com/zhs/ablecommons/demo/201907/c61567392dac4b5281c8ba0ac13ffe3f.png"
            alt
          />
        </i>
      </div>
      <input type="password" class="myinp" placeholder="请输入密码" v-model="form.passwd" />
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
    <div class="login-btn" @click="postForm('form')">注&nbsp;&nbsp;册</div>

    <div class="agree">
      点击“注册”按钮，即代表您同意
      <span class="agree-t">《智慧树用户协议》</span>
    </div>
    <contact></contact>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      form: {
        tel: "",
        passwd: "",
        code: "",
        sCode: "",
        aCode: [],
        str: "",
        aLength: "",
        i: "",
        j: ""
      }
    };
  },
  methods: {
    postForm(form) {
      if (this.form.code) {
        if (this.form.code != this.form.str) {
          this.$message("验证码错误");
        } else {
          console.log(this.form)
          this.form.head="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/3f7a3c52ca0f449aa1a4a0b29188fb2d.png"
          this.axios
            .post("/user/reg", this.form)
            .then(response => {
                console.log(response);
              this.$message(response.data.Msg);
              if (response.data.Msg == "注册成功") {
                this.$router.push({ path: "/Login" });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
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
    }
  },
  created: function() {
    this.codechange();
  }
};
</script>
<style>
.code-img {
  position: absolute;
  top: 2px;
  right: 0;
  z-index: 999;
  width: 100px;
  height: 36px;
  line-height: 36px;
  font-size: 18px;
  letter-spacing: 6px;
  text-align: center;
  border: none;
  background-image: url("../assets/code.jpg");
}
.agree {
  width: 340px;
  height: 18px;
  letter-spacing: 1px;
  line-height: 18px;
  font-size: 12px;
  color: #bfbfbf;
  text-align: center;
  margin: 10px auto 0;
}
.agree-t {
  color: #3d84ff;
}
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -315px;
  margin-left: -200px;
  width: 400px;
  height: 630px;
  background: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 33, 79, 0.11);
  border-radius: 6px;
}

.navgt {
  margin-top: 46px;
  width: 400px;
  height: 46px;
  border-bottom: 1px solid #ededed;
}
.navgt .inner {
  width: 355px;
  height: 40px;
  margin: 0 auto;
  position: relative;
}
.reg {
  display: inline-block;
  width: 60px;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  color: #777;
  transition: all ease-in 0.2s;
  margin-right: 20px;
  margin-left: 5px;
  text-align: center;
}
.phone {
  font-weight: bold;
  font-size: 18px;
  color: #2a2a2a;
}
.line3 {
  display: inline-block;
  width: 43px;
  height: 4px;
  background-color: #3d84ff;
  position: absolute;
  left: 283px;
  /* left: 6px; 109  284*/
  bottom: 0;
}
.reg2 {
  float: right;
}
.tel {
  width: 340px;
  height: 40px;
  margin: 25px auto;
  position: relative;
  background: #f6f6f6;
  border: 1px solid #ededed;
}
.mgimg {
  display: inline-block;
  width: 40px;
  height: 20px;
  position: absolute;
  text-align: center;
  border-right: 1px solid #ededed;
  top: 10px;
  overflow: hidden;
}
.tel_i {
  display: inline-block;
  width: 18px;
  height: 20px;
  position: relative;
}
.myinp::-webkit-input-placeholder {
  color: #cbcbcb;
  font-size: 16px;
}
.myinp2 {
  border: none;
  background: #f6f6f6;
  width: 240px;
  padding-left: 55px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #3d4059;
  box-sizing: border-box;
}
.img6 {
  position: absolute;
  top: 0;
  left: -147px;
}
.rem .rember {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
  border-radius: 2px;
  background-image: url(https://image.zhihuishu.com/zhs/ablecommons/demo/201907/d5fb949524a44f7987ad821a1079ebaf.png);
}
.text {
  margin-left: 15px;
}
.forget {
  margin-left: 210px;
}
.login-btn {
  margin: 42px auto 0;
  width: 340px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  background: #3d84ff;
}
.rem {
  width: 340px;
  height: 20px;
  margin: 14px auto 0;
  position: relative;
  line-height: 20px;
  font-size: 14px;
  color: #777;
}
.rem div {
  display: inline-block;
}
.two {
  top: 0;
  left: 86px;
}
.three {
  border: 1px solid #ededed;
  width: 130px;
  height: 40px;
  font-size: 18px;
  color: #777777;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
}
.three:hover {
  color: #cbcbcb;
}
.way {
  width: 303px;
  height: 44px;
  margin: 25px auto;
  position: relative;
}
.way .aimg {
  display: inline-block;
  width: 40px;
  height: 40px;
  position: absolute;
}
.way .aimg img {
  width: 40px;
  height: 40px;
}
.other {
  text-align: center;
  width: 340px;
  height: 18px;
  margin: 10px auto;
  line-height: 18px;
  font-size: 16px;
  color: #777;
}
.ltext {
  margin: 0 10px;
}
.oline {
  width: 112px;
  height: 2px;
  margin-bottom: 4px;
  border-bottom: 1px solid #ededed;
}
.other div {
  display: inline-block;
}
.detail {
  position: absolute;
  bottom: 24px;
  left: 0;
  width: 100%;
  height: 16px;
  text-align: center;
  font-size: 14px;
  color: #bfbfbf;
}
.ser {
  color: #000;
}
</style>