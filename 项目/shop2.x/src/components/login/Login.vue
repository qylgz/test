<template>
  <div class="loginBody">
    <el-card class="box-card">
      <div class="header-img">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <el-form
        class="rule-form"
        :rules="rules"
        :model="user"
        ref="loginFormRef"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            ref="loginFormRef"
            class="form-input"
            v-model="user.username"
            prefix-icon="el-icon-search"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            class="form-input"
            prefix-icon="el-icon-search"
            v-model="user.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-button size="small" type="primary" @click="formPush"
          >提交</el-button
        >
        <el-button size="small" type="info" @click="loginReset">重置</el-button>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          { required: true, message: "请输入名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    loginReset() {
      this.$refs.loginFormRef.resetFields();
    },
    async formPush() {
      const result = await this.$http.post("login", this.user);
      console.log(result);
      if (result.data.meta.status === 200) {
        this.$message.success(result.data.meta.msg);
        window.sessionStorage.setItem("tekon", result.data.data.token);
        this.$router.push("/home");
      } else {
        this.$message.error(result.data.meta.msg);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.loginBody {
  position: relative;
  height: 100%;
  background-color: #2b4b6b;
  .box-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 480px;
    height: 300px;
    overflow: visible;
    .header-img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
      height: 100px;
      background-color: #fff;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px rgba(221, 221, 221, 1);
      img {
        width: 100%;
        border-radius: 50%;
        background-color: #eeeeee;
      }
    }
    .rule-form {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -30%);
      width: 60%;
      // margin-top: 80px;
      // margin-left: 30px;
      .form-input {
        width: 80%;
        // border-radius: 10%;
      }
      button {
        float: right;
        margin: 10px;
        padding: 12px 20px;
        border-radius: 10%;
      }
    }
  }
}
</style>