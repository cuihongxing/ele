<template>
  <div class="home">
    <div class="video">
      <video
        src="../../assets/mp4.mp4"
        muted
        loop="loop"
        autoplay="autoplay"
        controls="controls"
      ></video>
    </div>
    <div class="login">
      <div class="logo"></div>
      <form>
        <div class="admin">
          <el-input
            id="user"
            placeholder="请输入账号"
            prefix-icon="el-icon-user-solid"
            v-model="admin"
          >
          </el-input>
        </div>
        <div class="pass">
          <el-input
            id="password"
            prefix-icon="el-icon-user-solid"
            @keyup.enter="login"
            placeholder="请输入密码"
            v-model="pass"
            show-password
          ></el-input>
        </div>
        <div class="btn">
          <el-button type="primary" @click="login" round>登录</el-button>
          <el-button type="info" round>重置</el-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Product from "../../util/api";
let _http = new Product();
import Local from '../../local/index';
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome t o Your Vue.js App",
      pass: "123456",
      admin: "13800000000"
    };
  },
  methods: {
    login() {
      var that = this;
      let obj = {
        clientId: "lkb65617f842ad4c37895a733b8de43cbb",
        ip: "127.0.0.0",
        mobile: that.admin,
        password: that.pass
      };
      this.$store.state.isLoding = true;
      _http.login(obj).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          // localStorage.setItem(
          //   "educatoken",
          //   JSON.stringify(res.data.data.token)
          // );
          Local.set("token",res.data.data.token)
          this.$router.push({
            path: "/home"
          });
          this.$message({
          message: '登录成功',
          type: 'success'
        });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.is-round {
  margin: 0 auto;
}
.home {
  overflow: hidden;
}
.hello {
  width: 100%;
  /* height: 314px; */
  background-color: #fff;
  position: absolute;
  top: 25%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 5px;
}
.btn {
  text-align: center;
  button {
    margin: 15px;
  }
}
.login {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  form {
    width: 30%;
    margin: 130px auto 0px;
    .admin {
      margin-bottom: 20px;
    }
  }
  .logo {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 8px;
    -webkit-box-shadow: 0 0 10px #eee;
    box-shadow: 0 0 10px #eee;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-60px);
    transform: translateX(-50%) translateY(-60px);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 50%;
    }
  }
}
.video {
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-image: none;
  video {
    margin: auto;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: visible;
    width: 100%;
  }
  video::-webkit-media-controls {
    display: none !important;
  }
}
</style>
