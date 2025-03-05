# DeepSeekProxy

>✨在1.61以上的版本中，插件支持调用DeepSeek的API进行答案解析  
>🔓每个用户每日有50次的限额，在不使用DeepSeekProxy的情况下  
>🖥️如果想使用自己的API Key，需要自行搭建DeepSeekProxy

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

由于插件是公益性质的，难以承担高性能服务器产生费用，如果使用我们目前的服务器资源搭建代理服务器，会造成极大的延迟与不稳定

同时，如果使用我们的服务器，在代理请求过程中会传递API密钥，一旦我们的服务器遭受攻击，难以保证用户数据的安全

因此，我们选择开发`DeepSeekProxy`，它是一个开源的代理服务器软件，源码发布在了[Gitee](https://gitee.com/m0zey/DeepSeekProxy)，它运行在你的电脑上，代理请求DeepSeek的API，转发AI生成的回答给在浙学网课助手。在运行过程中不会向我们在内的任何第三方网站传递密钥数据，保证了密钥安全



