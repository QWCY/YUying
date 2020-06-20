<template>
  <div v-if="visible">
    <div class="contentBox">
      <div class="content">
        <h2>{{title}}</h2>
        <p>{{message}}</p>
        <button @click="ok">{{confirmButtonText}}</button>
        <button @click="close">{{cancelButtonText}}</button>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      visible: false,
      message: "",
      title: "",
      confirmButtonText: "",
      cancelButtonText: ""
    };
  }
};
</script>
<style scoped>
.contentBox {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  margin: auto;
}
.content {
  width: 400px;
  height: 200px;
  background: white;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
</style>
