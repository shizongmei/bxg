

define(['jquery','template','cookie'],function($,template){
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });
	// 
	// 
	// 
	if(document.cookie.indexOf('PHPSESSID') ==-1 && location.pathname !='/login'){
		location.href='/login';
	}

	var loginfo=$.cookie('loginfo')&&JSON.parse($.cookie('loginfo'));

	console.log(loginfo);

	//定义模板
	var source='<div class="avatar img-circle">\
                <img src="<%= tc_avatar %>">\
            </div>\
            <h4><%= tc_name %></h4>' ,
            render=template.compile(source),
            html=render(loginfo);
      //追加到页面中      
      $('.profile').append(html);


	//退出登录
	$('#logout').on('click',function(){
        
       $.ajax({
            type:'post',
            url:'/api/logout',
            success:function(info){
                if(info.code==200){
                    alert('退出成功');
                        // console.log(info);
                        // 设置cookie的值，转换为字符串
                   
                    //页面跳转
                    location.href='/login';
                }
            }

        });
       return false;
    });


})
	