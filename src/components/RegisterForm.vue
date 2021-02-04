<template>
  <div class="register-wrapper">
    <h2 class="clearfix">
      <span class="float-l">新用户注册</span>
      <span class="back-login" @click="goLogin">返回登录</span>
    </h2>
    <el-form>
      <!-- 错误提示信息 -->
      <el-form-item class="posr">
        <p class="tip-txt" v-show="showError">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-warn"></use>
          </svg>
          {{ erroMes }}
        </p>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="用户姓名"
          v-model="registerForm.registerUsername"
          name="registerUsername"
        >
          <svg slot="prefix" class="icon" aria-hidden="true">
            <use xlink:href="#icon-denglu1"></use>
          </svg>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="手机号"
          v-model="registerForm.registerPhone"
          name="registerPhone"
        >
          <svg slot="prefix" class="icon" aria-hidden="true">
            <use xlink:href="#icon-personName"></use>
          </svg>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="验证码"
          class="yzm-item01"
          v-model="registerForm.registerVerify"
          name="registerVerify"
        >
          <svg slot="prefix" class="icon" aria-hidden="true">
            <use xlink:href="#icon-personYzm"></use>
          </svg>
          <span slot="append" class="yzm-txt" v-on:click="sendVerifyCode">{{
            verifyText
          }}</span>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="密码"
          type="password"
          v-model="registerForm.registerPassword"
          name="registerPassword"
          auto-complete="new-password"
        >
          <svg slot="prefix" class="icon" aria-hidden="true">
            <use xlink:href="#icon-personPwd"></use>
          </svg>
        </el-input>
      </el-form-item>
      <el-form-item class="find-item">
        <el-checkbox v-model="registerForm.registerAgree">
          我已同意
          <a class="color-4e" @click.prevent="goReigsterProtocol">《CNKI用户注册协议》</a>
        </el-checkbox>
      </el-form-item>
      <el-form-item class="btn-form-item">
        <a href="javascript:;" class="login-btn" v-on:click="confirmRegister"
          >确定</a
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "registerForm",
  data() {
    return {
      showError: false,
      erroMes: "",
      // 注册验证
      registerForm: {
        registerUsername: "",
        registerPhone: "", //手机号
        registerVerify: "", //验证码
        registerPassword: "", //密码
        registerAgree: true,
      },
      verifyText: "点击发送验证码",
    };
  },
  methods: {
    goLogin() {
      this.$emit("goLogin");
    },

    // 发送验证码
    sendVerifyCode: function () {
      var self = this;
      self.showError = false;
      //验证手机号
      var registerPhone = self.registerForm.registerPhone;
      if (!registerPhone) {
        self.showError = true;
        self.erroMes = "手机号不能为空";
        return;
      }
      if (!/^\d{11}$/g.test(registerPhone)) {
        self.showError = true;
        self.erroMes = "请输入合法手机号";
        return;
      }
    },

    confirmRegister() {},

    goReigsterProtocol() {
      this.$router.push('/protocol');
    }
  },
};
</script>

<style scoped>
.register-wrapper {
  padding: 40px 35px;
}
</style>
