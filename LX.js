<<<<<<< HEAD
/**
 * Created by lx on 2017/7/10.
 */

/*
    Ajax对象
    url:文件地址
    suc:响应成功回调函数
    err:响应失败回调函数
 */
function Ajax(url,suc,err){
    //创建XMLHttpRequest对象
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //请求
    xmlhttp.open('POST',url + "?t=" + new Date().getTime(),true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4)
        {
            if(xmlhttp.status==200){
                res = xmlhttp.responseText;
                suc(res);
            }else {
                if(err){
                    err(xmlhttp.status);
                }
            }
        }
    }
}

/*
    下拉框
 */
=======
/**
 * Created by lx on 2017/7/10.
 */
var d = document;
/*
    Ajax对象
    url:文件地址
    suc:响应成功回调函数
    err:响应失败回调函数
 */
function Ajax(url,suc,err){
    //创建XMLHttpRequest对象
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //请求
    xmlhttp.open('POST',url + "?t=" + new Date().getTime(),true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4)
        {
            if(xmlhttp.status==200){
                res = xmlhttp.responseText;
                suc(res);
            }else {
                if(err){
                    err(xmlhttp.status);
                }
            }
        }
    }
};

/*
    下拉框
 */

function DropDown(id,sanjiao){
    var sj = $(".sanjiao");
    var box = $("#ul");
    var ulShow;
    sj.click(function(){
       alert('111')
    });

}

>>>>>>> cc61698b7f8d4b4809ac17b22495c5e879e1e7fe
