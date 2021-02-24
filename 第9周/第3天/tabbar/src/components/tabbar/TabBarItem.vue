<template>
  <div class="tab-tar-item">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" />
    <div>首页</div> -->
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>
<script>
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