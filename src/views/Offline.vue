<template>
  <div class="offline-wrapper">
    <div class="offline-header">
      <div class="offline-header-l">
        <img src="../assets/images/cnki_logo.png" alt="" />
        <span>基础组件</span>
      </div>
      <div class="offline-header-r">
        <span>您好</span>
        <span @click="goLogin">请登录</span>
        <span>我的OKMS</span>
        <span><i class="icon-mail"></i>消息</span>
      </div>
    </div>

    <div class="offline-content">
      <div class="error">
        <h2>访问出错</h2>
        <p class="error-con">您的账号在 IP :10.120.130.176 登录，您被迫下线</p>
        <span class="login-btn" @click="goLogin">重新登录</span>
      </div>
    </div>

    <div class="offline-footer">
      <p>
        © 2021
        中国知网（CNKI）平台基础技术由同方知网数字出版技术股份有限公司提供
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "offline",
  methods: {
    goLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.offline-wrapper {
  width: 100vw;
  height: 100vh;
}

/* 头部 */
.offline-header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2a8cd7;
  padding: 0 30px;
  min-width: 800px;
}
.offline-header-l,
.offline-header-r {
  display: flex;
  align-items: center;
  color: #ffffff;
}
.offline-header-l span {
  font-size: 24px;
  margin-left: 20px;
}
.offline-header-r span {
  font-size: 12px;
  padding: 0 10px;
  border-right: 1px solid #2080ca;
  border-left: 1px solid #4299dc;
  cursor: pointer;
}
.offline-header-r span:first-child {
  border-left: none;
  cursor: text;
}
.offline-header-r span:last-child {
  border-right: none;
}
.icon-mail {
  display: inline-block;
  width: 22px;
  height: 18px;
  margin-right: 5px;
  vertical-align: middle;
  background: url(../assets/images/icon_mail.png) no-repeat 0 0;
}

/* 内容区 */
.offline-content {
  height: calc(100vh - 100px);
  text-align: center;
  background: #f3f3f4;
  box-sizing: border-box;
  padding-top: 150px;
}
.error h2 {
  font-size: 20px;
  margin-bottom: 20px;
}
.error-con {
  color: #555;
  margin-bottom: 30px;
}
.login-btn {
  display: inline-block;
  font-size: 14px;
  width: 85px;
  height: 35px;
  line-height: 35px;
  color: #fff;
  background: #428bca;
  border: 1px solid #357ebd;
  border-radius: 3px;
  cursor: pointer;
}
.login-btn:hover {
  background: #357fbe;
}

/* 底部 */
.offline-footer {
  color: #666;
  font: 14px "\5FAE\8F6F\96C5\9ED1";
  text-align: center;
  background: #efefef;
  height: 40px;
  line-height: 40px;
}
</style>
