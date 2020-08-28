<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title" />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  }
}
</script>
<style>
#app {
  height: 100vh;
  width: 100vw;
  background: url('./assets/bg.png') no-repeat center;
  background-size: 100% 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #434343;
}
</style>
