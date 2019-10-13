<template>
  <div>
    <Tophead></Tophead>

    <div class="s" ref="sform">
      <div style="height:81px"></div>
      <div class="searchbar">
        <span class="text1" @click="tohome" style="cursor: pointer;">首页</span>
        <span class="chract">
          <img
            src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/9f903160b6bf4b62947e67a8d903535a.png"
            alt
            srcset
          />
        </span>
        <span class="text2">搜索结果</span>
      </div>
      <div class="content">
        <div class="s-box">
          <div class="c-div" prop="svalue">
            <input type="text" name id class="c-inp" placeholder="输入课程名称、开课学校或教师" v-model="search" ref="searchvalue"/>
            <div class="remove" @click="remove">
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/27cdd89b3a9642df8b29d30683699946.png"
                alt
              />
            </div>
          </div>
          <button class="c-btn" @click="searchForm">
            <i class="c-i">
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/70d72fbc459d41df9257e010de4ea52b.png"
                alt
                srcset
              />
            </i>
            搜索
          </button>
        </div>
        <div class="show">
          <div v-bind:class="{pleaceshuru:ispleaceshuru,hadsearch:ishadsearch}" ref="shownull">
            <img
              src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/86ad0d2951bb4806aac69d692ee42332.png"
              alt
              srcset
              class="s-img"
            />
            <p class="s-text">请输入关键字以查找课程！
              <br>
              <br>
              <br>
              <br>
              <br>
            </p>
          </div>
          <div class="course">
            <p v-bind:class="{ptext:isptext}" ref="ptext">搜索到以下相关课程</p>
            <div v-if="courseDetailM">
            <ul>
              <li v-for="(s,index) in courseDetailM" :key="index" @click="enter(s)" ref="">
                <img v-bind:src="s.curimg" alt class="bimg" />
                <div class="bdetail">
                  <div class="btop">
                    <div class="bname">{{s.name}}</div>
                    <div class="btype">{{s.type.split('，')[0]}}&emsp;|&emsp;{{s.type.split('，')[1]}}</div>
                  </div>
                  <div class="bmid">
                    <div class="aut">{{s.teacher.split('、')[0]}}</div>
                    <div class="sc">{{s.school}}</div>
                  </div>
                  <div class="bbo">
                    <span class="sgra">学分&emsp;{{s.credit}}</span>
                    <span class="stime">学时&emsp;{{s.classh}}</span>
                    <span class="sterm">运行学期&emsp;{{s.term}}</span>
                    <span class="sti">满意度&emsp;{{s.satisfy}}</span>
                  <div @click="xuanding(s,uid,index)" class="xuanding" >选定</div>
                  </div>
                </div>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height:70px;backgroundColor: #f6f6f6"></div>
    <Botnav></Botnav>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      search: "",
      searchname: "",
      courseDetail:[],
      ispleaceshuru: false,
      ishadsearch: false,
      isptext:true,
      self:{},
      uid:0
    };
  },
  computed:{
    courseDetailM:function(){
      return this.courseDetail
    }
  },
  watch: {
    search: function(a, b) {
      this.searchname = a;
      if( this.searchname){
         this.ishadsearch = true;
        this.isptext=false;
         this.axios
          .post("/course/searchCourse", {
            searchname: this.searchname
          })
          .then(response => {
            this.courseDetail = response.data;
            console.log(this.courseDetail);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  },
  methods: {
      xuanding(s,uid,index){
        this.courseDetail.splice(index,1)
        //   this.$refs.xuanding.stlye.backgroundcolor="#3d84ff"
        //   console.log(this.$refs.xuanding)
          console.log(s.cid)
          console.log(uid)
           this.axios
          .get("/cless/creat", {
            params: {
              uid: uid,
              cid: s.cid
            }
          })
          .then(response => {
            console.log(response.data);
            this.self = response.data[0];
          })
          .catch(function(error) {
            console.log(error);
          });
      },
    enter(s){
      // console.log(s)
    //   this.$router.push({ path: "/curriculum?cid=" + s.cid });
    },
    remove:function(){
      this.searchname={};
      console.log(1);
      this.$refs.searchvalue.value = "";
    },
    tohome: function() {
      this.$router.push({ path: "/" });
    },
    searchForm: function() {
      console.log();
        // this.ishadsearch = true;
        // this.isptext=false
        // this.$refs.shownull.style.display = "none";
        // this.$refs.ptext.style.display = "block";
        if( this.$refs.searchvalue.value){
         this.ishadsearch = true;
        this.isptext=false;
        this.axios
          .post("/course/searchCourse", {
            searchname: this.$refs.searchvalue.value
          })
          .then(response => {
            this.courseDetail = response.data;
            console.log(this.courseDetail);
          })
          .catch(function(error) {
            console.log(error);
          });
        }
    }
  },
  created() {
//    this.sform.courseDetail = '';
    // console.log( this.$route)
    
    this.axios
      .post( "/course/searchCourse", {searchname:  this.$route})
      .then(response => {
        this.sform.courseDetail = response.data;
        console.log(this.sform.courseDetail);
      })
      .catch(function(error) {
        console.log(error);
      });
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
            console.log(response.data);
            this.self = response.data[0];
            this.uid=response.data[0].uid
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  mounted(){
    this.$refs.searchvalue.value = '';
  },
  // updated(){
  //   this.$route.query.key=this.this.$refs.searchvalue.value
  // }
  
};
</script>
<style >
.xuanding{
    background-color: #3d84ff;
    margin-top: 5px;
    width: 40px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #f4f4f4;
    cursor: pointer;
    color: white;
}
/* .xuanding:link{
    background-color: #3d84ff;
} */
.hadsearch {
  display: none;
}
.pleaceshuru {
  display: block;
}
.ptext {
  display: none;
}
.stime {
  margin-left: 37px;
}
.sterm {
  margin-left: 40px;
}
.sti {
  margin-left: 30px;
}
.sc {
  margin-left: 34px;
}
.bmid {
  margin-top: 10px;
  width: 800px;
  height: 20px;
  margin-left: 13px;
}
.bmid::after {
  clear: both;
  content: "";
  display: block;
  visibility: hidden;
  height: 0;
}
.bmid div {
  float: left;
}
.bbo span {
  display: inline-block;
}
.bbo {
  margin-top: 17px;
  width: 800px;
  height: 20px;
  margin-left: 13px;
}
.bname {
  float: left;
  letter-spacing: 1px;
  font-size: 15px;
  color: #2a2a2a;
  font-weight: bold;
}
.btype {
  float: right;
}
.btop {
  width: 835px;
  height: 20px;
  margin: 0 auto;
}
.bdetail {
  width: 861px;
  height: 92px;
  font-size: 13px;

  float: right;
}
.course li {
  width: 1050px;
  height: 122px;
  margin-top: 20px;
}
li {
  list-style: none;
}
.bimg {
  width: 178px;
  height: 113px;
  float: left;
}
.course {
  width: 100%;
  font-size: 14px;
  color: #777777;
}
.s {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
}
.searchbar {
  width: 1100px;
  height: 24px;
  line-height: 24px;
  margin: 20px auto;
  color: #777777;
  position: relative;
}
.searchbar span {
  display: inline-block;
}
.chract {
  display: inline-block;
  width: 20px;
  height: 12px;
  vertical-align: middle;
  position: absolute;
  top: 2px;
  left: 43px;
}
.text2 {
  position: absolute;
  top: 2px;
  left: 70px;
  color: #2a2a2a;
}
.content {
  width: 1100px;
  /* height: 590px; */
  margin: 13px auto;
  background-color: #fff;
  padding-top: 50px;
  box-sizing: border-box;
}
.s-box {
  width: 604px;
  height: 50px;
  margin: 0 auto;
}
.c-div {
  width: 490px;
  height: 50px;
  float: left;
  border: 2px solid #ededed;
  box-sizing: border-box;
  position: relative;
}
.c-btn {
  width: 110px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #3d84ff;
  color: #fff;
  font-size: 14px;
  border: none;
}
.c-i {
  width: 10px;
  height: 32px;
  display: block;
  float: left;
  margin-top: 9px;
  margin-left: 19px;
}
.c-inp {
  width: 460px;
  padding-left: 20px;

  height: 25px;
  line-height: 25px;
  margin-top: 10px;
  font-size: 14px;
  color: #777777;
  box-sizing: border-box;
  border: none;
  outline: none;
}
.c-inp::-webkit-input-placeholder {
  color: #cbcbcb;
  font-size: 14px;
}
.remove {
  display: inline-block;
  width: 26px;
  height: 29px;
  position: absolute;
  top: 14px;
  right: -4px;
}
.show {
  width: 1000px;
  /* height: 400px; */
  margin-top: 50px;
  margin-left: 25px;
  color: #777777;
}
.s-img {
  width: 60px;
  margin-top: 45px;
  margin-left: 450px;
  height: 60px;
}
.s-text {
  margin-top: 20px;
  margin-left: 392px;
}
</style>