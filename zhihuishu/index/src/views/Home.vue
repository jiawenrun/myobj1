<template>
  <div class="home">
    <Tophead></Tophead>
    <div class="top"></div>
    <div class="banner">
      <div class="banimg">
        <img
          src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/99a71f3b0cb54e01b9531f307d6e820d.png"
          alt
        />
      </div>
      <div class="car">
        <div class="bgc">
          <div class="bl" @click="lt"><i class="el-icon-arrow-left"></i></div>
          <div class="br" @click="gt"><i class="el-icon-arrow-right"></i></div>
          <div v-bind:class="{bb1:isbb1,bb2: isbb2}" ref="pTag" id="bb1">
            <ul class="car0">
              <li class="car1" @click="car1">
                <div>新课上线</div>
              </li>
              <li class="car2" @click="car2">
                <div>艺术体验与审美鉴赏</div>
              </li>
              <li class="car3" @click="car3">
                <div>大思政</div>
              </li>
              <li class="car4" @click="car4">
                <div>创新创业与职业就业</div>
              </li>
              <li class="car5" @click="car5">
                <div>健康安全</div>
              </li>
              <li class="car6" @click="car6">
                <div>健康安全</div>
              </li>
              <li class="car7" @click="car7">
                <div>中国历史与文化传承</div>
              </li>
              <li class="car8" @click="car8">
                <div>世界眼光与国际视野</div>
              </li>
              <li class="car9" @click="car9">
                <div>社会科学与批判性思维</div>
              </li>
              <li class="car10" @click="car10">
                <div>生态文明与生命关怀</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="jinke">
        <img src="http://localhost:81/1568806392028_5933453969.png" alt class="jinke1" />国家金课
      </div>
    </div>
    <div>
      <div class="contry">
        <div>
          <img v-bind:src="curimg" alt class="c0" @click="curi" />
        </div>
        <div>
          <div class="cr">
            <div class="t1">{{name}}</div>
            <div class="t2">
              {{school}}
              <span class="t22">{{alreadylea}}人</span>已学
            </div>
          </div>
          <div class="t3">
            <div class="t4">{{introdu}}</div>
            <div class="huan" @click="huan">
              换一换
              <img v-bind:src="huan1" alt class="huan1" />
            </div>
            <div class="t5">
              <ul>
                <li v-for="(e,ind) in fivecar" :key="ind">
                  <img v-bind:src="e.curimg" alt srcset @mouseenter="enter(e)" @click="into(e)" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="hotfive.length>0 && newfive.length>0">
      <div class="hot">
        <div class="hot1">
          <div class="hot-top5">热门TOP5</div>
          <div class="HOT-1" @click="hot1">
            <div class="hi">
              <img v-bind:src="hot_1" alt />
            </div>
            <div class="hotright">
              <div class="hotleft">
                <div>
                  <img v-bind:src="hotfive[0].curimg" alt class="himg" />
                </div>
                <div class="junl3">
                  <div class="junl">{{hotfive[0].name}}</div>
                  <div class="junl2">
                    <span>{{hotfive[0].school}}</span> |
                    <span>{{hotfive[0].teacher.split('、')[0]}}</span>
                  </div>
                </div>
              </div>
              <div class="xuanke">
                <div class="xuanke1">{{hotfive[0].alreadylea}}人</div>
                <div class="xuanke2">选课人数</div>
              </div>
            </div>
          </div>

          <div class="HOT-1" @click="hot2">
            <div class="hi">
              <img v-bind:src="hot_2" alt />
            </div>
            <div class="hotright">
              <div class="hotleft">
                <div>
                  <img v-bind:src="hotfive[1].curimg" alt class="himg" />
                </div>
                <div class="junl3">
                  <div class="junl">{{hotfive[1].name}}</div>
                  <div class="junl2">
                    <span>{{hotfive[1].school}}</span> |
                    <span>{{hotfive[1].teacher.split('、')[0]}}</span>
                  </div>
                </div>
              </div>
              <div class="xuanke">
                <div class="xuanke1">{{hotfive[1].alreadylea}}人</div>
                <div class="xuanke2">选课人数</div>
              </div>
            </div>
          </div>

          <div class="HOT-1" @click="hot3">
            <div class="hi">
              <img v-bind:src="hot_3" alt />
            </div>
            <div class="hotright">
              <div class="hotleft">
                <div>
                  <img v-bind:src="hotfive[2].curimg" alt class="himg" />
                </div>
                <div class="junl3">
                  <div class="junl">{{hotfive[2].name}}</div>
                  <div class="junl2">
                    <span>{{hotfive[2].school}}</span> |
                    <span>{{hotfive[2].teacher.split('、')[0]}}</span>
                  </div>
                </div>
              </div>
              <div class="xuanke">
                <div class="xuanke1">{{hotfive[2].alreadylea}}人</div>
                <div class="xuanke2">选课人数</div>
              </div>
            </div>
          </div>

          <div class="HOT-1" @click="hot4">
            <div class="hi">
              <div>4</div>
            </div>
            <div class="hotright">
              <div class="hotleft">
                <div>
                  <img v-bind:src="hotfive[3].curimg" alt class="himg" />
                </div>
                <div class="junl3">
                  <div class="junl">{{hotfive[3].name}}</div>
                  <div class="junl2">
                    <span>{{hotfive[3].school}}</span> |
                    <span>{{hotfive[3].teacher.split('、')[0]}}</span>
                  </div>
                </div>
              </div>
              <div class="xuanke">
                <div class="xuanke1">{{hotfive[3].alreadylea}}人</div>
                <div class="xuanke2">选课人数</div>
              </div>
            </div>
          </div>

          <div class="HOT-1" @click="hot5">
            <div class="hi">
              <div>5</div>
            </div>
            <div class="hotright">
              <div class="hotleft">
                <div>
                  <img v-bind:src="hotfive[4].curimg" alt class="himg" />
                </div>
                <div class="junl3">
                  <div class="junl">{{hotfive[4].name}}</div>
                  <div class="junl2">
                    <span>{{hotfive[4].school}}</span> |
                    <span>{{hotfive[4].teacher.split('、')[0]}}</span>
                  </div>
                </div>
              </div>
              <div class="xuanke">
                <div class="xuanke1">{{hotfive[4].alreadylea}}人</div>
                <div class="xuanke2">选课人数</div>
              </div>
            </div>
          </div>
        </div>

        <div class="hot1">
          <div class="hot-top5">最新TOP5</div>
          <div class="HOT-1" @click="new1">
            <div class="hi">
              <img v-bind:src="new_1" alt />
            </div>
            <div class="hotright">
              <div class="hotleft">
                <div>
                  <img v-bind:src="newfive[0].curimg" alt class="himg" />
                </div>
                <div class="junl3">
                  <div class="junl">{{newfive[0].name}}</div>
                  <div class="junl2">
                    <span>{{newfive[0].school}}</span> |
                    <span>{{newfive[0].teacher.split('、')[0]}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="HOT-1" @click="new2">
            <div class="hi">
              <img v-bind:src="new_2" alt />
            </div>
            <div class="hotright">
              <div class="hotleft">
                <div>
                  <img v-bind:src="newfive[1].curimg" alt class="himg" />
                </div>
                <div class="junl3">
                  <div class="junl">{{newfive[1].name}}</div>
                  <div class="junl2">
                    <span>{{newfive[1].school}}</span> |
                    <span>{{newfive[1].teacher.split('、')[0]}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="HOT-1" @click="new3">
            <div class="hi">
              <img v-bind:src="new_3" alt />
            </div>
            <div class="hotright">
              <div class="hotleft">
                <div>
                  <img v-bind:src="newfive[2].curimg" alt class="himg" />
                </div>
                <div class="junl3">
                  <div class="junl">{{newfive[2].name}}</div>
                  <div class="junl2">
                    <span>{{newfive[2].school}}</span> |
                    <span>{{newfive[2].teacher.split('、')[0]}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="HOT-1" @click="new4">
            <div class="hi">
              <div>4</div>
            </div>
            <div class="hotright">
              <div class="hotleft">
                <div>
                  <img v-bind:src="newfive[3].curimg" alt class="himg" />
                </div>
                <div class="junl3">
                  <div class="junl">{{newfive[3].name}}</div>
                  <div class="junl2">
                    <span>{{newfive[3].school}}</span> |
                    <span>{{newfive[3].teacher.split('、')[0]}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="HOT-1" @click="new5">
            <div class="hi">
              <div>5</div>
            </div>
            <div class="hotright">
              <div class="hotleft">
                <div>
                  <img v-bind:src="newfive[4].curimg" alt class="himg" />
                </div>
                <div class="junl3">
                  <div class="junl">{{newfive[4].name}}</div>
                  <div class="junl2">
                    <span>{{newfive[4].school}}</span> |
                    <span>{{newfive[4].teacher.split('、')[0]}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="jinke">
        <img src="http://localhost:81/1568864603624_5596487270.png" alt class="jinke1" />微专业
      </div>
    </div>

    <div>
      <div class="wzhuanye">
        <div>
          <img
            src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/33a10756607a4d0bb7b07040c1a5408c.jpg"
            alt
            srcset
            width="400px"
            height="225px"
            class="wzyimg"
            @click="Micspe"
          />
        </div>
        <div class="beij">
          <div class="beijing">北京大学微专业</div>
          <div
            class="beijing1"
          >课程特色：北京大学国际关系学院率先在校内成立“国际组织与国际公共政策系”， 在考察国外16所一流高校国际组织人才培训教学大纲、基本要求的基础上，全新 设计4门课程组成“微专业”，既包括国际关系基础课程，又包括实践性强、可操作 的实用性课程，以“国际性、交叉性、实用性”的三性合一为特色。</div>
          <div class="beijing2">国际教学团队 / 丰富教学方法 / 多门精选课程 / 实习就业推荐</div>
          <div class="rele">
            <div class="report" @click="baoming">立即报名</div>
            <div class="learn" @click="Micspe">了解更多</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="jinke">
        <img src="http://localhost:81/1568881140825_8427868392.png" alt class="jinke1" />文学文化
      </div>
    </div>
    <div>
      <div class="literature">
        <div v-for="(e,ind) in literature" :key="ind" class="lith"  @click="literature1(e)">
          <div class="limg">
            <div class="libox">
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/3eb825c43ba0490987ed8d039408e56f.png"
                alt
                srcset
                class="limgm1"
              />
            </div>
            <img v-bind:src="e.curimg" alt srcset width="320px" height="180px" class />
          </div>
          <div class="liword">{{e.name}}</div>
          <div class="listress">
            <span>{{e.school}}</span> |
            <span>{{e.teacher.split('、')[0]}}</span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="jinke">
        <img src="http://localhost:81/1568897978052_6101080143.png" alt class="jinke1" />艺术设计
      </div>
    </div>
    <div>
      <div class="literature">
        <div v-for="(e,ind) in art" :key="ind" class="lith" @click="literature2(e)">
          <div class="limg">
            <div class></div>
            <div>
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/3eb825c43ba0490987ed8d039408e56f.png"
                alt
                srcset
                class="limgm1"
              />
            </div>
            <img v-bind:src="e.curimg" alt srcset width="320px" height="180px" class />
          </div>
          <div class="liword">{{e.name}}</div>
          <div class="listress">
            <span>{{e.school}}</span> |
            <span>{{e.teacher.split('、')[0]}}</span>
          </div>
        </div>
      </div>
    </div>
       <div>
      <div class="jinke">
        <img src="http://localhost:81/1568903150282_5677329928.png" alt class="jinke1" />合作院校
      </div>
    </div>
    <div>
      <div class="hezuo">
        <img src="http://localhost:81/1568903168706_9162621595.jpg" alt="" width="1050px" height="240px">
      </div>
    </div>
    <Botnav></Botnav>
    <!-- https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/b9bf010fbfa04e9ebcae16668938f79c.jpg -->
  </div>
</template>
    

<script>
export default {
  data: function() {
    return {
      art: [],
      literature: [],
      isSmall: false,
      curimg: "",
      newfive: [],
      hotfive: [],
      new_3: "http://localhost:81/1568857844529_0294680302.png",
      new_2: "http://localhost:81/1568857839259_3571296025.png",
      new_1: "http://localhost:81/1568857801772_9939371791.png",
      hot_3: "http://localhost:81/1568857338165_3786868421.png",
      hot_2: "http://localhost:81/1568857156690_2681378550.png",
      hot_1: "http://localhost:81/1568853506141_3837727784.png",
      a: false,
      isbb2: false,
      isbb1: true,
      le: "",
      c0: "http://localhost:81/1568804282189_4554207837.jpg",
      fivecar: [1, 2],
      introdu: "",
      alreadylea: 0,
      school: "",
      name: "",
      cid: 0,
      huan1: "http://localhost:81/1568820381942_4662030513.png"
    };
  },
  methods: {
    leave: function() {
      this.isBig = false;
      this.isSmall = true;
      this.is0pacity = true;
      this.isNoopacity = false;
    },
    enter(e) {
      //  console.log(e);
      this.introdu = e.introdu;
      this.alreadylea = e.alreadylea;
      this.school = e.school;
      this.name = e.name;
      this.curimg = e.curimg;
      this.cid = e.cid;
    },
    literature2(e){
      this.$router.push({ path: "/curriculum?cid=" + e.cid });
    },
     literature1(e){
      this.$router.push({ path: "/curriculum?cid=" + e.cid });
    },
    into(e) {
      this.$router.push({ path: "/curriculum?cid=" + e.cid });
    },
    gt: function() {
      this.isbb1 = false;
      this.isbb2 = true;
    },
    lt: function() {
      this.isbb1 = true;
      this.isbb2 = false;
    },
    car1: function() {
      this.$router.push({ path: "/ban?bid=1" });
    },
    car2: function() {
      this.$router.push({ path: "/ban?bid=2" });
    },
    car3: function() {
      this.$router.push({ path: "/ban?bid=3" });
    },
    car4: function() {
      this.$router.push({ path: "/ban?bid=4" });
    },
    car5: function() {
      this.$router.push({ path: "/ban?bid=5" });
    },
    car6: function() {
      this.$router.push({ path: "/ban?bid=5" });
    },
    car7: function() {
      this.$router.push({ path: "/ban?bid=6" });
    },
    car8: function() {
      this.$router.push({ path: "/ban?bid=7" });
    },
    car9: function() {
      this.$router.push({ path: "/ban?bid=8" });
    },
    car10: function() {
      this.$router.push({ path: "/ban?bid=9" });
    },
    curi: function() {
      this.$router.push({ path: "/curriculum?cid=" + this.cid });
    },
    hot1: function() {
      this.$router.push({ path: "/curriculum?cid=" + this.hotfive[0].cid });
    },
    hot2: function() {
      this.$router.push({ path: "/curriculum?cid=" + this.hotfive[1].cid });
    },
    hot3: function() {
      this.$router.push({ path: "/curriculum?cid=" + this.hotfive[2].cid });
    },
    hot4: function() {
      this.$router.push({ path: "/curriculum?cid=" + this.hotfive[3].cid });
    },
    hot5: function() {
      this.$router.push({ path: "/curriculum?cid=" + this.hotfive[4].cid });
    },
    new1: function() {
      this.$router.push({ path: "/curriculum?cid=" + this.newfive[0].cid });
    },
    new2: function() {
      this.$router.push({ path: "/curriculum?cid=" + this.newfive[1].cid });
    },
    new3: function() {
      this.$router.push({ path: "/curriculum?cid=" + this.newfive[2].cid });
    },
    new4: function() {
      this.$router.push({ path: "/curriculum?cid=" + this.newfive[3].cid });
    },
    new5: function() {
      this.$router.push({ path: "/curriculum?cid=" + this.newfive[4].cid });
    },
    Micspe: function() {
      this.$router.push({ path: "/Micspe" });
    },
    baoming: function() {
      this.$router.push({ path: "/baoming" });
    },
    huan: function() {
      this.axios
        .get("/curri/getFive")
        .then(response => {
          console.log(response.data);
          this.fivecar = response.data;
          this.introdu = response.data[0].introdu;
          this.alreadylea = response.data[0].alreadylea;
          this.school = response.data[0].school;
          this.name = response.data[0].name;
          this.curimg = response.data[0].curimg;
          this.cid = response.data[0].cid;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.axios
      .get("/curri/getFive")
      .then(response => {
        // console.log(response.data)
        this.fivecar = response.data;
        this.introdu = response.data[0].introdu;
        this.alreadylea = response.data[0].alreadylea;
        this.school = response.data[0].school;
        this.name = response.data[0].name;
        this.curimg = response.data[0].curimg;
        this.cid = response.data[0].cid;
      })
      .catch(function(error) {
        console.log(error);
      });

    this.axios
      .get("/curri/getHotfive")
      .then(response => {
        // console.log(response.data);
        this.hotfive = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });

    this.axios
      .get("/curri/getNewfive")
      .then(response => {
        // console.log(response.data);
        this.newfive = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });

    this.axios
      .get("/curri/literature")
      .then(response => {
        // console.log(response.data);
        this.literature = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    this.axios
      .get("/curri/art")
      .then(response => {
        // console.log(response.data);
        this.art = response.data;
        // console.log(new Date());
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  mounted() {
    // setTimeout(()=>{
    //   this.myshow=true
    // },3000)
  }
};
</script>




<style>
.hezuo{
  width: 1050px;
  height: 240px;
  margin: 0 auto 60px;
}
.wzyimg {
  cursor: pointer;
}
.lith {
  margin-bottom: 60px;
}
.listress {
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  color: #777777;
  margin-top: 5px;
}
.liword {
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: #2a2a2a;
  margin-top: 5px;
}
.limg {
  width: 320px;
  height: 180px;
  position: relative;
  overflow: hidden;
  background-color: #000;
  z-index: 10;
}
.limg > img {
  cursor: pointer;
  opacity: 1;
  transition: all 1s;
}
.limg > img:hover {
  opacity: 0.5;
  transform: scale(1.4);
}
.limg:hover .limgm1 {
  opacity: 1;
}
.limgm1 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 66;
  cursor: pointer;
  opacity: 0;
  transition: opacity 1s;
}

.literature {
  width: 1050px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
}
.rele {
  display: flex;
}
.learn {
  height: 28px;
  width: 100px;
  border: 1px solid #3d84ff;
  border-radius: 22px;
  line-height: 30px;
  color: #3d84ff;
  text-align: center;
  cursor: pointer;
  margin-left: 10px;
}
.report {
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: #3d84ff;
  border-radius: 22px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
.beijing2 {
  font-size: 12px;
  color: #3d84ff;
  margin-right: 5px;
  margin: 20px 0;
}
.beij {
  margin-left: 40px;
}
.beijing1 {
  font-size: 14px;
  color: #bfbfbf;
  margin-top: 10px;
  line-height: 20px;
  width: 422px;
}
.beijing {
  height: 25px;
  line-height: 25px;
  font-size: 18px;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 10px;
}
.wzhuanye {
  width: 1050px;
  height: 306px;
  margin: 0 auto;
  background-color: #2d2d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 60px;
  box-sizing: border-box;
}
.junl3 {
  margin-left: 15px;
}
.hotright {
  width: 500px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ededed;
}
.hot-top5 {
  padding-left: 15px;
  height: 59px;
  line-height: 60px;
  font-size: 18px;
  color: #000000;
  border-bottom: 1px solid #ededed;
  font-weight: bold;
}
.hotleft {
  display: flex;
  align-items: center;
}
.junl2 {
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  color: #777777;
  margin-top: 5px;
}
.junl {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #2a2a2a;
}
.hi {
  margin-right: 10px;
  font-size: 18px;
  color: #777777;
  width: 50px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.xuanke2 {
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  color: #777777;
  text-align: right;
}
.xuanke1 {
  font-size: 12px;
  color: #2a2a2a;
  height: 18px;
  line-height: 18px;
}
.xuanke {
  text-align: right;
}
.himg {
  width: 96px;
  height: 54px;
}
.HOT-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  cursor: pointer;
}
.hot1 {
  width: 515px;
  -moz-box-shadow: 0px 0px 11px #c2c2c2;
  -webkit-box-shadow: 0px 0px 11px #c2c2c2;
  box-shadow: 0px 0px 11px #c2c2c2;
}
.hot {
  width: 1050px;
  height: 504px;
  display: flex;
  justify-content: space-between;
  margin: 80px auto;
  /* overflow: hidden; */
}
.huan1 {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.huan {
  font-size: 14px;
  color: #3d84ff;
  letter-spacing: 0.17px;
  text-align: right;
  margin: 10px auto;
  cursor: pointer;
  width: 100px;
  padding-right: 26px;
}
.t5 {
  margin-left: 22px;
}
.t5 li {
  display: inline-block;
  list-style: none;
  margin-right: 8px;
}
.t5 li img {
  width: 96px;
  height: 54px;
  cursor: pointer;
}
.t4 {
  width: 522px;
  height: 60px;
  margin-left: 22px;
  font-size: 12px;
  color: #2a2a2a;
  letter-spacing: 0.15px;
  line-height: 18px;
  padding-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.t3 {
  height: 180px;
  width: 1000px;
  background-color: #fef6e9;
}
.t22 {
  font-size: 12px;
  color: #2a2a2a;
  letter-spacing: 0.15px;
  line-height: 18px;
  padding-left: 20px;
}
.t2 {
  font-size: 12px;
  color: #777777;
  letter-spacing: 0.15px;
  line-height: 18px;
  padding-top: 5px;
  padding-bottom: 60px;
}
.t1 {
  font-size: 18px;
  color: #2a2a2a;
  letter-spacing: 0.22px;
  line-height: 30px;
  font-weight: bold;
}
.cr {
  margin-left: 20px;
}
.c0 {
  width: 480px;
  height: 270px;
  cursor: pointer;
}
.contry {
  width: 1050px;
  height: 270px;
  display: flex;
  margin: 0 auto;
  overflow: hidden;
}
.jinke {
  width: 140px;
  margin: 90px auto 20px;
  font-size: 24px;
  font-weight: bold;
  color: #2a2a2a;
}
.jinke1 {
  vertical-align: middle;
  margin-right: 10px;
}
.bgc {
  position: relative;
}
.bb1 {
  position: absolute;
  left: 0;
  transition: left 1s;
}
.bb2 {
  position: absolute;
  transition: left 1s;
  left: -1040px;
}

.car0 {
  width: 2200px;
}
.car0 li {
  position: relative;
  list-style: none;
  display: inline-block;
  width: 200px;
  height: 92px;
  background-color: blue;
  text-align: center;
  top: 10px;
}
.car0 li:hover {
  top: 0px;
}
.car0 > li div {
  width: 94px;
  position: absolute;
  color: white;
  font-size: 16px;
  font-weight: bold;
  word-break: break-all;
  height: 100px;
  top: 25px;
  left: 70px;
}
.car2,
.car4,
.car7,
.car9 {
  margin: 0 10px;
}
.top {
  height: 81px;
}
.banner {
  width: 100%;
  height: 299px;
  background-image: linear-gradient(180deg, #0a4dc2 0%, #226cec 100%);
  padding-top: 80px;
  overflow: hidden;
}
.banimg {
  width: 400px;
  margin: 0 auto;
}
.car {
  width: 1040px;
  height: 100px;
  margin: 24px auto 0;
  overflow: hidden;
  position: relative;
}

.bl {
  position: absolute;
  width: 25px;
  height: 50px;
  top: 24px;
  left: 0px;
  text-align: center;
  line-height: 50px;
  background-color: rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.4);
  z-index: 100;
  cursor: pointer;
}
.bl:hover{
  background-color: rgba(255, 255, 255, 0.7);
}
.br:hover{
  background-color: rgba(255, 255, 255, 0.7);
}
.br {
  position: absolute;
  width: 25px;
  height: 50px;
  right: 0px;
  top: 24px;
  text-align: center;
  line-height: 50px;
  background-color: rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.4);
  z-index: 100;
  cursor: pointer;
}
.car1 {
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/b50e22b961f948c2a405a5ce77547382.jpg");
  background-size: cover;
  cursor: pointer;
}
.car2 {
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/4e14143d9faa478f909379f7e356c55d.png");
  background-size: cover;
  cursor: pointer;
}
.car3 {
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/86abd9eede164141bf12a40dbec9005f.jpg");
  background-size: cover;
  cursor: pointer;
}
.car4 {
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/4644b01d8756443aa48cf71e4dbcd03e.jpg");
  background-size: cover;
  cursor: pointer;
}
.car5 {
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/b9bf010fbfa04e9ebcae16668938f79c.jpg");
  background-size: cover;
  cursor: pointer;
}
.car6 {
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/b50e22b961f948c2a405a5ce77547382.jpg");
  background-size: cover;
  cursor: pointer;
}
.car7 {
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/4e14143d9faa478f909379f7e356c55d.png");
  background-size: cover;
  cursor: pointer;
}
.car8 {
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/86abd9eede164141bf12a40dbec9005f.jpg");
  background-size: cover;
  cursor: pointer;
}
.car9 {
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/4644b01d8756443aa48cf71e4dbcd03e.jpg");
  background-size: cover;
  cursor: pointer;
}
.car10 {
  background-image: url("https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/b9bf010fbfa04e9ebcae16668938f79c.jpg");
  background-size: cover;
  cursor: pointer;
}
</style>