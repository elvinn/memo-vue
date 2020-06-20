<template>
  <div id="app">
    正在登陆中...
  </div>
</template>

<script>
import loginUtil from '../../tools/login'

export default {
  name: 'app',
  beforeCreate() {
    const searchParams = new URLSearchParams(location.search);
    const queryObj = {};
    for (const [key, value] of searchParams) {
      queryObj[key] = value;
    }
    loginUtil.login(queryObj)
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 30px;
}


</style>
