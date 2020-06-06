<template>
  <div id="app">
    <Header />
    <Memo />
  </div>
</template>

<script>
import Header from './components/Header'
import Memo from './components/Memo'

export default {
  name: 'app',
  components: {
    Header,
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
  margin: 0 30px;
}

ul, li {
  margin:0;
  padding: 0;
  text-indent: 0;
  list-style-type: 0;
}
</style>
