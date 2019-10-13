<template>
  <div class="about">
    <Tophead></Tophead>
    <div style="height:81px"></div>
    <div>
      <img
        v-bind:src="bgcurl"
        alt
        srcset
        width="100%"
        height="500px"
      />
    </div>
    <div>
      <div class="topbox">
        <img
          src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/5a2087547c5449a1a76c83cd4af3a3c2.png"
          alt
          srcset
          class="commons"
          width="174px"
          height="168px"
        />
        <span>{{objective}}</span>
      </div>
    </div>
    <div>
      <div class="curitable">
        <table cellpadding="0px" cellspacing="0px">
          <tr class="curtatr">
            <th class="curname curname1">课程名称</th>
            <th class="curname curname2">学校</th>
            <th class="curname curname3">教师</th>
          </tr>
          <tr class="curtatr1" v-for="(e,ind) in curri" :key="ind">
            <td>{{e.name}}</td>
            <td>{{e.school}}</td>
            <td>{{e.teacher.split('、')[0]}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div>
      <div class="clearflex" v-for="(e,ind) in curri" :key="ind" @click="enter(e)">
        <div class="clleft">
          <div class="clleftimg">
            <img
              v-bind:src="e.curimg"
              alt
              srcset
              width="310px"
              height="170px"
            />
            <div class="clleftitle">{{e.name}}</div>
          </div>
          <div class="clleftitleBottom">
            <div class="cteach">
              <span>{{e.teacher.split('、')[0]}}</span>
              |
              <span>{{e.school}}</span>
            </div>
            <div class="xuefen">
              <div>
                <span>{{e.credit}}</span>学分
                <span>{{e.classh}}</span>学时
              </div>
              <div class="jianmianke">
                <span>{{e.nummeet}}</span>次见面课
              </div>
            </div>
          </div>
        </div>
        <div class="clright">
          <div class="clright1">课程介绍</div>
          <div class="clright2">从历史发展来看，生态文明将取代工业文明，随着可持续发展走向新的文明阶段；生态文明是形成新的人与自然的相互关系，是面向未来的大事。</div>
        </div>
      </div>
    </div>
    <Botnav></Botnav>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      bgcurl:'',
      objective:'',
      curri:[]
    }
  },
  methods:{
    enter(e){
      this.$router.push({ path: "/curriculum?cid=" + e.cid });
    }
  },
  created() {
    this.axios
      .get("/ban/getbanname", {
        params: {
          bid: this.$route.query.bid
        }
      })
      .then(response1 => {

        this.bgcurl=response1.data[0].backurl
        this.objective=response1.data[0].objective

        this.axios
          .get("/curri/seacheachcurri", {
            params: {
              keyword: response1.data[0].keyword
            }
          })
          .then(response2 => {
            this.curri=response2.data
            // console.log(response2.data);
          })
          .catch(function(error) {
            console.log(error);
          });

      })
      .catch(function(error) {
        console.log(error);
      });
    // console.log(this.$route.query.bid)
    // if (this.$route.query.bid == "yishu") {
    //   console.log("aaa");
    // }
  }
};
</script>

<style>
/* #3D84FF */
.clright2 {
  width: 434px;
  font-size: 16px;
  color: #3b3b3b;
  line-height: 22px;
  margin-top: 10px;
}
.clright1 {
  width: 102px;
  height: 28px;
  line-height: 28px;
  background: #3d84ff;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  border-radius: 5px;
  margin: 10px 0;
}
.jianmianke {
  margin-right: 10px;
}
.xuefen {
  padding-bottom: 5px;
  color: #8c8c8c;
  font-size: 14px;
  line-height: 24px;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.xuefen span {
  color: #3d84ff;
}
.cteach {
  height: 30px;
  line-height: 30px;
  margin: 10px 10px 0px;
  color: #3b3b3b;
}
.clleftitleBottom {
  box-sizing: border-box;
}
.clleftitle {
  position: absolute;
  bottom: 3px;
  width: 270px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
  left: 0;
  line-height: 50px;
  padding: 0 20px;
  background: rgba(0, 0, 0, 0.4);
  font-size: 20px;
}
.clleftimg {
  position: relative;
  box-sizing: border-box;
}
.clleft {
  width: 310px;
  border: #d5d5d5 1px solid;
}
.clearflex {
  width: 860px;
  margin: 70px auto;
  border-left: 4px solid #f3f6f7;
  border-right: 4px solid #f3f6f7;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.clearflex:hover {
  border-left: 4px solid #3d84ff;
  border-right: 4px solid #3d84ff;
}
.curtatr1 > td {
  height: 34px;
  border-bottom: 1px solid #ececec;
  font-size: 16px;
  color: #3d3d3d;
  text-align: left;
  text-indent: 30px;
  line-height: 34px;
  overflow: hidden;/*超出部分隐藏*/
    text-overflow:ellipsis;/* 超出部分显示省略号 */
    white-space: nowrap;/*规定段落中的文本不进行换行 */
}
.curname1 {
  width: 237px;
}
.curname2 {
  width: 365px;
}
.curname3 {
  width: 258px;
}
.curname {
  text-align: left;
  text-indent: 30px;
  color: #ffffff;
  font-size: 20px;
  line-height: 36px;
}
.curtatr {
  width: 100%;
  background-color: #3d84ff;
  font-size: 0;
}
.curitable {
  width: 860px;
  margin: 40px auto;
}
.topbox {
  width: 840px;
  margin: 0 auto;
  border: 4px solid #3d84ff;
  border-radius: 5px;
  margin-top: 100px;
  position: relative;
  min-height: 100px;
  padding: 20px 87px;
  box-sizing: border-box;
}
.commons {
  position: absolute;
  left: -87px;
  top: -84px;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
</style>