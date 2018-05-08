<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "./assets/css/base.css";
  @import "./assets/css/master.css";
  @import "./assets/css/animate.css";
  #app{
    height: 100%;
    width: 100%;
    background: #fff;
  }
</style>
