<template>
  <div class="login_container">
    <div class="login_box">
      <!-- logo -->
      <div class="avatar_box">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <!-- 表单 -->
      <div>
        <el-form
          :model="loginForm"
          :rules="loginFormRules"
          class="form_box"
          ref="loginFormRef"
        >
          <el-form-item prop="username" label="账号">
            <el-input
              v-model="loginForm.username"
              prefix-icon="iconfont icon-user"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input
              v-model="loginForm.password"
              type="password"
              prefix-icon="iconfont icon-user"
            ></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="loginReset">重置</el-button>
            <el-button type="info" @click="goHome">跳转</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      loginFormRules: {
        username: [
          { required: true, message: "用户名称不能为空", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 20, message: "长度在6到20个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    loginReset() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (valid) {
          const { data: result } = await this.$http.post(
            "login",
            this.loginForm
          );
          // console.log(result);
          if (result.meta.status == 200) {
            this.$message({
              message: result.meta.msg,
              type: "success",
            });
            window.sessionStorage.setItem("token", result.data.token);
            this.$router.push("/home");
            console.log(this.$router.push("/home"));
          } else if (result.meta.status == 400) {
            this.$message({
              message: result.meta.msg,
              type: "error",
            });
          }
        }
      });
    },
    goHome() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>
<style lang="less" scoped>
.login_container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #2b4b6b;

  .login_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 350px;
    background-color: #fff;

    .avatar_box {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 200px;
      padding: 10px;
      border: 1px solid #eee;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(217, 224, 224, 0.5);
      background-color: #fff;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }

    .form_box {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;

      .btns {
        margin-right: 20px;
        float: right;
      }
    }
  }
}
</style>