<template>
  <el-container class="home-body">
    <el-header class="home-header">
      <div>
        <img src="../../assets/logo.png" alt="" />
        <span>后台管理系统</span>
      </div>
      <el-button type="primary" @click="userOut">退出</el-button>
    </el-header>
    <el-container class="container">
      <el-aside class="home-aside" width="200px">
        <el-menu
          unique-opened
          background-color="#333744"
          text-color="#fff"
          active-text-color="#3f9ffe"
          router
          :default-active="'/' + lightPath"
        >
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <template slot="title">
              <i :class="iconObj[item.id]"></i>
              <span style="padding: 10px">{{ item.authName }}</span>
            </template>
            <el-menu-item
              :index="'/' + childrenItem.path"
              v-for="childrenItem in item.children"
              :key="childrenItem.id"
              @click="savePath(childrenItem.path)"
            >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ childrenItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      menuList: [],
      lightPath: "",
      iconObj: {
        125: "iconfont icon-user",
        103: "iconfont icon-tijikongjian",
        101: "iconfont icon-shangpin",
        102: "iconfont icon-danju",
        145: "iconfont icon-baobiao",
      },
    };
  },
  created() {
    this.getMenuList();
  },
  methods: {
    userOut() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    savePath(item) {
      this.lightPath = item;
    },
    async getMenuList() {
      const result = await this.$http.get("menus");
      if (result.data.meta.status === 200) {
        this.menuList = result.data.data;
        this.$message.success(result.data.meta.msg);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.home-body {
  height: 100%;
  .home-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 20%;
    background-color: #373f41;
    img {
      float: left;
      width: 60px;
      vertical-align: middle;
    }
    span {
      padding: 0 40px;
      font-size: 20px;
      text-align: center;
      line-height: 60px;
      color: #fff;
    }
    button {
      float: right;
    }
  }
  .container {
    height: 100%;
    .home-aside {
      background-color: #333744;
      width: 200px;
      height: 100%;
      .el-submenu {
        width: 200px;
        background-color: #333744;
      }
      .el-munu {
        border-right: none;
      }
    }
    .el-main {
      background-color: #eaedf1;
    }
  }
}
</style>