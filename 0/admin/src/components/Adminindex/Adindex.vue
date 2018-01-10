<template>
<div>
    <div class="main-top">
        <navMenu3></navMenu3>
    </div>
    <div class="main-left">
        <navMenu v-bind:msgiscollapse="total"></navMenu>
    </div>
    <div class="main-right">
        <navMenu2 @increment="incrementTotal"></navMenu2>
    </div>

                 <!-- Modal 弹出框 -->
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div class="modal-body">
                            <form >
                                <div class="file">
                                    <img src="../../assets/images/pho.jpg" height="80" width="140"  class="img-circle projectfile">
                                    <a href="#" class="btn btn-primary btn-lg disabled" role="button" @click='file'>上传图片</a>
                                </div>
                               
                                <p> 用户名：<br />
                                <input type="text" /></p>

                                <p>电子邮件： <br />
                                <input type="email" style='padding-left:5px'> </p>

                                <p>入职时间： <br />
                                <input type="year" /></p>

                                <p>职位：<br />
                                <input type="text" /></p>

                                <p>个人开发项目：<br />
                                <input type="text" /></p>
                            </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                </div>

    
    <!-- <router-view></router-view> -->
</div>
</template>
<script>
    import navMenu from '../Navmenu/navmenu.vue'
    import navMenu2 from '../Navmenu/navmenu2.vue'
    import navMenu3 from '../Navmenu/navmenu3.vue'
    export default {
        data(){
            return {
                total:'',
                showUpload : false,
                showRemove : false,
                language : 'zh',
                allowedPreviewTypes : [ 'image' ],
                allowedFileExtensions : [ 'jpg', 'png', 'gif' ],
                maxFileSize : 2000
            }
        },
        // computed:{
        //     
		name: 'app',
        components: { navMenu,navMenu2,navMenu3 },
        methods: {
            incrementTotal:function(newValue){
                this.total=newValue
            },
            file:function(){
                $("img[class=projectfile]").each(function() {
                    var imageurl = $(this).attr("value");

                    if (imageurl) {
                        var op = $.extend({
                            initialPreview : [ // 预览图片的设置
                            "<img src='" + imageurl + "' class='file-preview-image'>", ]
                        }, projectfileoptions);

                        $(this).fileinput(op);
                    } else {
                        $(this).fileinput(projectfileoptions);
                    }
                });
            }
        }
    }


</script>


<style>
    .main-left{
        /* float: left; */
    }
    .main-right{
        /* float: left; */
    }
    .main-top{
        width: 100%;
        /* float: left; */
    }
    #myModal{
      z-index:9999;
      position:absolute;
    }
    .file{
        margin-bottom: 20px;
    }
    .img-circle{
        border:solid 1px #d5d5d5;
        width:120px;
        height:120px;
    }
    .disabled{
        width:85px;
        height:30px;
        margin-top: 80px;
        font-size: 14px;
        line-height: 10px;
        text-align: center;
    }
    p{
        margin-top: 20px;
    }
    form input{
        border:none;
        border-bottom: solid 1px #d5d5d5;
        outline: none;
        display:block;
        width: 300px;
        font-size: 14px;

    }
</style>

