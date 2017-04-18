<?php 
	// phpinfo();exit;
	// var_dump($_SERVER);

	 $pathinfo = $_SERVER['PATH_INFO'];

    // echo $pathinfo;

    // include './views' . $pathinfo . '.html';
    // 
    // 将字符串转变为数组
    $pathinfo=substr($pathinfo,1);
    //对字符串进行截取
    $route=explode('/', $pathinfo);
    // print_r($route);
     if(empty($pathinfo)) {
        $path = 'index/index';
    } else if(count($route) == 1) { // 判断数组长度为1
        $path = 'index/' . $route[0];
    } else { // 判断数组长度为2
        $path = $route[0] . '/' . $route[1];
    }


    include './views/' . $path . '.html';
 ?> 