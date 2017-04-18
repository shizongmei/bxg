
requirejs.config({
    baseUrl: '/public',
    paths: {
        jquery: 'assets/jquery/jquery.min',
        cookie: 'assets/jquery-cookie/jquery.cookie',
        template:'assets/artTemplate/template-web',
        nprogress:'assets/nprogress/nprogress'
    },
    shim: {

    }
});
//退出登录
require(['src/common']);