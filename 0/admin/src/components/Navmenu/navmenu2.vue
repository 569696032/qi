<template>
  <div class="big">
      <div class="Navbtn">
    <el-radio-group @click.native="increment()"  v-model="isCollapse" class="showBtn" style="margin-bottom: 20px;">
        <el-radio-button @click.native="hy" :label="false"><i class="el-icon-plus"></i></el-radio-button>
        <el-radio-button @click.native="hyy" :label="true"><i class="el-icon-minus"></i></el-radio-button>
    </el-radio-group>
    <!-- <div @click="increment()">{{isCollapse}}123456</div> -->

        
  </div>
  <div class="ADcontent">
    <router-view />
  </div>
  </div>
</template>
<script>
export default { 
  data(){
     return {
         isCollapse:true
     }
  },
  components: {

  },
  methods: {
      hy:function(){
          this.isCollapse=false
      },
      hyy:function(){
          this.isCollapse=true
      },
      increment:function(){
          this.$emit("increment",this.isCollapse)
      }
  },
}
</script>
<style scoped>
    .big{
        position: absolute;
        left:200px;
        top: 50px;
        padding: 30px;
        z-index: 0;
    }
    .Navbtn{
        width:100%;
        margin: 0 auto;

    }
    .ADcontent{
        width:100%;
        margin: 0 auto;
    }
</style>
