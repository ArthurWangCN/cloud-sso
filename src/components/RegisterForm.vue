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
          {{ errorMsg }}
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
          <svg
            slot="prefix"
            class="icon"
            aria-hidden="true"
            style="transform: translateY(5px)"
          >
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
          show-password
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
          <a class="color-4e" @click.prevent="goReigsterProtocol"
            >《CNKI用户注册协议》</a
          >
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
import { sendVerifyCode, register } from "@/api/interface/login";
export default {
  name: "registerForm",
  data() {
    return {
      showError: false,
      errorMsg: "",
      // 注册验证
      registerForm: {
        registerUsername: "",
        registerPhone: "", // 手机号
        registerVerify: "", // 验证码
        registerPassword: "", // 密码
        registerAgree: true,
      },
      verifyText: "点击发送验证码",
      sending: false,
    };
  },
  methods: {
    goLogin() {
      this.$emit("goLogin");
    },

    // 发送验证码
    sendVerifyCode: function () {
      this.showError = false;
      //验证手机号
      var registerPhone = this.registerForm.registerPhone;
      if (!registerPhone) {
        this.showError = true;
        this.errorMsg = "手机号不能为空";
        return;
      }
      if (!/^\d{11}$/g.test(registerPhone)) {
        this.showError = true;
        this.errorMsg = "请输入合法手机号";
        return;
      }
      //处理发送验证码提示
      if (this.sending) return;
      this.sending = true;
      var number = 90;
      var timer = setInterval(() => {
        this.verifyText = number + " 秒后重新发送";
        number--;
        if (number == 0) {
          clearInterval(timer);
          this.verifyText = "重新发送验证码";
          this.sending = false;
        }
      }, 1000);
      // 发送验证码请求
      sendVerifyCode({
        mobile: this.registerForm.registerPhone,
      })
        .then((res) => {
          if (res.data.success) {
            // clearInterval(timer);
            // this.verifyText = "点击发送验证码";
            // this.sending = false;
          } else {
            this.showError = true;
            this.errorMsg = res.data.message;
            clearInterval(timer);
            this.verifyText = "点击发送验证码";
            this.sending = false;
          }
        })
        .catch((err) => {
          this.showError = true;
          this.errorMsg = err.message;
          clearInterval(timer);
          this.verifyText = "点击发送验证码";
          this.sending = false;
        });
    },

    // 验证注册信息
    validatorRegister: function () {
      var username = this.registerForm.registerUsername;
      var mobile = this.registerForm.registerPhone.trim();
      var password = this.registerForm.registerPassword;
      var verifyCode = this.registerForm.registerVerify;
      this.showError = true;
      // var pattern = new RegExp("[' \" <>#%  / : * ?| ;]");
      var passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;

      if (username.trim().length <= 0) {
        this.errorMsg = "请填写用户姓名";
        return false;
      }
      if (username.trim().length > 128) {
        this.errorMsg = "用户姓名超长";
        return false;
      }
      if (/['"\<\>\\/:;\*?\|]/.test(username.trim())) {
        this.errorMsg = "用户姓名不能包含 ' \" < > \\ / : * ? | ; 特殊字符";
        return false;
      }

      if (!mobile) {
        this.errorMsg = "手机号不能为空";
        return false;
      }
      if (!/^\d{11}$/g.test(mobile)) {
        this.errorMsg = "请输入合法手机号";
        return;
      }

      if (!password) {
        this.errorMsg = "请输入密码";
        return;
      }
      if (password.length > 64) {
        this.errorMsg = "密码的长度过长（不超过64个字符）";
        return;
      } else if (!passwordReg.test(password)) {
        this.errorMsg = "密码为6-20位数字字母组合，区分大小写";
        return;
      } else if (password.trim() == "") {
        this.errorMsg = "密码不能为空";
        return;
      }

      if (!verifyCode) {
        this.errorMsg = "请输入正确的验证码";
        return;
      }
      if (!this.registerForm.registerAgree) {
        this.errorMsg = "请同意用户注册协议";
        return;
      }

      this.showError = false;
      return true;
    },

    // 注册
    confirmRegister() {
      if (!this.validatorRegister()) return;
      register({
        username: this.registerForm.registerUsername,
        mobile: this.registerForm.registerPhone.trim(),
        password: this.registerForm.registerPassword,
        verificationCode: this.registerForm.registerVerify
      }).then(res => {
        if (res.data.success) {
          console.log('注册成功');
        } else {
          this.showError = true;
          this.errorMsg = res.data.message
        }
      }).catch(err => {
        this.showError = true;
        this.errorMsg = err.message;
      })
    },

    goReigsterProtocol() {
      this.$router.push("/protocol");
      // const url = this.$router.resolve({ path: "/protocol" });
      // window.open(url.href, '_blank');
    },
  },
};
</script>

<style scoped>
.register-wrapper {
  padding: 40px 35px;
}
</style>
