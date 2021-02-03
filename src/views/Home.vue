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
        <!-- <span class="header-line"></span> -->
        <el-divider direction="vertical"></el-divider>
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
          <login-form v-if="curTab==='login'" @goRegister="curTab='register'"></login-form>
          <register-form v-else @goLogin="curTab='login'"></register-form>
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
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';
export default {
  components: {
    LoginForm,
    RegisterForm
  },
  name: "Home",
  data() {
    return {
      curTab: "login", // login登录  register注册
      
    };
  },
  methods: {
    
  }
};
</script>
