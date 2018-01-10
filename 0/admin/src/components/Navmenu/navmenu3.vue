<template>
  <!-- <div style="background-color: #EBEBEB;min-height:800px"> -->
        <div style="width:100%;background-color:#808281; overflow: hidden; position:fixed; top:0; left:0; z-index: 99;">
            <span class="demonstration" style="float:left;padding-top:13px;color:#333;font-weight:bold;margin-left:2%">
                网站首页
            </span>
            <span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:15%">
                <el-input
                        placeholder="请输入"
                        icon="search"
                        v-model="searchCriteria"
                        :on-icon-click="handleIconClick">
                </el-input>
            </span>


            <span class='color' style='float:left;padding-top:5px;margin-left:62%' controls>
                    <el-color-picker v-model="color3" show-alpha :plain="true"></el-color-picker>
            </span>

             <div class='big1' data-v-2edb937e data-v-04353a88 aria-describedby="el-tooltip-1920" tabindex="0">
                <svg data-v-2edb937e t="1508738709248" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2069" xmlns:xlink="http://www.w3.org/1999/xlink" class="screenfull-svg">

                    <path data-v-2edb937e d="M333.493443 428.647617 428.322206 333.832158 262.572184 168.045297 366.707916 64.444754 64.09683 64.444754 63.853283 366.570793 167.283957 262.460644Z" p-id="2070" class='path1'></path>
                     <path data-v-2edb937e d="M854.845439 760.133334 688.61037 593.95864 593.805144 688.764889 759.554142 854.56096 655.44604 958.161503 958.055079 958.161503 958.274066 656.035464Z" p-id="2071" class='path2'></path>
                    <path data-v-2edb937e d="M688.535669 428.550403 854.31025 262.801405 957.935352 366.921787 957.935352 64.34754 655.809313 64.081481 759.919463 167.535691 593.70793 333.731874Z" p-id="2072" class='path3'></path>
                   
                    <path data-v-2edb937e d="M333.590658 594.033341 167.8171 759.804852 64.218604 655.67219 64.218604 958.270996 366.342596 958.502263 262.234493 855.071589 428.421466 688.86108Z" p-id="2073" class='path4'></path> 
                </svg>
             </div>

            <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    <!-- admin -->
                    <img data-v-04353a88 src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar" />
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item @click=''>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </span>

            
        </div>
</template>
<script>
export default {
    data(){
        return {
            searchCriteria: '',
            color3: 'rgba(19, 206, 102, 0.8)'
        }
    },
    methods:{
            handleIconClick(ev) {
                console.log(ev);
            }
    }
}
</script>

<style>
    * {

        transform-origin: 0px 0px 0px;
    }
    .el-menu-item{
        color:white;
    }
    .navbar .right-menu .avatar-container .avatar-wrapper .user-avatar[data-v-04353a88] {
        width: 30px;
        height:30px;
        border-radius: 10px;
        cursor:pointer;
    }
    img{
        width:30px;
        height:30px;
        border-style: none;
    }


    .big1{
        height:20px;
        float:left;
        margin:15px 0 0 0px;
        margin-left:2%;
        outline: none;
    }
 
    .navbar .right-menu .screenfull[data-v-04353a88] {
        height: 20px;
    }
    .navbar .right-menu .right-menu-item[data-v-04353a88] {
        display: inline-block;
        margin: 0 8px;
    }
    .navbar[data-v-04353a88]{
        line-height: 50px;
    }
    .screenfull-svg[data-v-2edb937e]{
        display: inline-block;
        cursor: pointer;
        fill:#5e5e66;
        width:20px;
        height:20px;
    }
    svg:not(:root){
        overflow:hidden;
    }
    html | *>svg{
        transform-origin: 50% 50% 0px;
    }
    .screenfull-svg[data-v-2edb937e]{
        cursor:pointer;
        color:#5e5e66;
    }

    .path1[Attributes Style] {
        d:path('M 333.493 428.648 L 428.322 333.832 L 262.572 168.045 L 366.708 64.4448 L 64.0968 64.4448 L 63.8533 366.571 L 167.284 262.461 Z')
    }
    path[Attributes Style] {
        d: path('M 854.845 760.133 L 688.61 593.959 L 593.805 688.765 L 759.554 854.561 L 655.446 958.161 L 958.055 958.161 L 958.274 656.035 Z');
    }

    path[Attributes Style] {
        d: path('M 688.536 428.55 L 854.31 262.801 L 957.935 366.922 L 957.935 64.3475 L 655.809 64.0815 L 759.919 167.536 L 593.708 333.732 Z');
    }

    path[Attributes Style] {
        d: path('M 333.591 594.033 L 167.817 759.805 L 64.2186 655.672 L 64.2186 958.271 L 366.343 958.502 L 262.234 855.072 L 428.421 688.861 Z');
    }

</style>
