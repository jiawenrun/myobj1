<template>
    <div>
        <div class="tob-bar">
            <img src="../img/logo.png" class="logo" />
            <div class="right-route">
                <div class="apply">申请加入</div>
                <div><router-link to="/Login">登录</router-link></div>
                <div><router-link to="/Reg">注册</router-link></div>
            </div>
            </div>
        <div style="height:60px"></div>


    </div>
</template>

<script>
export default {
    
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, SF Pro SC, SF Pro Text,
    Helvetica Neue, Helvetica, PingFang SC, Segoe UI, Roboto, Hiragino Sans GB,
    arial, Source Han Sans CN, sans-serif;
}
.tob-bar {
  width: 100%;
  height: 60px;
  padding: 0 50px 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 15px 10px -15px #777777;
  background-color: #fff;
  position: fixed;
  z-index: 99;
}
.tob-bar > .logo {
  width: 275px;
  height: 30px;
}
.input-search {
  display: flex;
}
.input-search > .searchKey1 {
  width: 245px;
  height: 30px;
  border: 1px solid #f5f5f5;
  border-radius: 16px;
  background-color: #f5f5f5;
  padding-left: 15px;
  font-weight: 400;
  outline: none;
}

.el-icon-search:before {
  position: absolute;
  top: 8px;
  left: 8px;
  font-weight: bolder;
}

.tob-bar > .right-route {
  width: 242px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

</style>