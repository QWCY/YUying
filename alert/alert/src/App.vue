<template>
  <div id="app" @click="goto">
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goto() {
      console.log("aaaaaaaaaaa");
      this.$message({
        message: "this is message",
        title: "title",
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(() => {
          console.log("yes");
          // 点击确定之后的处理
        })
        .catch(() => {
          console.log("no");
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
