<template>
  <el-container>
    <el-header>
      <div>
        <img src="../../assets/logo.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏导航 -->
      <el-tooltip
        class="item"
        effect="dark"
        content="Top Left 提示文字"
        placement="top-start"
      >
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <div class="tiggle-button" @click="changeCollapse">|||</div>
          <!--  <el-menu
          unique-opened
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          collapse-transition
        >
          一级菜单
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <template v-slot:title>
              <i :class="iconObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>

            二级菜单
            <el-menu-item
              text-color="#000"
              :index="childItem.id + ''"
              v-for="childItem in item.children"
              :key="childItem.id"
            >
              <template v-slot:title>
                <i class="el-icon-menu"></i>
                <span>{{ childItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu> -->
          <el-menu
            unique-opened
            background-color="#333744"
            text-color="#fff"
            active-text-color="#498ef0"
            :collapse="isCollapse"
            collapse-transition
            router="true"
            :default-active="path"
          >
            <el-submenu
              :index="item.id + ''"
              v-for="item in menuList"
              :key="item.id"
            >
              <template v-slot:title>
                <i :class="iconObj[item.id]"></i>
                <span>{{ item.authName }}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item
                text-color="#000"
                :index="'' + childItem.path"
                v-for="childItem in item.children"
                :key="childItem.id"
                @click="savePath(childItem.path)"
              >
                <template v-slot:title>
                  <i class="el-icon-menu"></i>
                  <span>{{ childItem.authName }}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
      </el-tooltip>
      <el-main class="homeMain">
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
      iconObj: {
        125: "iconfont icon-user",
        103: "iconfont icon-tijikongjian",
        101: "iconfont icon-shangpin",
        102: "iconfont icon-danju",
        145: "iconfont icon-baobiao",
      },
      isCollapse: true,
      path: "",
    };
  },
  created() {
    this.getMenuList();
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getMenuList() {
      const { data: result } = await this.$http.get("menus");
      if (result.meta.status === 200) {
        this.$message.success(result.meta.msg);
        this.menuList = result.data;
        // console.log(this.menuList);
      } else if (result.meta.status === 400) {
        this.$message.error(result.meta.msg);
      } else {
        this.$message.error("数据获取错误");
      }
      // console.log(result);
    },
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    savePath(p) {
      this.path = p;
    },
  },
};
</script>
<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #363d40;
    div {
      img {
        float: left;
        width: 60px;
        height: 100%;
      }
      span {
        float: left;
        font-size: 36px;
        line-height: 60px;
        color: #fff;
      }
    }
    .el-button {
      margin: 10px 0;
    }
  }
  .el-container {
    width: 100%;
    .el-aside {
      width: 200px;
      background-color: #333744;
      .tiggle-button {
        background-color: #4a5064;
        color: #fff;
        font-size: 20px;
        text-align: center;
      }
      .el-menu {
        width: 200px;
        background-color: #333744;
        // transition: 0.2s;
        .el-submenu {
          i {
            margin: 0 10px;
          }
          .el-menu-item {
            color: #000000;
          }
        }
      }
      .el-menu:active {
        color: #000000;
      }
    }
    .el-main {
      background-color: #e9edf1;
    }
  }
}
</style>