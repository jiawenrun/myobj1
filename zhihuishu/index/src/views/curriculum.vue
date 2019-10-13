<template>
  <div>
    <Tophead></Tophead>
    <div style="height:81px"></div>
    <div class="topbgc">
      <div  class="topbgc1">
      <img v-bind:src="thiecurri.curimg" alt srcset width="100%"/>
      </div>
      <div class="title">
        <div class="title1">{{thiecurri.name}}</div>
        <div class="title2">{{thiecurri.category}}</div>
      </div>
      <div class="vadio">
        <div>
          <video
            v-bind:src="thiecurri.curmedia"
            controls="controls"
            autoplay="autoplay"
            width="596px"
            height="334px"
            loop="loop"
          ></video>
        </div>
        <div class="vadio1">
          <div class="kecen">课程介绍</div>
          <div class="kecenjs" ref="element">
            {{thiecurri.introdu}}
            <!-- charCodeAt(i) -->

            <div class="gengduo" v-if="str.length>164">
              <el-button type="text" @click="dialogTableVisible = true">查看更多&gt;</el-button>
              <el-dialog title="课程介绍" :visible.sync="dialogTableVisible">
                <div>
                  {{thiecurri.introdu}}
                </div>
              </el-dialog>
            </div>
          </div>
          <div class="xuefn3">
            <div class="xuefn1">
              <div>
                <img
                  src="http://localhost:81/1568977353840_0221712760.png"
                  alt
                  srcset
                  class="xuefn"
                  width="17px"
                  height="17px"
                />
                学分
              </div>
              <div class="xuefn2">{{thiecurri.credit}}</div>
            </div>

            <div class="xuefn1">
              <div>
                <img
                  src="http://localhost:81/1568977343195_0990008844.png"
                  alt
                  srcset
                  class="xuefn"
                  width="15px"
                  height="15px"
                />
                学时
              </div>
              <div class="xuefn2">{{thiecurri.classh}}</div>
            </div>

            <div class="xuefn1" v-if="thiecurri.nummeet">
              <div>
                <img
                  src="http://localhost:81/1568977382220_2022746160.png"
                  alt
                  srcset
                  class="xuefn"
                  width="14px"
                  height="14px"
                />
                学见面课
              </div>
              <div class="xuefn2">{{thiecurri.nummeet}}</div>
            </div>
          </div>

          <div class="xuefn4">
            <div class="xuefn1">
              <div>
                <img
                  src="http://localhost:81/1568977353840_0221712760.png"
                  alt
                  srcset
                  class="xuefn"
                  width="17px"
                  height="17px"
                />
                教师
              </div>
              <div class="xuefn2">{{thiecurri.teacher}}</div>
            </div>
          </div>
          <div class="xuefn4">
            <div class="xuefn1">
              <div>
                <img
                  src="http://localhost:81/1568977353840_0221712760.png"
                  alt
                  srcset
                  class="xuefn"
                  width="17px"
                  height="17px"
                />
                学校
              </div>
              <div class="xuefn2">{{thiecurri.school}}</div>
            </div>
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
      thiecurri: {},
      bgc: "",
      str: "",
      dialogTableVisible: false,
    };
  },
  methods: {
    url(bgc) {
      url("this.bgc");
    }
  },
  created() {
    // console.log(this.$route.query.cid);
    this.axios
      .get("/curri/getcurri", {
        params: {
          cid: this.$route.query.cid
        }
      })
      .then(res => {
        this.thiecurri = res.data[0];
        this.bgc = res.data[0].curimg;
        this.str = res.data[0].introdu;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  mounted() {}
};
</script>

<style>
.gengduo {
  position: absolute;
  right: 0;
  bottom: -13px;
  background-color: #fff;
  padding-left: 18px;
  color: #3d84ff;
}
.kecenjs {
  font-size: 14px;
  color: #2a2a2a;
  text-align: justify;
  line-height: 30px;
  margin-top: 12px;
  overflow: hidden;
  max-height: 112px;
  position: relative;
}
.kecen {
  font-size: 22px;
  color: #2a2a2a;
  line-height: 30px;
}
.xuefn4 {
  margin-top: 40px;
}
.xuefn3 {
  display: flex;
  align-items: center;
  margin: 40px 0;
}
.xuefn2 {
  font-size: 14px;
  color: #2a2a2a;
  margin-left: 20px;
}
.xuefn1 {
  display: flex;
  align-items: center;
  color: #777;
  margin-right: 40px;
}
.xuefn {
  vertical-align: middle;
}
.vadio1 {
  margin-left: 30px;
}
.vadio {
  width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: #fff;
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
}
.title2 {
  font-size: 15px;
  padding-top: 16px;
  margin-bottom: 10px;
}
.title1 {
  text-align: center;
  font-size: 35px;
  padding-top: 20px;
}
.title {
  width: 100%;
  text-align: center;
  color: white;
}
/* .aaa{
    background-color: #f08;
    width: 100px;
    height: 100px;
} */
.topbgc1 {
  width: 100%;
  height: 166px;
  position: absolute;
  top: 0;
  overflow: hidden;
  /* opacity: 0.8; */
  /* background-color: #000; */
  z-index: -100;
}
.topbgc {
  position: relative;
}
</style>