# 课件速刷
>使用向服务器发送请求的方式刷课 ，可以实现在几秒内完成所有课件，不必观看视频  

::: warning 注意
该功能可能会导致你的观看进度被清空
:::

## 使用

开启课件速刷选项，在课程界面点击"自动播放"
<div class="pic" style="background-color:rgb(245, 245, 245)"><img src='/images/课程速刷.png' alt="自动播放"></div>

## 原理
该功能参考了[ZjoocHelper](https://github.com/amdoi7/ZJOOCHelper)，原理是模拟前端构造观看了视频的请求，并发送给服务器。原项目目前除了自动答题外，其余功能均可以正常运行。如果向服务器提交答题请求，服务器会出现繁忙，我猜测是因为请求中的两个加密参数的原因。
 
我将源项目中完成课件的部分改写为JavaScript代码让其可以在网页中运行，并将其集成到插件中。由于在这学的网站用了HttpOnly，请求中自带用户信息，因此在网页中运行是不需要额外登陆，使用相对便捷。


