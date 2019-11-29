<template>
  <div>
    <el-container>
      <el-aside style="height:300px; width:-; height:-;background:rgb(48, 65, 86)">
        <el-menu
         default-active="1-4-1" 
          class="el-menu-vertical-demo" 
          @open="handleOpen" 
          @close="handleClose" 
          :collapse="isCollapse"
          text-color="#fff"
          background-color="rgb(48, 65, 86)"
          router
          style="border:1px solid #333744"
        >
          <el-submenu index="1">
            <template slot="title">
              <span slot="title">导航一</span>
            </template>
            <el-submenu index="1-4">
              <span slot="title">选项1</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
              <span slot="title">选项1</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <span slot="title">导航er</span>
            </template>
            <el-submenu index="1-4">
              <span slot="title">选项1</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
              <span slot="title">选项1</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>  
      </el-aside>
      <el-container>
        <el-header style="background:#fff;height:-;height:100px;border-bottom:2px solid #ccc;">
          <div class="header">
            <div @click="isCollapse=!isCollapse" class="toggleBar">|||</div>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <ul>
            <li>首页</li>
            <li>首页</li>
            <li>首页</li>
            <li>首页</li>
          </ul>
        </el-header>
        <el-main style="background:#fff;">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
   .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .header{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center; 
    border-bottom: 1px solid #ccc;
  }
  .toggleBar{
    width: 30px;
    height: 60px;
  }
</style>