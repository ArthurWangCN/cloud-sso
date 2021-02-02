<template>
  <div class="login-wrapper">
    <div class="login-header">
      <div class="login-logo">
        <img src="../assets/images/logoB.png" alt="logo" />
        <h1 class="website-title">CNKI百行知识创新服务平台</h1>
      </div>
      <div class="login-header-c">
        <a href="javaScript:;">平台介绍</a>
        <a href="javaScript:;">使用指南</a>
        <a href="https://www.cnki.net/" target="_blank">CNKI总库平台</a>
        <a href="http://kms.cnki.net" target="_blank">知识管理</a>
        <a href="http://km.cnki.net/foundation/home/login#/home" target="_blank"
          >OKMS汇智</a
        >
        <a href="~/home/contactIndustry">联系我们</a>
      </div>
      <div class="login-btns">
        <span
          class="btn-s"
          :class="{ 'cur-btn-s': curTab === 'login' }"
          @click="curTab = 'login'"
          >登录</span
        >
        <span
          class="btn-s"
          :class="{ 'cur-btn-s': curTab === 'register' }"
          @click="curTab = 'register'"
          >注册</span
        >
      </div>
    </div>

    <div class="login-body">
      <div class="login-content">
        <div class="login-content-l">
          <p class="font-s60">知识管理 + 知识服务</p>
          <p class="lt-bot">
            <span class="font-s30">专业知识体系</span><i class="circle"></i>
            <span class="font-s30">岗位知识体系</span><i class="circle"></i>
            <span class="font-s30">知识矩阵</span><i class="circle"></i>
            <span class="font-s30">内外部知识融合</span>
          </p>
          <p class="lt-cir">
            <span>面向业务</span>
            <span>面向流程</span>
            <span>面向岗位</span>
            <span>问题导向</span>
          </p>
          <p class="lt-imgp">
            <img src="../assets/images/login-limg1.png" class="lt-img" />
          </p>
        </div>
        <div class="login-content-r">
          <h2 class="form-header">
            <span>用户登录</span>
            <span class="form-header-r">新用户注册</span>
          </h2>
          <el-form>
            <!-- 错误提示信息 -->
            <el-form-item class="posr">
              <p class="tip-txt" v-show="showTip">
                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-warn"></use></svg>{{tip}}
              </p>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="用户名/邮箱/手机号（可用已注册的知网个人账号登录）" v-model="form.username" v-on:keyup.native.13="login" name="username">
                    <svg slot="prefix" class="icon" aria-hidden="true"><use xlink:href="#icon-denglu1"></use></svg>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="密码" type="password" name="password" v-model="form.password" v-on:keyup.native.13="login">
                    <svg slot="prefix" class="icon" aria-hidden="true"><use xlink:href="#icon-personPwd"></use></svg>
                </el-input>
            </el-form-item>
            <el-form-item v-show="errCount>2">
                <el-input placeholder="验证码" class="yzm-item" v-model="form.verifyCode" v-on:keyup.native.13="login" name="verifyCode">
                    <svg slot="prefix" class="icon" aria-hidden="true"><use xlink:href="#icon-personYzm"></use></svg>
                </el-input>
                <img class="vam float-r cp" v-bind:src="verifyImgSrc" v-on:click="getVerifyCode" />
            </el-form-item>
            <el-form-item class="clearfix find-item">
                <a href="http://my.cnki.net/mycnki/RealName/FindPsd.aspx" class="float-r color-4e">找回密码</a>
            </el-form-item>
            <el-form-item class="btn-form-item">
                <span class="login-btn" v-on:click="login">{{loginText}}</span>
            </el-form-item>
          </el-form>

          <!-- 第三方登录 -->
          <div class="chat-icon">
            <!-- <p>第三方登录</p> -->
            <a href="javascript:;" v-on:click="thirdLogin('qq')">
                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-qq"></use></svg>
                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-qq1"></use></svg>
            </a>
            <a href="javascript:;" v-on:click="thirdLogin('weixin')">
                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg>
                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-weixin1"></use></svg>
            </a>
            <a href="javascript:;" v-on:click="thirdLogin('sina')">
                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-weibo1"></use></svg>
                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-weibo"></use></svg>
            </a>
            <a href="javascript:;" v-on:click="thirdLogin('163')">
                <svg class="icon icon-wangyi1" aria-hidden="true"><use xlink:href="#icon-wangyi1"></use></svg>
                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-wangyi"></use></svg>
            </a>
          </div>
        </div>
      </div>

      <img class="bg-corner bg-l-t" src="../assets/images/cir3.png" alt="" />
      <img class="bg-corner bg-r-t" src="../assets/images/cir5.png" alt="" />
      <img class="bg-corner bg-l-b" src="../assets/images/cir4.png" alt="" />
      <img class="bg-corner bg-r-b" src="../assets/images/cir2.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      curTab: "login", // login登录  register注册
      tip: '',   // 错误提示
      showTip: false,
      loginText: '登 录',
      form: {
        username: "",
        password: "",
        verifyCode: "",
        agree: true
      },
      errCount: 0,
      verifyImgSrc: '',
    };
  },
  methods: {
    login() {},

    verifyCode() {},

    getVerifyCode() {},

    thirdLogin() {},
  }
};
</script>
