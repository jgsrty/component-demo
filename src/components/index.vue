<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="temp">
      <rty-button @click="toButton" :type="button.type" :text="button.text"></rty-button>
    </div>
    <div class="temp">
      <rty-button @click="toButton2" :type="progress.type" :text="progress.text"></rty-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to rty-vue-components Demo",
      button: {
        type: "primary",
        text: "查看按钮组件示例"
      },
      progress: {
        type: "primary",
        text: "查看进度条组件示例"
      }
    };
  },
  methods: {
    toButton() {
      this.$router.push('rtyButton')
    },
    toButton2() {
      this.$router.push('rtyProgress')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.temp{
  margin-bottom:10px
}
</style>
