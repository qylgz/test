<template>
  <div id="app">
    <div id="tab-tar">
      <tab-bar-item>
        <img slot="item-icon" src="../../assets/img/tabbar/home.svg" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img
          slot="item-icon"
          src="../../assets/img/tabbar/category.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img
          slot="item-icon"
          src="../../assets/img/tabbar/shopcart.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img
          slot="item-icon"
          src="../../assets/img/tabbar/profile.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
      <!-- <div class="tab-tar-item">
        <img src="../../assets/img/tabbar/home.svg" alt="" />
        <div>首页</div>
      </div>
      <div class="tab-tar-item">
        <img src="../../assets/img/tabbar/home.svg" alt="" />
        <div>分类</div>
      </div>
      <div class="tab-tar-item">
        <img src="../../assets/img/tabbar/home.svg" alt="" />
        <div>购物车</div>
      </div>
      <div class="tab-tar-item">
        <img src="../../assets/img/tabbar/home.svg" alt="" />
        <div>我的</div>
      </div> -->
    </div>
  </div>
</template>
<script>
import TabBarItem from "./TabBarItem";
export default {
  name: "TabBar",
  components: {
    TabBarItem,
  },
};
</script>
<style scoped>
@import "../../assets/css/base.css";
#tab-tar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
  background-color: #f6f6f6;
  /* flex-direction: row; */
  /* justify-content: space-between; */
}
</style>