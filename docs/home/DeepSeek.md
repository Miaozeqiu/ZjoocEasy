# DeepSeekProxy

>✨在1.61以上的版本中，插件支持调用DeepSeek的API进行答案解析  
>🔓在不使用DeepSeekProxy的情况下，每个用户每日有50次的限额  
>🖥️如果想要无限制地调用，需要使用DeepSeekProxy

:::warning

DeepSeekProxy是开源软件，不会上传用户的API Key

:::

## 1️⃣获取API Key
[点击查看教程](./GetAPIKey.md)

## 2️⃣下载并运行DeepSeekProxy

- [蓝奏云](https://wwyl.lanzouv.com/b00ocrzzje)    密码：43so
- [Gitee](https://gitee.com/m0zey/DeepSeekProxy/releases) 下载.7z文件

![images/DeepSeekProxy.png](/images/DeepSeekProxy.png)
填入相应平台的API Key点击保存即可

## 3️⃣为什么需要DeepSeekProxy？

因为目前所有的API都是不能跨域的，也就是说不能在一个网站中进行请求,所以需要搭建`代理服务器`。
![浏览器拦截](/images/cross_s1.png)
![浏览器拦截](/images/cross_s2.png)

用户每日50次的非DeepSeekProxy调用使用的是我们服务器的资源，因此有限制。而使用DeepSeekProxy则相当于直接与大模型平台进行交互，完全不经过我们的服务器，不会对我们的服务器造成压力，所以没有限制。





