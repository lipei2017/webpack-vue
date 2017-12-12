<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
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
.tabs{display: block; overflow: hidden; text-align: center; margin: 0 10px;}
.tabs ul{display: block; margin: 0 auto;}
.tabs li{list-style:none; float: left; margin: 0 20px;}
.content{ display: block; margin: 20px}
</style>
