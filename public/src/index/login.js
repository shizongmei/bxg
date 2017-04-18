
define(['jquery','cookie'],function($){
	//表单的数据提交事件
    $('#loginForm').on('submit',function(){
        var formData=$(this).serialize();
       $.ajax({
            type:'post',
            url:'/api/login',
            data:formData,
            success:function(info){
                if(info.code==200){
                    alert('登录成功');
                        // console.log(info);
                        // 设置cookie的值，转换为字符串
                    $.cookie('loginfo', JSON.stringify(info.result));
                    //页面跳转
                    location.href='/';
                }
            }

        });
       return false;
    });
})
