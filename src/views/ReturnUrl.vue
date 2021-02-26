<template>
  <div>sso第三方登录成功</div>
</template>

<script>
import { login } from "@/api/interface/login";
export default {
  name: 'returnUrl',
  created() {
    this.login();
  },
  methods: {
    login() {
      login({
        username: '111',
        password: '222',
      })
      console.log('login')
    }
  }
}
</script>