# 私有题库
> 属于你的可以随意调用的题库
## 需求满足

在使用`OCS脚本`的时候需要进行对第三方题库的调用，这会消耗题库的查询次数，但当你调用之后，你身边的朋友想要查询相同的题目时，依然会消耗查询次数

本站提供私有题库服务，其设计的主要目的就是为了节约不必要的次数消耗

除此之外，因为私有题库可以自行设置答案，这样就避免了第三方题库答案缺失或者错误，而必须手动设置的问题

尤其是在学习通的考试情况下，许多答案在第三方题库中是搜索不到的，此时你就可以构建自己的私有题库，然后将题库配置分享给身边的朋友

## 使用教程

### 1️⃣脚本准备
开始之前，建议先安装下面的[脚本](https://greasyfork.org/zh-CN/scripts/454233-%E8%B6%85%E6%98%9F%E5%AD%A6%E4%B9%A0%E9%80%9A%E8%80%83%E8%AF%95%E8%A7%A3%E9%99%A4%E7%A6%81%E6%AD%A2%E5%A4%8D%E5%88%B6-%E7%A6%81%E6%AD%A2%E7%B2%98%E8%B4%B4%E6%9C%80%E6%96%B0%E7%89%88)用于解除学习通的复制限制

![images/超星学习通考试解除禁止复制.png](/images/超星学习通考试解除禁止复制.png)

### 2️⃣题目添加
在登陆`在浙学题库搜索`后点击头像,看到`我的题库`后点击进入

第一次进入时题库内是没有题目的,点击添加题目,根据提示输入信息后点击`完成`

恭喜你,你已经成功添加了你的私有题库中的第一道题目🥳

题目的`题目` 和 `答案` 是必须输入的，其他属性则可以选择选择不填写

### 3️⃣题库配置
点击`复制题库配置`，会将类似下面的字符串复制到剪贴板
```json
{
    "name": "在浙学题库搜索",
    "homepage": "https://pages.zaizhexue.top",
    "url": "https:app.zaizhhexue.top/getQuestionAnswers",
    "method": "get",
    "data": {
        "title": "${title}",
        "token": "your-token-here"
    },
    "contentType": "json",
    "type": "fetch",
    "handler": "return (res) => res.code === 1 ? res.results.map(r => [r.question, r.answer]) : undefined"
}
```

简化一下类似`{···}`

而你在`言溪题库`中复制的题库配置类似
```json
[
    {
    "name":"言溪题库",
    "homepage":"https://tk.enncy.cn/",
    "url":"https://tk.enncy.cn/query",
    "method":"get","type":"GM_xmlhttpRequest",
    "contentType":"json",
    "data":{
        "token":"your-token-here",
        "title":"${title}",
        "options":"${options}",
        "type":"${type}"
        },
    "handler":"return (res)=>res.code === 0 ? [res.data.answer, undefined] : [res.data.question,res.data.answer]"
    },
    {
    "name":"网课小工具题库（GO题）",
    "homepage":"https://cx.icodef.com/",
    "url":"https://cx.icodef.com/wyn-nb?v=4",
    "method":"post","type":"GM_xmlhttpRequest",
    "data":{"question":"${title}"},
    "headers":{"Content-Type":"application/x-www-form-urlencoded","Authorization":""},
    "handler":"return  (res)=> res.code === 1 ? [undefined,res.data] : [res.msg,undefined]"
    }
]
```
简化一下是这样的结构`[{···},{···}]`

这是因为其中包含了两个题库

想要将你的题库添加其中，只需要把你在本站复制的`{···}`添加到`[{···},{···}]`中变成`[{···},{···},{···}]`

好了，这样`OCS`就可以调用你的私有题库了

私有题库容易被刷课工作室利用，这会违背本站的公益性原则，因此私有题库将在不久后做出合理的限制，防止滥用



