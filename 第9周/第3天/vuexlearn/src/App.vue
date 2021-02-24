<template>
  <div id="app">
    <p>{{ count }}</p>
    <button @click="increament">+</button>
    <button @click="decreament">-</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {
    count: function () {
      return this.$store.state.count;
    },
  },
  methods: {
    increament() {
      this.$store.commit("increament");
    },
    decreament() {
      this.$store.commit("decreament");
    },
  },
};
</script>

<style>
</style>
