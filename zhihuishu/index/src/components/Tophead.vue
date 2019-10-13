<template>
  <div class="bignav">
    <div class="nav">
      <div>
        <router-link to="/">
          <img
            src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/e5c6cdb2d67a45b5be9233f65a8d14b5.png"
            alt
            srcset
          />
        </router-link>
      </div>
      <div class="cen">
        <div>
          <router-link to="/" v-bind:class="{ active: isActive1 }">首页</router-link>
        </div>
        <div>
          <router-link to="/Micspe" v-bind:class="{ active: isActive2 }">微专业</router-link>
        </div>
        <div>
          <router-link to="/Pshar" v-bind:class="{ active: isActive3 }">专业共享联盟</router-link>
        </div>
        <div>
          <router-link to="/Appdown" v-bind:class="{ active: isActive4 }">APP下载</router-link>
        </div>
        <div class="bse">
          <input
            type="text"
            class="search"
            v-model="question"
            placeholder="请输入课程 / 学校 / 老师"
            v-on:keyup.enter="submit"
          />
          <img v-bind:src="seach" alt class="se" @click="submit" />
          <!-- <div class="search1"></div> -->
        </div>
      </div>
      <div v-show="a">
        <router-link to="/Selfhome">在线学堂</router-link>
      </div>
      <div class="hl">
        <div class="duiqi">
          <div class>
            <img v-bind:src="headsrc" alt class="headsrc" />
          </div>
          <div v-if="b">
            <router-link to="/Login">登录</router-link>/
            <router-link to="/Reg">注册</router-link>
          </div>
          <div class="user-name1">
            <div class="user-name" v-if="a">{{userXX.name}}</div>
            <ul class="user-set" v-if="a">
              <li @click="zhangHaoSet">账号设置</li>
              <li @click="tuicu">安全退出</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      userXX: {},
      usertel: "",
      question: "",
      key: "",
      denglu:true,
      a: false,
      b: true,
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      seach: "http://jiawenrun:81/1568805591363_7432130443.png",
      headsrc:
        "https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/3f7a3c52ca0f449aa1a4a0b29188fb2d.png",
      selfname: ""
    };
  },
  watch: {
    question: function(newQuestion, oldQuestion) {
      this.key = newQuestion;
      console.log(this.key);
    }
  },
  methods: {
    tuicu: function() {
     this.axios
            .post("/user/logout", {
              tel: this.usertel
            })
            .then(response => {
             
            })
            .catch(function(error) {
              console.log(error);
            });
      location.reload();
    },
    zhangHaoSet: function() {
      this.$router.push({ path: "/Self" });
    },
    submit: function() {
      this.$router.push({ path: "/SearchBar?key=" + this.key });
    }
  },
  created() {
    //  console.log(this.$route.path)
    if (this.$route.path == "/") {
      this.isActive1 = true;
    } else if (this.$route.path == "/Micspe") {
      this.isActive2 = true;
    } else if (this.$route.path == "/Pshar") {
      this.isActive3 = true;
    } else if (this.$route.path == "/Appdown") {
      this.isActive4 = true;
    }
    //获取用户信息
    this.axios
      .get("/user/getsession")
      .then(response => {
        this.usertel = response.data.tel;
        if (this.usertel) {
          this.axios
            .post("/user/getUserNew", {
              tel: this.usertel
            })
            .then(response => {
              // console.log(response.data);
              this.userXX = response.data[0];
              this.headsrc = response.data[0].head;
              this.b = false;
              this.a = true;
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    //使用用户信息,
    // console.log(this.userXX);
  }
};
</script>

<style>
a:hover{
    color: rgb(61, 132, 255);
}
.user-set li:hover {
  background: #ededed;
}
.user-name:hover {
  color: rgb(61, 132, 255);
}
.user-name1:hover .user-set {
  display: block;
}
.user-set li {
  width: 100px;
  font-size: 13px;
  color: #2a2a2a;
  letter-spacing: 0;
  background-color: #fff;
  padding: 5px 10px;
  /* transition:  all 1s; */
  cursor: pointer;
}
.user-set {
  position: absolute;
  right: 0;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  display: none;
  padding: 4px 0;
}
.user-name1 {
  position: relative;
}
.user-name {
  /* height: 30px; */
  width: 70px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13.3333px;
  color: rgb(119, 119, 119);
  cursor: pointer;
}
.duiqi {
  text-align: center;
}
* {
  margin: 0;
  padding: 0;
}
.bse {
  position: relative;
}
.se {
  position: absolute;
  width: 22px;
  height: 22px;
  left: 160px;
  top: 4px;
}
.bignav {
  width: 100%;
  height: 81px;
  background-color: white;
  position: fixed;
  top: 0px;
  box-shadow: 0px 15px 10px -15px #777777;
  z-index: 100;
}
.headsrc {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.search1 {
  width: 50px;
  background-color: red;
}
.bignav {
  width: 100%;
  height: 81px;
  border-bottom: 1px solid #f5f5f5;
}
.nav {
  margin: 0 auto;
  width: 1229px;
  height: 81px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  text-decoration: none;
  color: #777;
  font-size: 14px;
}
.search {
  /* height: 32px; */
  border: 1px solid #777777;
  padding: 7px 10px;
}
.search::-webkit-input-placeholder {
  color: #aab2bd;
  font-size: 12px;
}
.cen {
  display: flex;
  justify-content: space-between;
  width: 685px;
  align-items: center;
}
.active {
  color: rgb(61, 132, 255);
}
</style>