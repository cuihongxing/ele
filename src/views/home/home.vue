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
          <el-submenu  :index="item.id" v-for="(item,index) in list" :key="index"  v-if="item.name!='首页'">
            <template slot="title"  >
              <span slot="title" :index="item.path">{{item.name}}</span>
            </template>
            
           
           <el-menu-item-group :index="items.path" :key="indexs" v-for="(items,indexs) in item.children" v-if="items.children.length<=0">
             <el-menu-item :index="items.path">{{items.name}}</el-menu-item>
           </el-menu-item-group>

           <el-submenu :index="v.path" v-for="(v,i) in item.children" :key="i" v-if="v.children.length>0">
             <span slot="title">{{v.name}}</span>
              <el-menu-item :index="y.path" v-for="y in v.children" v-if="v.children.length>0">{{y.name}}</el-menu-item>
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
import Product from '../../util/api'
let _product = new Product()
import Local from '../../local/index'
  export default {
    data() {
      return {
        isCollapse: true,
        list:[]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created () {
      let token = Local.get('token')
      _product.List(token).then(res=>{
        this.list = res.data.data.sysMenu
        console.log(this.list)
      })
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