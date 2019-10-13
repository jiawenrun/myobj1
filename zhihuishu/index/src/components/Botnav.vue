<template>
  <div>
    <div class="botnav">
      <div class="botnav1">
        <div v-for="(e,ind) in topurl" :key="ind">
          <a href class="topurl">{{e}}</a>
        </div>
      </div>
      <div class="botnav2">
        <div class="friendurl">友情链接</div>
        <div class="friendurl3">
          <div class="friendurl1">
            <ul>
              <li>
                <a href>东西部联盟</a>
              </li>
              <li>
                <a href>广东联盟</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href>吉林高校联盟</a>
              </li>
              <li>
                <a href>中医药联盟</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href>外经贸联盟</a>
              </li>
              <li>
                <a href>海南联盟</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href>民航教育网</a>
              </li>
              <li>
                <a href>高中共享联盟</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href>山东高校联盟</a>
              </li>
              <li>
                <a href>黑龙江联盟</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href>青岛高职共享中心</a>
              </li>
              <li>
                <a href>石油高校联盟</a>
              </li>
            </ul>
          </div>
          <div class="friendurl2">
            <div class="friendurl21">
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/768205ca599e44b4a87de55993b86d99.png"
                alt
                width="80px"
                height="80px"
                class="friendurl22"
              />
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/bad22676a937454693e1638fcf96bc54.png"
                alt
                width="60px"
                height="60px"
              />
            </div>
            <div class="friendurl21">
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/02900f40b3f54ed7a27dffb2f6fe1b44.png"
                alt
                width="80px"
                height="80px"
                class="friendurl22"
              />
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/d9bd3d7ddbe340f08b24878806d940c7.png"
                alt
                width="60px"
                height="60px"
              />
            </div>
          </div>
        </div>
        <div class="Copyright">
          <div class="Copyright1">
            Copyright © 2003-现在 Zhihuishu. All rights reserved.
            <a href>沪ICP备10007183号-5</a>
          </div>
          <div class="beianhao">
            <div>
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/551ded4481624c53a023a7071428b3c3.png"
                alt
                width="20px"
                height="20px"
              />
            </div>
            <div>
              <a href>沪公网备31010402003974号</a>
            </div>
          </div>
          <div class="beianhao">
            <div>
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201908/cd25bd7dce0c4dba9e095ba8e7a64e47.png"
                alt
                width="20px"
                height="20px"
              />
            </div>
            <div>
              <a href>电子营业执照</a>
            </div>
          </div>
          <div class="beianhao">
            <div>
              <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/able-commons/demo/201908/3c223ae6e949439f82b391df7eb22090.png"
                alt
                width="20px"
                height="20px"
              />
            </div>
            <div>
              <a href>信息系统安全等级保护备案证明</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mylian">
      <a href class="mylian-a"></a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      topurl: [
        "关于智慧树",
        "版权说明",
        "网站地图",
        "服务中心",
        "联系我们",
        "诚聘英才",
        "APP下载",
        "不良信息举报"
      ]
    };
  }
};
</script>

<style>
.Copyright1 {
  color: #777;
  font-size: 12px;
}
.Copyright {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
.Copyright a {
  color: #777;
  font-size: 12px;
}
.beianhao {
  display: flex;
  align-items: center;
  color: #777;
  font-size: 12px;
}
.friendurl21 {
  position: relative;
}
.friendurl22 {
  position: absolute;
  left: -80px;
  top: -10px;
  display: none;
}
.friendurl21:hover .friendurl22 {
  display: block;
}
.friendurl2 {
  display: flex;
  align-items: center;
}
li {
  list-style: none;
}
.friendurl1 a {
  line-height: 30px;
  font-size: 12px;
  color: #777;
}
.friendurl1 {
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  color: #777;
  text-decoration: none;
  font-size: 14px;
}
.botnav2 a:hover {
  color: #fff;
}
.friendurl3 {
  display: flex;
  justify-content: space-between;
}
.botnav2 {
  width: 1050px;
  margin: 0 auto;
}
.friendurl {
  color: #777;
  text-decoration: none;
  line-height: 60px;
  font-size: 14px;
}

.topurl {
  color: #777;
  text-decoration: none;
  line-height: 60px;
  font-size: 14px;
}
.botnav1 a:hover {
  color: #fff;
}
.botnav1 {
  width: 1050px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(119, 119, 119, 0.3);
}
.botnav {
  width: 100%;
  height: 260px;
  background-color: #2a2a2a;
}
</style>