<template>
    <div class="user-main-right">
        <ul class="userl-top">
          <li class="userl-top-one uto-choosed" ref="userl">认证信息</li>
        </ul>
        <div>
            <p class="gotoComf-text">还未有任何认证信息~</p>
          <div class="gotoComf">前去认证</div>
        </div>
      </div>
</template>
<style>
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
.gotoComf-text{
    margin-top: 45px;
    margin-left: 56px;
    color: #777;
    font-size: 16px;
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
</style>