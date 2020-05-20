<template>
  <div id="app">
    <memo/>
  </div>
</template>

<script>
import Memo from './components/Memo'

export default {
  name: 'app',
  components: {
    Memo,
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
  margin-top: 60px;
}
</style>
