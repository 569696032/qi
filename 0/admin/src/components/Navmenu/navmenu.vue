<template>
<div>

<el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="msgiscollapse">
  <el-menu-item index="1" @click="tiaozhuan('/index/gaikuo')">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
  </el-menu-item>
  <el-menu-item index="2" @click="tiaozhuan('/index/persoin')">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" @click="tiaozhuan('/index/information')">
        <i class="el-icon-star-off"></i>
        <span slot="title">导航三</span>
  </el-menu-item>
    <el-menu-item index="4" @click="tiaozhuan('/index/Icon')">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
    <el-menu-item index="5">
    <i class="el-icon-setting"></i>
    <span slot="title">导航五</span>
  </el-menu-item>
    <el-menu-item index="6">
  </el-menu-item>
    <el-menu-item index="7">
  </el-menu-item>
    <el-menu-item index="8">
  </el-menu-item>
    <el-menu-item index="9">
  </el-menu-item>
    <el-menu-item index="10">

  </el-menu-item>
    <el-menu-item index="11">

  </el-menu-item>
    <el-menu-item index="12">
  </el-menu-item>
</el-menu>
</div>
</template>
<script>

    export default {
        props:['msgiscollapse'],
    data() {
      return {

      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      tiaozhuan:function(url){
          this.$router.push({path:url,replace: true})  
      }
    },
    
    //     tiaozhuan:function(url){
    //       watch: {
    //       this.$router.push({path:url})
    //     }
    // }

    }
</script>
<style scoped>
.el-menu-vertical-demo{
    position: fixed;
      top: 50px;
      left: 0;
      z-index: 99;
  }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    position: fixed;
      top: 50px;
      left: 0;
      z-index: 99;
  }
  
</style>


