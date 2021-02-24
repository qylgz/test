<template>
  <div class="tab-tar-item" @click="itemClick">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" />
    <div>首页</div> -->
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{ active: isActive }">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>
<style scoped>
.tab-tar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-tar-item img {
  margin-top: 3px;
  margin-bottom: 3px;
  height: 24px;
  width: 24px;
  vertical-align: middle;
}
</style>