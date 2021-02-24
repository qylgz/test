<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/' + age">用户</router-link> -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- <router-link
      :to="{ path: '/profile', query: { name: 'why', age: 18, height: 1.88 } }"
      >档案</router-link
    > -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "lisi",
      age: 18,
    };
  },
  methods: {
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "张三",
          age: this.age,
          height: 1.88,
        },
      });
    },
  },
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
.router-link-active {
  color: red;
}
</style>
