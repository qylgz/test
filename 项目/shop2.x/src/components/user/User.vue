<template>
  <div class="user-bd">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-input placeholder="请输入内容" class="card-search">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary" size="medium" class="addUser"
          >添加用户</el-button
        >
      </div>
      <el-table :data="userList" style="width: 100%" border stripe>
        <el-table-column type="index" label="#" width="50"> </el-table-column>
        <el-table-column prop="username" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="180">
        </el-table-column>
        <el-table-column prop="mobile" label="电话" width="180">
        </el-table-column>
        <el-table-column prop="role_name" label="角色" width="180">
        </el-table-column>
        <el-table-column prop="mg_state" label="状态" width="180">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userList: [],
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 5,
      },
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      const result = await this.$http.get("users", { params: this.queryInfo });
      if (result.data.meta.status) {
        this.userList = result.data.data.users;
        this.$message.success(result.data.meta.msg);
      } else {
        this.$message.error(result.data.meta.msg);
      }
      console.log(this.userList);
    },
  },
};
</script>
<style lang="less" scoped>
.user-bd {
  width: 100%;
  height: 100%;
  .box-card {
    margin-top: 10px;
    width: 100%;
    .clearfix {
      .card-search {
        width: 25%;
      }
      .addUser {
        margin-left: 10px;
      }
    }
  }
}

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
  width: 480px;
}
</style>