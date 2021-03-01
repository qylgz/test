<template>
  <div>
    <el-breadcrumb class="ElBreadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card shadow="shadow" class="box-card">
      <template v-slot:header class="clearfix">
        <div style="margin-top: 15px">
          <el-input class="search-input" placeholder="请输入内容"> </el-input>
          <el-button icon="el-icon-search">搜索</el-button>
          <el-button type="primary" class="search-button">操作按钮</el-button>
        </div>
      </template>
      <el-table :data="userList" style="width: 100%" stripe border>
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="username" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="180">
        </el-table-column>
        <el-table-column prop="mobile" label="电话" width="180">
        </el-table-column>
        <el-table-column prop="role_name" label="角色" width="180">
        </el-table-column>
        <el-table-column prop="mg_state" label="状态" width="180">
          <template v-slot="scope">
            <el-switch
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            {{ scope.row.id }}
            <!-- 修改 -->
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              circle
            ></el-button>
            <!-- 删除 -->
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              circle
            ></el-button>
            <!-- 分配角色 -->
            <!-- <el-tooltip
              class="item"
              effect="dark"
              content="Top Center 提示文字"
              placement="top"
            >
              <el-button size="mini">上边</el-button>
            </el-tooltip> -->

            <el-tooltip effect="dark" content="分配角色" placement="top">
              <el-button
                size="mini"
                type="warning"
                icon="el-icon-setting"
                circle
              ></el-button>
              <el-button>上边</el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-tooltip
      class="item"
      effect="dark"
      v-show="true"
      content="11111111111111111111111111"
      placement="top-start"
    >
      <el-button>ahsdjkhakjs</el-button>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  data() {
    return {
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 5,
      },
      userList: [],
      total: 0,
      statusValue: "",
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      const result = await this.$http.get("users", { params: this.queryInfo });
      console.log(result);
      if (result.data.meta.status == 200) {
        this.$message.success(result.data.meta.msg);
        this.userList = result.data.data.users;
        this.total = result.data.data.total;
        console.log(this.userList);
      } else {
        this.$message.error(result.data.meta.msg);
      }
    },
  },
};
</script>
<style scoped>
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
.ElBreadcrumb {
  margin-bottom: 10px;
}
.search-input {
  width: 40%;
}
.search-button {
  width: 68px;
  padding: 3px 0;
}
</style>