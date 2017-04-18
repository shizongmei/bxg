
define(['jquery','../utils'],function($,utils){

	//设置导航
	utils.setMenu('/teacher/teacher_add');
	//点击添加
	$("#teacher-manage").on("submit",function(){
		var formData=$(this).serialize();
		$.ajax({
			 url: '/api/taeacher/add',
			 type:'post',
			 data:formData,
			 success:function(info){
			 	console.log(info);
			 }
		})
		return false;
	})

})