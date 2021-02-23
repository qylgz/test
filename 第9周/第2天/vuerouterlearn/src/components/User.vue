<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户，和哈哈哈哈哈嗝</p>
    <h2>{{ age }}</h2>
  </div>
</template>
<script>
export default {
  name: "User",
  computed: {
    age() {
      return this.$route.params.userid;
    },
  },
};
</script>
<style scoped>
</style>