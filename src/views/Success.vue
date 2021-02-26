<template>
  <div class="about">
    <h1>Login Successful</h1>
  </div>
</template>

<script>
export default {
  name: 'success',
  data() {
    return {
      token: '',
      redirectUrl: '',
    }
  },
  created() {
    console.log(this.$route.query.TID);
    this.token = this.$route.query.TID;
    this.redirectUrl = this.$route.query.redirectUrl;
    if (this.token) {
      localStorage.setItem("token", this.token);
      alert(this.redirectUrl)
      let father = window.opener;
      father.location = this.redirectUrl;
      // father.location = window.location.origin + '/#/third';
      // alert('???')
      window.close();
    }
  },
}
</script>
