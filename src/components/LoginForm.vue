<template>
  <div class="form-wrapper">
    <h2 class="form-header">
      <span>用户登录</span>
      <span class="form-header-r" @click="goRegister">新用户注册</span>
    </h2>
    <el-form>
      <!-- 错误提示信息 -->
      <el-form-item class="posr">
        <p class="tip-txt" v-show="showTip">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-warn"></use></svg
          >{{ tip }}
        </p>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="用户名/邮箱/手机号（可用已注册的知网个人账号登录）"
          v-model="form.username"
          v-on:keyup.native.13="login"
          name="username"
        >
          <svg slot="prefix" class="icon" aria-hidden="true">
            <use xlink:href="#icon-denglu1"></use>
          </svg>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="密码"
          type="password"
          name="password"
          v-model.trim="form.password"
          v-on:keyup.native.13="login"
        >
          <svg slot="prefix" class="icon" aria-hidden="true">
            <use xlink:href="#icon-personPwd"></use>
          </svg>
        </el-input>
      </el-form-item>
      <el-form-item v-show="errCount > 2">
        <el-input
          placeholder="验证码"
          class="yzm-item"
          v-model="form.verifyCode"
          v-on:keyup.native.13="login"
          name="verifyCode"
        >
          <svg slot="prefix" class="icon" aria-hidden="true">
            <use xlink:href="#icon-personYzm"></use>
          </svg>
        </el-input>
        <img
          class="vam float-r cp"
          v-bind:src="verifyImgSrc"
          v-on:click="getVerifyCode"
        />
      </el-form-item>
      <el-form-item class="clearfix find-item">
        <a
          href="http://my.cnki.net/mycnki/RealName/FindPsd.aspx"
          class="float-r color-4e"
          >找回密码</a
        >
      </el-form-item>
      <el-form-item class="btn-form-item">
        <span class="login-btn" v-on:click="login">{{ loginText }}</span>
      </el-form-item>
    </el-form>

    <!-- 第三方登录 -->
    <div class="chat-icon">
      <a href="javascript:;" v-on:click="thirdLogin('qq')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qq"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qq1"></use>
        </svg>
      </a>
      <a href="javascript:;" v-on:click="thirdLogin('weixin')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin1"></use>
        </svg>
      </a>
      <a href="javascript:;" v-on:click="thirdLogin('sina')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weibo1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weibo"></use>
        </svg>
      </a>
      <a href="javascript:;" v-on:click="thirdLogin('163')">
        <svg class="icon icon-wangyi1" aria-hidden="true">
          <use xlink:href="#icon-wangyi1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wangyi"></use>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import { Base64 } from 'js-base64';
export default {
  name: "loginForm",
  data() {
    return {
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
    login() {
    },

    verifyCode() {},

    getVerifyCode() {},

    thirdLogin() {},

    goRegister() {
      this.$emit('goRegister');
    }
  },
};
</script>

<style scoped>
.form-wrapper {
  padding: 40px 35px;
}
</style>
