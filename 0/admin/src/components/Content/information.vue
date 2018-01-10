<template>
    <div>
       <div class="container-fluid">
          <div class="table-responsive">
              <!-- Button trigger modal -->
              <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                      添加
              </button>

              <table class="table">
                  <tr>
                    <th>用户名</th>
                    <th>学历</th>
                    <th>入职时间</th>
                    <th>职位</th>
                    <th>个人开发项目</th>
                    <th>编辑</th>
                    <th>删除</th>
                  </tr>
                  <tr>
                    <td>王小虎</td>
                    <td>中专</td>
                    <td>2014-2</td>
                    <td>web前端</td>
                    <td>小米</td>
                    <td data-toggle="modal" data-target="#myModal"><i class='glyphicon glyphicon-pencil'></i></td>
                    <td><i class='glyphicon glyphicon-trash'></i></td>
                  </tr>
                  <tr>
                    <td>季易</td>
                    <td>大学</td>
                    <td>2014-6</td>
                    <td>PHP</td>
                    <td>小米</td>
                    <td data-toggle="modal" data-target="#myModal"><i class='glyphicon glyphicon-pencil'></i></td>
                    <td><i class='glyphicon glyphicon-trash'></i></td>
                  </tr>
                    <tr>
                    <td>季易</td>
                    <td>大学</td>
                    <td>2014-6</td>
                    <td>PHP</td>
                    <td>小米</td>
                    <td data-toggle="modal" data-target="#myModal"><i class='glyphicon glyphicon-pencil'></i></td>
                    <td><i class='glyphicon glyphicon-trash'></i></td>
                  </tr>
                    <tr>
                    <td>季易</td>
                    <td>大学</td>
                    <td>2014-6</td>
                    <td>PHP</td>
                    <td>小米</td>
                    <td data-toggle="modal" data-target="#myModal"><i class='glyphicon glyphicon-pencil'></i></td>
                    <td><i class='glyphicon glyphicon-trash'></i></td>
                  </tr>
                    <tr>
                    <td>季易</td>
                    <td>大学</td>
                    <td>2014-6</td>
                    <td>PHP</td>
                    <td>小米</td>
                    <td data-toggle="modal" data-target="#myModal"><i class='glyphicon glyphicon-pencil'></i></td>
                    <td><i class='glyphicon glyphicon-trash'></i></td>
                  </tr>
                 
                 
              </table>
              
          </div>
       </div>
    </div>
</template>

<style scoped>
th{
   width:150px;
  height:35px;
  border:solid 1px;
  text-align: center;
  font-size: 16px;
}
td{
  width:150px;
  height:35px;
  border:solid 1px;
  text-align: center;
}

.btn-primary{
  background:#DC836E;
  outline:none;
  border:none;
  line-height: 12px;
  width:80px;
  height:35px;
  font-size: 14px;
  margin-bottom: 20px;
}
td:nth-child(6){
  width:50px;
}
th:nth-child(6){
  width:50px;
}
td:nth-child(7){
  width:50px;
}
th:nth-child(7){
  width:50px;
}

</style>

<script>
  export default {
      data(){
        return {
           total_rows: 0,
        }
      }
  }
</script>




