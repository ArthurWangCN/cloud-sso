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
import { Base64 } from "js-base64";
import { login } from "@/api/interface/login";
export default {
  name: "loginForm",
  data() {
    return {
      tip: "", // 错误提示
      showTip: false,
      loginText: "登 录",
      isLogging: false, // 正在登录
      form: {
        username: "",
        password: "",
        verifyCode: "",
        agree: true,
      },
      errCount: 0,
      verifyImgSrc: "",
    };
  },
  methods: {
    login() {
      if (!this.loginValidator()) return;
      if (this.isLogging) return;
      this.loginText = "正 在 登 录...";
      this.isLogging = true;
      login({
        username: this.form.username,
        password: Base64.encode(this.form.password),
      })
        .then((res) => {
          if (res.data.success) {
            this.$router.push("/success");
            localStorage.setItem("token", res.data.content.token);
          } else {
            this.showTip = true;
            this.tip = res.data.message;
          }
        })
        .catch((err) => {
          this.showTip = true;
          this.tip = err.message;
        })
        .finally(() => {
          this.isLogging = false;
          this.loginText = "登 录";
        });
    },

    // 登录验证
    loginValidator() {
      this.showTip = true;
      const username = this.form.username.trim();
      const password = this.form.password;
      if (!username) {
        this.tip = "请输入用户名";
        return;
      }
      if (username.length > 64) {
        this.tip = "用户名的长度过长（不超过64个字符）";
        return;
      }
      if (!password) {
        this.tip = "请输入密码";
        return;
      }
      if (password.length > 64) {
        this.tip = "密码的长度过长（不超过64个字符）";
        return;
      }
      this.showTip = false;
      return true;
    },

    verifyCode() {},

    getVerifyCode() {},

    //第三方登录
    thirdLogin: function (type) {
      var w = window.innerWidth >> 1;
      var l = (window.innerWidth - w) >> 1;
      var t = 100;
      var h = (window.innerHeight * 0.6) | 0;
      window.external = window.open(
        "",
        "_blank",
        "width=" + w + ",height=" + h + ",top=" + t + ",left=" + l
      );
      var redirectUrl =
        window.location.protocol +
        "//" +
        window.location.host +
        "/sso/thirdLogin/handleRedirect?type=" +
        type;
      window.external.location.href =
        window.location.protocol +
        "//my.cnki.net/ThirdLogin/ThirdLogin.aspx?to=" +
        type +
        "&RedirectUrl=" +
        encodeURIComponent(redirectUrl);
      // window.external.location.href = 'http://localhost:8080/#/success?TID=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJSRUFEIiwiV1JJVEUiXSwiZXhwIjoxNjE0MjI1MDMzLCJqdGkiOiJjMGFiMjFmNC1mNGRmLTRlOTEtYTU5Yy04YzBlYzI1Y2I2NGMiLCJjbGllbnRfaWQiOiJjMyJ9.cG9doqOdUPEAtbQ9g752UGbs7IdoSo7WM2f4xLlqQWotIgG_m5LaRFLCDPrbCUtaTQD-0tUJUD6rma0bptC2EA7xyg6_yyu-IvuSWnUvWv01KQrqeiFhsH-MUf0PfuQQYAS1jbtrEnOFJvixvzxgE_KuRifwoXF2GNKkIMK2XKUdkgbXIyOkB83oOMMHPX5eZUd-1GyBQT2ZyxQ_nTvjz8twHisbsXMLYMpMcxvi4dX8jqgi6FJAfmQ33QDtxzRNJ7M1blvYdkwOxP1tFP80MnvlQg_3Ih4TPPPJww7NQteuHbJrJhdbniuIw19enCZhhm2maXeRLuFZgii02eDTiw';

        console.log(redirectUrl)
    },

    goRegister() {
      this.$emit("goRegister");
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  padding: 40px 35px;
}
</style>
